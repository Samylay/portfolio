import { Prose, Callout, Terminal, T } from "@/components/prose";

export default function EduroamPost() {
  return (
    <Prose>
      <p className="lead">
        On GrapheneOS and stock Pixels, an eduroam profile can look perfectly
        configured and still fail: the Wi-Fi associates, then authentication
        silently times out. On many university accounts the culprit is a single
        empty field. Here is how to prove it and fix it.
      </p>

      <h2>The symptom</h2>
      <p>
        The network shows <strong>“Saved / Connection failure”</strong> or{" "}
        <strong>“Can&apos;t connect. Try again later.”</strong> Normal Wi-Fi and
        mobile data work fine — only eduroam fails. That last part matters: it
        rules out broken hardware before you even start. The radio{" "}
        <em>associates</em> with the access point (you briefly see
        “Connecting…”), then drops after roughly 40&nbsp;seconds, never reaching
        the four-way handshake or getting an IP.
      </p>

      <h2>Confirm it&apos;s authentication, not hardware</h2>
      <p>
        “It must be a hardware fault” is the common misdiagnosis. A radio fault
        would break <em>every</em> network. This breaks only at the{" "}
        <strong>802.1X / EAP</strong> stage — pure software and configuration.
        With ADB and USB debugging on, you can watch it happen:
      </p>

      <Terminal>
        <T.c># Watch the Wi-Fi state machine for the eduroam attempt</T.c>
        {"\n"}
        <T.p>adb shell dumpsys wifi</T.p> | grep -i eduroam | tail
        {"\n\n"}
        <T.c>
          # The tell-tale line — associates, then the phone itself bails:
        </T.c>
        {"\n"}
        NETWORK_DISCONNECTION_EVENT ssid:&quot;eduroam&quot;
        {"\n"}
        {"   "}reasonCode: 3 <T.bad>locallyGenerated: true</T.bad>
        {"\n\n"}
        <T.c># On repeated tries the access point gets blocklisted:</T.c>
        {"\n"}
        blockReason=<T.bad>REASON_FAILURE_NO_RESPONSE</T.bad>
      </Terminal>

      <p>
        <code>reasonCode 3</code> + <code>locallyGenerated: true</code> about
        40&nbsp;seconds after associating is an <strong>EAP timeout</strong>:
        the phone started the login handshake and gave up waiting. A wrong{" "}
        <em>password</em> fails fast with a rejection — a 40-second stall points
        at the outer identity / TLS stage instead.
      </p>

      <Callout label="Blocklist gotcha" tone="warn">
        <p>
          After a few failures, Android blocklists those access points for
          minutes to hours and stops auto-retrying them. So even after you fix
          the config, auto-reconnect may look dead. Force it: open the network
          and tap <strong>Connect</strong>, or toggle Wi-Fi off and on.
        </p>
      </Callout>

      <h2>The root cause</h2>
      <p>
        Open the eduroam profile (Wi-Fi → the network → the pencil →{" "}
        <strong>Advanced</strong>) and look at{" "}
        <strong>Anonymous identity</strong>. On a failing Android&nbsp;14+
        device it&apos;s often <strong>empty</strong>.
      </p>
      <p>
        That empty field <em>is</em> the bug. The anonymous (outer) identity is
        the cleartext name your phone presents before the encrypted tunnel opens
        — it&apos;s what eduroam uses to route your login back to your home
        institution. Many institutions require it to carry the full realm.
        Leaving it blank is only the pre-Android-14 fallback; on modern Android
        the server never answers, and you get{" "}
        <code>REASON_FAILURE_NO_RESPONSE</code>.
      </p>

      <h2>The fix</h2>
      <p>
        Set <strong>Anonymous identity</strong> to your{" "}
        <strong>full eduroam username, including the realm</strong> — the same{" "}
        <code>user@institution</code> you use for Identity. Leave everything
        else as your institution specifies (commonly PEAP / MSCHAPV2, and “Trust
        on first use” or your institution&apos;s CA + domain).
      </p>
      <ol>
        <li>
          Open the eduroam network → pencil / <strong>Modify</strong> → expand{" "}
          <strong>Advanced options</strong>.
        </li>
        <li>
          Type your full <code>user@institution</code> into{" "}
          <strong>Anonymous identity</strong>.
        </li>
        <li>
          Confirm Identity and password are correct, then <strong>Save</strong>.
        </li>
        <li>
          Tap the network and press <strong>Connect</strong> — don&apos;t wait
          for auto-reconnect; those APs may still be blocklisted.
        </li>
      </ol>

      <p>Within a second or two it should authenticate and pull an IP:</p>

      <Terminal>
        <T.p>adb shell dumpsys wifi</T.p> | grep &quot;mWifiInfo SSID&quot;
        {"\n"}
        SSID: &quot;eduroam&quot;, <T.good>Supplicant state: COMPLETED</T.good>,
        {"\n"}
        {"   "}IP: 10.232.221.62 <T.good>... VALIDATED</T.good>
        {"\n\n"}
        <T.p>adb shell ping -c2 1.1.1.1</T.p>
        {"\n"}
        64 bytes from 1.1.1.1: time=7.1 ms <T.good>0% packet loss</T.good>
      </Terminal>

      <Callout tone="fix">
        <p>
          If the outer identity is set and it still won&apos;t authenticate,
          check in order: (1) your account is actually enabled for eduroam, not
          just campus Wi-Fi; (2) CA certificate + Domain match your
          institution&apos;s published values; (3) try Privacy → “Use device
          MAC” — a few deployments reject randomized MACs; (4) as a clean reset,
          Forget the network and re-add it, or use the official geteduroam /
          eduroam CAT installer, which fills every field correctly.
        </p>
      </Callout>

      <h2>Why this happens</h2>
      <p>
        eduroam is a roaming federation: when you&apos;re on a host campus (even
        in another country), your login is relayed back to your <em>home</em>{" "}
        institution&apos;s server. The outer identity is the address on that
        envelope. Older Android tolerated a blank or bare outer identity because
        the phone fell back to the real one; Android&nbsp;14+ tightened this, so
        a blank field now produces an unroutable request — and a server that
        simply never replies. One field, carrying the realm, puts the address
        back on the envelope.
      </p>
    </Prose>
  );
}
