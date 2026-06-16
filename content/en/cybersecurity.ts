const html = `

<p class="lead">How to use this: read the concept box, then <b>cover the answers and recite the lists from memory</b>. This subject is mostly <b>lists + definitions + Kali commands</b> — exactly the stuff that vanishes under exam pressure unless you’ve retrieved it cold a few times. Drills are written so the question forces you to <i>produce</i> the list, not recognise it.</p>


<!-- CIA -->
<h2 id="cia">1 · The CIA triad</h2>
<div class="concept">
  <span class="label">The mental model</span>
  Every security control exists to protect one of three properties. When you’re asked “why does X matter,” map it to a letter. <b>C</b>onfidentiality = only authorised people can read it. <b>I</b>ntegrity = data isn’t altered without detection. <b>A</b>vailability = it’s there when needed. Attacks and controls are just things that break or defend one of these.
</div>
<div class="figure"><div class="figcap">△ CIA — every control protects one of these three</div>
<div class="figbox"><div class="triad">
  <div class="triad-col"><div class="triad-letter">C</div><div class="triad-name">Confidentiality</div><div class="triad-sub">only authorised can read · broken by sniffing/theft</div></div>
  <div class="triad-col"><div class="triad-letter">I</div><div class="triad-name">Integrity</div><div class="triad-sub">data unaltered · broken by tampering/MITM</div></div>
  <div class="triad-col"><div class="triad-letter">A</div><div class="triad-name">Availability</div><div class="triad-sub">there when needed · broken by DoS/failure</div></div>
</div></div></div>
<table>
<thead><tr><th>Property</th><th>Goal</th><th>Typical controls</th><th>Broken by</th></tr></thead>
<tbody>
<tr><td><b>Confidentiality</b></td><td>Keep secrets secret</td><td>Encryption, access control, MFA</td><td>Sniffing, theft, leaks</td></tr>
<tr><td><b>Integrity</b></td><td>Data unaltered &amp; trustworthy</td><td>Hashing, checksums, digital signatures</td><td>Tampering, MITM</td></tr>
<tr><td><b>Availability</b></td><td>Accessible when needed</td><td>Redundancy, backups, DDoS protection</td><td>DoS/DDoS, hardware failure</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Name the 3 CIA properties and one control that protects each.</div>
<div class="a"><ul><li><b>Confidentiality</b> → encryption / access control</li><li><b>Integrity</b> → hashing / digital signatures</li><li><b>Availability</b> → backups / redundancy / DDoS protection</li></ul></div></div>
<div class="drill"><div class="q">A DDoS attack and a stolen unencrypted laptop each break which CIA property?</div>
<div class="a">DDoS → <b>Availability</b>. Stolen unencrypted laptop → <b>Confidentiality</b>.</div></div>

<!-- GROUPS -->
<h2 id="groups">2 · The 4 control groups <span class="kh">(by WHO/WHAT implements it)</span></h2>
<div class="concept">
  <span class="label">The mental model — don't confuse with the 6 types</span>
  Two different questions get asked about every control. <b>Group = WHO/WHAT enforces it</b> (a machine? a manager? a person’s daily routine? a wall?). <b>Type = WHAT JOB it does</b> (stop / discourage / detect / fix…). A single control has one group AND one type — e.g. a firewall is <i>Technical</i> (group) + <i>Preventive</i> (type). Keep the two axes separate in your head. <span class="mnemonic">Groups: “Tech Managers Operate Physically” → Technical, Managerial, Operational, Physical.</span>
</div>
<div class="figure"><div class="figcap">Every control has TWO labels — don't mix the axes</div>
<div class="figbox"><div class="flow">
  <span class="flow-node is-plain">a Firewall</span>
  <span class="flow-arrow">=</span>
  <span class="flow-node">Group: Technical</span>
  <span class="flow-arrow">+</span>
  <span class="flow-node">Type: Preventive</span>
  <span class="flow-loop"><b>Group</b> = who/what enforces it (Technical · Managerial · Operational · Physical). <b>Type</b> = what job it does (Preventive · Deterrent · Detective · Corrective · Compensating · Directive). One control has one of each.</span>
</div></div></div>
<table>
<thead><tr><th>Group</th><th>Enforced by</th><th>Examples</th></tr></thead>
<tbody>
<tr><td><b>Technical</b> (logical)</td><td>Technology / systems</td><td>Firewall, encryption, antivirus, IAM, IDS/IPS</td></tr>
<tr><td><b>Managerial</b> (administrative)</td><td>Management decisions</td><td>Policies, risk assessments, security planning</td></tr>
<tr><td><b>Operational</b></td><td>People doing day-to-day tasks</td><td>Security awareness training, guard duties, incident response procedures</td></tr>
<tr><td><b>Physical</b></td><td>Tangible barriers</td><td>Locks, fences, CCTV, security guards, badges</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">List all 4 control groups from memory.</div>
<div class="a"><span class="blank">Technical · Managerial · Operational · Physical</span> (“Tech Managers Operate Physically”).</div></div>
<div class="drill"><div class="q">Classify by GROUP: (a) a fire-suppression sprinkler, (b) an acceptable-use policy, (c) full-disk encryption, (d) staff phishing training.</div>
<div class="a">(a) <b>Physical</b> · (b) <b>Managerial</b> · (c) <b>Technical</b> · (d) <b>Operational</b>.</div></div>

<!-- TYPES -->
<h2 id="types">3 · The 6 control types <span class="kh">(by WHAT JOB they do)</span></h2>
<div class="concept">
  <span class="label">The mental model — timeline</span>
  Place each type on the attack timeline. <b>Before:</b> Preventive (block it), Deterrent (discourage attempting), Directive (tell people what to do). <b>During:</b> Detective (notice it happening). <b>After:</b> Corrective (fix/restore). <b>Sideways:</b> Compensating (a stand-in when you can’t use the ideal control).
</div>
<div class="figure"><div class="figcap">Place each type on the attack timeline</div>
<div class="figbox"><div class="timeline">
  <div class="tl-phase"><div class="tl-when">Before</div>
    <span class="tl-item">Preventive <span>— block it</span></span>
    <span class="tl-item">Deterrent <span>— discourage trying</span></span>
    <span class="tl-item">Directive <span>— tell people what to do</span></span>
  </div>
  <div class="tl-phase"><div class="tl-when">During</div>
    <span class="tl-item">Detective <span>— notice it happening</span></span>
  </div>
  <div class="tl-phase"><div class="tl-when">After</div>
    <span class="tl-item">Corrective <span>— fix / restore</span></span>
  </div>
</div>
<div class="lc-branch"><b>Compensating</b> sits sideways — a stand-in used when you can't deploy the ideal control yet.</div>
</div></div>
<table>
<thead><tr><th>Type</th><th>Job</th><th>Example</th></tr></thead>
<tbody>
<tr><td><b>Preventive</b></td><td>Stop it before it happens</td><td>Firewall, door lock, encryption</td></tr>
<tr><td><b>Deterrent</b></td><td>Discourage the attempt</td><td>Warning sign, guard dog, “CCTV in use” notice</td></tr>
<tr><td><b>Detective</b></td><td>Identify during/after</td><td>IDS, logs, CCTV footage, alarms</td></tr>
<tr><td><b>Corrective</b></td><td>Fix / recover afterwards</td><td>Restore from backup, patching, isolating a host</td></tr>
<tr><td><b>Compensating</b></td><td>Alternative when the primary control isn’t feasible</td><td>MFA because you can’t enforce long passwords yet</td></tr>
<tr><td><b>Directive</b></td><td>Direct/instruct behaviour</td><td>Policy, AUP, posted procedures</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">List all 6 control types and one example of each.</div>
<div class="a"><ul>
<li><b>Preventive</b> — firewall/lock</li><li><b>Deterrent</b> — warning sign/guard dog</li>
<li><b>Detective</b> — IDS/logs/CCTV</li><li><b>Corrective</b> — restore backup/patch</li>
<li><b>Compensating</b> — substitute control (e.g. MFA in place of policy not yet possible)</li>
<li><b>Directive</b> — policy/AUP</li></ul></div></div>
<div class="drill"><div class="q">A CCTV camera can be TWO different types depending on framing — which two and why?</div>
<div class="a"><b>Deterrent</b> (its visible presence discourages attackers) and <b>Detective</b> (its recordings identify what happened). Same control, different job → different type. This is the classic trap question.</div></div>
<div class="drill"><div class="q">Give the GROUP + TYPE for a firewall, and for a security guard.</div>
<div class="a">Firewall = <b>Technical + Preventive</b>. A security guard = <b>Physical (or Operational) + Preventive/Deterrent</b> (a guard who patrols and also discourages = both jobs).</div></div>

<!-- NETTECH -->
<h2 id="nettech">4 · Network security technologies</h2>
<div class="concept">
  <span class="label">The mental model</span>
  Layered defence. Some controls <b>filter</b> traffic (firewall, ACL, segmentation), some <b>watch</b> traffic (IDS/IPS), some <b>protect data in transit</b> (VPN, TLS/SSH), some <b>control who connects</b> (MFA, NAC). The exam wants you to know what each does and the IDS-vs-IPS distinction.
</div>
<table>
<thead><tr><th>Tech</th><th>What it does</th></tr></thead>
<tbody>
<tr><td><b>Firewall</b></td><td>Filters traffic by rules (packet-filter → stateful → next-gen)</td></tr>
<tr><td><b>IDS</b></td><td>Intrusion <b>Detection</b> — detects &amp; alerts, <b>passive</b> (out of band)</td></tr>
<tr><td><b>IPS</b></td><td>Intrusion <b>Prevention</b> — detects <b>and blocks</b>, <b>inline</b></td></tr>
<tr><td><b>VPN</b></td><td>Encrypted tunnel over public network (IPsec / SSL)</td></tr>
<tr><td><b>Segmentation</b></td><td>Split network into zones (VLANs, subnets, DMZ) to limit blast radius</td></tr>
<tr><td>ACLs / MFA / NAC</td><td>Restrict flows / verify identity / control device admission</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">IDS vs IPS — the one-line difference?</div>
<div class="a"><b>IDS detects and alerts (passive, out-of-band); IPS detects AND blocks (active, inline).</b> An IPS sits in the traffic path; an IDS gets a copy.</div></div>
<div class="drill"><div class="q">Name 3 secure protocols and the insecure thing each replaces.</div>
<div class="a"><ul><li><b>TLS/SSL</b> → HTTPS replaces plain HTTP</li><li><b>SSH</b> replaces Telnet</li><li><b>IPsec / SSL VPN</b> replaces sending traffic in clear over the Internet</li></ul></div></div>
<div class="drill"><div class="q">What is network segmentation and why does it improve security?</div>
<div class="a">Dividing the network into isolated zones (VLANs/subnets/DMZ). It <b>limits lateral movement</b> — a compromise in one zone can’t freely reach others — and contains the blast radius of an attack.</div></div>

<!-- HARDEN -->
<h2 id="harden">5 · The 9-step hardening lab</h2>
<div class="concept">
  <span class="label">The mental model</span>
  Hardening = removing default weaknesses, in order from “build a clean base” → “patch it” → “lock the doors (firewall/SSH)” → “add detection (AV)” → “keep it that way (auto-updates, segmentation, backups).” Order matters: you patch before exposing, and you back up last so it’s ongoing.
</div>
<ol>
<li>VM / environment setup</li>
<li>Install the OS</li>
<li><b>Update</b> the system</li>
<li>Configure <b>firewall</b> (ufw / firewalld) + secure <b>SSH</b> (port 22)</li>
<li>Install <b>antivirus</b> (ClamAV)</li>
<li>Enable <b>automatic updates</b></li>
<li>Network <b>segmentation</b></li>
<li>Secure <b>remote access</b></li>
<li><b>Backups</b></li>
</ol>
<div class="codewrap"><div class="cap">Key hardening commands</div>
<pre><span class="pr">sudo ufw enable</span>                              <span class="cm"># turn on the firewall</span>
<span class="pr">sudo apt install</span> clamav clamav-daemon         <span class="cm"># install antivirus</span>
<span class="pr">sudo clamscan -r</span> /home                        <span class="cm"># recursive scan of /home</span></pre></div>
<div class="drill"><div class="q">Why update the system (step 3) BEFORE exposing services / SSH?</div>
<div class="a">Because unpatched packages may contain known, publicly-exploitable vulnerabilities. Patching first means you don’t expose a service with a hole already on the books. Hardening is sequential: clean base → patch → expose carefully.</div></div>
<div class="drill"><div class="q">Which command installs ClamAV, and which scans /home recursively?</div>
<div class="a">Install: <code>sudo apt install clamav clamav-daemon</code>. Scan: <code>sudo clamscan -r /home</code> (<code>-r</code> = recursive).</div></div>

<!-- HACKERS -->
<h2 id="hackers">6 · Hacker categories &amp; pen-test vs hacking</h2>
<div class="concept">
  <span class="label">The mental model</span>
  Hackers are classified by <b>authorisation + intent</b>. The hat colour answers “do they have permission, and do they mean harm?” The same technical skill is legal or criminal depending only on those two things — which is exactly why <b>authorisation</b> is the line between a penetration test and a crime.
</div>
<table>
<thead><tr><th>Category</th><th>Authorised?</th><th>Intent</th></tr></thead>
<tbody>
<tr><td><b>White hat</b> (ethical / responsible)</td><td>Yes</td><td>Improve security (pen testers)</td></tr>
<tr><td><b>Black hat</b> (criminal / malicious)</td><td>No</td><td>Personal gain / harm</td></tr>
<tr><td><b>Gray hat</b></td><td>No (unauthorised)</td><td>No malicious intent, but still illegal</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Name the 3 hacker categories and the TWO factors that separate them.</div>
<div class="a"><b>White / Black / Gray hat</b>, separated by <b>authorisation</b> and <b>intent</b>.</div></div>
<div class="drill"><div class="q">What is the single defining difference between a penetration test and illegal hacking?</div>
<div class="a"><b>Authorisation</b> (explicit permission + a defined scope). A pen test is authorised, scoped, and reported; the same actions without permission are a crime — even with good intentions (that’s gray hat).</div></div>

<!-- METHODS -->
<h2 id="methods">7 · Hacking methods</h2>
<div class="concept">
  <span class="label">The mental model</span>
  Group attacks by what they target: the <b>network/traffic</b>, the <b>credentials</b>, a <b>way in</b> (door), the <b>software itself</b> (malware), or the <b>availability</b> (flooding). Knowing the bucket makes the list recallable.
</div>
<div class="figure"><div class="figcap">DoS vs DDoS — one attacker, or an army</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">zombie</span>
  <span class="flow-node">zombie</span>
  <span class="flow-node">zombie</span>
  <span class="flow-arrow">→ flood →</span>
  <span class="flow-node is-plain">Target ✕</span>
  <span class="flow-loop"><b>DoS</b> = one source floods the target. <b>DDoS</b> = many sources (a <b>botnet</b> of zombies, above) flood at once — harder to block, far more powerful. Both attack <b>Availability</b>.</span>
</div></div></div>
<table>
<thead><tr><th>Method</th><th>What it is</th></tr></thead>
<tbody>
<tr><td><b>Network attacks</b></td><td>Sniffing, MITM, spoofing — intercept/manipulate traffic</td></tr>
<tr><td><b>Password attacks</b></td><td>Systematic cracking (brute force), dictionary, <b>keylogging</b></td></tr>
<tr><td><b>Backdoors</b></td><td>Hidden access left for later entry</td></tr>
<tr><td><b>Bugdoors</b></td><td>Intentional vulnerabilities disguised as innocent bugs</td></tr>
<tr><td><b>Malware</b></td><td>Viruses, worms, trojans</td></tr>
<tr><td><b>DoS</b></td><td>Flood one source → exhaust a target</td></tr>
<tr><td><b>DDoS</b></td><td>Many sources (a <b>botnet</b>) flood the target</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Difference between a backdoor and a bugdoor?</div>
<div class="a"><b>Backdoor</b> = hidden access deliberately added/left in. <b>Bugdoor</b> = a vulnerability intentionally planted but <b>disguised to look like an accidental bug</b> (plausible deniability).</div></div>
<div class="drill"><div class="q">DoS vs DDoS — and what is a botnet's role?</div>
<div class="a"><b>DoS</b> = flood from a single source. <b>DDoS</b> = <b>D</b>istributed: many compromised machines (a <b>botnet</b>) flood simultaneously, making it harder to block and far more powerful. Both attack <b>Availability</b>.</div></div>
<div class="drill"><div class="q">Virus vs worm vs trojan — distinguish in one line each.</div>
<div class="a"><b>Virus</b> needs a host file + user action to spread. <b>Worm</b> self-replicates across the network with no help. <b>Trojan</b> disguises itself as legitimate software to trick the user into running it.</div></div>

<!-- KALI -->
<h2 id="kali">8 · Kali Linux toolkit <span class="kh">(command recall drills)</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Kali = a Debian-based distro pre-loaded with security tools (“the Swiss-army knife”). The exam-relevant workflow: <b>get it safely (verify download)</b> → <b>run it (VM / live boot)</b> → <b>discover hosts (arp-scan)</b> → <b>probe a target (nmap)</b> → <b>keep it updated</b> — all <b>only against systems you own or have permission to test</b>.
</div>
<div class="figure"><div class="figcap">The safe, legal Kali workflow</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">verify download</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">run in a VM</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">discover hosts</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">probe target</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">keep updated</span>
  <span class="flow-loop"><code>sha256sum</code> + <code>gpg --verify</code> ✓ → VM / live boot → <code>arp-scan</code> → <code>nmap -T4 -A</code> → <code>apt full-upgrade</code>. Only on systems you own or are authorised to test.</span>
</div></div></div>
<div class="danger"><span class="label">Legal — always tested</span>Only scan/attack systems you <b>own or are authorised</b> to test. Practice against a deliberately vulnerable VM (<b>Metasploitable</b>) inside an <b>isolated</b> network.</div>

<table>
<tbody>
<tr><td>Based on</td><td>Debian; alternatives: Parrot OS, BlackArch, PentestBox</td></tr>
<tr><td>Default creds</td><td><code>kali</code> / <code>kali</code> → change with <code>passwd</code></td></tr>
<tr><td>Verify download</td><td><code>sha256sum</code> (Linux) / <code>Get-FileHash</code> (PowerShell); GPG <code>gpg --verify</code> → “Good signature”</td></tr>
<tr><td>Update</td><td><code>sudo apt update &amp;&amp; sudo apt full-upgrade</code></td></tr>
<tr><td>Install package</td><td><code>sudo apt install &lt;package&gt;</code></td></tr>
</tbody>
</table>

<div class="drill"><div class="q">Write the command to discover all live hosts on your local LAN via ARP (interface eth0).</div>
<div class="a"><pre style="margin-top:6px"><span class="pr">sudo arp-scan</span> --interface=eth0 --localnet</pre>ARP can’t be firewalled off on a LAN, so it reliably reveals hosts.</div></div>

<div class="drill"><div class="q">Write an aggressive nmap scan of a target and EXPLAIN the two flags.</div>
<div class="a"><pre style="margin-top:6px"><span class="pr">nmap</span> -T4 -A &lt;target-ip&gt;</pre>
<ul><li><b>-T4</b> = timing template 4 = faster scan (more aggressive timing).</li>
<li><b>-A</b> = aggressive: OS detection + service/version detection + default scripts + traceroute.</li></ul></div></div>

<div class="drill"><div class="q">nmap output has columns PORT / STATE / SERVICE / VERSION. What are the three possible STATE values and what does each mean?</div>
<div class="a"><ul><li><b>open</b> — a service is actively accepting connections.</li>
<li><b>closed</b> — reachable but nothing listening on that port.</li>
<li><b>filtered</b> — a firewall is blocking/dropping; nmap can’t tell if it’s open.</li></ul></div></div>

<div class="drill"><div class="q">Why verify a Kali download with SHA-256 and GPG — and what GPG message confirms it?</div>
<div class="a"><b>SHA-256</b> proves the file wasn’t corrupted/altered (integrity); <b>GPG signature</b> proves it genuinely came from the Kali team (authenticity). A good GPG check prints <b>“Good signature”</b>. (This is the CIA “Integrity” principle applied to downloads.)</div></div>

<div class="drill"><div class="q">Command to enable + start SSH on Kali, then connect to it from another machine.</div>
<div class="a"><pre style="margin-top:6px"><span class="pr">sudo systemctl enable --now</span> ssh   <span class="cm"># enable + start now</span>
<span class="pr">ssh</span> username@kali-ip                <span class="cm"># connect</span></pre></div>

<div class="drill"><div class="q">Command to fully update Kali, and command to install a package.</div>
<div class="a">Update: <code>sudo apt update &amp;&amp; sudo apt full-upgrade</code>. Install: <code>sudo apt install &lt;package&gt;</code>.</div></div>

<div class="drill"><div class="q">What is <code>kali-tweaks</code> and name two things it can do? What is Metasploitable for?</div>
<div class="a"><b>kali-tweaks</b> (<code>sudo kali-tweaks</code>) = a menu-driven config tool: disable weak protocols (SSLv2/SSHv1), install meta-packages (e.g. wireless), configure the shell, improve VM support. <b>Metasploitable</b> = a deliberately vulnerable Linux VM to legally/safely practice scanning &amp; attacking in an isolated lab.</div></div>

<!-- AAA -->
<h2 id="aaa">9 · AAA &amp; authentication factors <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  CIA is the goal; <b>AAA</b> is how you control identity to get there. <b>A</b>uthentication = prove who you are. <b>A</b>uthorization = what you’re allowed to do once proven. <b>A</b>ccounting = logging what you actually did. Add <b>non-repudiation</b> = you can’t later deny you did it (enforced by digital signatures). <span class="mnemonic">AuthN = who you are · AuthZ = what you can do.</span>
</div>
<div class="figure"><div class="figcap">AAA — three gates, in order</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">Authentication</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">Authorization</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">Accounting</span>
  <span class="flow-loop"><b>AuthN</b> = prove who you are → <b>AuthZ</b> = what you may do → <b>Accounting</b> = log what you did. Plus <b>non-repudiation</b> = you can't later deny it (digital signatures).</span>
</div></div></div>
<table>
<thead><tr><th>Factor category</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Something you <b>know</b></td><td>Password, PIN, security question</td></tr>
<tr><td>Something you <b>have</b></td><td>Phone/OTP token, smart card</td></tr>
<tr><td>Something you <b>are</b></td><td>Fingerprint, face, iris (biometric)</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Define each A in AAA, and what non-repudiation means.</div>
<div class="a"><b>Authentication</b> — verify identity. <b>Authorization</b> — grant the right level of access. <b>Accounting</b> — record/audit what was done. <b>Non-repudiation</b> — proof a party performed an action so they can’t deny it (via digital signatures/logs).</div></div>
<div class="drill"><div class="q">Name the 3 authentication factor categories. Why is "password + PIN" NOT true MFA?</div>
<div class="a">Something you <b>know / have / are</b>. Password + PIN are <b>both “something you know”</b> — same category — so it isn’t multi-<i>factor</i>. True MFA combines <b>different</b> categories (e.g. password + phone OTP).</div></div>

<!-- CRYPTO -->
<h2 id="crypto">10 · Cryptography basics <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Two jobs, two tools. <b>Encryption</b> hides data (Confidentiality) and is reversible with a key. <b>Hashing</b> fingerprints data (Integrity) and is one-way (no key, can’t reverse). Encryption splits again: <b>symmetric</b> = one shared secret key (fast, but how do you share the key safely?); <b>asymmetric</b> = a public/private key pair (slower, but solves key exchange).
</div>
<div class="figure"><div class="figcap">Two jobs, three tools</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">Symmetric · one shared key 🔑</span>
  <span class="flow-node">Asymmetric · public 🔓 + private 🔑</span>
  <span class="flow-node is-plain">Hashing · no key, one-way →</span>
  <span class="flow-loop"><b>Encryption</b> hides data, reversible with a key — symmetric is fast (AES); asymmetric solves key-sharing (RSA). <b>Hashing</b> fingerprints data one-way (SHA-256) for <b>Integrity</b> — you can't reverse it.</span>
</div></div></div>
<table>
<thead><tr><th></th><th>Keys</th><th>Speed</th><th>Examples</th><th>Protects</th></tr></thead>
<tbody>
<tr><td><b>Symmetric</b></td><td>One shared key</td><td>Fast</td><td>AES, DES, 3DES</td><td>Confidentiality</td></tr>
<tr><td><b>Asymmetric</b></td><td>Public + private pair</td><td>Slow</td><td>RSA, ECC, Diffie-Hellman</td><td>Confidentiality + key exchange</td></tr>
<tr><td><b>Hashing</b></td><td>No key (one-way)</td><td>Fast</td><td>SHA-256, MD5*</td><td>Integrity</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">*MD5 / SHA-1 are considered weak/broken — prefer SHA-256.</p>
<div class="drill"><div class="q">Symmetric vs asymmetric encryption: keys, speed, one example each, and the problem asymmetric solves.</div>
<div class="a"><b>Symmetric</b>: one shared key, fast, e.g. <b>AES</b>. <b>Asymmetric</b>: public/private key pair, slower, e.g. <b>RSA</b>. Asymmetric solves <b>key distribution</b> — you can share a public key openly, so two parties never have to transmit a secret key.</div></div>
<div class="drill"><div class="q">How is hashing different from encryption, and which CIA property does it serve?</div>
<div class="a">Hashing is <b>one-way</b> (you cannot reverse a hash back to the data) and uses <b>no key</b>; encryption is reversible with a key. Hashing serves <b>Integrity</b> — same input → same hash, so any change is detectable.</div></div>
<div class="drill"><div class="q">How does a digital signature work, and which 3 things does it give you?</div>
<div class="a">The sender <b>hashes</b> the message and <b>encrypts the hash with their private key</b>. Anyone can decrypt it with the sender’s <b>public key</b> and compare hashes. Gives <b>Integrity</b> (hash matches), <b>Authenticity</b> (only that private key could sign), and <b>Non-repudiation</b> (sender can’t deny it).</div></div>

<!-- RISK -->
<h2 id="risk">11 · Risk management <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  A <b>threat</b> (something that could cause harm) exploits a <b>vulnerability</b> (a weakness) to create <b>risk</b>. You can almost never reach zero risk, so security is about <b>managing</b> it to an acceptable level. <span class="mnemonic">Risk ≈ Likelihood × Impact.</span>
</div>
<div class="figure"><div class="figcap">How risk is built — and four ways to answer it</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">Threat</span>
  <span class="flow-arrow">exploits →</span>
  <span class="flow-node">Vulnerability</span>
  <span class="flow-arrow">=</span>
  <span class="flow-node is-plain">Risk = Likelihood × Impact</span>
  <span class="flow-loop">Respond four ways: <b>Avoid</b> (drop it) · <b>Transfer</b> (insure / outsource) · <b>Mitigate</b> (patch / firewall / backups) · <b>Accept</b> (live with it). No vulnerability → the threat can't cause loss.</span>
</div></div></div>
<table>
<thead><tr><th>Term</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Asset</td><td>Anything of value (data, system, reputation)</td></tr>
<tr><td>Threat</td><td>Potential cause of harm (hacker, malware, fire)</td></tr>
<tr><td>Vulnerability</td><td>A weakness that a threat can exploit (unpatched server)</td></tr>
<tr><td>Exploit</td><td>The act/tool that uses the vulnerability</td></tr>
<tr><td>Risk</td><td>Likelihood × impact of a threat exploiting a vulnerability</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Distinguish threat, vulnerability, and risk with one example tying them together.</div>
<div class="a"><b>Threat</b> = a hacker (potential harm). <b>Vulnerability</b> = an unpatched server (weakness). <b>Risk</b> = the chance + damage of the hacker exploiting that unpatched server. No vulnerability → the threat can’t cause loss → low risk.</div></div>
<div class="drill"><div class="q">Name the 4 ways to respond to a risk, with an example of each.</div>
<div class="a"><ul>
<li><b>Avoid</b> — don’t do the risky activity (drop the feature).</li>
<li><b>Transfer</b> — shift it to someone else (cyber-insurance, outsource).</li>
<li><b>Mitigate</b> — reduce likelihood/impact (patch, firewall, backups).</li>
<li><b>Accept</b> — acknowledge and live with it (low impact, too costly to fix).</li>
</ul></div></div>

<!-- SOCIAL -->
<h2 id="social">12 · Social engineering <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Attack the <b>human, not the machine</b> — people are the weakest link. The attacker manipulates trust, fear, urgency, or curiosity to make someone hand over access or information. No firewall stops a user who is tricked into giving away their password.
</div>
<table>
<thead><tr><th>Technique</th><th>What it is</th></tr></thead>
<tbody>
<tr><td>Phishing</td><td>Mass fraudulent emails to harvest credentials</td></tr>
<tr><td>Spear phishing</td><td>Phishing targeted at a specific person/org</td></tr>
<tr><td>Whaling</td><td>Spear phishing aimed at executives (“big fish”)</td></tr>
<tr><td>Vishing / Smishing</td><td>Phishing by voice call / by SMS</td></tr>
<tr><td>Pretexting</td><td>Inventing a believable scenario to extract info</td></tr>
<tr><td>Baiting</td><td>Leaving a lure (e.g. infected USB) to be picked up</td></tr>
<tr><td>Tailgating / piggybacking</td><td>Following an authorized person through a secure door</td></tr>
<tr><td>Shoulder surfing</td><td>Watching someone type a password/PIN</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">What is social engineering and why is it so effective?</div>
<div class="a">Manipulating <b>people</b> into breaking security (giving credentials/access) rather than attacking technology. Effective because it exploits human trust, urgency, and helpfulness — the <b>weakest link</b> — and bypasses technical controls entirely.</div></div>
<div class="drill"><div class="q">Phishing vs spear phishing vs whaling. And what is tailgating?</div>
<div class="a"><b>Phishing</b> = mass/untargeted. <b>Spear phishing</b> = targeted at a specific individual/company. <b>Whaling</b> = targeted at high-value executives. <b>Tailgating</b> = physically following an authorized person through a secured entrance without your own credentials.</div></div>
<div class="drill"><div class="q">Best defense against social engineering?</div>
<div class="a"><b>Security awareness training</b> + a culture of verification (confirm requests through a second channel, never share credentials, report suspicious messages). This is an <b>Operational</b> control.</div></div>

<!-- MALWARE -->
<h2 id="malware">13 · Malware types deep-dive <span class="pill">extends hacking</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Classify malware by <b>how it spreads</b> and <b>what it does</b>. Spread: needs a host + user (virus), self-spreads (worm), tricks the user (trojan). Payload/behaviour: extort (ransomware), spy (spyware/keylogger), hide &amp; persist (rootkit), enslave (botnet).
</div>
<table>
<thead><tr><th>Malware</th><th>Behaviour</th></tr></thead>
<tbody>
<tr><td>Virus</td><td>Attaches to a file; needs the user to run it to spread</td></tr>
<tr><td>Worm</td><td>Self-replicates across the network, no user action</td></tr>
<tr><td>Trojan</td><td>Disguised as legitimate software</td></tr>
<tr><td><b>Ransomware</b></td><td>Encrypts files, demands payment (attacks Availability)</td></tr>
<tr><td>Spyware / Keylogger</td><td>Secretly collects info / records keystrokes</td></tr>
<tr><td><b>Rootkit</b></td><td>Hides deep with admin/root privileges; very hard to detect/remove</td></tr>
<tr><td>Botnet</td><td>Network of infected “zombie” machines controlled for attacks (DDoS, spam)</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Virus vs worm vs trojan — the distinguishing feature of each.</div>
<div class="a"><b>Virus</b> needs a host file + user action. <b>Worm</b> self-replicates over the network with no help. <b>Trojan</b> disguises itself as legit software to get the user to run it.</div></div>
<div class="drill"><div class="q">Which CIA property does ransomware attack, and what control best recovers from it?</div>
<div class="a">Primarily <b>Availability</b> (files locked) — and Integrity. Best recovery control: <b>offline/tested backups</b> (a Corrective control) so you can restore without paying.</div></div>
<div class="drill"><div class="q">What makes a rootkit especially dangerous?</div>
<div class="a">It operates with <b>admin/root privileges and hides itself</b> (even from the OS and AV), giving persistent stealthy control — often requiring a full rebuild to remove.</div></div>

<!-- PRINCIPLES -->
<h2 id="principles">14 · Security design principles <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  A few principles underlie almost every good security decision. If a question asks “what principle does X follow,” map it here.
</div>
<table>
<thead><tr><th>Principle</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><b>Defense in depth</b></td><td>Multiple layers of controls; if one fails, others still protect</td></tr>
<tr><td><b>Least privilege</b></td><td>Give each user/process only the access it needs — nothing more</td></tr>
<tr><td><b>Zero trust</b></td><td>“Never trust, always verify” — authenticate every request, even internal</td></tr>
<tr><td>Separation of duties</td><td>Split critical tasks across people so no one can act alone</td></tr>
<tr><td>Need to know</td><td>Access information only if required for your role</td></tr>
<tr><td>Fail securely</td><td>On failure, default to denying access, not allowing it</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Explain defense in depth, least privilege, and zero trust in one line each.</div>
<div class="a"><b>Defense in depth</b> — layered controls so a single failure isn’t fatal. <b>Least privilege</b> — minimum access necessary for the job. <b>Zero trust</b> — verify every user/device/request, never assume the inside network is safe.</div></div>
<div class="drill"><div class="q">A new intern is given access only to the one folder they need. Which principle is that?</div>
<div class="a"><b>Least privilege</b> (and “need to know”).</div></div>

<!-- EXAM -->
<h2 id="exam">15 · Combined exam-style questions</h2>
<p class="lead">Mixed like a real paper — answer fully on paper first.</p>
<div class="exam">
<div class="drill"><div class="q">For each: give the CIA property attacked AND a control that defends it. (a) Packet sniffing of logins, (b) ransomware encrypting files, (c) a DDoS botnet.</div>
<div class="a"><ul>
<li>(a) Sniffing logins → breaks <b>Confidentiality</b> → defend with <b>encryption (TLS/SSH/VPN)</b>.</li>
<li>(b) Ransomware → breaks <b>Availability</b> (and Integrity) → defend with <b>backups</b> (Corrective control) + antivirus.</li>
<li>(c) DDoS → breaks <b>Availability</b> → defend with <b>DDoS protection / redundancy</b>.</li>
</ul></div></div>
<div class="drill"><div class="q">A company installs CCTV, writes an acceptable-use policy, deploys a firewall, and restores a server from backup after an incident. Give the GROUP and TYPE of each.</div>
<div class="a"><ul>
<li>CCTV → Group: <b>Physical</b> · Type: <b>Detective</b> (+ Deterrent).</li>
<li>AUP → Group: <b>Managerial</b> · Type: <b>Directive</b>.</li>
<li>Firewall → Group: <b>Technical</b> · Type: <b>Preventive</b>.</li>
<li>Restore from backup → Type: <b>Corrective</b> (control itself is Technical).</li>
</ul></div></div>
<div class="drill"><div class="q">You’re given authorisation to test a client. Outline the safe workflow: verify your tools → set up the lab → discover hosts → scan a target → stay legal. Include the key commands.</div>
<div class="a"><ol>
<li><b>Verify Kali download</b>: <code>sha256sum</code> + <code>gpg --verify</code> (look for “Good signature”).</li>
<li><b>Run in a VM</b>; change default <code>kali/kali</code> password (<code>passwd</code>); update: <code>sudo apt update &amp;&amp; sudo apt full-upgrade</code>.</li>
<li><b>Discover hosts</b>: <code>sudo arp-scan --interface=eth0 --localnet</code>.</li>
<li><b>Scan target</b>: <code>nmap -T4 -A &lt;ip&gt;</code> → read PORT/STATE/SERVICE/VERSION.</li>
<li><b>Legal/ethical</b>: only within authorised scope; practice on <b>Metasploitable</b> in an isolated network.</li>
</ol></div></div>
<div class="drill"><div class="q">Explain why “authorisation” is the thread connecting hacker categories, pen-testing, and the Kali legal warning.</div>
<div class="a">The same technical actions (scanning, exploiting) are <b>ethical (white hat / pen test)</b> only with authorisation; without it they’re <b>criminal (black hat)</b> or at best <b>gray hat</b>. The Kali legal warning enforces the same line: only test what you own or are permitted to. Intent + authorisation, not skill, define legality.</div></div>
</div>

<p class="footnote">Built from the Cybersecurity Principles deck (Pen Davith / Davith Pen IT Academy) — controls, network security, hardening lab, hacking, and the full Kali Linux chapter. Print or “Save as PDF” reveals every answer.</p>
`;
export default html;
