const html = `


<p class="lead">How to use this: <b>read the concept box</b> (the mental model), then <b>cover the screen and answer each drill out loud or on paper before clicking reveal</b>. Recognition feels like knowing; only retrieval proves it. Configs come with “explain this line” drills because the exam mixes <i>write-the-config</i> with <i>explain-the-concept</i>.</p>
<p class="lead" style="color:#8a3f08"><b>Never studied this / forgot everything?</b> Don’t panic — start with <a href="#foundations" style="color:#b4540a;font-weight:700">Section 0</a>. It builds the whole subject from zero with one simple analogy. The other sections will make sense afterwards.</p>

<!-- ============ FOUNDATIONS ============ -->
<h2 id="foundations" class="zero">0 · Start here — the whole subject in plain words</h2>
<p>If the sections below look like alphabet soup (OSPF, AD, LSDB, wildcard…), <b>read this first</b>. It assumes you know <b>nothing</b>. Once these few ideas click, the rest of the sheet stops being random words and becomes “oh — that’s just the same idea again.”</p>

<div class="concept"><span class="label">The one analogy for the entire course</span>
Networking is just <b>a postal system for data</b>. Computers send little packages of data called <b>packets</b>. To get a packet from one place to another, it hops through <b>sorting offices</b>. Those sorting offices are <b>routers</b>. <b>Almost everything in this course is about how routers decide where to send each packet.</b> Keep this picture in your head and the jargon below is just labels on parts of it.</div>
<div class="figure"><div class="figcap">A packet hops office-to-office until it arrives</div>
<div class="figbox"><div class="flow">
  <span class="flow-node is-plain">PC A</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">Router 1</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">Router 2</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">Router 3</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node is-plain">PC B</span>
  <span class="flow-loop">At each router: look up the destination in the <b>routing table</b> → forward out the matching door. Not in the table → drop the packet. <b>That lookup is the router's whole job.</b></span>
</div></div></div>

<h3>1. What is a network, and an IP address?</h3>
<p>A <b>network</b> is a group of devices that can talk to each other directly — like one office building, or your home Wi-Fi. Every device has an <b>IP address</b> = its mailing address, written as four numbers, e.g. <code>192.168.1.10</code>. A whole network also has an address + a size, written like <code>192.168.1.0/24</code> — read that as “the street <code>192.168.1.___</code>, houses .0 through .255.”</p>

<h3>2. What is that “/24”? (subnet mask)</h3>
<p>The <code>/24</code> (or the longer form <code>255.255.255.0</code>) just tells you <b>how big the street is</b> — how many addresses are in the group. Counter-intuitive part: <b>a bigger slash number means a smaller group.</b></p>
<table>
<thead><tr><th>Written as</th><th>How many addresses</th><th>Used for</th></tr></thead>
<tbody>
<tr><td>/24</td><td>256 (a normal street)</td><td>A normal LAN of computers</td></tr>
<tr><td>/30</td><td>4 (a tiny alley)</td><td>The link between two routers</td></tr>
<tr><td>/16</td><td>65,536 (a whole town)</td><td>A big organisation</td></tr>
</tbody>
</table>

<h3>3. What is a router?</h3>
<p>A <b>router</b> is the device that connects <b>different</b> networks and passes data between them — the sorting office between streets and cities. Each cable socket on a router is an <b>interface</b> (think: a door), and each door faces a different network.</p>

<h3>4. The routing table — the router’s GPS</h3>
<div class="concept"><span class="label">This is the single most important idea</span>
Every router keeps a <b>routing table</b>: a list that says <b>“to reach network X → send it out this door / hand it to that next router.”</b> When a packet arrives, the router looks up the destination in this table and forwards it. <b>That lookup is the router’s entire job.</b> If the destination isn’t in the table, the packet is dropped. So: <b>the whole point of everything else is just filling in this table correctly.</b></div>

<h3>5. Two ways to fill the table: static vs dynamic</h3>
<p><b>Static</b> = a human types every route by hand. Fine for 2 routers, impossible for 200. <b>Dynamic</b> = the routers automatically <b>tell each other what they can reach</b> and build the table themselves. The thing that lets them do that gossip is called a <b>routing protocol</b>.</p>

<h3>6. What is a routing protocol — and why are there four?</h3>
<p>A <b>routing protocol</b> is the <b>language + strategy</b> routers use to tell each other “here’s what I can reach.” There are several because they make different trade-offs (simple vs smart, small office vs whole Internet). <b>They all solve the same problem</b> — fill the table — just in different ways:</p>
<table>
<thead><tr><th>Protocol</th><th>In one phrase</th></tr></thead>
<tbody>
<tr><td><b>RIP</b></td><td>Oldest and dumbest. Tiny networks only.</td></tr>
<tr><td><b>OSPF</b></td><td>Smart and fast. Used inside one company. (most of your exam)</td></tr>
<tr><td><b>EIGRP</b></td><td>Cisco’s fast hybrid, keeps a ready backup path.</td></tr>
<tr><td><b>BGP</b></td><td>Runs the actual Internet — connects whole companies/ISPs together.</td></tr>
</tbody>
</table>

<h3>7. AD and metric — the two tie-break rules</h3>
<p>Sometimes a router hears about the <b>same destination from two different protocols</b>, and they disagree on the best path. It decides in two steps:</p>
<div class="concept"><span class="label">Step 1 then step 2</span>
<b>Administrative Distance (AD)</b> answers <b>“whose word do I trust more?”</b> Each protocol has a trust number — <b>lower = more trusted</b> — and the router believes the lower one. <i>(That’s all Section 1 is.)</i><br><br>
<b>Metric</b> kicks in only <b>after</b> it has committed to one protocol: if that protocol offers two paths, the metric is the <b>score it uses to pick the better one</b>. Each protocol measures differently — RIP counts <i>how many routers you pass</i> (hops); OSPF uses <i>link speed</i>.</div>

<h3>8. The rest of the toppings (one line each)</h3>
<table>
<tbody>
<tr><td><b>ACL</b></td><td>A bouncer with a guest list — allows or blocks traffic by rules.</td></tr>
<tr><td><b>NAT / PAT</b></td><td>A translator — swaps your private home addresses for one public Internet address.</td></tr>
<tr><td><b>VPN (IPsec)</b></td><td>An armoured tunnel — a private, encrypted link between two offices over the public Internet.</td></tr>
<tr><td><b>GRE</b></td><td>A plain tunnel (no armour) — makes two far-apart routers act like they’re directly connected.</td></tr>
<tr><td><b>DHCP</b></td><td>The front-desk clerk — hands out IP addresses to devices automatically.</td></tr>
</tbody>
</table>

<div class="why"><span class="label">How to study the rest of this sheet</span>
The sections are numbered to match your <b>exam’s question order</b>, not easiest-first. If you’re learning fresh, this order is gentler: <b>0 (this) → 1 subnet masks → 2 IPv6 → 6 OSPF → 7 RIP → 8 EIGRP → 9 BGP</b>, then <b>3 AD → 4 classify → 5 wildcard</b>, then the toppings <b>12–16</b>. For every protocol, ask the same four questions: <b>(1)</b> what problem does it solve? <b>(2)</b> how does it share routes? <b>(3)</b> what’s its metric &amp; AD? <b>(4)</b> what does its config look like?</div>

<h3>Foundation drills (lock these before moving on)</h3>
<div class="drill"><div class="q">In one sentence: what does a router actually do?</div>
<div class="a">It <b>forwards packets between different networks</b> by looking up the destination in its <b>routing table</b> and sending it the right way.</div></div>
<div class="drill"><div class="q">What is a routing table, and what happens if a destination isn’t in it?</div>
<div class="a">A list of “to reach network X → send it this way.” If the destination isn’t listed, the router <b>drops the packet</b> (unless it has a default route — the “when in doubt, send it here” catch-all).</div></div>
<div class="drill"><div class="q">Static vs dynamic routing, in plain words?</div>
<div class="a"><b>Static</b> = a human types each route by hand. <b>Dynamic</b> = routers run a protocol to tell each other what they can reach and fill the table automatically.</div></div>
<div class="drill"><div class="q">AD vs metric — what’s the difference?</div>
<div class="a"><b>AD</b> = which <b>protocol/source</b> to trust when two disagree (lower = more trusted). <b>Metric</b> = within one protocol, which <b>path</b> is better. AD picks the source; metric picks the path.</div></div>
<div class="drill"><div class="q">What does <code>192.168.1.0/24</code> mean, and how is <code>/30</code> different?</div>
<div class="a"><code>/24</code> = a network of <b>256</b> addresses (a normal LAN). <code>/30</code> = a network of only <b>4</b> addresses, used for the tiny link between two routers. Bigger slash number = smaller network.</div></div>
<div class="drill"><div class="q">Name the four routing protocols and say which one runs the Internet.</div>
<div class="a"><b>RIP, OSPF, EIGRP, BGP</b> — and <b>BGP</b> runs the Internet (it connects whole companies/ISPs; the other three work inside one organisation).</div></div>

<!-- ============ AD ============ -->


<!-- ============ SUBNET MASKS ============ -->
<h2 id="subnet" class="zero">1 · IP addresses &amp; subnet masks — how to actually calculate</h2>
<div class="plain"><span class="label">In plain words</span>An IP address has two halves: <b>which network</b> you’re on + <b>which device</b> you are. The <b>subnet mask</b> is just the line that says where one half ends and the other begins. Everything below is how to find that line and count the addresses — with one shortcut (“block size”) that makes it fast.</div>

<h3>The structure: 32 bits, 4 octets</h3>
<p>An IPv4 address is <b>32 bits</b>, shown as <b>4 octets</b> (8 bits each), e.g. <code>192.168.1.10</code>. Each octet holds 0–255 (because 8 bits = 2⁸ = 256 possible values). The <b>subnet mask</b> is also 4 octets: its <b>1-bits mark the network part, its 0-bits mark the host part</b>. <code>/24</code> (CIDR notation) simply means “the first <b>24 bits are 1s</b>” = <code>255.255.255.0</code>.</p>

<div class="figure"><div class="figcap">/24 — where the network half ends and the host half begins</div>
<div class="figbox"><div class="addr">
  <div class="addr-row">
    <span class="addr-oct is-net">192</span>
    <span class="addr-oct is-net">168</span>
    <span class="addr-oct is-net">1</span>
    <span class="addr-oct is-host">10</span>
  </div>
  <div class="addr-legend">
    <span class="addr-key"><i class="is-net"></i> network — first 24 bits (the “/24”)</span>
    <span class="addr-key"><i class="is-host"></i> host — last 8 bits → 2⁸ − 2 = 254 usable</span>
  </div>
</div></div></div>
<h3>Step 1 — count the addresses</h3>
<div class="concept"><span class="label">The two formulas you need</span>
<b>Host bits</b> = 32 − (the slash number). <b>Total addresses</b> = 2<sup>host bits</sup>. <b>Usable hosts</b> = total − 2 (you subtract the <b>network address</b> and the <b>broadcast address</b>, which can’t be given to a device).</div>
<table>
<thead><tr><th>CIDR</th><th>Subnet mask</th><th>Total</th><th>Usable hosts</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td>/24</td><td>255.255.255.0</td><td>256</td><td>254</td><td>A normal LAN</td></tr>
<tr><td>/25</td><td>255.255.255.128</td><td>128</td><td>126</td><td>Half a LAN</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>64</td><td>62</td><td>Smaller LAN</td></tr>
<tr><td>/27</td><td>255.255.255.224</td><td>32</td><td>30</td><td>Small LAN</td></tr>
<tr><td>/28</td><td>255.255.255.240</td><td>16</td><td>14</td><td>Tiny LAN</td></tr>
<tr><td>/29</td><td>255.255.255.248</td><td>8</td><td>6</td><td>Handful of hosts</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>4</td><td>2</td><td>Router-to-router link</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">See why a <code>/30</code> link between two routers is perfect: exactly 2 usable addresses, one for each router.</p>

<h3>Step 2 — read a partial-octet mask (the 8 magic values)</h3>
<p>When the network/host boundary falls <b>inside</b> an octet, that octet is one of only 8 values. Memorise this row — it’s the whole game:</p>
<table>
<thead><tr><th>Mask octet</th><th>Binary</th><th>1-bits</th><th>Block size (256 − octet)</th></tr></thead>
<tbody>
<tr><td>128</td><td>10000000</td><td>1</td><td>128</td></tr>
<tr><td>192</td><td>11000000</td><td>2</td><td>64</td></tr>
<tr><td>224</td><td>11100000</td><td>3</td><td>32</td></tr>
<tr><td>240</td><td>11110000</td><td>4</td><td>16</td></tr>
<tr><td>248</td><td>11111000</td><td>5</td><td>8</td></tr>
<tr><td>252</td><td>11111100</td><td>6</td><td>4</td></tr>
<tr><td>254</td><td>11111110</td><td>7</td><td>2</td></tr>
<tr><td>255</td><td>11111111</td><td>8</td><td>1</td></tr>
</tbody>
</table>

<h3>Step 3 — the “block size” trick (find which network an IP is in)</h3>
<div class="concept"><span class="label">The shortcut that replaces all the binary</span>
<b>Block size = 256 − the interesting mask octet.</b> The networks then start at multiples of that block size. Find which block your address falls into → that’s the <b>network address</b>; the address just before the next block is the <b>broadcast</b>.</div>
<div class="why"><span class="label">Worked example — 192.168.1.100 /26</span>
<b>/26</b> = mask <code>255.255.255.192</code>. Interesting octet = the 4th (192). <b>Block size = 256 − 192 = 64.</b> So networks start at <code>.0, .64, .128, .192</code>. <code>.100</code> falls in the <b>.64</b> block (which runs .64–.127). → Network = <code>192.168.1.64</code>, broadcast = <code>192.168.1.127</code>, usable range = <code>.65–.126</code>.</div>

<div class="drill"><div class="q">How many <b>usable hosts</b> are in a /24, a /26, and a /30? (work it out, don’t guess)</div>
<div class="a">/24 → 2⁸ − 2 = <span class="blank">254</span> · /26 → 2⁶ − 2 = <span class="blank">62</span> · /30 → 2² − 2 = <span class="blank">2</span>. (Host bits = 32 − slash; usable = 2^hostbits − 2.)</div></div>
<div class="drill"><div class="q">What subnet mask does /27 give, and what is its block size?</div>
<div class="a">/27 = 27 ones = <code>255.255.255.224</code>. Block size = 256 − 224 = <span class="blank">32</span>. Networks: .0, .32, .64, .96, .128 …</div></div>
<div class="drill"><div class="q">Which network does 192.168.1.200 /26 belong to? Give network + broadcast.</div>
<div class="a">Block size 64 → blocks .0/.64/.128/<b>.192</b>. .200 is in the <b>.192</b> block (range .192–.255). Network = <code>192.168.1.192</code>, broadcast = <code>192.168.1.255</code>.</div></div>
<div class="drill"><div class="q">Why is a /30 the standard for a link between two routers?</div>
<div class="a">It has exactly <b>2 usable addresses</b> — one per router — wasting nothing. (4 total − network − broadcast = 2.)</div></div>

<!-- ============ IPv6 ============ -->
<h2 id="ipv6">2 · IPv6 addressing — how it’s written &amp; shortened</h2>
<div class="plain"><span class="label">In plain words</span>The world ran out of IPv4 addresses (only ~4.3 billion). IPv6 is the replacement with a <b>vastly bigger</b> address space. The catch for the exam: the addresses are long, so there are <b>two rules for shortening them</b> — and you must know exactly which zeros you’re allowed to drop.</div>

<h3>The format</h3>
<p>An IPv6 address is <b>128 bits</b> (vs 32 for IPv4), written as <b>8 groups of 4 hexadecimal digits</b>, separated by colons. Hex digits are 0–9 and a–f. Each group = 16 bits.</p>
<div class="codewrap"><div class="cap">A full IPv6 address</div>
<pre>2001:0db8:0000:0000:0000:ff00:0042:8329</pre></div>

<h3>The two shortening rules</h3>
<div class="concept"><span class="label">Rule 1 — drop leading zeros in each group</span>
Within any group you may delete <b>leading</b> zeros (the ones at the front). <code>0db8</code>→<code>db8</code>, <code>0042</code>→<code>42</code>, <code>0000</code>→<code>0</code>. But <code>ff00</code> stays <code>ff00</code> — those zeros are at the <b>end</b>, not the front.</div>
<div class="concept"><span class="label">Rule 2 — one run of all-zero groups becomes ::</span>
A single <b>consecutive run of all-zero groups</b> can be replaced by <code>::</code>. You may do this <b>only once</b> in an address (if you did it twice, nobody could tell how many zero-groups each <code>::</code> stands for).</div>
<div class="why"><span class="label">Both rules applied, step by step</span>
Full: &nbsp;<code>2001:0db8:0000:0000:0000:ff00:0042:8329</code><br>
Rule 1 (drop leading zeros): &nbsp;<code>2001:db8:0:0:0:ff00:42:8329</code><br>
Rule 2 (zero-run → ::): &nbsp;<b><code>2001:db8::ff00:42:8329</code></b></div>

<table>
<thead><tr><th>Allowed</th><th>NOT allowed</th></tr></thead>
<tbody>
<tr><td>Drop <b>leading</b> zeros: <code>0042 → 42</code></td><td>Drop <b>trailing/middle</b> zeros: <code>ff00 → ff</code> ✗</td></tr>
<tr><td>Use <code>::</code> for one zero-run</td><td>Use <code>::</code> <b>twice</b> in one address ✗</td></tr>
<tr><td>A lone <code>0000</code> → <code>0</code></td><td>Leaving a group with more than 4 hex digits ✗</td></tr>
</tbody>
</table>

<h3>A few addresses worth knowing</h3>
<table>
<tbody>
<tr><td><code>::1</code></td><td>Loopback (the IPv6 version of 127.0.0.1)</td></tr>
<tr><td><code>::</code></td><td>Unspecified / all-zeros address</td></tr>
<tr><td><code>fe80::/10</code></td><td>Link-local (auto-assigned on every interface)</td></tr>
<tr><td><code>ff02::5</code> / <code>ff02::9</code></td><td>Multicast — all OSPFv3 routers / RIPng (ties back to §7, §13)</td></tr>
<tr><td><code>/64</code></td><td>The usual size of a single IPv6 subnet</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">Note: IPv6 has <b>no broadcast</b> — it uses multicast instead.</p>

<div class="drill"><div class="q">How many bits is an IPv6 address, and how is it written?</div>
<div class="a"><b>128 bits</b> (IPv4 is 32), written as <b>8 groups of 4 hex digits</b> separated by colons.</div></div>
<div class="drill"><div class="q">Compress <code>2001:0db8:0000:0000:0000:ff00:0042:8329</code> fully.</div>
<div class="a"><code>2001:db8::ff00:42:8329</code> (drop leading zeros, then turn the run of three 0000 groups into <code>::</code>).</div></div>
<div class="drill"><div class="q">Can you use <code>::</code> twice in one address? Why / why not?</div>
<div class="a"><b>No.</b> <code>::</code> means “fill with as many zero-groups as needed to reach 8.” Two of them would be ambiguous — you couldn’t tell how many zero groups belong to each.</div></div>
<div class="drill"><div class="q">Expand <code>2001:db8::1</code> back to its full 8-group form.</div>
<div class="a">There are 3 written groups (2001, db8, 1), so <code>::</code> stands for 5 zero-groups: <code>2001:0db8:0000:0000:0000:0000:0000:0001</code>.</div></div>
<div class="drill"><div class="q">Why is <code>ff00</code> NOT shortened to <code>ff</code>?</div>
<div class="a">Because Rule 1 only drops <b>leading</b> zeros (front of the group). In <code>ff00</code> the zeros are at the <b>end</b>, so they must stay.</div></div>

<!-- ============ AD ============ -->
<h2 id="ad">3 · Administrative Distance (AD)</h2>
<div class="plain"><span class="label">In plain words</span>Your router sometimes hears “I can reach network X” from <b>two different protocols at once</b>, and they disagree. AD is just a <b>trust score</b> that decides which one to believe. <b>Lower number = more trusted.</b> That’s the whole idea — the table below is just the scores.</div>
<div class="concept">
  <span class="label">The mental model</span>
  AD is a router’s <b>trust ranking for the source of a route</b>, not a measure of distance. When two protocols both offer a path to the same network, the router can’t compare a “hop count” to a “cost” — different units. So it first asks <b>“whose word do I trust more?”</b> = lowest AD wins. Metric is only the tie-breaker <i>within</i> one protocol. <span class="mnemonic">Lower AD = more believable.</span>
</div>
<div class="figure"><div class="figcap">Whose word to trust — lower AD wins</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">Connected 0</span>
  <span class="flow-node">Static 1</span>
  <span class="flow-node">eBGP 20</span>
  <span class="flow-node">EIGRP 90</span>
  <span class="flow-node">OSPF 110</span>
  <span class="flow-node">RIP 120</span>
  <span class="flow-node">iBGP 200</span>
  <span class="flow-node is-plain">255 = unreachable</span>
  <span class="flow-loop">← more trusted&nbsp;&nbsp;·&nbsp;&nbsp;less trusted → &nbsp; The router installs the route from the <b>lowest-AD</b> source and never compares metrics across protocols.</span>
</div></div></div>

<table>
  <thead><tr><th>Source</th><th>AD</th><th>Source</th><th>AD</th></tr></thead>
  <tbody>
    <tr><td>Connected interface</td><td>0</td><td>OSPF</td><td>110</td></tr>
    <tr><td>Static route</td><td>1</td><td>IS-IS</td><td>115</td></tr>
    <tr><td>eBGP (external)</td><td>20</td><td>RIP</td><td>120</td></tr>
    <tr><td>EIGRP (internal)</td><td>90</td><td>EIGRP (external)</td><td>170</td></tr>
    <tr><td>IGRP</td><td>100</td><td>iBGP (internal)</td><td>200</td></tr>
    <tr><td colspan="2"></td><td>Unknown / unreachable</td><td>255</td></tr>
  </tbody>
</table>

<div class="drill"><div class="q">Fill the blanks: Connected __, Static __, eBGP __, EIGRP __, OSPF __, RIP __, iBGP __.</div>
<div class="a">Connected <span class="blank">0</span>, Static <span class="blank">1</span>, eBGP <span class="blank">20</span>, EIGRP <span class="blank">90</span>, OSPF <span class="blank">110</span>, RIP <span class="blank">120</span>, iBGP <span class="blank">200</span>. (External EIGRP 170, unreachable 255.)</div></div>

<div class="drill"><div class="q">Why does eBGP (20) beat OSPF (110) even though OSPF is usually “smarter”?</div>
<div class="a">Because AD is decided <b>before</b> metric. A router with both an eBGP and an OSPF route to the same prefix installs the eBGP one purely because 20 &lt; 110 — it never compares their internal metrics. AD is the first filter; metric only breaks ties among routes from the <i>same</i> protocol.</div></div>

<div class="drill"><div class="q">Conceptual: a route appears with AD 255. What does that mean and what does the router do?</div>
<div class="a">255 = “untrusted / unreachable.” The router <b>will not install it in the routing table</b> at all. It’s effectively infinity for trust.</div></div>

<!-- ============ classify ============ -->
<h2 id="classify">4 · Classifying routing protocols</h2>
<div class="concept">
  <span class="label">The mental model</span>
  Two independent axes. <b>(A) How does it learn the topology?</b> and <b>(B) How far does it operate?</b> A protocol has one answer on each axis — e.g. OSPF is <i>link-state</i> (axis A) and <i>IGP</i> (axis B).
</div>

<table>
<thead><tr><th>By algorithm (how it learns)</th><th>Members</th><th>Idea</th></tr></thead>
<tbody>
<tr><td>Distance-vector</td><td>RIP, IGRP, EIGRP*</td><td>“Routing by rumour” — knows only direction + distance from neighbours</td></tr>
<tr><td>Link-state</td><td>OSPF, IS-IS</td><td>Every router builds an identical full map, then runs SPF (Dijkstra)</td></tr>
<tr><td>Path-vector</td><td>BGP</td><td>Tracks the full list of AS numbers a route passed through</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">*EIGRP is an <b>advanced</b> distance-vector / hybrid (DUAL).</p>

<table>
<thead><tr><th>By scope</th><th>Means</th><th>Members</th></tr></thead>
<tbody>
<tr><td>IGP — Interior Gateway Protocol</td><td>Inside one autonomous system</td><td>RIP, OSPF, EIGRP, IS-IS</td></tr>
<tr><td>EGP — Exterior Gateway Protocol</td><td>Between autonomous systems</td><td>BGP</td></tr>
</tbody>
</table>

<div class="drill"><div class="q">Classify OSPF, RIP, EIGRP, BGP on BOTH axes (algorithm + scope).</div>
<div class="a"><ul>
<li><b>OSPF</b> — link-state, IGP</li>
<li><b>RIP</b> — distance-vector, IGP</li>
<li><b>EIGRP</b> — advanced distance-vector (hybrid), IGP</li>
<li><b>BGP</b> — path-vector, EGP</li>
</ul></div></div>

<div class="drill"><div class="q">Static vs dynamic routing — give 2 advantages of each.</div>
<div class="a"><b>Static:</b> no CPU/bandwidth overhead, full administrator control, more secure (no advertisements), predictable. Good for small/stub networks.<br>
<b>Dynamic:</b> automatically adapts to topology changes / link failures, scales to large networks, less manual work. Costs CPU, memory, bandwidth.</div></div>

<!-- ============ wildcard ============ -->
<h2 id="wildcard">5 · Wildcard masks</h2>
<div class="plain"><span class="label">In plain words</span>A few commands make you write a subnet <b>backwards</b>. A wildcard mask is just that backwards version of a normal subnet mask. There’s a one-step formula (255 − each number), so don’t memorise — calculate.</div>
<div class="concept">
  <span class="label">The mental model</span>
  A wildcard mask is the <b>photo-negative of a subnet mask</b>. <code>0</code> = “this bit must match exactly,” <code>255</code> (all ones) = “don’t care.” Fast formula per octet: <b>255 − subnet-mask octet</b>. Used in OSPF/EIGRP <code>network</code> statements and in ACLs.
</div>
<table>
<thead><tr><th>Prefix</th><th>Subnet mask</th><th>Wildcard</th></tr></thead>
<tbody>
<tr><td>/24</td><td>255.255.255.0</td><td>0.0.0.255</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>0.0.0.3</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>0.0.0.63</td></tr>
<tr><td>/16</td><td>255.255.0.0</td><td>0.0.255.255</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Convert to wildcard: /24, /30, /26, /16. (do it before revealing)</div>
<div class="a">/24 → <span class="blank">0.0.0.255</span> · /30 → <span class="blank">0.0.0.3</span> · /26 → <span class="blank">0.0.0.63</span> · /16 → <span class="blank">0.0.255.255</span></div></div>

<!-- ============ OSPF ============ -->
<h2 id="ospf">6 · OSPF <span class="kh">— Open Shortest Path First</span></h2>
<div class="plain"><span class="label">In plain words</span>OSPF is one method routers use to learn routes. Every router <b>shares a “map” of its own connections</b> with all the others, so each router ends up holding a <b>complete map of the network</b> and calculates the best path itself. It’s the smart, fast one used <b>inside a single company</b> — and most of your exam is about it.</div>
<div class="concept">
  <span class="label">The mental model</span>
  Every router floods <b>LSAs</b> describing its links. All routers in an area assemble these into one identical <b>LSDB (link-state database)</b> — a shared map. Each then runs <b>SPF (Dijkstra)</b> on that map to compute its own shortest-path tree. Because everyone shares the same map, OSPF converges fast and is loop-free by design. Areas keep the map small; <b>Area 0 is the backbone</b> every other area must touch.
</div>
<div class="figure"><div class="figcap">Everyone builds the same map, then each finds its own shortest path</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">each router floods LSAs</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">identical LSDB (shared map) everywhere</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">each runs SPF / Dijkstra</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node is-plain">own shortest-path tree</span>
  <span class="flow-loop">Same map on every router → fast convergence, loop-free by design. <b>DR/BDR</b> on a shared segment cut adjacencies from n(n−1)/2 down to ~n.</span>
</div></div></div>

<h3>The 10 must-know characteristics</h3>
<table>
<tbody>
<tr><td>Type</td><td>Link-state IGP (builds LSDB, runs SPF/Dijkstra)</td></tr>
<tr><td>Classless</td><td>Supports VLSM &amp; CIDR (sends mask in updates)</td></tr>
<tr><td>Metric</td><td><b>Cost</b>, where Cost = 10⁸ / Bandwidth(bps) = 100,000,000 / BW</td></tr>
<tr><td>Convergence</td><td>Fast — triggered updates + SPF</td></tr>
<tr><td>Hierarchy</td><td>Area-based; all areas attach to <b>Area 0</b> (backbone)</td></tr>
<tr><td>AD</td><td>110</td></tr>
<tr><td>Protocol number</td><td>IP protocol <b>89</b> (not TCP/UDP)</td></tr>
<tr><td>Timers</td><td>Hello/Dead = <b>10/40</b> s (broadcast &amp; p2p); 30/120 s on NBMA</td></tr>
<tr><td>DR/BDR</td><td>Elected on multi-access networks to cut down adjacencies</td></tr>
<tr><td>Router-ID</td><td>32-bit ID required to run</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">Multicast: <code>224.0.0.5</code> = all OSPF routers · <code>224.0.0.6</code> = DR/BDR.</p>

<div class="drill"><div class="q">Recite the OSPF cost formula and compute the cost of a 100 Mbps link and a 1.544 Mbps T1.</div>
<div class="a">Cost = <b>10⁸ / bandwidth in bps</b>.<br>
100 Mbps = 10⁸ bps → cost = 10⁸/10⁸ = <span class="blank">1</span>.<br>
T1 1.544 Mbps = 1,544,000 bps → cost = 10⁸/1,544,000 ≈ <span class="blank">64</span>.</div></div>

<div class="drill"><div class="q">OSPF Router-ID selection order (3 steps).</div>
<div class="a"><ol>
<li><b>Manual</b> <code>router-id</code> command (always wins)</li>
<li>Else highest <b>loopback</b> interface IP</li>
<li>Else highest active <b>physical</b> interface IP</li>
</ol>Changing it after the process is up needs <code>clear ip ospf process</code>.</div></div>

<div class="drill"><div class="q">DR/BDR election rules — and why does OSPF bother electing them?</div>
<div class="a"><b>Why:</b> on a multi-access (broadcast) segment with n routers, full mesh = n(n−1)/2 adjacencies and duplicate flooding. The DR is a central point everyone syncs to (BDR = standby), so adjacencies drop to ~n.<br>
<b>Election:</b> highest <b>interface priority</b> (0–255, default 1) wins; tie → highest <b>Router-ID</b>. Priority <b>0 = never</b> becomes DR/BDR. Non-preemptive (a better router joining later does NOT take over).</div></div>

<div class="drill"><div class="q">Why is OSPF “classless” important in one sentence?</div>
<div class="a">It carries the subnet mask in its updates, so it supports <b>VLSM</b> (different mask lengths) and CIDR summarization — unlike classful RIPv1.</div></div>

<h3>Config (paste-ready)</h3>
<div class="codewrap"><div class="cap">Basic single-area OSPF</div>
<pre><span class="cm">! process id 1 is locally significant (need not match neighbours)</span>
<span class="pr">router ospf</span> 1
 <span class="pr">router-id</span> 1.1.1.1
 <span class="pr">network</span> 192.168.1.0 0.0.0.255 <span class="pr">area</span> 0
 <span class="pr">network</span> 10.0.0.0 0.0.0.3 <span class="pr">area</span> 0
<span class="cm">! optional: make a loopback the RID / advertise it</span>
<span class="pr">interface</span> loopback0
 <span class="pr">ip address</span> 1.1.1.1 255.255.255.255</pre></div>

<div class="codewrap"><div class="cap">Verification commands</div>
<pre><span class="pr">show ip ospf neighbor</span>          <span class="cm">! adjacencies + state (FULL?), who is DR/BDR</span>
<span class="pr">show ip ospf interface brief</span>   <span class="cm">! which interfaces run OSPF, area, cost</span>
<span class="pr">show ip route ospf</span>             <span class="cm">! OSPF-learned routes (flagged O)</span>
<span class="pr">show ip ospf database</span>          <span class="cm">! the LSDB itself</span>
<span class="pr">show ip protocols</span>              <span class="cm">! RID, timers, networks advertised</span></pre></div>

<div class="drill"><div class="q">EXPLAIN: <code>network 10.0.0.0 0.0.0.3 area 0</code> — what does each part do?</div>
<div class="a"><ul>
<li><code>network</code> = which interfaces to enable OSPF on (not “advertise this network” in the RIP sense).</li>
<li><code>10.0.0.0</code> = base address to match.</li>
<li><code>0.0.0.3</code> = wildcard = /30 → matches interfaces in 10.0.0.0–10.0.0.3.</li>
<li><code>area 0</code> = place those interfaces into area 0 (backbone).</li>
</ul></div></div>

<div class="drill"><div class="q">EXPLAIN: what does <code>show ip ospf neighbor</code> tell you, and what state means “fully working”?</div>
<div class="a">It lists each OSPF neighbour, its Router-ID, priority, the <b>state</b>, dead-time, and address. The healthy steady state is <b>FULL</b> (databases synchronized). On a multi-access link a working non-DR pair may sit at <b>2-WAY</b> by design — only DR/BDR relationships go FULL. Stuck at INIT/EXSTART usually = MTU or timer/subnet mismatch.</div></div>

<!-- ============ RIP ============ -->
<h2 id="rip">7 · RIP / RIPv2 / RIPng</h2>
<div class="plain"><span class="label">In plain words</span>RIP is the oldest, simplest method. Each router just tells its neighbours <b>“here’s everything I can reach and how many routers away it is”</b> (a “hop”), and they pass the news along. Easy to set up but slow and not very smart — only fit for <b>tiny networks</b>. It caps at 15 hops on purpose.</div>
<div class="concept">
  <span class="label">The mental model</span>
  Pure distance-vector: a router doesn’t know the map, it just believes neighbours’ summaries (“routing by rumour”) and adds 1 hop. Simple but slow to converge and loop-prone, so RIP wraps itself in loop-prevention rules. The hop ceiling of 15 is a deliberate “small-network only” guard — <b>16 = infinity = unreachable</b>.
</div>
<table>
<tbody>
<tr><td>Type / metric</td><td>Distance-vector IGP; metric = <b>hop count</b></td></tr>
<tr><td>Max hops</td><td><b>15</b>; 16 = unreachable (infinity)</td></tr>
<tr><td>AD</td><td>120</td></tr>
<tr><td>Updates</td><td>Full table every <b>30 s</b> (periodic)</td></tr>
<tr><td>Transport</td><td>UDP <b>520</b> (RIPv1/v2); RIPng = UDP <b>521</b></td></tr>
<tr><td>v1 vs v2</td><td>v1 classful, broadcast 255.255.255.255, no VLSM/auth · v2 classless, multicast <b>224.0.0.9</b>, VLSM + auth</td></tr>
<tr><td>RIPng (IPv6)</td><td>multicast <b>FF02::9</b></td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">Timers: update 30s · invalid 180s · hold-down 180s · flush 240s.</p>

<div class="drill"><div class="q">Name the 4 RIP loop-prevention mechanisms and what each does.</div>
<div class="a"><ul>
<li><b>Split horizon</b> — don’t advertise a route back out the interface you learned it on.</li>
<li><b>Route poisoning</b> — mark a failed route as metric 16 (infinity) to kill it fast.</li>
<li><b>Poison reverse</b> — send the poisoned (16) route <i>back</i> toward the source, overriding split horizon, to actively cancel it.</li>
<li><b>Hold-down timer</b> (180s) — ignore worse updates about a route for a while so old/bad info doesn’t reinstate it.</li>
</ul>(+ triggered updates for faster reaction.)</div></div>

<div class="drill"><div class="q">RIPv1 vs RIPv2 — the one difference that matters most for the exam?</div>
<div class="a"><b>v2 is classless</b> (carries subnet mask → supports VLSM) and uses multicast 224.0.0.9; v1 is classful (no mask, no VLSM) and broadcasts. That’s why real configs use <code>version 2</code> + <code>no auto-summary</code>.</div></div>

<h3>Config</h3>
<div class="codewrap"><div class="cap">RIPv2 (IPv4)</div>
<pre><span class="pr">router rip</span>
 <span class="pr">version</span> 2
 <span class="pr">no auto-summary</span>          <span class="cm">! keep VLSM subnets, don't summarize to classful</span>
 <span class="pr">network</span> 192.168.1.0       <span class="cm">! classful network — no wildcard in RIP!</span>
 <span class="pr">network</span> 10.0.0.0</pre></div>
<div class="codewrap"><div class="cap">RIPng (IPv6) — enabled per-interface</div>
<pre><span class="pr">ipv6 unicast-routing</span>
<span class="pr">interface</span> g0/0
 <span class="pr">ipv6 rip</span> MYPROC <span class="pr">enable</span></pre></div>

<div class="drill"><div class="q">EXPLAIN: why does RIP’s <code>network</code> statement take NO wildcard mask, but OSPF’s does?</div>
<div class="a">RIP <code>network</code> takes a <b>classful</b> network address — it enables RIP on any interface falling inside that classful range, no mask needed. OSPF’s <code>network … wildcard … area</code> needs the wildcard to precisely pick interfaces and assign them to an area. Different design: RIP = coarse/classful, OSPF = precise/area-aware.</div></div>

<!-- ============ EIGRP ============ -->
<h2 id="eigrp">8 · EIGRP</h2>
<div class="plain"><span class="label">In plain words</span>EIGRP is Cisco’s method that mixes RIP’s simplicity with OSPF’s speed. Its trick: it keeps a <b>ready-made backup path</b> so if a link dies, it switches over instantly instead of recalculating.</div>
<div class="concept">
  <span class="label">The mental model</span>
  Cisco’s “best of both”: distance-vector simplicity + link-state speed. The <b>DUAL</b> algorithm precomputes a backup path (the <b>feasible successor</b>) so when the primary (<b>successor</b>) fails it switches instantly — no recalculation storm. Neighbours must share the same <b>AS number</b> to talk.
</div>
<table>
<tbody>
<tr><td>Type</td><td>Advanced distance-vector / hybrid (DUAL)</td></tr>
<tr><td>AD</td><td><b>90</b> internal (170 external)</td></tr>
<tr><td>Metric</td><td>Composite: <b>bandwidth + delay</b> by default (can add load, reliability, MTU)</td></tr>
<tr><td>Protocol / multicast</td><td>IP protocol 88 · multicast 224.0.0.10</td></tr>
<tr><td>Key terms</td><td>Successor (best path), Feasible Successor (loop-free backup)</td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">EIGRP config (AS number must match neighbours)</div>
<pre><span class="pr">router eigrp</span> 12
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> 192.168.140.0 0.0.0.255
 <span class="pr">network</span> 140.140.130.0 0.0.0.3</pre></div>
<div class="drill"><div class="q">What must match between two routers for them to form an EIGRP neighborship? And what is a “feasible successor”?</div>
<div class="a">The <b>AS number</b> (here 12) must match (plus K-values and primary subnet). A <b>feasible successor</b> is a pre-qualified loop-free <b>backup route</b> kept ready in the topology table, so DUAL fails over instantly without recomputing.</div></div>

<!-- ============ BGP ============ -->
<h2 id="bgp">9 · BGP <span class="kh">— Border Gateway Protocol</span></h2>
<div class="plain"><span class="label">In plain words</span>BGP is the method that runs the <b>actual Internet</b>. The other three work <b>inside</b> one company; BGP connects whole companies and ISPs <b>to each other</b>. Each company is an “AS” (autonomous system) with a number, and BGP tracks which AS numbers a route passes through.</div>
<div class="concept">
  <span class="label">The mental model</span>
  BGP is the routing protocol <b>between</b> organisations — “the routing protocol of the Internet.” It’s a <b>path-vector</b>: it advertises the full list of <b>AS numbers</b> a route crosses, which is how it detects loops (see your own AS → drop) and applies business policy. It runs over <b>TCP 179</b> (reliable, no flooding). eBGP = between different AS (AD 20); iBGP = inside one AS (AD 200).
</div>
<div class="codewrap"><div class="cap">eBGP config — note the differences from IGPs</div>
<pre><span class="pr">router bgp</span> 122                       <span class="cm">! 122 = my AS number</span>
 <span class="pr">bgp router-id</span> 1.1.1.1
 <span class="pr">neighbor</span> 140.140.130.2 <span class="pr">remote-as</span> 123  <span class="cm">! peer's AS = 123 → eBGP</span>
 <span class="pr">network</span> 192.168.140.0 <span class="pr">mask</span> 255.255.255.0  <span class="cm">! uses 'mask', NOT wildcard</span></pre></div>
<div class="drill"><div class="q">Two ways BGP config differs syntactically from OSPF/EIGRP config.</div>
<div class="a"><ol>
<li>You explicitly define each <b>neighbor</b> with its <code>remote-as</code> (no auto-discovery / multicast hellos).</li>
<li>The <code>network</code> statement uses the keyword <b>mask</b> + a real subnet mask, <b>not a wildcard</b>.</li>
</ol>Also: eBGP between different AS numbers, iBGP same AS number.</div></div>
<div class="drill"><div class="q">How does BGP prevent routing loops between autonomous systems?</div>
<div class="a">By the <b>AS-path</b>: each AS prepends its number. If a router sees its <b>own AS already in the path</b>, the route is a loop and is discarded. (Path-vector loop prevention.)</div></div>

<!-- ============ IPsec ============ -->
<h2 id="ipsec">10 · IPsec site-to-site VPN</h2>
<div class="plain"><span class="label">In plain words</span>A <b>VPN</b> builds a private, <b>encrypted tunnel</b> across the public Internet so two offices can talk securely as if they were on the same private network — nobody in between can read it. <b>IPsec</b> is the set of rules for building that tunnel. The two routers first agree on the rules (Phase 1), then start encrypting the real data (Phase 2).</div>
<div class="concept">
  <span class="label">The mental model</span>
  Two routers build an encrypted tunnel across the public Internet in <b>two negotiations</b>. <b>Phase 1 (IKE / ISAKMP)</b> builds a secure <i>management</i> channel and authenticates the peers (think: shake hands privately). <b>Phase 2 (IPsec SA)</b> negotiates how the <i>real user data</i> is encrypted. Both ends must agree on every parameter or Phase 1 never comes up.
</div>
<div class="figure"><div class="figcap">Two negotiations build the encrypted tunnel</div>
<div class="figbox"><div class="flow">
  <span class="flow-node is-plain">Site A router</span>
  <span class="flow-arrow">════ encrypted tunnel ════</span>
  <span class="flow-node is-plain">Site B router</span>
  <span class="flow-loop"><b>Phase 1 (IKE / ISAKMP):</b> authenticate the peers + build a secure management channel (aes · sha · pre-share · DH group). <b>Then Phase 2 (IPsec SA):</b> encrypt the real user data (transform set). Both ends must match every parameter.</span>
</div></div></div>
<table>
<thead><tr><th>ISAKMP (Phase 1) parameter</th><th>Example</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>encryption</td><td>aes</td><td>cipher for the management channel</td></tr>
<tr><td>hash</td><td>sha</td><td>integrity check</td></tr>
<tr><td>authentication</td><td>pre-share</td><td>peers prove identity with a shared secret</td></tr>
<tr><td>group</td><td>2</td><td><b>Diffie-Hellman</b> group (key-exchange strength, 1024-bit)</td></tr>
<tr><td>lifetime</td><td>86400</td><td>SA lifetime in seconds = <b>24 hours</b></td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">Phase 1 — ISAKMP policy + pre-shared key</div>
<pre><span class="pr">crypto isakmp policy</span> 10
 <span class="pr">encryption</span> aes
 <span class="pr">hash</span> sha
 <span class="pr">authentication</span> pre-share
 <span class="pr">group</span> 2
 <span class="pr">lifetime</span> 86400
<span class="cm">! shared secret, bound to the peer's public IP</span>
<span class="pr">crypto isakmp key</span> cisco123 <span class="pr">address</span> 202.193.25.22</pre></div>
<div class="codewrap"><div class="cap">Phase 2 — transform set, interesting-traffic ACL, crypto map</div>
<pre><span class="pr">crypto ipsec transform-set</span> TSET <span class="pr">esp-aes esp-sha-hmac</span>
<span class="cm">! 'interesting traffic' = what to encrypt (LAN to remote LAN)</span>
<span class="pr">access-list</span> 110 <span class="pr">permit ip</span> 192.168.1.0 0.0.0.255 192.168.2.0 0.0.0.255
<span class="pr">crypto map</span> CMAP 10 <span class="pr">ipsec-isakmp</span>
 <span class="pr">set peer</span> 202.193.25.22
 <span class="pr">set transform-set</span> TSET
 <span class="pr">match address</span> 110
<span class="pr">interface</span> g0/0
 <span class="pr">crypto map</span> CMAP        <span class="cm">! apply to the public/outside interface</span></pre></div>

<div class="drill"><div class="q">EXPLAIN <code>group 2</code> and <code>lifetime 86400</code>.</div>
<div class="a"><b>group 2</b> = Diffie-Hellman group 2 (1024-bit) — sets how strong the shared key-exchange is; both peers must use the same group. <b>lifetime 86400</b> = the security association lives 86,400 seconds = <b>24 hours</b>, then re-keys.</div></div>
<div class="drill"><div class="q">What is the “interesting traffic” ACL for, and where do you apply the crypto map?</div>
<div class="a">The ACL (here permit ip LAN1 → LAN2) defines <b>which traffic gets encrypted</b> and sent down the tunnel; anything not matched is sent normally. The <b>crypto map is applied to the outside/public interface</b> facing the peer.</div></div>
<div class="drill"><div class="q">Conceptual: what does Phase 1 protect vs what does Phase 2 protect?</div>
<div class="a">Phase 1 (IKE/ISAKMP) secures the <b>negotiation/management channel</b> and authenticates peers. Phase 2 (IPsec SA) secures the <b>actual user data</b> traversing the tunnel.</div></div>

<!-- ============ GRE ============ -->
<h2 id="gre">11 · GRE tunnels <span class="pill">from labs</span></h2>
<div class="plain"><span class="label">In plain words</span>GRE is a <b>plain tunnel</b> that makes two far-apart routers behave as if a single cable connected them directly. By itself it has <b>no lock</b> (no encryption), so it’s often wrapped inside IPsec to get both: GRE’s flexibility + IPsec’s security.</div>
<div class="concept">
  <span class="label">The mental model</span>
  GRE wraps (encapsulates) one packet inside another so two distant routers act as if directly connected by a virtual point-to-point link. It can carry <b>multicast/routing protocols and non-IP traffic</b> — which plain IPsec can’t — but <b>GRE has no encryption</b>. The common pattern is “GRE over IPsec”: GRE for flexibility, IPsec for security. Protocol number <b>47</b>.
</div>
<div class="figure"><div class="figcap">GRE over IPsec — a packet wrapped in two layers</div>
<div class="figbox"><div class="encap">
  <div class="encap-l lvl1"><span class="encap-cap">IPsec (ESP) — adds encryption 🔒</span>
    <div class="encap-l lvl2"><span class="encap-cap">GRE header — carries OSPF / multicast / non-IP</span>
      <div class="encap-l lvl3"><span class="encap-cap">original IP packet — your data</span></div>
    </div>
  </div>
</div></div></div>
<div class="codewrap"><div class="cap">GRE tunnel between two sites</div>
<pre><span class="pr">interface</span> tunnel0
 <span class="pr">ip address</span> 172.16.0.1 255.255.255.252   <span class="cm">! tunnel's own /30 subnet</span>
 <span class="pr">tunnel source</span> g0/0                     <span class="cm">! local real interface/IP</span>
 <span class="pr">tunnel destination</span> 203.0.113.2          <span class="cm">! peer's real public IP</span>
 <span class="cm">! tunnel mode gre ip   (this is the default)</span></pre></div>
<div class="drill"><div class="q">Two things GRE can do that plain IPsec VPN cannot — and the big thing it lacks.</div>
<div class="a">GRE can carry <b>multicast / dynamic routing protocols</b> (OSPF, EIGRP) and <b>non-IP protocols</b> over the tunnel. What it lacks: <b>encryption</b> — so it’s often run inside IPsec (GRE over IPsec).</div></div>

<!-- ============ STATIC ============ -->
<h2 id="static">12 · Static &amp; default routes <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  A static route is you <b>hand-telling the router</b> “to reach network X, send to next-hop Y.” No protocol, no overhead, AD <b>1</b> (more trusted than any dynamic protocol). A <b>default route</b> <code>0.0.0.0 0.0.0.0</code> is the “gateway of last resort” — used for any destination not in the table (typically toward the ISP).
</div>
<div class="codewrap"><div class="cap">Static + default route</div>
<pre><span class="cm">! reach 192.168.5.0/24 via next-hop 10.0.0.2</span>
<span class="pr">ip route</span> 192.168.5.0 255.255.255.0 10.0.0.2
<span class="cm">! ...or via an exit interface</span>
<span class="pr">ip route</span> 192.168.5.0 255.255.255.0 g0/0
<span class="cm">! default route (gateway of last resort)</span>
<span class="pr">ip route</span> 0.0.0.0 0.0.0.0 203.0.113.1
<span class="cm">! floating static = backup (raise AD above the dynamic protocol)</span>
<span class="pr">ip route</span> 192.168.5.0 255.255.255.0 10.0.0.6 200</pre></div>
<div class="drill"><div class="q">What is the AD of a static route, and what is a default route used for?</div>
<div class="a">Static AD = <b>1</b> (beaten only by connected = 0). A default route <code>0.0.0.0/0</code> matches <b>any destination not otherwise in the routing table</b> — the “gateway of last resort,” usually pointing at the ISP/edge.</div></div>
<div class="drill"><div class="q">What is a “floating static route” and how do you create one?</div>
<div class="a">A <b>backup</b> static route that only activates if the primary (dynamic) route disappears. You give it a <b>higher AD</b> than the primary so it “floats” unused until needed — e.g. <code>ip route … 10.0.0.6 200</code> (AD 200 &gt; OSPF 110).</div></div>

<!-- ============ OSPF DEEPER ============ -->
<h2 id="ospfdeep">13 · OSPF deeper: areas, states, network types <span class="pill">extends OSPF</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Two routers don’t jump straight to exchanging routes — they walk through <b>adjacency states</b> as they discover each other and sync databases. Big networks split into <b>areas</b> so the LSDB stays small; routers that sit on the border between areas (or between OSPF and the outside) get special roles.
</div>
<h3>Neighbor states (in order)</h3>
<p><b>Down → Init → 2-Way → ExStart → Exchange → Loading → Full.</b> The two useful checkpoints: <b>2-Way</b> = they see each other (and DR/BDR is elected); <b>Full</b> = databases fully synchronized (the goal).</p>
<div class="figure"><div class="figcap">Adjacency states — the climb to FULL</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">Down</span><span class="flow-arrow">→</span>
  <span class="flow-node">Init</span><span class="flow-arrow">→</span>
  <span class="flow-node">2-Way</span><span class="flow-arrow">→</span>
  <span class="flow-node">ExStart</span><span class="flow-arrow">→</span>
  <span class="flow-node">Exchange</span><span class="flow-arrow">→</span>
  <span class="flow-node">Loading</span><span class="flow-arrow">→</span>
  <span class="flow-node is-plain">FULL ✓</span>
  <span class="flow-loop"><b>2-Way</b> = they see each other &amp; DR/BDR is elected. <b>FULL</b> = databases synced (the healthy end state). Stuck at ExStart ≈ MTU mismatch.</span>
</div></div></div>
<table>
<thead><tr><th>Router role</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Internal router</td><td>All interfaces in one area</td></tr>
<tr><td>Backbone router</td><td>Has an interface in area 0</td></tr>
<tr><td><b>ABR</b> (Area Border Router)</td><td>Connects another area to area 0; summarizes between areas</td></tr>
<tr><td><b>ASBR</b> (Autonomous System Boundary Router)</td><td>Redistributes external routes (e.g. from RIP/BGP) into OSPF</td></tr>
</tbody>
</table>
<table>
<thead><tr><th>Network type</th><th>DR/BDR?</th><th>Hello/Dead</th></tr></thead>
<tbody>
<tr><td>Broadcast (Ethernet)</td><td>Yes</td><td>10 / 40</td></tr>
<tr><td>Point-to-point (serial)</td><td>No</td><td>10 / 40</td></tr>
<tr><td>NBMA (Frame Relay)</td><td>Yes</td><td>30 / 120</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">List the OSPF neighbor states in order. Which one is the healthy end state?</div>
<div class="a">Down → Init → 2-Way → ExStart → Exchange → Loading → <b>Full</b>. <b>Full</b> = synchronized = healthy. (2-Way is normal/expected between two non-DR routers on a broadcast segment.)</div></div>
<div class="drill"><div class="q">ABR vs ASBR — one line each.</div>
<div class="a"><b>ABR</b> sits on the border <b>between OSPF areas</b> (always touches area 0) and summarizes routes between them. <b>ASBR</b> sits on the border between OSPF and <b>another routing domain</b> and redistributes external routes in.</div></div>
<div class="drill"><div class="q">On which network types does OSPF elect a DR/BDR, and why not on point-to-point?</div>
<div class="a">Only on <b>multi-access</b> types (broadcast, NBMA) where many routers share a segment — the DR reduces adjacency/flooding overhead. On <b>point-to-point</b> there are only two routers, so a DR would be pointless.</div></div>

<!-- ============ ACL ============ -->
<h2 id="acl">14 · Access Control Lists (ACLs) <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  An ACL is an <b>ordered list of permit/deny rules</b> the router checks <b>top-down, first match wins</b>, then stops. There is an <b>invisible <code>deny any</code> at the bottom</b> — so an ACL with only permits silently blocks everything else. <b>Standard</b> ACLs match <b>source IP only</b> → place near the <b>destination</b>. <b>Extended</b> match source + dest + protocol + port → place near the <b>source</b> (drop unwanted traffic early).
</div>
<div class="figure"><div class="figcap">Checked top-down — first match wins, then stop</div>
<div class="figbox"><div class="stack">
  <div class="stack-item"><span>1 · permit 192.168.1.0</span><span class="stack-tag">checked first</span></div>
  <div class="stack-item is-top"><span>2 · permit tcp … eq 80</span><span class="stack-tag">← matches → stop</span></div>
  <div class="stack-item"><span>3 · deny …</span><span class="stack-tag">never reached</span></div>
  <div class="stack-item"><span>(invisible) deny any</span><span class="stack-tag">implicit — drops the rest</span></div>
</div>
<div class="lc-branch">The router stops at the <b>first match</b>. An ACL of only <code>permit</code>s still blocks everything else via the hidden <b>deny any</b> at the bottom.</div>
</div></div>
<table>
<thead><tr><th></th><th>Standard</th><th>Extended</th></tr></thead>
<tbody>
<tr><td>Number range</td><td>1–99 (1300–1999)</td><td>100–199 (2000–2699)</td></tr>
<tr><td>Matches</td><td>Source IP only</td><td>Source, dest, protocol, port</td></tr>
<tr><td>Place near</td><td>Destination</td><td>Source</td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">Standard, extended, and applying it</div>
<pre><span class="cm">! standard — by source only</span>
<span class="pr">access-list</span> 10 <span class="pr">permit</span> 192.168.1.0 0.0.0.255
<span class="cm">! extended — allow web from one subnet to anywhere</span>
<span class="pr">access-list</span> 110 <span class="pr">permit tcp</span> 192.168.1.0 0.0.0.255 <span class="pr">any eq</span> 80
<span class="cm">! apply to an interface in a direction</span>
<span class="pr">interface</span> g0/0
 <span class="pr">ip access-group</span> 110 <span class="pr">in</span></pre></div>
<div class="drill"><div class="q">Standard vs extended ACL: number range, what each matches, and where to place each.</div>
<div class="a"><b>Standard</b> (1–99): matches <b>source IP only</b> → place <b>near the destination</b> (placing near source would block too much). <b>Extended</b> (100–199): matches <b>source + destination + protocol + port</b> → place <b>near the source</b> to drop unwanted traffic early.</div></div>
<div class="drill"><div class="q">What is the “implicit deny,” and what trap does it create?</div>
<div class="a">Every ACL ends with an invisible <b><code>deny any</code></b>. Trap: if your ACL only has <code>permit</code> statements, <b>everything not explicitly permitted is dropped</b>. You must permit the traffic you want, including return/needed flows.</div></div>

<!-- ============ NAT ============ -->
<h2 id="nat">15 · NAT / PAT <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  NAT translates <b>private (RFC1918) addresses ↔ public addresses</b> so an inside network can reach the Internet. Three flavours: <b>Static NAT</b> = fixed 1-to-1 map. <b>Dynamic NAT</b> = pool of public IPs handed out as needed. <b>PAT (overload)</b> = many inside hosts share <b>one</b> public IP, distinguished by <b>port number</b> — this is what home routers do.
</div>
<div class="figure"><div class="figcap">PAT — many private hosts share one public IP, split by port</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">192.168.1.10</span>
  <span class="flow-node">192.168.1.11</span>
  <span class="flow-node">192.168.1.12</span>
  <span class="flow-arrow">— NAT (overload) →</span>
  <span class="flow-node is-plain">203.0.113.5 : {port}</span>
  <span class="flow-loop">Three private hosts → <b>one</b> public IP. The router tracks each by <b>source port</b> so replies return to the right host. (Static NAT = fixed 1-to-1; Dynamic = a pool.)</span>
</div></div></div>
<div class="codewrap"><div class="cap">PAT (overload) — the most common</div>
<pre><span class="pr">interface</span> g0/0
 <span class="pr">ip nat inside</span>          <span class="cm">! the private/LAN side</span>
<span class="pr">interface</span> g0/1
 <span class="pr">ip nat outside</span>         <span class="cm">! the public/WAN side</span>
<span class="pr">access-list</span> 1 <span class="pr">permit</span> 192.168.1.0 0.0.0.255
<span class="pr">ip nat inside source list</span> 1 <span class="pr">interface</span> g0/1 <span class="pr">overload</span>
<span class="cm">! verify:</span>
<span class="pr">show ip nat translations</span></pre></div>
<div class="drill"><div class="q">Static NAT vs Dynamic NAT vs PAT — distinguish in one line each.</div>
<div class="a"><ul>
<li><b>Static NAT</b> — fixed one-to-one mapping (e.g. a public server).</li>
<li><b>Dynamic NAT</b> — a pool of public IPs assigned on demand, one-to-one while in use.</li>
<li><b>PAT / overload</b> — many private hosts → <b>one</b> public IP, separated by source port.</li>
</ul></div></div>
<div class="drill"><div class="q">What does the keyword <code>overload</code> do, and which interface is <code>ip nat inside</code> vs <code>outside</code>?</div>
<div class="a"><code>overload</code> enables <b>PAT</b> — port-based sharing of a single public address. <code>ip nat inside</code> = the <b>private/LAN</b> interface; <code>ip nat outside</code> = the <b>public/WAN</b> interface.</div></div>

<!-- ============ DHCP + verify ============ -->
<h2 id="dhcp">16 · DHCP &amp; the verification cheat-sheet</h2>
<div class="concept">
  <span class="label">The mental model</span>
  DHCP auto-assigns IP config to hosts. The handshake is <b>DORA</b>: <b>D</b>iscover (client broadcasts) → <b>O</b>ffer (server proposes) → <b>R</b>equest (client accepts) → <b>A</b>ck (server confirms). Exclude addresses you’ve used statically (router, servers) so they’re not handed out.
</div>
<div class="figure"><div class="figcap">DORA — the 4-step DHCP handshake</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">D — Discover</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">O — Offer</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">R — Request</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">A — Ack</span>
  <span class="flow-loop">Client <b>broadcasts</b> Discover → server <b>Offers</b> an address → client <b>Requests</b> it → server <b>Acks</b> the lease. (Discover/Request come from the client; Offer/Ack from the server.)</span>
</div></div></div>
<div class="codewrap"><div class="cap">Router as DHCP server</div>
<pre><span class="pr">ip dhcp excluded-address</span> 192.168.1.1 192.168.1.10
<span class="pr">ip dhcp pool</span> LAN
 <span class="pr">network</span> 192.168.1.0 255.255.255.0
 <span class="pr">default-router</span> 192.168.1.1
 <span class="pr">dns-server</span> 8.8.8.8</pre></div>
<div class="drill"><div class="q">Spell out the DHCP handshake (DORA) and what each step does.</div>
<div class="a"><b>D</b>iscover — client broadcasts looking for a server · <b>O</b>ffer — server offers an address · <b>R</b>equest — client requests that offered address · <b>A</b>ck — server acknowledges/confirms the lease.</div></div>
<h3>Verification commands — quick reference</h3>
<table>
<thead><tr><th>Goal</th><th>Command</th></tr></thead>
<tbody>
<tr><td>Full routing table</td><td><code>show ip route</code></td></tr>
<tr><td>Routes from one protocol</td><td><code>show ip route ospf</code> / <code>eigrp</code> / <code>rip</code> / <code>bgp</code></td></tr>
<tr><td>Protocol summary (RID, timers, networks)</td><td><code>show ip protocols</code></td></tr>
<tr><td>OSPF neighbours / state</td><td><code>show ip ospf neighbor</code></td></tr>
<tr><td>EIGRP neighbours</td><td><code>show ip eigrp neighbors</code></td></tr>
<tr><td>BGP peers</td><td><code>show ip bgp summary</code></td></tr>
<tr><td>NAT translations</td><td><code>show ip nat translations</code></td></tr>
<tr><td>Interface IPs (quick)</td><td><code>show ip interface brief</code></td></tr>
</tbody>
</table>
<div class="drill"><div class="q">You need to confirm (a) which protocol gave you a route, (b) OSPF adjacency state, (c) that PAT is working. Name a command for each.</div>
<div class="a">(a) <code>show ip route</code> (letter codes O/D/R/B) · (b) <code>show ip ospf neighbor</code> (look for FULL) · (c) <code>show ip nat translations</code>.</div></div>

<!-- ============ EXAM ============ -->
<h2 id="exam">17 · Combined exam-style questions</h2>
<p class="lead">These mix topics like a real paper. Try to fully answer on paper first.</p>

<div class="exam">
<div class="drill"><div class="q">A router learns 192.168.50.0/24 from both OSPF and RIP. (a) Which is installed and why? (b) If only RIP existed and the route is 17 hops away, what happens?</div>
<div class="a">(a) <b>OSPF</b> — AD 110 &lt; RIP 120; AD is compared before metric. (b) 17 &gt; 15, so it exceeds RIP’s max; the route is treated as <b>16 = unreachable</b> and not used.</div></div>

<div class="drill"><div class="q">Write a full single-area OSPF config for a router with RID 2.2.2.2 that runs OSPF on 192.168.141.0/24 and on a /30 link 140.140.130.0. Then give the command to confirm the neighbour is FULL.</div>
<div class="a"><pre style="margin-top:6px"><span class="pr">router ospf</span> 1
 <span class="pr">router-id</span> 2.2.2.2
 <span class="pr">network</span> 192.168.141.0 0.0.0.255 <span class="pr">area</span> 0
 <span class="pr">network</span> 140.140.130.0 0.0.0.3 <span class="pr">area</span> 0</pre>
Confirm: <code>show ip ospf neighbor</code> (look for state FULL).</div></div>

<div class="drill"><div class="q">Three routers, AS 122 / 123 / 124. Write the eBGP config on R1 (AS122, RID 1.1.1.1) peering to 140.140.130.2 (AS123), advertising 192.168.140.0/24.</div>
<div class="a"><pre style="margin-top:6px"><span class="pr">router bgp</span> 122
 <span class="pr">bgp router-id</span> 1.1.1.1
 <span class="pr">neighbor</span> 140.140.130.2 <span class="pr">remote-as</span> 123
 <span class="pr">network</span> 192.168.140.0 <span class="pr">mask</span> 255.255.255.0</pre>
Remember: <code>mask</code> not wildcard; <code>remote-as 123</code> ≠ my AS → this is eBGP (AD 20).</div></div>

<div class="drill"><div class="q">Explain, in order, what happens when you bring up a site-to-site IPsec VPN between 104.15.240.21 (LAN 192.168.1.0/24) and 202.193.25.22 (LAN 192.168.2.0/24).</div>
<div class="a"><ol>
<li><b>Interesting traffic</b> (192.168.1.0 → 192.168.2.0) hits the crypto map and triggers IKE.</li>
<li><b>Phase 1 (ISAKMP):</b> peers agree on policy (aes/sha/pre-share/group 2/lifetime), authenticate via the pre-shared key, and run Diffie-Hellman to build a secure management channel.</li>
<li><b>Phase 2 (IPsec SA):</b> they negotiate the transform set (esp-aes esp-sha-hmac) for the data.</li>
<li>User data is now encrypted end-to-end through the tunnel; the SA re-keys at the lifetime (86400s).</li>
</ol></div></div>

<div class="drill"><div class="q">You need a tunnel that carries OSPF between two sites AND encrypts it. What do you use and why two technologies?</div>
<div class="a"><b>GRE over IPsec.</b> GRE because IPsec alone can’t carry multicast/OSPF; IPsec because GRE alone has no encryption. GRE provides the transport for routing, IPsec provides confidentiality.</div></div>
</div>



<!-- ============ EXTRA (STATE-EXAM PREP) ============ -->
<h2 id="extra">18 · Extra — State exam prep (65 questions) · សំណួរត្រៀមប្រឡងរដ្ឋ</h2>
<p class="lead">Added from the <b>Internetworking II — State Prepare</b> question paper. Each question is shown in <b>Khmer and English</b>; every answer is given in <b>both languages</b>. Cover the screen, answer on paper, then reveal. · បន្ថែមពីសន្លឹកសំណួរ <b>Internetworking II — State Prepare</b>។ សំណួរនីមួយៗមាន <b>ខ្មែរ និងអង់គ្លេស</b>; ចម្លើយផ្ដល់ជា <b>ភាសាទាំងពីរ</b>។</p>
<div class="exam">
<div class="drill"><div class="q"><b>1.</b> ពន្យល់ពីអត្ថប្រយោជន៍របស់ VLANs។ <span class="kh">— Explain the benefits of VLANs.</span></div>
<div class="a"><b>EN —</b> VLAN splits one physical switch into several <b>logical broadcast domains</b>. Benefits:
<ul><li><b>Smaller broadcast domains</b> → less broadcast traffic, better performance.</li>
<li><b>Security / isolation</b> — departments are separated; traffic between VLANs only crosses a Layer-3 device where you can apply ACLs.</li>
<li><b>Logical grouping</b> regardless of physical location.</li>
<li><b>Easier management</b> and <b>cost saving</b> (no extra physical switches).</li></ul><br><br><b>ខ្មែរ —</b> VLAN បំបែក switch ហ្វីស៊ីខលមួយ ឲ្យទៅជា <b>broadcast domain ឡូជីខលច្រើន</b>។ អត្ថប្រយោជន៍៖
<ul><li><b>Broadcast domain តូចជាង</b> → ចរាចរណ៍ broadcast តិច, ដំណើរការលឿនជាង។</li>
<li><b>សុវត្ថិភាព / ការញែកដាច់</b> — ផ្នែកនីមួយៗត្រូវបានញែកដាច់; ចរាចរណ៍ឆ្លងVLAN ត្រូវឆ្លងកាត់ឧបករណ៍ Layer-3 ដែលអាចដាក់ ACL បាន។</li>
<li><b>ការដាក់ជាក្រុមតាមឡូជីខល</b> ដោយមិនគិតពីទីតាំងហ្វីស៊ីខល។</li>
<li><b>គ្រប់គ្រងងាយ</b> និង <b>សន្សំថ្លៃ</b> (មិនបាច់ switch ហ្វីស៊ីខលបន្ថែម)។</li></ul></div></div>
<div class="drill"><div class="q"><b>2.</b> តើត្រូវបែងចែក VLAN ដោយរបៀបណា ដើម្បីការពារ និងសុវត្ថិភាពយ៉ាងដូចម្ដេច? <span class="kh">— How do you segment VLANs for protection and security?</span></div>
<div class="a"><b>EN —</b> Put each group/department in its own VLAN and assign switch ports to it. Because devices in different VLANs <b>cannot talk without a router (Layer 3)</b>, you control traffic between them with <b>ACLs</b> on the inter-VLAN router. Hardening: use a <b>separate management VLAN</b>, change the <b>native VLAN</b>, put <b>unused ports</b> into a dead VLAN and shut them, and limit/disable trunking on access ports (prevent VLAN hopping).<br><br><b>ខ្មែរ —</b> ដាក់ក្រុម/ផ្នែកនីមួយៗ ក្នុង VLAN ផ្ទាល់ខ្លួន ហើយ assign port switch ឲ្យវា។ ដោយសារឧបករណ៍ក្នុង VLAN ផ្សេងគ្នា <b>មិនអាចទាក់ទងគ្នាបើគ្មាន router (Layer 3)</b>, អ្នកអាចគ្រប់គ្រងចរាចរណ៍រវាងពួកវាដោយ <b>ACL</b> លើ router inter-VLAN។ ការពង្រឹង៖ ប្រើ <b>management VLAN ដាច់ដោយឡែក</b>, ប្ដូរ <b>native VLAN</b>, ដាក់ <b>port ដែលមិនប្រើ</b> ទៅ VLAN ស្លាប់ ហើយ shut វា, និងកំណត់/បិទ trunking លើ access port (ការពារ VLAN hopping)។</div></div>
<div class="drill"><div class="q"><b>3.</b> តើមានប្រភេទ password អ្វីខ្លះ ប្រើក្នុងការកំណត់ securing លើ CISCO router? <span class="kh">— What types of passwords are used to secure a Cisco router?</span></div>
<div class="a"><b>EN —</b> <ul><li><b>enable password</b> — privileged mode, stored in plain text.</li>
<li><b>enable secret</b> — privileged mode, <b>encrypted (MD5)</b>, stronger; overrides enable password.</li>
<li><b>console password</b> (<code>line console 0</code>) — local console access.</li>
<li><b>VTY password</b> (<code>line vty 0 4</code>) — remote Telnet/SSH access.</li>
<li><b>auxiliary password</b> (<code>line aux 0</code>) — aux port.</li></ul>
Use <code>service password-encryption</code> to encrypt the plain-text ones.<br><br><b>ខ្មែរ —</b> <ul><li><b>enable password</b> — privileged mode, រក្សាទុកជាអក្សរធម្មតា (plain text)។</li>
<li><b>enable secret</b> — privileged mode, <b>អ៊ិនគ្រីប (MD5)</b>, រឹងមាំជាង; លុបចោល enable password។</li>
<li><b>console password</b> (<code>line console 0</code>) — ចូលតាម console។</li>
<li><b>VTY password</b> (<code>line vty 0 4</code>) — ចូលពីចម្ងាយ Telnet/SSH។</li>
<li><b>auxiliary password</b> (<code>line aux 0</code>) — port aux។</li></ul>
ប្រើ <code>service password-encryption</code> ដើម្បីអ៊ិនគ្រីបពួក plain-text។</div></div>
<div class="drill"><div class="q"><b>4.</b> ចូរពន្យល់ពីភាពខុសគ្នារវាង Physical Topology និង Logical Topology។ <span class="kh">— Explain the difference between Physical Topology and Logical Topology.</span></div>
<div class="a"><b>EN —</b> <b>Physical topology</b> = how devices are physically <b>cabled and arranged</b> (the real layout of hardware and wires). <b>Logical topology</b> = how data <b>actually flows</b> and how devices communicate logically (the path of signals, addressing) — independent of the wiring. Example: physically a <b>star</b> (all to a switch) but logically can behave like a bus.<br><br><b>ខ្មែរ —</b> <b>Physical topology</b> = របៀបដែលឧបករណ៍ត្រូវ <b>ដាក់ខ្សែ និងរៀបចំ</b> ផ្នែករូបវន្ត (ប្លង់ពិតនៃ hardware និងខ្សែ)។ <b>Logical topology</b> = របៀបដែលទិន្នន័យ <b>ហូរពិតប្រាកដ</b> និងរបៀបឧបករណ៍ទាក់ទងគ្នាតាមឡូជីខល (ផ្លូវសញ្ញា, addressing) — ដោយមិនអាស្រ័យលើខ្សែ។ ឧ. ផ្នែករូបវន្តជា <b>star</b> ប៉ុន្តែឡូជីខលអាចដើរដូច bus។</div></div>
<div class="drill"><div class="q"><b>5.</b> តើអ្វីជាភាពខុសគ្នារវាង switch, hub, និង router? <span class="kh">— What is the difference between a switch, a hub, and a router?</span></div>
<div class="a"><b>EN —</b> <ul><li><b>Hub</b> — Layer 1; repeats the signal out <b>all</b> ports; one collision domain; no intelligence.</li>
<li><b>Switch</b> — Layer 2; forwards by <b>MAC address</b>; each port is its own collision domain; learns a MAC table.</li>
<li><b>Router</b> — Layer 3; connects <b>different networks</b>; forwards by <b>IP address</b>; separates broadcast domains.</li></ul><br><br><b>ខ្មែរ —</b> <ul><li><b>Hub</b> — Layer 1; ផ្សាយសញ្ញាចេញ <b>គ្រប់</b> port; collision domain តែមួយ; គ្មានបញ្ញា។</li>
<li><b>Switch</b> — Layer 2; បញ្ជូនតាម <b>MAC address</b>; port នីមួយៗជា collision domain ផ្ទាល់; រៀន MAC table។</li>
<li><b>Router</b> — Layer 3; ភ្ជាប់ <b>បណ្ដាញខុសគ្នា</b>; បញ្ជូនតាម <b>IP address</b>; ញែក broadcast domain។</li></ul></div></div>
<div class="drill"><div class="q"><b>6.</b> និយាយពីអ្វីដែលមាន រឺ លក្ខណៈរបស់ EIGRP protocol។ <span class="kh">— Describe the features of the EIGRP protocol.</span></div>
<div class="a"><b>EN —</b> Cisco <b>advanced distance-vector (hybrid)</b> protocol. Key features:
<ul><li>Uses the <b>DUAL</b> algorithm → very <b>fast convergence</b>.</li>
<li>Keeps a <b>successor</b> (best) and <b>feasible successor</b> (ready backup) route.</li>
<li>Composite <b>metric</b> from bandwidth + delay.</li>
<li>Three tables: <b>neighbor, topology, routing</b>.</li>
<li>Supports <b>VLSM/CIDR</b>, partial/bounded updates, multicast <code>224.0.0.10</code>; <b>AD 90</b> internal.</li></ul><br><br><b>ខ្មែរ —</b> ប្រូតូកូល Cisco <b>distance-vector កម្រិតខ្ពស់ (hybrid)</b>។ លក្ខណៈសំខាន់៖
<ul><li>ប្រើ algorithm <b>DUAL</b> → <b>convergence លឿនខ្លាំង</b>។</li>
<li>រក្សា route <b>successor</b> (ល្អបំផុត) និង <b>feasible successor</b> (backup រួចស្រេច)។</li>
<li><b>Metric</b> រួម ពី bandwidth + delay។</li>
<li>តារាងបី៖ <b>neighbor, topology, routing</b>។</li>
<li>គាំទ្រ <b>VLSM/CIDR</b>, update មួយផ្នែក, multicast <code>224.0.0.10</code>; <b>AD 90</b> internal។</li></ul></div></div>
<div class="drill"><div class="q"><b>7.</b> តើអ្វីជាភាពខុសគ្នារវាង TCP និង UDP? <span class="kh">— What is the difference between TCP and UDP?</span></div>
<div class="a"><b>EN —</b> <ul><li><b>TCP</b> — connection-oriented, <b>reliable</b>; 3-way handshake; ordered delivery, error-checking, retransmission; heavier/slower. Used by HTTP, FTP, email.</li>
<li><b>UDP</b> — connectionless, <b>unreliable</b> (best-effort); no handshake, no ordering; lightweight/fast. Used by DNS, DHCP, VoIP, streaming.</li></ul><br><br><b>ខ្មែរ —</b> <ul><li><b>TCP</b> — connection-oriented, <b>ជឿទុកចិត្តបាន</b>; 3-way handshake; បញ្ជូនតាមលំដាប់, ពិនិត្យ error, បញ្ជូនឡើងវិញ; ធ្ងន់/យឺត។ ប្រើដោយ HTTP, FTP, email។</li>
<li><b>UDP</b> — connectionless, <b>មិនជឿទុកចិត្ត</b> (best-effort); គ្មាន handshake, គ្មានលំដាប់; ស្រាល/លឿន។ ប្រើដោយ DNS, DHCP, VoIP, streaming។</li></ul></div></div>
<div class="drill"><div class="q"><b>8.</b> បើគេមាន route ចំនួនពីរ 192.168.1.0/24 និង 192.168.1.0/28 តើ configure deny 192.168.1.0/28 ហើយបន្ទាប់មក allow 192.168.1.0/24 ក្នុង EIGRP ដោយរបៀបណា? <span class="kh">— With two routes 192.168.1.0/24 and 192.168.1.0/28, how do you configure deny 192.168.1.0/28 then allow 192.168.1.0/24 in EIGRP?</span></div>
<div class="a"><b>EN —</b> Use a <b>prefix-list</b> (or ACL) and apply it with a <b>distribute-list</b> under EIGRP. Order matters — <b>deny the more-specific /28 first</b>, then permit the /24:<pre style="margin-top:6px"><span class="pr">ip prefix-list</span> FILTER seq 5 <span class="pr">deny</span> 192.168.1.0/28
<span class="pr">ip prefix-list</span> FILTER seq 10 <span class="pr">permit</span> 192.168.1.0/24
<span class="pr">router eigrp</span> 1
 <span class="pr">distribute-list</span> prefix FILTER <span class="pr">in</span></pre><br><br><b>ខ្មែរ —</b> ប្រើ <b>prefix-list</b> (ឬ ACL) ហើយ apply វាដោយ <b>distribute-list</b> ក្រោម EIGRP។ លំដាប់សំខាន់ — <b>deny /28 ដែលលម្អិតជាងមុន</b>, រួចទើប permit /24៖<pre style="margin-top:6px"><span class="pr">ip prefix-list</span> FILTER seq 5 <span class="pr">deny</span> 192.168.1.0/28
<span class="pr">ip prefix-list</span> FILTER seq 10 <span class="pr">permit</span> 192.168.1.0/24
<span class="pr">router eigrp</span> 1
 <span class="pr">distribute-list</span> prefix FILTER <span class="pr">in</span></pre></div></div>
<div class="drill"><div class="q"><b>9.</b> តើ EIGRP មានtable អ្វីខ្លះ? <span class="kh">— What tables does EIGRP have?</span></div>
<div class="a"><b>EN —</b> Three: <b>Neighbor table</b> (directly connected EIGRP peers), <b>Topology table</b> (all learned routes incl. successors & feasible successors), and the <b>Routing table</b> (the best routes installed for forwarding).<br><br><b>ខ្មែរ —</b> បី៖ <b>Neighbor table</b> (EIGRP peer ភ្ជាប់ផ្ទាល់), <b>Topology table</b> (route ដែលរៀនបានទាំងអស់ រួមទាំង successor & feasible successor), និង <b>Routing table</b> (route ល្អបំផុតដែលដាក់សម្រាប់បញ្ជូន)។</div></div>
<div class="drill"><div class="q"><b>10.</b> តើអ្វីទៅ EIGRP internal route និង EIGRP external route? <span class="kh">— What is an EIGRP internal route vs an EIGRP external route?</span></div>
<div class="a"><b>EN —</b> <b>Internal</b> = a route learned <b>within the same EIGRP AS</b> → AD <b>90</b>. <b>External</b> = a route <b>redistributed into EIGRP</b> from another source/protocol → AD <b>170</b>, shown with the <b>EX</b> flag in the routing table.<br><br><b>ខ្មែរ —</b> <b>Internal</b> = route ដែលរៀនបាន <b>ក្នុង EIGRP AS តែមួយ</b> → AD <b>90</b>។ <b>External</b> = route ដែល <b>redistribute ចូល EIGRP</b> ពីប្រភព/ប្រូតូកូលផ្សេង → AD <b>170</b>, បង្ហាញដោយ flag <b>EX</b> ក្នុង routing table។</div></div>
<div class="drill"><div class="q"><b>11.</b> តើរបៀបធ្វើ redistribute លើ IPv6 default route ក្នុង EIGRP? <span class="kh">— How do you redistribute an IPv6 default route in EIGRP?</span></div>
<div class="a"><b>EN —</b> Create a static IPv6 default route, then redistribute static into the EIGRP IPv6 process:<pre style="margin-top:6px"><span class="pr">ipv6 route</span> ::/0 <span class="cm">&lt;next-hop&gt;</span>
<span class="pr">ipv6 router eigrp</span> 1
 <span class="pr">redistribute static</span></pre><br><br><b>ខ្មែរ —</b> បង្កើត static IPv6 default route ជាមុន, រួច redistribute static ចូល process EIGRP IPv6៖<pre style="margin-top:6px"><span class="pr">ipv6 route</span> ::/0 <span class="cm">&lt;next-hop&gt;</span>
<span class="pr">ipv6 router eigrp</span> 1
 <span class="pr">redistribute static</span></pre></div></div>
<div class="drill"><div class="q"><b>12.</b> ការ ផុក (clear) tables routing ក្នុង OSPF? និងសរសេរ command។ <span class="kh">— How do you flush/clear the OSPF routing tables? Write the command.</span></div>
<div class="a"><b>EN —</b> Restart the OSPF process to rebuild the LSDB and routes: <code>clear ip ospf process</code> (confirm with <b>yes</b>). To clear all routes: <code>clear ip route *</code>. To view OSPF routes: <code>show ip route ospf</code>.<br><br><b>ខ្មែរ —</b> ចាប់ផ្ដើម process OSPF ឡើងវិញ ដើម្បីសង់ LSDB និង route ឡើងវិញ៖ <code>clear ip ospf process</code> (បញ្ជាក់ <b>yes</b>)។ ដើម្បីសម្អាត route ទាំងអស់៖ <code>clear ip route *</code>។ ដើម្បីមើល route OSPF៖ <code>show ip route ospf</code>។</div></div>
<div class="drill"><div class="q"><b>13.</b> តើអ្វីទៅជាជំហានដែលត្រូវការ ដើម្បីបង្កើត Neighborship ទៅជា adjacency? <span class="kh">— What are the steps to build a neighborship into adjacency (OSPF)?</span></div>
<div class="a"><b>EN —</b> Seven states in order: <b>Down → Init → 2-Way → Exstart → Exchange → Loading → Full</b>. Neighbors are formed at <b>2-Way</b>; a full <b>adjacency</b> (synchronized LSDB) is reached at <b>Full</b>.<br><br><b>ខ្មែរ —</b> រដ្ឋ (state) ប្រាំពីរតាមលំដាប់៖ <b>Down → Init → 2-Way → Exstart → Exchange → Loading → Full</b>។ Neighbor កើតនៅ <b>2-Way</b>; <b>adjacency</b> ពេញលេញ (LSDB ស៊ីង) សម្រេចនៅ <b>Full</b>។</div></div>
<div class="drill"><div class="q"><b>14.</b> ពន្យល់កម្មវិធីកំណត់ពេល OSPF (OSPF timers)។ <span class="kh">— Explain the OSPF timers.</span></div>
<div class="a"><b>EN —</b> <b>Hello interval</b> — how often hellos are sent to keep the neighbor alive (default <b>10s</b> on broadcast/point-to-point, 30s on NBMA). <b>Dead interval</b> — how long to wait without a hello before declaring the neighbor down (default <b>40s</b> = 4× hello, 120s on NBMA). These must <b>match</b> between neighbors.<br><br><b>ខ្មែរ —</b> <b>Hello interval</b> — ប្រេកង់ផ្ញើ hello ដើម្បីរក្សា neighbor រស់ (default <b>10s</b> លើ broadcast/point-to-point, 30s លើ NBMA)។ <b>Dead interval</b> — រយៈពេលរង់ចាំគ្មាន hello មុនពេលប្រកាស neighbor ស្លាប់ (default <b>40s</b> = 4× hello, 120s លើ NBMA)។ ទាំងនេះត្រូវ <b>ដូចគ្នា</b> រវាង neighbor។</div></div>
<div class="drill"><div class="q"><b>15.</b> ចូរ configure default និង static route ឲ្យ IPv6 (PC0 ↔ PC1)។ <span class="kh">— Configure a default and static route for IPv6 (PC0 ↔ PC1).</span></div>
<div class="a"><b>EN —</b> Enable IPv6 routing, then add a static route to the remote LAN and/or a default route:<pre style="margin-top:6px"><span class="pr">ipv6 unicast-routing</span>
<span class="cm">! static route to the far LAN</span>
<span class="pr">ipv6 route</span> 2001:DB8:2::/64 <span class="cm">&lt;next-hop&gt;</span>
<span class="cm">! OR a default route (everything else)</span>
<span class="pr">ipv6 route</span> ::/0 <span class="cm">&lt;next-hop&gt;</span></pre><br><br><b>ខ្មែរ —</b> បើក IPv6 routing, រួចបន្ថែម static route ទៅ LAN ឆ្ងាយ និង/ឬ default route៖<pre style="margin-top:6px"><span class="pr">ipv6 unicast-routing</span>
<span class="cm">! static route ទៅ LAN ឆ្ងាយ</span>
<span class="pr">ipv6 route</span> 2001:DB8:2::/64 <span class="cm">&lt;next-hop&gt;</span>
<span class="cm">! ឬ default route (អ្វីៗផ្សេងទៀត)</span>
<span class="pr">ipv6 route</span> ::/0 <span class="cm">&lt;next-hop&gt;</span></pre></div></div>
<div class="drill"><div class="q"><b>16.</b> ចូរសរសេរទម្រង់ពេញលេញ (full form) នៃ IPv6 និងបំបែកជា (Global routing, Subnet ID, Interface ID)។ <span class="kh">— Write the full (expanded) form of these IPv6 addresses and split into Global routing prefix, Subnet ID, Interface ID.</span></div>
<div class="a"><b>EN —</b> Restore leading zeros and expand <code>::</code> to all-zero hextets:
<ul><li><code>2001:BD8:0AA1:BBA::A1</code> → <code>2001:0BD8:0AA1:0BBA:0000:0000:0000:00A1</code></li>
<li><code>2001:BD7:0B11:BA:06::10A:AA</code> → <code>2001:0BD7:0B11:00BA:0006:0000:010A:00AA</code></li>
<li><code>2001:BBAB:768:EA:1F4::</code> → <code>2001:BBAB:0768:00EA:01F4:0000:0000:0000</code></li></ul>
With a <b>/48</b> split: <b>Global routing prefix</b> = first 3 hextets (48 bits), <b>Subnet ID</b> = 4th hextet (next 16 bits), <b>Interface ID</b> = last 4 hextets (64 bits).<br><br><b>ខ្មែរ —</b> ស្ដារ zero ខាងមុខ និងពង្រីក <code>::</code> ទៅ hextet សូន្យទាំងអស់៖
<ul><li><code>2001:BD8:0AA1:BBA::A1</code> → <code>2001:0BD8:0AA1:0BBA:0000:0000:0000:00A1</code></li>
<li><code>2001:BD7:0B11:BA:06::10A:AA</code> → <code>2001:0BD7:0B11:00BA:0006:0000:010A:00AA</code></li>
<li><code>2001:BBAB:768:EA:1F4::</code> → <code>2001:BBAB:0768:00EA:01F4:0000:0000:0000</code></li></ul>
បំបែកតាម <b>/48</b>៖ <b>Global routing prefix</b> = hextet ៣ ដំបូង (48 bits), <b>Subnet ID</b> = hextet ទី៤ (16 bits បន្ទាប់), <b>Interface ID</b> = hextet ៤ ចុងក្រោយ (64 bits)។</div></div>
<div class="drill"><div class="q"><b>17.</b> ចូរបំពេញ៖ (A) configure DHCP លើ Router1/2/3 សម្រាប់ NET 200/201/202; (B) configure Static និង EIGRP route លើ Router1/2/3 ដើម្បីឲ្យ computer ទាំងអស់ ping ដល់គ្នា។ <span class="kh">— Fill in: (A) configure DHCP on Router1/2/3 for NET 200/201/202; (B) configure Static and EIGRP routes on Router1/2/3 so all computers reach each other.</span></div>
<div class="a"><b>EN —</b> <b>(A) DHCP</b> per router (substitute each subnet, e.g. NET200 = 192.168.200.0/24):<pre style="margin-top:6px"><span class="pr">ip dhcp excluded-address</span> 192.168.200.1 192.168.200.10
<span class="pr">ip dhcp pool</span> NET200
 <span class="pr">network</span> 192.168.200.0 255.255.255.0
 <span class="pr">default-router</span> 192.168.200.1</pre><b>(B) Static</b> — one line per remote network; <b>EIGRP</b> — advertise every connected network:<pre style="margin-top:6px"><span class="cm">! Static example (Router1 → a remote NET)</span>
<span class="pr">ip route</span> 192.168.201.0 255.255.255.0 <span class="cm">&lt;next-hop&gt;</span>
<span class="cm">! EIGRP example</span>
<span class="pr">router eigrp</span> 1
 <span class="pr">network</span> 192.168.200.0
 <span class="pr">no auto-summary</span></pre><br><br><b>ខ្មែរ —</b> <b>(A) DHCP</b> ក្នុង router នីមួយៗ (ជំនួស subnet, ឧ. NET200 = 192.168.200.0/24)៖<pre style="margin-top:6px"><span class="pr">ip dhcp excluded-address</span> 192.168.200.1 192.168.200.10
<span class="pr">ip dhcp pool</span> NET200
 <span class="pr">network</span> 192.168.200.0 255.255.255.0
 <span class="pr">default-router</span> 192.168.200.1</pre><b>(B) Static</b> — មួយបន្ទាត់ក្នុងមួយ network ឆ្ងាយ; <b>EIGRP</b> — ផ្សាយគ្រប់ network ភ្ជាប់៖<pre style="margin-top:6px"><span class="cm">! ឧ. Static (Router1 → NET ឆ្ងាយ)</span>
<span class="pr">ip route</span> 192.168.201.0 255.255.255.0 <span class="cm">&lt;next-hop&gt;</span>
<span class="cm">! ឧ. EIGRP</span>
<span class="pr">router eigrp</span> 1
 <span class="pr">network</span> 192.168.200.0
 <span class="pr">no auto-summary</span></pre></div></div>
<div class="drill"><div class="q"><b>18.</b> តើ multicast address ប្រើក្នុង OSPF មានអ្វីខ្លះ? <span class="kh">— Which multicast addresses does OSPF use?</span></div>
<div class="a"><b>EN —</b> <b>224.0.0.5</b> = AllSPFRouters (every OSPF router). <b>224.0.0.6</b> = AllDRouters (the DR and BDR).<br><br><b>ខ្មែរ —</b> <b>224.0.0.5</b> = AllSPFRouters (គ្រប់ router OSPF)។ <b>224.0.0.6</b> = AllDRouters (DR និង BDR)។</div></div>
<div class="drill"><div class="q"><b>19.</b> តើអ្វីទៅ Static Route? និងឧទាហរណ៍ command line។ <span class="kh">— What is a Static Route? Give a command-line example.</span></div>
<div class="a"><b>EN —</b> A route <b>configured manually</b> by the administrator (no protocol). Good for small/stable networks; AD <b>1</b>.<pre style="margin-top:6px"><span class="pr">ip route</span> 192.168.2.0 255.255.255.0 10.0.0.2</pre><br><br><b>ខ្មែរ —</b> Route ដែល <b>កំណត់ដោយដៃ</b> ដោយ admin (គ្មានប្រូតូកូល)។ ល្អសម្រាប់បណ្ដាញតូច/ស្ថិរ; AD <b>1</b>។<pre style="margin-top:6px"><span class="pr">ip route</span> 192.168.2.0 255.255.255.0 10.0.0.2</pre></div></div>
<div class="drill"><div class="q"><b>20.</b> តើអ្វីទៅ Default Route? និងឧទាហរណ៍ command line។ <span class="kh">— What is a Default Route? Give a command-line example.</span></div>
<div class="a"><b>EN —</b> A catch-all route (<code>0.0.0.0/0</code>) for <b>any destination not in the routing table</b> — “when in doubt, send here.”<pre style="margin-top:6px"><span class="pr">ip route</span> 0.0.0.0 0.0.0.0 10.0.0.1</pre><br><br><b>ខ្មែរ —</b> Route catch-all (<code>0.0.0.0/0</code>) សម្រាប់ <b>គោលដៅណាដែលគ្មានក្នុង routing table</b> — “បើមិនដឹង ផ្ញើមកនេះ”។<pre style="margin-top:6px"><span class="pr">ip route</span> 0.0.0.0 0.0.0.0 10.0.0.1</pre></div></div>
<div class="drill"><div class="q"><b>21.</b> តើអ្វីទៅ Routing Information Protocol (RIP)? និងឧទាហរណ៍ command line។ <span class="kh">— What is RIP? Give a command-line example.</span></div>
<div class="a"><b>EN —</b> The oldest distance-vector IGP. Metric = <b>hop count</b> (max <b>15</b>; 16 = unreachable). Updates every <b>30s</b>; AD <b>120</b>. Use <b>version 2</b> (classless, supports VLSM).<pre style="margin-top:6px"><span class="pr">router rip</span>
 <span class="pr">version</span> 2
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> 192.168.1.0</pre><br><br><b>ខ្មែរ —</b> IGP distance-vector ចាស់បំផុត។ Metric = <b>hop count</b> (អតិបរមា <b>15</b>; 16 = មិនអាចទៅដល់)។ Update រៀងរាល់ <b>30s</b>; AD <b>120</b>។ ប្រើ <b>version 2</b> (classless, គាំទ្រ VLSM)។<pre style="margin-top:6px"><span class="pr">router rip</span>
 <span class="pr">version</span> 2
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> 192.168.1.0</pre></div></div>
<div class="drill"><div class="q"><b>22.</b> ចូរពន្យល់ពី User EXEC mode។ <span class="kh">— Explain User EXEC mode.</span></div>
<div class="a"><b>EN —</b> The first, <b>limited</b> mode after login. You can run only basic monitoring commands (ping, show some). Prompt: <code>Router&gt;</code>. Cannot change configuration.<br><br><b>ខ្មែរ —</b> Mode ដំបូង <b>មានកំណត់</b> បន្ទាប់ពី login។ អ្នកអាចដំណើរការតែ command ត្រួតពិនិត្យមូលដ្ឋាន (ping, show ខ្លះ)។ Prompt៖ <code>Router&gt;</code>។ មិនអាចប្ដូរ config។</div></div>
<div class="drill"><div class="q"><b>23.</b> ចូរពន្យល់ពី Privileged EXEC mode។ <span class="kh">— Explain Privileged EXEC mode.</span></div>
<div class="a"><b>EN —</b> Full <b>view/monitor</b> access — all <code>show</code>, <code>debug</code>, copy, reload. Entered with <code>enable</code>. Prompt: <code>Router#</code>. Gateway to configuration mode.<br><br><b>ខ្មែរ —</b> ការចូល <b>មើល/ត្រួតពិនិត្យ</b> ពេញលេញ — គ្រប់ <code>show</code>, <code>debug</code>, copy, reload។ ចូលដោយ <code>enable</code>។ Prompt៖ <code>Router#</code>។ ជាច្រកចូល config mode។</div></div>
<div class="drill"><div class="q"><b>24.</b> ចូរពន្យល់ពី Global configuration mode។ <span class="kh">— Explain Global configuration mode.</span></div>
<div class="a"><b>EN —</b> Where you make <b>device-wide configuration changes</b> (hostname, routing, interfaces...). Entered with <code>configure terminal</code> from privileged mode. Prompt: <code>Router(config)#</code>.<br><br><b>ខ្មែរ —</b> កន្លែងដែលអ្នកធ្វើ <b>ការប្ដូរ config ទូទាំងឧបករណ៍</b> (hostname, routing, interface...)។ ចូលដោយ <code>configure terminal</code> ពី privileged mode។ Prompt៖ <code>Router(config)#</code>។</div></div>
<div class="drill"><div class="q"><b>25.</b> តើអ្វីទៅ IPv6? លក្ខណៈទូទៅរបស់វា។ <span class="kh">— What is IPv6? Its general characteristics.</span></div>
<div class="a"><b>EN —</b> The next-generation IP, <b>128-bit</b> addresses written as 8 groups of hex. Characteristics: huge address space; <b>no broadcast</b> (uses multicast/anycast); simplified header; built-in IPsec; <b>auto-configuration (SLAAC)</b>; no NAT needed.<br><br><b>ខ្មែរ —</b> IP ជំនាន់ក្រោយ, address <b>128-bit</b> សរសេរជា ៨ ក្រុមនៃ hex។ លក្ខណៈ៖ លំហ address ធំសម្បើម; <b>គ្មាន broadcast</b> (ប្រើ multicast/anycast); header សាមញ្ញ; មាន IPsec ស្រាប់; <b>auto-config (SLAAC)</b>; មិនបាច់ NAT។</div></div>
<div class="drill"><div class="q"><b>26.</b> តើជាអ្វី OSPF Router ID? <span class="kh">— What is an OSPF Router ID?</span></div>
<div class="a"><b>EN —</b> A 32-bit number (in IP format) that <b>uniquely identifies a router</b> in OSPF. Selection order: (1) manual <code>router-id</code>; else (2) highest <b>loopback</b> IP; else (3) highest active <b>interface</b> IP.<br><br><b>ខ្មែរ —</b> លេខ 32-bit (ទម្រង់ IP) ដែល <b>កំណត់អត្តសញ្ញាណ router ឲ្យឯកត្តា</b> ក្នុង OSPF។ លំដាប់ជ្រើស៖ (1) <code>router-id</code> ដោយដៃ; បើគ្មាន (2) IP <b>loopback</b> ខ្ពស់បំផុត; បើគ្មាន (3) IP <b>interface</b> active ខ្ពស់បំផុត។</div></div>
<div class="drill"><div class="q"><b>27.</b> តើអ្វីទៅ RIP routing protocol? និងឧទាហរណ៍ command line។ <span class="kh">— What is the RIP routing protocol? Give a command-line example.</span></div>
<div class="a"><b>EN —</b> Distance-vector IGP using <b>hop count</b> (max 15), AD 120, periodic 30s updates. Configure with <code>router rip</code> / <code>version 2</code> / <code>network</code>. (See Q21 for the full example.)<br><br><b>ខ្មែរ —</b> IGP distance-vector ប្រើ <b>hop count</b> (អតិបរមា 15), AD 120, update រៀងរាល់ 30s។ Config ដោយ <code>router rip</code> / <code>version 2</code> / <code>network</code>។ (មើល សំណួរ 21 សម្រាប់ឧទាហរណ៍ពេញ។)</div></div>
<div class="drill"><div class="q"><b>28.</b> តើអ្វីទៅ OSPF Routing protocol? <span class="kh">— What is the OSPF routing protocol?</span></div>
<div class="a"><b>EN —</b> An open-standard <b>link-state</b> IGP. Each router floods LSAs, builds an identical LSDB, then runs the <b>Dijkstra/SPF</b> algorithm to find shortest paths. Metric = <b>cost</b> (based on bandwidth); AD <b>110</b>; uses areas; classless (VLSM); fast convergence.<br><br><b>ខ្មែរ —</b> IGP <b>link-state</b> ស្តង់ដារបើកចំហ។ Router នីមួយៗ flood LSA, សង់ LSDB ដូចគ្នា, រួចដំណើរការ algorithm <b>Dijkstra/SPF</b> ដើម្បីរកផ្លូវខ្លីបំផុត។ Metric = <b>cost</b> (តាម bandwidth); AD <b>110</b>; ប្រើ area; classless (VLSM); convergence លឿន។</div></div>
<div class="drill"><div class="q"><b>29.</b> ចូរនិយាយពីលក្ខណៈមួយចំនួនរបស់ OSPF។ <span class="kh">— Describe some characteristics of OSPF.</span></div>
<div class="a"><b>EN —</b> Link-state; open standard; <b>hierarchical (areas)</b> with Area 0 backbone; cost metric; triggered/incremental updates; supports <b>VLSM/CIDR</b>; uses <b>DR/BDR</b> on multi-access links; classless; converges fast.<br><br><b>ខ្មែរ —</b> Link-state; ស្តង់ដារបើកចំហ; <b>ឋានានុក្រម (area)</b> ដោយ Area 0 backbone; metric cost; update ពេលមានការផ្លាស់ប្ដូរ; គាំទ្រ <b>VLSM/CIDR</b>; ប្រើ <b>DR/BDR</b> លើ link multi-access; classless; convergence លឿន។</div></div>
<div class="drill"><div class="q"><b>30.</b> តើអ្វីទៅជាត្រូវការសម្រាប់ការបែងចែកប្រព័ន្ធស្វយ័ត (AS) ទៅជាតំបន់ (area) ផ្សេងៗ? <span class="kh">— Why divide an autonomous system into separate OSPF areas?</span></div>
<div class="a"><b>EN —</b> To <b>scale</b>: smaller LSDB per router, less SPF computation and CPU/memory, and LSA flooding/instability is <b>contained inside an area</b> — a flap in one area doesn't force every router in the AS to recalculate.<br><br><b>ខ្មែរ —</b> ដើម្បី <b>scale</b>៖ LSDB តូចជាងក្នុង router នីមួយៗ, គណនា SPF និង CPU/memory តិច, ហើយ flooding LSA/ភាពមិនស្ថិរ <b>ត្រូវបានរារាំងក្នុង area</b> — បញ្ហាក្នុង area មួយ មិនបង្ខំ router ទាំងអស់ក្នុង AS ឲ្យគណនាឡើងវិញ។</div></div>
<div class="drill"><div class="q"><b>31.</b> តើអ្វីទៅជាអត្ថប្រយោជន៍នៃការបែងចែកបណ្ដាញ ទៅជាតំបន់ (network into areas)? <span class="kh">— What are the benefits of dividing a network into areas?</span></div>
<div class="a"><b>EN —</b> Smaller routing tables, lower CPU/memory use, faster convergence, <b>localized topology changes</b>, and the ability to <b>summarize routes</b> at area borders (ABRs) to reduce advertisements.<br><br><b>ខ្មែរ —</b> Routing table តូចជាង, ប្រើ CPU/memory តិច, convergence លឿន, <b>ការផ្លាស់ប្ដូរ topology នៅក្នុងតំបន់</b>, និងសមត្ថភាព <b>summarize route</b> នៅព្រំដែន area (ABR) ដើម្បីបន្ថយការផ្សាយ។</div></div>
<div class="drill"><div class="q"><b>32.</b> តើជាអ្វី Backbone Area? <span class="kh">— What is the Backbone Area?</span></div>
<div class="a"><b>EN —</b> <b>Area 0</b> — the central transit area that <b>all other OSPF areas must connect to</b>. Inter-area traffic always passes through the backbone.<br><br><b>ខ្មែរ —</b> <b>Area 0</b> — តំបន់ transit កណ្ដាល ដែល <b>គ្រប់ area OSPF ផ្សេងទៀតត្រូវភ្ជាប់ទៅ</b>។ ចរាចរណ៍ inter-area តែងតែឆ្លងកាត់ backbone។</div></div>
<div class="drill"><div class="q"><b>33.</b> តើ Parameters អ្វីខ្លះ ដែលត្រូវ match សម្រាប់ឲ្យ router ពីរ ក្លាយជា neighbors (OSPF)? <span class="kh">— Which parameters must match for two OSPF routers to become neighbors?</span></div>
<div class="a"><b>EN —</b> Same <b>Area ID</b>; same <b>subnet/mask</b> (on the link); matching <b>Hello & Dead intervals</b>; same <b>authentication</b>; matching <b>area type/stub flags</b>; and same <b>MTU</b>.<br><br><b>ខ្មែរ —</b> ដូចគ្នា៖ <b>Area ID</b>; <b>subnet/mask</b> (លើ link); <b>Hello & Dead interval</b>; <b>authentication</b>; <b>area type/stub flag</b>; និង <b>MTU</b>។</div></div>
<div class="drill"><div class="q"><b>34.</b> ពន្យល់ពី OSPF states។ <span class="kh">— Explain the OSPF states.</span></div>
<div class="a"><b>EN —</b> <b>Down</b> (no hellos) → <b>Init</b> (hello received) → <b>2-Way</b> (bidirectional, DR/BDR elected) → <b>Exstart</b> (master/slave) → <b>Exchange</b> (DBD swap) → <b>Loading</b> (LSR/LSU) → <b>Full</b> (LSDB synchronized).<br><br><b>ខ្មែរ —</b> <b>Down</b> (គ្មាន hello) → <b>Init</b> (ទទួល hello) → <b>2-Way</b> (ទ្វេទិស, ជ្រើស DR/BDR) → <b>Exstart</b> (master/slave) → <b>Exchange</b> (ផ្លាស់ DBD) → <b>Loading</b> (LSR/LSU) → <b>Full</b> (LSDB ស៊ីង)។</div></div>
<div class="drill"><div class="q"><b>35.</b> ពន្យល់ OSPF LSA, LSU និង LSR។ <span class="kh">— Explain OSPF LSA, LSU and LSR.</span></div>
<div class="a"><b>EN —</b> <b>LSA (Link-State Advertisement)</b> = the actual piece of link/route information. <b>LSU (Link-State Update)</b> = the packet that <b>carries one or more LSAs</b>. <b>LSR (Link-State Request)</b> = a packet asking a neighbor for <b>missing LSAs</b>. (LSAck acknowledges receipt.)<br><br><b>ខ្មែរ —</b> <b>LSA (Link-State Advertisement)</b> = បំណែកព័ត៌មាន link/route ពិតប្រាកដ។ <b>LSU (Link-State Update)</b> = packet ដែល <b>ផ្ទុក LSA មួយ ឬច្រើន</b>។ <b>LSR (Link-State Request)</b> = packet សុំ LSA ដែល <b>បាត់</b> ពី neighbor។ (LSAck បញ្ជាក់ការទទួល។)</div></div>
<div class="drill"><div class="q"><b>36.</b> តើអ្វីទៅជាជំហានដែលត្រូវការ ដើម្បីបង្កើត Neighborship ទៅជា adjacency? (ដដែលនឹង Q13) <span class="kh">— What steps build a neighborship into adjacency? (same as Q13)</span></div>
<div class="a"><b>EN —</b> Down → Init → 2-Way → Exstart → Exchange → Loading → <b>Full</b>. Neighbor at 2-Way, full adjacency (synced LSDB) at Full.<br><br><b>ខ្មែរ —</b> Down → Init → 2-Way → Exstart → Exchange → Loading → <b>Full</b>។ Neighbor នៅ 2-Way, adjacency ពេញ (LSDB ស៊ីង) នៅ Full។</div></div>
<div class="drill"><div class="q"><b>37.</b> តើជាអ្វី default Hello Interval? <span class="kh">— What is the default Hello interval?</span></div>
<div class="a"><b>EN —</b> <b>10 seconds</b> on broadcast and point-to-point links (30 seconds on NBMA/point-to-multipoint).<br><br><b>ខ្មែរ —</b> <b>10 វិនាទី</b> លើ link broadcast និង point-to-point (30 វិនាទី លើ NBMA/point-to-multipoint)។</div></div>
<div class="drill"><div class="q"><b>38.</b> តើជាអ្វី default Dead Interval? <span class="kh">— What is the default Dead interval?</span></div>
<div class="a"><b>EN —</b> <b>40 seconds</b> (4× the hello interval) on broadcast/point-to-point; 120 seconds on NBMA.<br><br><b>ខ្មែរ —</b> <b>40 វិនាទី</b> (4× hello interval) លើ broadcast/point-to-point; 120 វិនាទី លើ NBMA។</div></div>
<div class="drill"><div class="q"><b>39.</b> តើ OSPF LSA មានប្រភេទអ្វីខ្លះ? <span class="kh">— What are the OSPF LSA types?</span></div>
<div class="a"><b>EN —</b> <b>Type 1</b> Router LSA · <b>Type 2</b> Network LSA · <b>Type 3</b> Summary (inter-area) · <b>Type 4</b> ASBR Summary · <b>Type 5</b> External · <b>Type 7</b> NSSA External.<br><br><b>ខ្មែរ —</b> <b>Type 1</b> Router LSA · <b>Type 2</b> Network LSA · <b>Type 3</b> Summary (inter-area) · <b>Type 4</b> ASBR Summary · <b>Type 5</b> External · <b>Type 7</b> NSSA External។</div></div>
<div class="drill"><div class="q"><b>40.</b> ចូរធ្វើការ configure OSPF Routing Protocol។ <span class="kh">— Configure the OSPF routing protocol.</span></div>
<div class="a"><b>EN —</b> <pre style="margin-top:6px"><span class="pr">router ospf</span> 1
 <span class="pr">router-id</span> 1.1.1.1
 <span class="pr">network</span> 192.168.1.0 0.0.0.255 <span class="pr">area</span> 0
 <span class="pr">network</span> 10.0.0.0 0.0.0.3 <span class="pr">area</span> 0</pre>Verify with <code>show ip ospf neighbor</code> (look for FULL).<br><br><b>ខ្មែរ —</b> <pre style="margin-top:6px"><span class="pr">router ospf</span> 1
 <span class="pr">router-id</span> 1.1.1.1
 <span class="pr">network</span> 192.168.1.0 0.0.0.255 <span class="pr">area</span> 0
 <span class="pr">network</span> 10.0.0.0 0.0.0.3 <span class="pr">area</span> 0</pre>ផ្ទៀងផ្ទាត់ដោយ <code>show ip ospf neighbor</code> (រកមើល FULL)។</div></div>
<div class="drill"><div class="q"><b>41.</b> តើ EIGRP ត្រូវការ command “ip default-network” ដើម្បីដំណើរការ default route ឬទេ? <span class="kh">— Does EIGRP require the “ip default-network” command to propagate a default route?</span></div>
<div class="a"><b>EN —</b> <b>No — it is not required.</b> <code>ip default-network</code> is one way, but EIGRP can also propagate a default by <b>redistributing a static</b> <code>0.0.0.0/0</code> route. So a default route can be advertised without it.<br><br><b>ខ្មែរ —</b> <b>ទេ — មិនត្រូវការ។</b> <code>ip default-network</code> ជាវិធីមួយ, ប៉ុន្តែ EIGRP ក៏អាចផ្សាយ default ដោយ <b>redistribute static</b> <code>0.0.0.0/0</code> ផងដែរ។ ដូច្នេះ default route អាចត្រូវផ្សាយដោយគ្មានវា។</div></div>
<div class="drill"><div class="q"><b>42.</b> តើខ្ញុំគួរប្រើ eigrp log-neighbor-changes ពេលដែលខ្ញុំតម្លើង EIGRP ឬទេ? <span class="kh">— Should I use 'eigrp log-neighbor-changes' when setting up EIGRP?</span></div>
<div class="a"><b>EN —</b> <b>Yes.</b> It logs when neighbors go up/down — very useful for troubleshooting adjacency problems. It is enabled by default in modern IOS.<br><br><b>ខ្មែរ —</b> <b>គួរ។</b> វា log ពេល neighbor ឡើង/ធ្លាក់ — មានប្រយោជន៍ខ្លាំងសម្រាប់ដោះស្រាយបញ្ហា adjacency។ វាបើកដោយស្វ័យប្រវត្តិក្នុង IOS ថ្មី។</div></div>
<div class="drill"><div class="q"><b>43.</b> តើ EIGRP support secondary addresses ឬទេ? <span class="kh">— Does EIGRP support secondary addresses?</span></div>
<div class="a"><b>EN —</b> <b>Yes</b> — EIGRP supports secondary IP addresses on an interface.<br><br><b>ខ្មែរ —</b> <b>គាំទ្រ</b> — EIGRP គាំទ្រ secondary IP address លើ interface។</div></div>
<div class="drill"><div class="q"><b>44.</b> តើ EIGRP មានសមត្ថភាព debugging អ្វីខ្លះ? <span class="kh">— What debugging capabilities does EIGRP have?</span></div>
<div class="a"><b>EN —</b> Commands such as <code>debug eigrp packets</code>, <code>debug eigrp neighbors</code>, <code>debug ip eigrp</code>, and <code>debug ip eigrp notifications</code> — to watch hellos, neighbor changes, and route updates.<br><br><b>ខ្មែរ —</b> Command ដូចជា <code>debug eigrp packets</code>, <code>debug eigrp neighbors</code>, <code>debug ip eigrp</code>, និង <code>debug ip eigrp notifications</code> — ដើម្បីមើល hello, ការផ្លាស់ប្ដូរ neighbor, និង update route។</div></div>
<div class="drill"><div class="q"><b>45.</b> តើ EIGRP support aggregation និង variable-length subnet masks (VLSM) ឬទេ? <span class="kh">— Does EIGRP support aggregation and VLSM?</span></div>
<div class="a"><b>EN —</b> <b>Yes</b> — EIGRP is classless: it supports <b>manual route summarization (aggregation)</b> and <b>VLSM/CIDR</b>.<br><br><b>ខ្មែរ —</b> <b>គាំទ្រ</b> — EIGRP ជា classless៖ វាគាំទ្រ <b>route summarization ដោយដៃ (aggregation)</b> និង <b>VLSM/CIDR</b>។</div></div>
<div class="drill"><div class="q"><b>46.</b> តើខ្ញុំអាច configure ច្រើនជាងមួយ ប្រព័ន្ធស្វយ័ត EIGRP លើ router តែមួយ បានទេ? <span class="kh">— Can I configure more than one EIGRP autonomous system on a single router?</span></div>
<div class="a"><b>EN —</b> <b>Yes</b> — you can run multiple EIGRP AS numbers on one router. They are separate processes and don't share routes unless you redistribute between them.<br><br><b>ខ្មែរ —</b> <b>បាន</b> — អ្នកអាចដំណើរការ EIGRP AS ច្រើនលើ router តែមួយ។ ពួកវាជា process ដាច់ដោយឡែក ហើយមិនចែករំលែក route លុះត្រាតែអ្នក redistribute រវាងពួកវា។</div></div>
<div class="drill"><div class="q"><b>47.</b> តើអ្វីជាភាពខុសសំខាន់ៗ រវាង IPv4 និង IPv6? <span class="kh">— What are the key differences between IPv4 and IPv6?</span></div>
<div class="a"><b>EN —</b> <ul><li>Address size: <b>32-bit</b> vs <b>128-bit</b>.</li>
<li>Notation: dotted-decimal vs hex with colons.</li>
<li><b>Broadcast</b> vs <b>no broadcast</b> (multicast/anycast).</li>
<li>NAT commonly needed vs huge space (no NAT needed).</li>
<li>Address resolution: <b>ARP</b> vs <b>NDP</b>; IPsec optional vs built-in.</li></ul><br><br><b>ខ្មែរ —</b> <ul><li>ទំហំ address៖ <b>32-bit</b> ទល់នឹង <b>128-bit</b>។</li>
<li>ការសរសេរ៖ dotted-decimal ទល់នឹង hex ដោយ colon។</li>
<li><b>Broadcast</b> ទល់នឹង <b>គ្មាន broadcast</b> (multicast/anycast)។</li>
<li>ត្រូវការ NAT ញឹកញាប់ ទល់នឹង លំហធំ (មិនបាច់ NAT)។</li>
<li>Address resolution៖ <b>ARP</b> ទល់នឹង <b>NDP</b>; IPsec ស្រេចចិត្ត ទល់នឹង មានស្រាប់។</li></ul></div></div>
<div class="drill"><div class="q"><b>48.</b> ពន្យល់ពីគោលបំណងនៃ subnetting ក្នុងបណ្ដាញ។ <span class="kh">— Explain the purpose of subnetting in a network.</span></div>
<div class="a"><b>EN —</b> To divide one large network into smaller <b>subnets</b>. This <b>reduces broadcast domains</b>, improves performance and security, uses IP address space efficiently, and makes the network easier to manage.<br><br><b>ខ្មែរ —</b> ដើម្បីបែងចែកបណ្ដាញធំមួយ ទៅជា <b>subnet</b> តូចៗ។ វា <b>បន្ថយ broadcast domain</b>, បង្កើនដំណើរការ និងសុវត្ថិភាព, ប្រើលំហ IP ប្រកបដោយប្រសិទ្ធភាព, និងធ្វើឲ្យបណ្ដាញគ្រប់គ្រងងាយ។</div></div>
<div class="drill"><div class="q"><b>49.</b> តើ ARP (Address Resolution Protocol) ដំណើរការយ៉ាងដូចម្ដេច ក្នុងបរិយាកាសអន្តរបណ្ដាញ? <span class="kh">— How does ARP work in an internetwork environment?</span></div>
<div class="a"><b>EN —</b> ARP maps an <b>IP address → MAC address</b> on a LAN. The host <b>broadcasts</b> “Who has IP X?”; the owner replies (unicast) with its MAC, which is cached in the ARP table. For a <b>remote</b> destination, ARP resolves the <b>default gateway's MAC</b>, and the router repeats the process on the next segment.<br><br><b>ខ្មែរ —</b> ARP map <b>IP address → MAC address</b> លើ LAN។ Host <b>broadcast</b> “នរណាមាន IP X?”; ម្ចាស់ឆ្លើយ (unicast) ដោយ MAC របស់វា, ដែលរក្សាក្នុង ARP table។ សម្រាប់គោលដៅ <b>ឆ្ងាយ</b>, ARP រក <b>MAC របស់ default gateway</b>, ហើយ router ធ្វើដំណើរការនេះឡើងវិញលើ segment បន្ទាប់។</div></div>
<div class="drill"><div class="q"><b>50.</b> ពន្យល់ពីរបៀបដែលពិធីការ OSPF (Shortest Path First) ដំណើរការ។ <span class="kh">— Explain how the OSPF (Shortest Path First) protocol works.</span></div>
<div class="a"><b>EN —</b> Each router floods <b>LSAs</b> describing its links; every router builds an identical <b>LSDB</b>. Each router then runs the <b>Dijkstra/SPF</b> algorithm to compute a shortest-path tree (lowest total <b>cost</b>) to every destination and installs the best routes into the routing table.<br><br><b>ខ្មែរ —</b> Router នីមួយៗ flood <b>LSA</b> ដែលពណ៌នា link របស់វា; គ្រប់ router សង់ <b>LSDB</b> ដូចគ្នា។ បន្ទាប់មក router នីមួយៗដំណើរការ algorithm <b>Dijkstra/SPF</b> ដើម្បីគណនា tree ផ្លូវខ្លីបំផុត (<b>cost</b> សរុបទាបបំផុត) ទៅគ្រប់គោលដៅ ហើយដាក់ route ល្អបំផុតចូល routing table។</div></div>
<div class="drill"><div class="q"><b>51.</b> តើ BGP (Border Gateway Protocol) គឺជាអ្វី ហើយ ហេតុអ្វីបានជាវាសំខាន់ក្នុងអ៊ីនធឺណិត? <span class="kh">— What is BGP and why is it important on the Internet?</span></div>
<div class="a"><b>EN —</b> BGP is the <b>path-vector EGP</b> that exchanges routing <b>between autonomous systems (AS)</b>. It is “the protocol that runs the Internet,” connecting ISPs/organizations. It chooses paths using <b>attributes and policy</b> (AS-path, etc.); AD <b>20</b> (eBGP) / <b>200</b> (iBGP).<br><br><b>ខ្មែរ —</b> BGP ជា <b>EGP path-vector</b> ដែលផ្លាស់ប្ដូរ routing <b>រវាង autonomous system (AS)</b>។ វាជា “ប្រូតូកូលដែលដំណើរការអ៊ីនធឺណិត,” ភ្ជាប់ ISP/ស្ថាប័ន។ វាជ្រើសផ្លូវដោយ <b>attribute និង policy</b> (AS-path ។ល។); AD <b>20</b> (eBGP) / <b>200</b> (iBGP)។</div></div>
<div class="drill"><div class="q"><b>52.</b> ចូរពិពណ៌នាអំពី Verification Commands ក្នុង BGP routing protocol។ <span class="kh">— Describe the verification commands in BGP.</span></div>
<div class="a"><b>EN —</b> <code>show ip bgp</code> (BGP table) · <code>show ip bgp summary</code> (neighbors & state) · <code>show ip bgp neighbors</code> (session details) · <code>show ip route bgp</code> (installed BGP routes).<br><br><b>ខ្មែរ —</b> <code>show ip bgp</code> (តារាង BGP) · <code>show ip bgp summary</code> (neighbor & state) · <code>show ip bgp neighbors</code> (ព័ត៌មាន session) · <code>show ip route bgp</code> (route BGP ដែលដាក់)។</div></div>
<div class="drill"><div class="q"><b>53.</b> តើ NAT ជួយក្នុងការសន្សំ IP Address យ៉ាងដូចម្ដេច? <span class="kh">— How does NAT help conserve IP addresses?</span></div>
<div class="a"><b>EN —</b> NAT translates many <b>private</b> addresses to one (or a few) <b>public</b> addresses. With <b>PAT/overload</b>, a whole LAN shares a single public IP (distinguished by port), so an organization needs only a few public IPv4 addresses — conserving the scarce IPv4 space.<br><br><b>ខ្មែរ —</b> NAT បកប្រែ address <b>private</b> ច្រើន ទៅ address <b>public</b> មួយ (ឬពីរបី)។ ដោយ <b>PAT/overload</b>, LAN ទាំងមូលចែករំលែក public IP តែមួយ (ញែកដោយ port), ដូច្នេះស្ថាប័នត្រូវការ public IPv4 តែពីរបី — សន្សំលំហ IPv4 ដ៏កម្រ។</div></div>
<div class="drill"><div class="q"><b>54.</b> ពិពណ៌នាអំពីដំណើរការរបស់ DHCP (Dynamic Host Configuration Protocol)។ <span class="kh">— Describe how DHCP works.</span></div>
<div class="a"><b>EN —</b> DHCP auto-assigns IP settings via <b>DORA</b>: <b>Discover</b> (client broadcasts) → <b>Offer</b> (server offers an IP) → <b>Request</b> (client requests it) → <b>Acknowledge</b> (server confirms the lease). It hands out IP, mask, default gateway, and DNS automatically.<br><br><b>ខ្មែរ —</b> DHCP assign IP setting ដោយស្វ័យប្រវត្តិតាម <b>DORA</b>៖ <b>Discover</b> (client broadcast) → <b>Offer</b> (server ផ្ដល់ IP) → <b>Request</b> (client សុំ) → <b>Acknowledge</b> (server បញ្ជាក់ lease)។ វាចែក IP, mask, default gateway, និង DNS ស្វ័យប្រវត្តិ។</div></div>
<div class="drill"><div class="q"><b>55.</b> ប្រៀបធៀប TCP និង UDP ក្នុងលក្ខខណ្ឌនៃភាពជឿជាក់បាន និងករណីប្រើប្រាស់។ <span class="kh">— Compare TCP and UDP in terms of reliability and use cases.</span></div>
<div class="a"><b>EN —</b> <b>TCP</b> is reliable (acks, retransmission, ordering) — used where accuracy matters: web, email, file transfer. <b>UDP</b> is fast and lightweight but unreliable — used where speed matters and some loss is OK: VoIP, video streaming, DNS, online gaming.<br><br><b>ខ្មែរ —</b> <b>TCP</b> ជឿជាក់បាន (ack, បញ្ជូនឡើងវិញ, លំដាប់) — ប្រើកន្លែងដែលត្រូវការភាពត្រឹមត្រូវ៖ web, email, ផ្ទេរ file។ <b>UDP</b> លឿន និងស្រាល ប៉ុន្តែមិនជឿជាក់ — ប្រើកន្លែងដែលត្រូវការល្បឿន ហើយបាត់បន្តិចមិនអី៖ VoIP, video streaming, DNS, ហ្គេមអនឡាញ។</div></div>
<div class="drill"><div class="q"><b>56.</b> តើអ្វីទៅ configuration neighbor statement ក្នុង EIGRP? <span class="kh">— What is the neighbor statement configuration in EIGRP?</span></div>
<div class="a"><b>EN —</b> The <code>neighbor</code> command forms an EIGRP peering by <b>unicast</b> to a specific address instead of multicast — used on NBMA / Frame Relay where multicast isn't available.<pre style="margin-top:6px"><span class="pr">router eigrp</span> 1
 <span class="pr">neighbor</span> 10.0.0.2 <span class="cm">&lt;interface&gt;</span></pre><br><br><b>ខ្មែរ —</b> Command <code>neighbor</code> បង្កើត peering EIGRP ដោយ <b>unicast</b> ទៅ address ជាក់លាក់ ជំនួស multicast — ប្រើលើ NBMA / Frame Relay ដែលគ្មាន multicast។<pre style="margin-top:6px"><span class="pr">router eigrp</span> 1
 <span class="pr">neighbor</span> 10.0.0.2 <span class="cm">&lt;interface&gt;</span></pre></div></div>
<div class="drill"><div class="q"><b>57.</b> តើ serno (serial number) មានន័យអ្វី នៅឯចុងនៃ EIGRP topology ពេលសរសេរ command 'show ip eigrp topology'? <span class="kh">— What does 'serno' mean at the end of the EIGRP topology, in 'show ip eigrp topology'?</span></div>
<div class="a"><b>EN —</b> <b>serno = serial number</b> — an internal sequence number EIGRP assigns to each topology-table entry to <b>track/order updates</b> efficiently (so it knows which entries changed and need sending). It's housekeeping, not something you configure.<br><br><b>ខ្មែរ —</b> <b>serno = serial number</b> — លេខលំដាប់ផ្ទៃក្នុង ដែល EIGRP ផ្ដល់ឲ្យ entry topology-table នីមួយៗ ដើម្បី <b>តាមដាន/រៀបលំដាប់ update</b> ប្រកបដោយប្រសិទ្ធភាព (ដឹងថា entry ណាប្ដូរ ត្រូវផ្ញើ)។ វាជារឿងផ្ទៃក្នុង មិនមែនអ្វីដែលអ្នក config ទេ។</div></div>
<div class="drill"><div class="q"><b>58.</b> តើអ្វីទៅ VPN IPSEC Tunnel? <span class="kh">— What is a VPN IPSEC Tunnel?</span></div>
<div class="a"><b>EN —</b> A <b>secure, encrypted tunnel</b> between two sites over a public network. IPsec provides <b>confidentiality, integrity, and authentication</b>, negotiated by IKE (Phase 1 ISAKMP + Phase 2 IPsec SA) and carried by ESP/AH.<br><br><b>ខ្មែរ —</b> <b>ផ្លូវរូងសុវត្ថិភាព អ៊ិនគ្រីប</b> រវាង site ពីរ លើបណ្ដាញសាធារណៈ។ IPsec ផ្ដល់ <b>ការសម្ងាត់, សុចរិតភាព, និងការផ្ទៀងផ្ទាត់</b>, ចរចាដោយ IKE (Phase 1 ISAKMP + Phase 2 IPsec SA) ហើយផ្ទុកដោយ ESP/AH។</div></div>
<div class="drill"><div class="q"><b>59.</b> ចូរបំពេញ config VPN IPSEC (crypto isakmp ...) លើ router PP1 និង TK1។ <span class="kh">— Complete the VPN IPSEC config (crypto isakmp ...) on routers PP1 and TK1.</span></div>
<div class="a"><b>EN —</b> After the <code>crypto isakmp policy</code>, add the pre-shared <b>key</b>, the <b>transform-set</b>, the <b>crypto map</b>, and apply it to the interface (mirror it on the peer):<pre style="margin-top:6px"><span class="pr">crypto isakmp key</span> CISCO123 <span class="pr">address</span> <span class="cm">&lt;peer-ip&gt;</span>
<span class="pr">crypto ipsec transform-set</span> TS <span class="pr">esp-aes</span> 256 <span class="pr">esp-sha-hmac</span>
<span class="pr">crypto map</span> MYMAP 10 <span class="pr">ipsec-isakmp</span>
 <span class="pr">set peer</span> <span class="cm">&lt;peer-ip&gt;</span>
 <span class="pr">set transform-set</span> TS
 <span class="pr">match address</span> 100
<span class="cm">! then on the WAN interface:</span>
<span class="pr">interface</span> <span class="cm">&lt;wan&gt;</span>
 <span class="pr">crypto map</span> MYMAP</pre><br><br><b>ខ្មែរ —</b> បន្ទាប់ពី <code>crypto isakmp policy</code>, បន្ថែម <b>key</b> pre-shared, <b>transform-set</b>, <b>crypto map</b>, ហើយ apply ទៅ interface (ធ្វើដូចគ្នាម្ខាងទៀតលើ peer)៖<pre style="margin-top:6px"><span class="pr">crypto isakmp key</span> CISCO123 <span class="pr">address</span> <span class="cm">&lt;peer-ip&gt;</span>
<span class="pr">crypto ipsec transform-set</span> TS <span class="pr">esp-aes</span> 256 <span class="pr">esp-sha-hmac</span>
<span class="pr">crypto map</span> MYMAP 10 <span class="pr">ipsec-isakmp</span>
 <span class="pr">set peer</span> <span class="cm">&lt;peer-ip&gt;</span>
 <span class="pr">set transform-set</span> TS
 <span class="pr">match address</span> 100
<span class="cm">! រួចលើ interface WAN៖</span>
<span class="pr">interface</span> <span class="cm">&lt;wan&gt;</span>
 <span class="pr">crypto map</span> MYMAP</pre></div></div>
<div class="drill"><div class="q"><b>60.</b> តើធ្វើដូចម្ដេច ដើម្បីឲ្យ IPSec VPN ទិសទៅច្រើនបាន (scale) លើ Cisco? <span class="kh">— How do you make an IPSec VPN scale to many sites on Cisco?</span></div>
<div class="a"><b>EN —</b> Use <b>DMVPN (Dynamic Multipoint VPN)</b>: a single <b>mGRE</b> tunnel + <b>NHRP</b> + IPsec, so spokes build dynamic on-demand tunnels to each other through a hub — instead of configuring many static point-to-point tunnels.<br><br><b>ខ្មែរ —</b> ប្រើ <b>DMVPN (Dynamic Multipoint VPN)</b>៖ tunnel <b>mGRE</b> តែមួយ + <b>NHRP</b> + IPsec, ដូច្នេះ spoke សង់ tunnel ថាមវន្តតាមតម្រូវការទៅគ្នាឆ្លងកាត់ hub — ជំនួសការ config tunnel point-to-point ស្ថិតច្រើន។</div></div>
<div class="drill"><div class="q"><b>61.</b> ចូរពិពណ៌នាអំពីប្រភេទនៃ VPN Tunnels លើ Cisco Routers។ <span class="kh">— Describe the types of VPN tunnels on Cisco routers.</span></div>
<div class="a"><b>EN —</b> <b>Site-to-site IPsec</b>, <b>GRE</b> (plain tunnel, carries multicast/routing), <b>GRE over IPsec</b> (GRE + encryption), <b>DMVPN</b> (scalable hub-and-spoke), and <b>Remote-access VPN</b> (SSL or IPsec/Easy VPN for individual users).<br><br><b>ខ្មែរ —</b> <b>Site-to-site IPsec</b>, <b>GRE</b> (tunnel ធម្មតា, ផ្ទុក multicast/routing), <b>GRE over IPsec</b> (GRE + encryption), <b>DMVPN</b> (hub-and-spoke អាច scale), និង <b>Remote-access VPN</b> (SSL ឬ IPsec/Easy VPN សម្រាប់អ្នកប្រើម្នាក់ៗ)។</div></div>
<div class="drill"><div class="q"><b>62.</b> តើប្រភេទនៃ Address ក្នុង NAT — Inside Local, Inside Global, Outside Global, Outside Local — មានន័យអ្វី? <span class="kh">— What are the NAT address types: Inside Local, Inside Global, Outside Global, Outside Local?</span></div>
<div class="a"><b>EN —</b> <ul><li><b>Inside Local</b> — the private address of an inside host (as seen inside).</li>
<li><b>Inside Global</b> — the public address that the inside host is translated to (as seen outside).</li>
<li><b>Outside Global</b> — the real public address of an outside host.</li>
<li><b>Outside Local</b> — how that outside host appears to the inside network.</li></ul><br><br><b>ខ្មែរ —</b> <ul><li><b>Inside Local</b> — address private របស់ host ខាងក្នុង (មើលឃើញពីខាងក្នុង)។</li>
<li><b>Inside Global</b> — address public ដែល host ខាងក្នុងត្រូវបកប្រែទៅ (មើលឃើញពីខាងក្រៅ)។</li>
<li><b>Outside Global</b> — address public ពិតរបស់ host ខាងក្រៅ។</li>
<li><b>Outside Local</b> — របៀបដែល host ខាងក្រៅនោះបង្ហាញ ទៅបណ្ដាញខាងក្នុង។</li></ul></div></div>
<div class="drill"><div class="q"><b>63.</b> ចូរសរសេរ command configure routing លើ Router1/2/3 (NET 1–4) ឲ្យ computer ping ដល់គ្នាទាំងអស់ ដោយ៖ Static, Default, EIGRP (PID 12), OSPF (PID 123), BGP (AS 122/123/124), RIP v2។ <span class="kh">— Write the routing configs on Router1/2/3 (NET 1–4) for all 6 methods: Static, Default, EIGRP (PID 12), OSPF (PID 123), BGP (AS 122/123/124), RIP v2.</span></div>
<div class="a"><b>EN —</b> One template per method (apply the right networks per router):<pre style="margin-top:6px"><span class="cm">! 1. Static</span>
<span class="pr">ip route</span> 192.168.2.0 255.255.255.0 <span class="cm">&lt;next-hop&gt;</span>
<span class="cm">! 2. Default</span>
<span class="pr">ip route</span> 0.0.0.0 0.0.0.0 <span class="cm">&lt;next-hop&gt;</span>
<span class="cm">! 3. EIGRP</span>
<span class="pr">router eigrp</span> 12
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> 192.168.1.0
<span class="cm">! 4. OSPF</span>
<span class="pr">router ospf</span> 123
 <span class="pr">network</span> 192.168.1.0 0.0.0.255 <span class="pr">area</span> 0
<span class="cm">! 5. BGP (this router in AS 122)</span>
<span class="pr">router bgp</span> 122
 <span class="pr">neighbor</span> <span class="cm">&lt;peer&gt;</span> <span class="pr">remote-as</span> 123
 <span class="pr">network</span> 192.168.1.0 <span class="pr">mask</span> 255.255.255.0
<span class="cm">! 6. RIP v2</span>
<span class="pr">router rip</span>
 <span class="pr">version</span> 2
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> 192.168.1.0</pre><br><br><b>ខ្មែរ —</b> Template មួយក្នុងមួយវិធី (ដាក់ network ត្រឹមត្រូវតាម router)៖<pre style="margin-top:6px"><span class="cm">! 1. Static</span>
<span class="pr">ip route</span> 192.168.2.0 255.255.255.0 <span class="cm">&lt;next-hop&gt;</span>
<span class="cm">! 2. Default</span>
<span class="pr">ip route</span> 0.0.0.0 0.0.0.0 <span class="cm">&lt;next-hop&gt;</span>
<span class="cm">! 3. EIGRP</span>
<span class="pr">router eigrp</span> 12
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> 192.168.1.0
<span class="cm">! 4. OSPF</span>
<span class="pr">router ospf</span> 123
 <span class="pr">network</span> 192.168.1.0 0.0.0.255 <span class="pr">area</span> 0
<span class="cm">! 5. BGP (router នេះក្នុង AS 122)</span>
<span class="pr">router bgp</span> 122
 <span class="pr">neighbor</span> <span class="cm">&lt;peer&gt;</span> <span class="pr">remote-as</span> 123
 <span class="pr">network</span> 192.168.1.0 <span class="pr">mask</span> 255.255.255.0
<span class="cm">! 6. RIP v2</span>
<span class="pr">router rip</span>
 <span class="pr">version</span> 2
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> 192.168.1.0</pre></div></div>
<div class="drill"><div class="q"><b>64.</b> ចូរ configure DHCP, sub-interface, VLAN, assign VLAN តាម interface លើ Switch4/5/6 (router-on-a-stick, F0/1 ដល់ F0/24)។ <span class="kh">— Configure DHCP, sub-interfaces, VLANs, and assign VLANs to interfaces on Switch4/5/6 (router-on-a-stick, F0/1–F0/24).</span></div>
<div class="a"><b>EN —</b> On the <b>switch</b>: create VLANs and assign access ports. On the <b>router</b>: one <b>sub-interface per VLAN</b> with <code>encapsulation dot1Q</code> as the gateway (router-on-a-stick), plus a DHCP pool per VLAN.<pre style="margin-top:6px"><span class="cm">! Switch</span>
<span class="pr">vlan</span> 10
<span class="pr">interface range</span> f0/1 - 24
 <span class="pr">switchport mode access</span>
 <span class="pr">switchport access vlan</span> 10
<span class="cm">! Router sub-interface (gateway for VLAN 10)</span>
<span class="pr">interface</span> g0/0.10
 <span class="pr">encapsulation dot1Q</span> 10
 <span class="pr">ip address</span> 192.168.10.1 255.255.255.0
<span class="cm">! DHCP for VLAN 10</span>
<span class="pr">ip dhcp pool</span> VLAN10
 <span class="pr">network</span> 192.168.10.0 255.255.255.0
 <span class="pr">default-router</span> 192.168.10.1</pre><br><br><b>ខ្មែរ —</b> លើ <b>switch</b>៖ បង្កើត VLAN និង assign access port។ លើ <b>router</b>៖ <b>sub-interface មួយក្នុងមួយ VLAN</b> ដោយ <code>encapsulation dot1Q</code> ជា gateway (router-on-a-stick), បូក DHCP pool មួយក្នុងមួយ VLAN។<pre style="margin-top:6px"><span class="cm">! Switch</span>
<span class="pr">vlan</span> 10
<span class="pr">interface range</span> f0/1 - 24
 <span class="pr">switchport mode access</span>
 <span class="pr">switchport access vlan</span> 10
<span class="cm">! Router sub-interface (gateway VLAN 10)</span>
<span class="pr">interface</span> g0/0.10
 <span class="pr">encapsulation dot1Q</span> 10
 <span class="pr">ip address</span> 192.168.10.1 255.255.255.0
<span class="cm">! DHCP សម្រាប់ VLAN 10</span>
<span class="pr">ip dhcp pool</span> VLAN10
 <span class="pr">network</span> 192.168.10.0 255.255.255.0
 <span class="pr">default-router</span> 192.168.10.1</pre></div></div>
<div class="drill"><div class="q"><b>65.</b> ចូរ configure routing លើ R11/R12/R13/R14 (Net 50/Net/Net40/Net20) ឲ្យ computer ping ដល់គ្នាទាំងអស់ តាម៖ (A) Static, (B) EIGRP PID 12, (C) OSPF PID 67, (D) RIP v2។ <span class="kh">— Configure routing on R11/R12/R13/R14 (Net 50/Net/Net40/Net20) so all computers reach each other via: (A) Static, (B) EIGRP PID 12, (C) OSPF PID 67, (D) RIP v2.</span></div>
<div class="a"><b>EN —</b> Same four methods, applied to each router's connected networks:<pre style="margin-top:6px"><span class="cm">! (A) Static — one line per remote net</span>
<span class="pr">ip route</span> 192.168.40.0 255.255.255.0 <span class="cm">&lt;next-hop&gt;</span>
<span class="cm">! (B) EIGRP</span>
<span class="pr">router eigrp</span> 12
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> <span class="cm">&lt;connected nets&gt;</span>
<span class="cm">! (C) OSPF</span>
<span class="pr">router ospf</span> 67
 <span class="pr">network</span> <span class="cm">&lt;net&gt;</span> <span class="cm">&lt;wildcard&gt;</span> <span class="pr">area</span> 0
<span class="cm">! (D) RIP v2</span>
<span class="pr">router rip</span>
 <span class="pr">version</span> 2
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> <span class="cm">&lt;connected nets&gt;</span></pre><br><br><b>ខ្មែរ —</b> វិធីបួនដូចគ្នា, ដាក់ទៅ network ភ្ជាប់របស់ router នីមួយៗ៖<pre style="margin-top:6px"><span class="cm">! (A) Static — មួយបន្ទាត់ក្នុងមួយ net ឆ្ងាយ</span>
<span class="pr">ip route</span> 192.168.40.0 255.255.255.0 <span class="cm">&lt;next-hop&gt;</span>
<span class="cm">! (B) EIGRP</span>
<span class="pr">router eigrp</span> 12
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> <span class="cm">&lt;net ភ្ជាប់&gt;</span>
<span class="cm">! (C) OSPF</span>
<span class="pr">router ospf</span> 67
 <span class="pr">network</span> <span class="cm">&lt;net&gt;</span> <span class="cm">&lt;wildcard&gt;</span> <span class="pr">area</span> 0
<span class="cm">! (D) RIP v2</span>
<span class="pr">router rip</span>
 <span class="pr">version</span> 2
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> <span class="cm">&lt;net ភ្ជាប់&gt;</span></pre></div></div>
</div>

<p class="footnote">Built from your graded Internetworking answer sheet (OSPF/RIP/dynamic routing/Router-ID/IPsec + EIGRP/OSPF/BGP config section). GRE added from standard IOS / your labs. Print or “Save as PDF” reveals every answer automatically.</p>
`;
export default html;
