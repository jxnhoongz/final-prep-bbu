const html = `

<p class="lead">របៀបប្រើ៖ អានប្រអប់គំនិតសិន រួច <b>បិទចម្លើយ ហើយសូត្របញ្ជី (lists) ឲ្យចេញពីការចងចាំ</b>។ មុខវិជ្ជានេះភាគច្រើនជា <b>បញ្ជី (lists) + និយមន័យ (definitions) + ពាក្យបញ្ជា Kali</b> — ជារបស់ដែលងាយបាត់ពេលប្រឡងបើអ្នកមិនបានទាញវាចេញពីការចងចាំ (retrieve) ដោយខ្លួនឯងពីរបីដងមុនទេ។ លំហាត់ (Drills) ត្រូវបានសរសេរឲ្យសំណួរបង្ខំអ្នកឲ្យ <i>បង្កើត</i> បញ្ជីចេញ មិនមែនគ្រាន់តែស្គាល់វាទេ។</p>


<!-- CIA -->
<h2 id="cia">1 · The CIA triad (បីសសរគ្រឹះ CIA)</h2>
<div class="concept">
  <span class="label">គំរូគំនិត (mental model)</span>
  រាល់ security control សុទ្ធតែមានដើម្បីការពារលក្ខណៈមួយក្នុងចំណោមបីយ៉ាង។ ពេលគេសួរថា “ហេតុអ្វីបានជា X សំខាន់” ចូរផ្គូផ្គងវាទៅនឹងអក្សរណាមួយ។ <b>C</b>onfidentiality = មានតែអ្នកមានសិទ្ធិទេទើបអាចអានបាន។ <b>I</b>ntegrity = ទិន្នន័យមិនត្រូវបានកែប្រែដោយគ្មានការរកឃើញ។ <b>A</b>vailability = វាមាននៅពេលត្រូវការ។ ការវាយប្រហារ និង controls គឺគ្រាន់តែជារបស់ដែលបំផ្លាញ ឬការពារមួយក្នុងចំណោមទាំងបីនេះ។
</div>
<div class="figure"><div class="figcap">△ CIA — រាល់ control ការពារ​មួយ​ក្នុង​ចំណោម​បី</div>
<div class="figbox"><div class="triad">
  <div class="triad-col"><div class="triad-letter">C</div><div class="triad-name">Confidentiality</div><div class="triad-sub">មាន​តែ​អ្នក​មាន​សិទ្ធិ​អាន · បំផ្លាញ​ដោយ sniffing/លួច</div></div>
  <div class="triad-col"><div class="triad-letter">I</div><div class="triad-name">Integrity</div><div class="triad-sub">ទិន្នន័យ​មិន​កែ · បំផ្លាញ​ដោយ tampering/MITM</div></div>
  <div class="triad-col"><div class="triad-letter">A</div><div class="triad-name">Availability</div><div class="triad-sub">មាន​ពេល​ត្រូវការ · បំផ្លាញ​ដោយ DoS/ខូច</div></div>
</div></div></div>
<table>
<thead><tr><th>លក្ខណៈ</th><th>គោលដៅ</th><th>Controls ធម្មតា</th><th>បំផ្លាញដោយ</th></tr></thead>
<tbody>
<tr><td><b>Confidentiality</b></td><td>រក្សាការសម្ងាត់ឲ្យសម្ងាត់</td><td>Encryption, access control, MFA</td><td>Sniffing, លួច, ការលេចធ្លាយ</td></tr>
<tr><td><b>Integrity</b></td><td>ទិន្នន័យមិនកែប្រែ &amp; អាចទុកចិត្តបាន</td><td>Hashing, checksums, digital signatures</td><td>ការកែប្រែ (Tampering), MITM</td></tr>
<tr><td><b>Availability</b></td><td>អាចចូលប្រើបានពេលត្រូវការ</td><td>Redundancy, backups, DDoS protection</td><td>DoS/DDoS, hardware ខូច</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">ប្រាប់លក្ខណៈ CIA ទាំង 3 និង control មួយដែលការពារនីមួយៗ។</div>
<div class="a"><ul><li><b>Confidentiality</b> → encryption / access control</li><li><b>Integrity</b> → hashing / digital signatures</li><li><b>Availability</b> → backups / redundancy / DDoS protection</li></ul></div></div>
<div class="drill"><div class="q">ការវាយប្រហារ DDoS និងកុំព្យូទ័រ laptop ដែលគ្មាន encryption ត្រូវបានគេលួច — នីមួយៗបំផ្លាញលក្ខណៈ CIA មួយណា?</div>
<div class="a">DDoS → <b>Availability</b>។ Laptop គ្មាន encryption ត្រូវគេលួច → <b>Confidentiality</b>។</div></div>

<!-- GROUPS -->
<h2 id="groups">2 · ក្រុម controls ទាំង 4 <span class="kh">(by WHO/WHAT implements it)</span></h2>
<div class="concept">
  <span class="label">គំរូគំនិត — កុំច្រឡំជាមួយ types ទាំង 6</span>
  មានសំណួរពីរផ្សេងគ្នាដែលគេសួរអំពីរាល់ control។ <b>Group = អ្នកណា/អ្វីដែលអនុវត្តវា (WHO/WHAT)</b> (ម៉ាស៊ីន? អ្នកគ្រប់គ្រង? ទម្លាប់ប្រចាំថ្ងៃរបស់មនុស្ស? ជញ្ជាំង?)។ <b>Type = ការងារអ្វីដែលវាធ្វើ (WHAT JOB)</b> (បញ្ឈប់ / បន្ថយចំណង់ / រកឃើញ / ជួសជុល…)។ Control មួយមាន group មួយ និង type មួយ — ឧ. firewall គឺ <i>Technical</i> (group) + <i>Preventive</i> (type)។ ត្រូវបំបែកអ័ក្ស (axes) ទាំងពីរនេះក្នុងគំនិតរបស់អ្នកឲ្យដាច់។ <span class="mnemonic">Groups៖ “Tech Managers Operate Physically” → Technical, Managerial, Operational, Physical។</span>
</div>
<div class="figure"><div class="figcap">រាល់ control មាន​ស្លាក​ពីរ — កុំ​លាយ​អ័ក្ស</div>
<div class="figbox"><div class="flow">
  <span class="flow-node is-plain">Firewall មួយ</span>
  <span class="flow-arrow">=</span>
  <span class="flow-node">Group: Technical</span>
  <span class="flow-arrow">+</span>
  <span class="flow-node">Type: Preventive</span>
  <span class="flow-loop"><b>Group</b> = អ្នកណា/អ្វី​អនុវត្ត (Technical · Managerial · Operational · Physical)។ <b>Type</b> = ការងារ​អ្វី (Preventive · Deterrent · Detective · Corrective · Compensating · Directive)។ Control មួយ​មាន​មួយៗ។</span>
</div></div></div>
<table>
<thead><tr><th>Group</th><th>អនុវត្តដោយ</th><th>ឧទាហរណ៍</th></tr></thead>
<tbody>
<tr><td><b>Technical</b> (logical)</td><td>បច្ចេកវិទ្យា / ប្រព័ន្ធ</td><td>Firewall, encryption, antivirus, IAM, IDS/IPS</td></tr>
<tr><td><b>Managerial</b> (administrative)</td><td>ការសម្រេចចិត្តរបស់អ្នកគ្រប់គ្រង</td><td>Policies, risk assessments, security planning</td></tr>
<tr><td><b>Operational</b></td><td>មនុស្សដែលធ្វើការងារប្រចាំថ្ងៃ</td><td>Security awareness training, ភារកិច្ចឆ្មាំ, incident response procedures</td></tr>
<tr><td><b>Physical</b></td><td>របាំងជាក់ស្តែង (រូបី)</td><td>សោ, របង, CCTV, security guards, កាតសម្គាល់ (badges)</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">រាប់ក្រុម controls ទាំង 4 ចេញពីការចងចាំ។</div>
<div class="a"><span class="blank">Technical · Managerial · Operational · Physical</span> (“Tech Managers Operate Physically”)។</div></div>
<div class="drill"><div class="q">ចាត់ថ្នាក់តាម GROUP៖ (a) ប្រព័ន្ធបាញ់ទឹកពន្លត់អគ្គីភ័យ, (b) acceptable-use policy, (c) full-disk encryption, (d) ការបណ្តុះបណ្តាលបុគ្គលិកអំពី phishing។</div>
<div class="a">(a) <b>Physical</b> · (b) <b>Managerial</b> · (c) <b>Technical</b> · (d) <b>Operational</b>។</div></div>

<!-- TYPES -->
<h2 id="types">3 · ប្រភេទ controls ទាំង 6 <span class="kh">(by WHAT JOB they do)</span></h2>
<div class="concept">
  <span class="label">គំរូគំនិត — បន្ទាត់ពេលវេលា (timeline)</span>
  ដាក់ប្រភេទនីមួយៗលើបន្ទាត់ពេលវេលានៃការវាយប្រហារ។ <b>មុន៖</b> Preventive (ទប់ស្កាត់វា), Deterrent (បន្ថយចំណង់ចង់សាកល្បង), Directive (ប្រាប់មនុស្សពីអ្វីដែលត្រូវធ្វើ)។ <b>ពេលកំពុង៖</b> Detective (កត់សម្គាល់ពេលវាកំពុងកើតឡើង)។ <b>ក្រោយ៖</b> Corrective (ជួសជុល/ស្តារ)។ <b>ចំហៀង៖</b> Compensating (ជំនួសពេលអ្នកមិនអាចប្រើ control ល្អបំផុតបាន)។
</div>
<div class="figure"><div class="figcap">ដាក់​ប្រភេទ​នីមួយៗ​លើ​បន្ទាត់​ពេលវេលា</div>
<div class="figbox"><div class="timeline">
  <div class="tl-phase"><div class="tl-when">មុន</div>
    <span class="tl-item">Preventive <span>— ទប់​ស្កាត់</span></span>
    <span class="tl-item">Deterrent <span>— បន្ថយ​ចំណង់</span></span>
    <span class="tl-item">Directive <span>— ប្រាប់​ឲ្យ​ធ្វើ</span></span>
  </div>
  <div class="tl-phase"><div class="tl-when">ពេល​កំពុង</div>
    <span class="tl-item">Detective <span>— កត់​សម្គាល់</span></span>
  </div>
  <div class="tl-phase"><div class="tl-when">ក្រោយ</div>
    <span class="tl-item">Corrective <span>— ជួសជុល / ស្តារ</span></span>
  </div>
</div>
<div class="lc-branch"><b>Compensating</b> នៅ​ចំហៀង — ជំនួស​ពេល​មិន​ទាន់​អាច​ប្រើ control ល្អ​បំផុត។</div>
</div></div>
<table>
<thead><tr><th>ប្រភេទ</th><th>ការងារ</th><th>ឧទាហរណ៍</th></tr></thead>
<tbody>
<tr><td><b>Preventive</b></td><td>ទប់ស្កាត់វាមុនពេលវាកើតឡើង</td><td>Firewall, សោទ្វារ, encryption</td></tr>
<tr><td><b>Deterrent</b></td><td>បន្ថយចំណង់ចង់សាកល្បង</td><td>ផ្លាកព្រមាន, ឆ្កែយាម, ផ្លាក “CCTV in use”</td></tr>
<tr><td><b>Detective</b></td><td>រកឃើញ ពេលកំពុង/ក្រោយ</td><td>IDS, logs, វីដេអូ CCTV, ការជូនដំណឹង (alarms)</td></tr>
<tr><td><b>Corrective</b></td><td>ជួសជុល / ស្តារ ក្រោយពេលកើតហេតុ</td><td>ស្តារពី backup, patching, ញែក host មួយចេញ</td></tr>
<tr><td><b>Compensating</b></td><td>ជម្រើសជំនួស ពេល control ចម្បងមិនអាចធ្វើបាន</td><td>MFA ព្រោះអ្នកមិនទាន់អាចបង្ខំ password វែងបាន</td></tr>
<tr><td><b>Directive</b></td><td>ដឹកនាំ/ណែនាំឥរិយាបថ</td><td>Policy, AUP, នីតិវិធីដែលបិទផ្សាយ</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">រាប់ប្រភេទ controls ទាំង 6 និងឧទាហរណ៍មួយសម្រាប់នីមួយៗ។</div>
<div class="a"><ul>
<li><b>Preventive</b> — firewall/សោ</li><li><b>Deterrent</b> — ផ្លាកព្រមាន/ឆ្កែយាម</li>
<li><b>Detective</b> — IDS/logs/CCTV</li><li><b>Corrective</b> — ស្តារ backup/patch</li>
<li><b>Compensating</b> — control ជំនួស (ឧ. MFA ជំនួស policy ដែលមិនទាន់អាចធ្វើបាន)</li>
<li><b>Directive</b> — policy/AUP</li></ul></div></div>
<div class="drill"><div class="q">កាមេរ៉ា CCTV អាចជា type ពីរផ្សេងគ្នាអាស្រ័យលើរបៀបមើល — ពីរណាខ្លះ ហើយហេតុអ្វី?</div>
<div class="a"><b>Deterrent</b> (វត្តមានដែលមើលឃើញរបស់វាបន្ថយចំណង់អ្នកវាយប្រហារ) និង <b>Detective</b> (ការថតរបស់វាបង្ហាញថាមានអ្វីកើតឡើង)។ Control ដូចគ្នា ការងារខុសគ្នា → type ខុសគ្នា។ នេះជាសំណួរអន្ទាក់បុរាណ។</div></div>
<div class="drill"><div class="q">ប្រាប់ GROUP + TYPE សម្រាប់ firewall និងសម្រាប់ security guard។</div>
<div class="a">Firewall = <b>Technical + Preventive</b>។ Security guard = <b>Physical (ឬ Operational) + Preventive/Deterrent</b> (ឆ្មាំដែលដើរល្បាត ហើយក៏បន្ថយចំណង់ផង = ការងារទាំងពីរ)។</div></div>

<!-- NETTECH -->
<h2 id="nettech">4 · បច្ចេកវិទ្យា network security</h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  ការការពារជាស្រទាប់ (Layered defence)។ Controls ខ្លះ <b>ត្រង (filter)</b> traffic (firewall, ACL, segmentation), ខ្លះ <b>ឃ្លាំមើល (watch)</b> traffic (IDS/IPS), ខ្លះ <b>ការពារទិន្នន័យពេលផ្ញើ (data in transit)</b> (VPN, TLS/SSH), ខ្លះ <b>គ្រប់គ្រងថាអ្នកណាអាចភ្ជាប់បាន</b> (MFA, NAC)។ ការប្រឡងចង់ឲ្យអ្នកដឹងថានីមួយៗធ្វើអ្វី និងភាពខុសគ្នារវាង IDS និង IPS។
</div>
<table>
<thead><tr><th>Tech</th><th>វាធ្វើអ្វី</th></tr></thead>
<tbody>
<tr><td><b>Firewall</b></td><td>ត្រង traffic តាមច្បាប់ (packet-filter → stateful → next-gen)</td></tr>
<tr><td><b>IDS</b></td><td>Intrusion <b>Detection</b> — រកឃើញ &amp; ជូនដំណឹង, <b>passive</b> (out of band)</td></tr>
<tr><td><b>IPS</b></td><td>Intrusion <b>Prevention</b> — រកឃើញ <b>និងទប់ស្កាត់</b>, <b>inline</b></td></tr>
<tr><td><b>VPN</b></td><td>ផ្លូវរូងភ្នំ (tunnel) ដែលបាន encrypt លើ network សាធារណៈ (IPsec / SSL)</td></tr>
<tr><td><b>Segmentation</b></td><td>បំបែក network ជាតំបន់ (VLANs, subnets, DMZ) ដើម្បីកំណត់រង្វង់ប៉ះពាល់ (blast radius)</td></tr>
<tr><td>ACLs / MFA / NAC</td><td>ដាក់កម្រិត flows / ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ / គ្រប់គ្រងការអនុញ្ញាតឲ្យ device ចូល</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">IDS ទល់នឹង IPS — ភាពខុសគ្នាមួយបន្ទាត់?</div>
<div class="a"><b>IDS រកឃើញ និងជូនដំណឹង (passive, out-of-band); IPS រកឃើញ និងទប់ស្កាត់ (active, inline)។</b> IPS ស្ថិតនៅលើផ្លូវ traffic; IDS ទទួលបានច្បាប់ចម្លងមួយ។</div></div>
<div class="drill"><div class="q">ប្រាប់ protocols សុវត្ថិភាព 3 និងរបស់គ្មានសុវត្ថិភាពដែលនីមួយៗជំនួស។</div>
<div class="a"><ul><li><b>TLS/SSL</b> → HTTPS ជំនួស HTTP ធម្មតា</li><li><b>SSH</b> ជំនួស Telnet</li><li><b>IPsec / SSL VPN</b> ជំនួសការផ្ញើ traffic ដោយចំហលើ Internet</li></ul></div></div>
<div class="drill"><div class="q">តើ network segmentation ជាអ្វី ហើយហេតុអ្វីបានជាវាបង្កើនសុវត្ថិភាព?</div>
<div class="a">ការបែងចែក network ជាតំបន់ឯករាជ្យ (VLANs/subnets/DMZ)។ វា <b>កំណត់ការផ្លាស់ទីបន្តបន្ទាប់ (lateral movement)</b> — ការសម្របសម្រួល (compromise) ក្នុងតំបន់មួយមិនអាចទៅដល់តំបន់ផ្សេងដោយសេរីបានទេ — ហើយទប់ស្កាត់រង្វង់ប៉ះពាល់នៃការវាយប្រហារ។</div></div>

<!-- HARDEN -->
<h2 id="harden">5 · មន្ទីរពិសោធន៍ hardening 9 ជំហាន</h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  Hardening = ការដកចេញនូវចំណុចខ្សោយដែលមានស្រាប់ (default weaknesses), តាមលំដាប់ពី “សង់មូលដ្ឋានស្អាត” → “patch វា” → “ចាក់សោទ្វារ (firewall/SSH)” → “បន្ថែមការរកឃើញ (AV)” → “រក្សាវាឲ្យដូចនោះ (auto-updates, segmentation, backups)។” លំដាប់សំខាន់៖ អ្នក patch មុនពេលដាក់ឲ្យចំហ ហើយ back up ចុងក្រោយដើម្បីឲ្យវាបន្តរហូត។
</div>
<ol>
<li>រៀបចំ VM / បរិស្ថាន</li>
<li>ដំឡើង OS</li>
<li><b>Update</b> ប្រព័ន្ធ</li>
<li>កំណត់រចនាសម្ព័ន្ធ <b>firewall</b> (ufw / firewalld) + ធ្វើ <b>SSH</b> ឲ្យមានសុវត្ថិភាព (port 22)</li>
<li>ដំឡើង <b>antivirus</b> (ClamAV)</li>
<li>បើក <b>automatic updates</b></li>
<li>Network <b>segmentation</b></li>
<li>ធ្វើ <b>remote access</b> ឲ្យមានសុវត្ថិភាព</li>
<li><b>Backups</b></li>
</ol>
<div class="codewrap"><div class="cap">ពាក្យបញ្ជា hardening សំខាន់ៗ</div>
<pre><span class="pr">sudo ufw enable</span>                              <span class="cm"># turn on the firewall</span>
<span class="pr">sudo apt install</span> clamav clamav-daemon         <span class="cm"># install antivirus</span>
<span class="pr">sudo clamscan -r</span> /home                        <span class="cm"># recursive scan of /home</span></pre></div>
<div class="drill"><div class="q">ហេតុអ្វីត្រូវ update ប្រព័ន្ធ (ជំហានទី 3) មុនពេលដាក់ services / SSH ឲ្យចំហ?</div>
<div class="a">ព្រោះ packages ដែលមិនទាន់ patch អាចមាន vulnerabilities ដែលគេស្គាល់ និងអាច exploit បានជាសាធារណៈ។ Patch មុនមានន័យថាអ្នកមិនដាក់ service ដែលមានរន្ធរួចស្រេចឲ្យចំហ។ Hardening ធ្វើតាមលំដាប់៖ មូលដ្ឋានស្អាត → patch → ដាក់ឲ្យចំហដោយប្រុងប្រយ័ត្ន។</div></div>
<div class="drill"><div class="q">ពាក្យបញ្ជាមួយណាដំឡើង ClamAV ហើយមួយណា scan /home ដោយ recursive?</div>
<div class="a">ដំឡើង៖ <code>sudo apt install clamav clamav-daemon</code>។ Scan៖ <code>sudo clamscan -r /home</code> (<code>-r</code> = recursive)។</div></div>

<!-- HACKERS -->
<h2 id="hackers">6 · ប្រភេទ hacker &amp; pen-test ទល់នឹង hacking</h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  Hackers ត្រូវបានចាត់ថ្នាក់តាម <b>ការអនុញ្ញាត (authorisation) + ចេតនា (intent)</b>។ ពណ៌មួក (hat) ឆ្លើយសំណួរ “តើគេមានការអនុញ្ញាតទេ ហើយតើគេមានបំណងធ្វើបាបទេ?” ជំនាញបច្ចេកទេសដូចគ្នាគឺស្របច្បាប់ ឬឧក្រិដ្ឋ អាស្រ័យតែលើពីរយ៉ាងនោះ — ដែលជាមូលហេតុ <b>authorisation</b> ជាបន្ទាត់ខណ្ឌចែករវាង penetration test និងបទឧក្រិដ្ឋ។
</div>
<table>
<thead><tr><th>ប្រភេទ</th><th>មានការអនុញ្ញាត?</th><th>ចេតនា</th></tr></thead>
<tbody>
<tr><td><b>White hat</b> (ethical / responsible)</td><td>មាន</td><td>បង្កើនសុវត្ថិភាព (pen testers)</td></tr>
<tr><td><b>Black hat</b> (criminal / malicious)</td><td>គ្មាន</td><td>ផលប្រយោជន៍ផ្ទាល់ខ្លួន / ធ្វើបាប</td></tr>
<tr><td><b>Gray hat</b></td><td>គ្មាន (unauthorised)</td><td>គ្មានចេតនាអាក្រក់ ប៉ុន្តែនៅតែខុសច្បាប់</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">ប្រាប់ប្រភេទ hacker ទាំង 3 និងកត្តាពីរយ៉ាងដែលបំបែកពួកវា។</div>
<div class="a"><b>White / Black / Gray hat</b>, បំបែកដោយ <b>authorisation</b> និង <b>intent</b>។</div></div>
<div class="drill"><div class="q">តើភាពខុសគ្នាសំខាន់តែមួយរវាង penetration test និង hacking ខុសច្បាប់ជាអ្វី?</div>
<div class="a"><b>Authorisation</b> (ការអនុញ្ញាតច្បាស់លាស់ + scope កំណត់)។ Pen test គឺមានការអនុញ្ញាត, មាន scope, និងមានរបាយការណ៍; សកម្មភាពដូចគ្នាដោយគ្មានការអនុញ្ញាតគឺជាបទឧក្រិដ្ឋ — ទោះបីមានចេតនាល្អក៏ដោយ (នោះជា gray hat)។</div></div>

<!-- METHODS -->
<h2 id="methods">7 · វិធីសាស្ត្រ hacking</h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  ចាត់ក្រុមការវាយប្រហារតាមអ្វីដែលវាសំដៅ៖ <b>network/traffic</b>, <b>credentials</b>, <b>ផ្លូវចូល</b> (ទ្វារ), <b>software ខ្លួនឯង</b> (malware), ឬ <b>availability</b> (ការបំពេញលើស)។ ការដឹងពីក្រុមធ្វើឲ្យបញ្ជីងាយចងចាំ។
</div>
<div class="figure"><div class="figcap">DoS ធៀប DDoS — អ្នក​វាយ​ម្នាក់ ឬ​ទ័ព</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">zombie</span>
  <span class="flow-node">zombie</span>
  <span class="flow-node">zombie</span>
  <span class="flow-arrow">→ បំពេញ​លើស →</span>
  <span class="flow-node is-plain">Target ✕</span>
  <span class="flow-loop"><b>DoS</b> = ប្រភព​មួយ​បំពេញ​លើស។ <b>DDoS</b> = ប្រភព​ច្រើន (<b>botnet</b> នៃ zombie ខាង​លើ) បំពេញ​លើស​ព្រម​គ្នា — ពិបាក​ទប់, ខ្លាំង​ជាង។ ទាំង​ពីរ​វាយ <b>Availability</b>។</span>
</div></div></div>
<table>
<thead><tr><th>វិធីសាស្ត្រ</th><th>វាជាអ្វី</th></tr></thead>
<tbody>
<tr><td><b>Network attacks</b></td><td>Sniffing, MITM, spoofing — ស្ទាក់/កែប្រែ traffic</td></tr>
<tr><td><b>Password attacks</b></td><td>ការ crack ជាប្រព័ន្ធ (brute force), dictionary, <b>keylogging</b></td></tr>
<tr><td><b>Backdoors</b></td><td>ផ្លូវចូលលាក់កំបាំងដែលទុកសម្រាប់ចូលពេលក្រោយ</td></tr>
<tr><td><b>Bugdoors</b></td><td>Vulnerabilities ដោយចេតនា ក្លែងធ្វើជា bug គ្មានទោស</td></tr>
<tr><td><b>Malware</b></td><td>Viruses, worms, trojans</td></tr>
<tr><td><b>DoS</b></td><td>បំពេញលើសពីប្រភពមួយ → ធ្វើឲ្យ target អស់ធនធាន</td></tr>
<tr><td><b>DDoS</b></td><td>ប្រភពច្រើន (<b>botnet</b>) បំពេញលើស target</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">ភាពខុសគ្នារវាង backdoor និង bugdoor?</div>
<div class="a"><b>Backdoor</b> = ផ្លូវចូលលាក់កំបាំងដែលដាក់/ទុកដោយចេតនា។ <b>Bugdoor</b> = vulnerability ដែលដាក់ដោយចេតនា ប៉ុន្តែ <b>ក្លែងធ្វើឲ្យមើលទៅដូចជា bug ដោយចៃដន្យ</b> (ដើម្បីបដិសេធបាន/plausible deniability)។</div></div>
<div class="drill"><div class="q">DoS ទល់នឹង DDoS — ហើយ botnet មានតួនាទីអ្វី?</div>
<div class="a"><b>DoS</b> = បំពេញលើសពីប្រភពតែមួយ។ <b>DDoS</b> = <b>D</b>istributed៖ ម៉ាស៊ីនជាច្រើនដែលត្រូវបាន compromise (<b>botnet</b>) បំពេញលើសក្នុងពេលដំណាលគ្នា ធ្វើឲ្យពិបាកទប់ស្កាត់ និងមានកម្លាំងខ្លាំងជាង។ ទាំងពីរវាយលើ <b>Availability</b>។</div></div>
<div class="drill"><div class="q">Virus ទល់នឹង worm ទល់នឹង trojan — បែងចែកមួយបន្ទាត់នីមួយៗ។</div>
<div class="a"><b>Virus</b> ត្រូវការ host file + សកម្មភាពអ្នកប្រើដើម្បីរាលដាល។ <b>Worm</b> ចម្លងខ្លួនឯងឆ្លងកាត់ network ដោយគ្មានជំនួយ។ <b>Trojan</b> ក្លែងខ្លួនជា software ស្របច្បាប់ដើម្បីបោកអ្នកប្រើឲ្យដំណើរការវា។</div></div>

<!-- KALI -->
<h2 id="kali">8 · Kali Linux toolkit <span class="kh">(command recall drills)</span></h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  Kali = distro មូលដ្ឋានលើ Debian ដែលដំឡើង security tools ស្រាប់ (“កាំបិត Swiss-army”)។ Workflow ដែលពាក់ព័ន្ធនឹងការប្រឡង៖ <b>ទាញវាដោយសុវត្ថិភាព (verify download)</b> → <b>ដំណើរការវា (VM / live boot)</b> → <b>រកឃើញ hosts (arp-scan)</b> → <b>ស្ទង់ target (nmap)</b> → <b>រក្សាវាឲ្យ updated</b> — ទាំងអស់ <b>តែលើប្រព័ន្ធដែលអ្នកជាម្ចាស់ ឬមានការអនុញ្ញាតឲ្យសាកល្បង</b> ប៉ុណ្ណោះ។
</div>
<div class="figure"><div class="figcap">Workflow Kali សុវត្ថិភាព &amp; ស្រប​ច្បាប់</div>
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
  <span class="flow-loop"><code>sha256sum</code> + <code>gpg --verify</code> ✓ → VM / live boot → <code>arp-scan</code> → <code>nmap -T4 -A</code> → <code>apt full-upgrade</code>។ តែ​លើ​ប្រព័ន្ធ​ដែល​អ្នក​ជា​ម្ចាស់ ឬ​មាន​ការ​អនុញ្ញាត។</span>
</div></div></div>
<div class="danger"><span class="label">ផ្នែកច្បាប់ — តែងតែយកមកប្រឡង</span>សូម scan/វាយតែប្រព័ន្ធដែលអ្នក <b>ជាម្ចាស់ ឬមានការអនុញ្ញាត</b> ឲ្យសាកល្បង។ ហ្វឹកហាត់លើ VM ដែលមាន vulnerable ដោយចេតនា (<b>Metasploitable</b>) ខាងក្នុង network ដែល <b>ញែកដាច់ដោយឡែក (isolated)</b>។</div>

<table>
<tbody>
<tr><td>មូលដ្ឋានលើ</td><td>Debian; ជម្រើសផ្សេង៖ Parrot OS, BlackArch, PentestBox</td></tr>
<tr><td>Default creds</td><td><code>kali</code> / <code>kali</code> → ប្តូរដោយ <code>passwd</code></td></tr>
<tr><td>ផ្ទៀងផ្ទាត់ download</td><td><code>sha256sum</code> (Linux) / <code>Get-FileHash</code> (PowerShell); GPG <code>gpg --verify</code> → “Good signature”</td></tr>
<tr><td>Update</td><td><code>sudo apt update &amp;&amp; sudo apt full-upgrade</code></td></tr>
<tr><td>ដំឡើង package</td><td><code>sudo apt install &lt;package&gt;</code></td></tr>
</tbody>
</table>

<div class="drill"><div class="q">សរសេរពាក្យបញ្ជាដើម្បីរកឃើញ live hosts ទាំងអស់នៅលើ LAN មូលដ្ឋានរបស់អ្នកតាមរយៈ ARP (interface eth0)។</div>
<div class="a"><pre style="margin-top:6px"><span class="pr">sudo arp-scan</span> --interface=eth0 --localnet</pre>ARP មិនអាចត្រូវ firewall ទប់ស្កាត់នៅលើ LAN បានទេ ដូច្នេះវាបង្ហាញ hosts បានយ៉ាងជឿជាក់។</div></div>

<div class="drill"><div class="q">សរសេរ nmap scan ប្រភេទ aggressive លើ target មួយ ហើយពន្យល់ flags ទាំងពីរ។</div>
<div class="a"><pre style="margin-top:6px"><span class="pr">nmap</span> -T4 -A &lt;target-ip&gt;</pre>
<ul><li><b>-T4</b> = timing template 4 = scan លឿនជាង (timing aggressive ជាង)។</li>
<li><b>-A</b> = aggressive៖ OS detection + service/version detection + default scripts + traceroute។</li></ul></div></div>

<div class="drill"><div class="q">លទ្ធផល nmap មាន columns PORT / STATE / SERVICE / VERSION។ តើ STATE មានតម្លៃអាចមានបី និងនីមួយៗមានន័យអ្វី?</div>
<div class="a"><ul><li><b>open</b> — មាន service កំពុងទទួល connections យ៉ាងសកម្ម។</li>
<li><b>closed</b> — អាចទៅដល់បាន ប៉ុន្តែគ្មានអ្វីកំពុងស្តាប់នៅ port នោះ។</li>
<li><b>filtered</b> — firewall កំពុងទប់ស្កាត់/ទម្លាក់ (drop); nmap មិនអាចប្រាប់ថាវា open ឬអត់។</li></ul></div></div>

<div class="drill"><div class="q">ហេតុអ្វីត្រូវផ្ទៀងផ្ទាត់ download Kali ដោយ SHA-256 និង GPG — ហើយ message GPG មួយណាបញ្ជាក់វា?</div>
<div class="a"><b>SHA-256</b> បញ្ជាក់ថា file មិនបានខូច/កែប្រែ (integrity); <b>GPG signature</b> បញ្ជាក់ថាវាមកពីក្រុម Kali ពិតប្រាកដ (authenticity)។ ការ check GPG ល្អនឹងបង្ហាញ <b>“Good signature”</b>។ (នេះជាគោលការណ៍ “Integrity” នៃ CIA អនុវត្តលើ downloads។)</div></div>

<div class="drill"><div class="q">ពាក្យបញ្ជាដើម្បីបើក + ចាប់ផ្តើម SSH លើ Kali រួចភ្ជាប់ទៅវាពីម៉ាស៊ីនមួយផ្សេងទៀត។</div>
<div class="a"><pre style="margin-top:6px"><span class="pr">sudo systemctl enable --now</span> ssh   <span class="cm"># enable + start now</span>
<span class="pr">ssh</span> username@kali-ip                <span class="cm"># connect</span></pre></div>

<div class="drill"><div class="q">ពាក្យបញ្ជាដើម្បី update Kali ឲ្យពេញលេញ និងពាក្យបញ្ជាដើម្បីដំឡើង package។</div>
<div class="a">Update៖ <code>sudo apt update &amp;&amp; sudo apt full-upgrade</code>។ ដំឡើង៖ <code>sudo apt install &lt;package&gt;</code>។</div></div>

<div class="drill"><div class="q">តើ <code>kali-tweaks</code> ជាអ្វី ហើយប្រាប់ពីរបស់ពីរយ៉ាងដែលវាអាចធ្វើបាន? តើ Metasploitable សម្រាប់អ្វី?</div>
<div class="a"><b>kali-tweaks</b> (<code>sudo kali-tweaks</code>) = ឧបករណ៍ config ដែលប្រើ menu៖ បិទ protocols ខ្សោយ (SSLv2/SSHv1), ដំឡើង meta-packages (ឧ. wireless), កំណត់ shell, ធ្វើ VM support ឲ្យល្អ។ <b>Metasploitable</b> = VM Linux ដែលមាន vulnerable ដោយចេតនា ដើម្បីហ្វឹកហាត់ scan &amp; វាយប្រហារដោយស្របច្បាប់/សុវត្ថិភាពក្នុង lab ដែលញែកដាច់។</div></div>

<!-- AAA -->
<h2 id="aaa">9 · AAA &amp; authentication factors <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  CIA ជាគោលដៅ; <b>AAA</b> ជារបៀបដែលអ្នកគ្រប់គ្រងអត្តសញ្ញាណដើម្បីទៅដល់ទីនោះ។ <b>A</b>uthentication = បញ្ជាក់ថាអ្នកជានរណា។ <b>A</b>uthorization = អ្វីដែលអ្នកត្រូវបានអនុញ្ញាតឲ្យធ្វើបន្ទាប់ពីបញ្ជាក់រួច។ <b>A</b>ccounting = ការកត់ត្រាអ្វីដែលអ្នកពិតជាបានធ្វើ។ បន្ថែម <b>non-repudiation</b> = អ្នកមិនអាចបដិសេធក្រោយមកថាអ្នកបានធ្វើវាបានទេ (អនុវត្តដោយ digital signatures)។ <span class="mnemonic">AuthN = អ្នកជានរណា · AuthZ = អ្វីដែលអ្នកអាចធ្វើ។</span>
</div>
<div class="figure"><div class="figcap">AAA — ទ្វារ​បី តាម​លំដាប់</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">Authentication</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">Authorization</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">Accounting</span>
  <span class="flow-loop"><b>AuthN</b> = បញ្ជាក់​អ្នក​ជា​នរណា → <b>AuthZ</b> = អ្វី​ដែល​អ្នក​អាច​ធ្វើ → <b>Accounting</b> = កត់ត្រា​អ្វី​ដែល​អ្នក​ធ្វើ។ បូក <b>non-repudiation</b> = មិន​អាច​បដិសេធ (digital signatures)។</span>
</div></div></div>
<table>
<thead><tr><th>ប្រភេទ factor</th><th>ឧទាហរណ៍</th></tr></thead>
<tbody>
<tr><td>អ្វីដែលអ្នក <b>ដឹង (know)</b></td><td>Password, PIN, security question</td></tr>
<tr><td>អ្វីដែលអ្នក <b>មាន (have)</b></td><td>ទូរស័ព្ទ/OTP token, smart card</td></tr>
<tr><td>អ្វីដែលអ្នក <b>ជា (are)</b></td><td>ស្នាមម្រាមដៃ, មុខ, irises (biometric)</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">កំណត់និយមន័យ A នីមួយៗក្នុង AAA និងអ្វីដែល non-repudiation មានន័យ។</div>
<div class="a"><b>Authentication</b> — ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ។ <b>Authorization</b> — ផ្តល់កម្រិតសិទ្ធិចូលប្រើត្រឹមត្រូវ។ <b>Accounting</b> — កត់ត្រា/audit អ្វីដែលបានធ្វើ។ <b>Non-repudiation</b> — ភស្តុតាងថាភាគីមួយបានធ្វើសកម្មភាព ដូច្នេះគេមិនអាចបដិសេធបាន (តាមរយៈ digital signatures/logs)។</div></div>
<div class="drill"><div class="q">ប្រាប់ប្រភេទ authentication factor ទាំង 3។ ហេតុអ្វី “password + PIN” មិនមែនជា MFA ពិតប្រាកដ?</div>
<div class="a">អ្វីដែលអ្នក <b>ដឹង / មាន / ជា (know / have / are)</b>។ Password + PIN គឺ <b>ទាំងពីរជា “អ្វីដែលអ្នកដឹង”</b> — ប្រភេទតែមួយ — ដូច្នេះវាមិនមែនជា multi-<i>factor</i> ទេ។ MFA ពិតប្រាកដបញ្ចូលគ្នានូវប្រភេទ <b>ផ្សេងគ្នា</b> (ឧ. password + phone OTP)។</div></div>

<!-- CRYPTO -->
<h2 id="crypto">10 · មូលដ្ឋាន Cryptography <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  ការងារពីរ ឧបករណ៍ពីរ។ <b>Encryption</b> លាក់ទិន្នន័យ (Confidentiality) ហើយអាចបញ្ច្រាសវិញបានដោយ key។ <b>Hashing</b> ធ្វើ fingerprint ទិន្នន័យ (Integrity) ហើយជាផ្លូវតែមួយ (one-way) (គ្មាន key, បញ្ច្រាសវិញមិនបាន)។ Encryption បែងចែកម្តងទៀត៖ <b>symmetric</b> = key សម្ងាត់រួមតែមួយ (លឿន ប៉ុន្តែតើអ្នកចែករំលែក key ដោយសុវត្ថិភាពយ៉ាងម៉េច?); <b>asymmetric</b> = គូ public/private key (យឺតជាង ប៉ុន្តែដោះស្រាយការផ្លាស់ប្តូរ key)។
</div>
<div class="figure"><div class="figcap">ការងារ​ពីរ ឧបករណ៍​បី</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">Symmetric · key រួម​មួយ 🔑</span>
  <span class="flow-node">Asymmetric · public 🔓 + private 🔑</span>
  <span class="flow-node is-plain">Hashing · គ្មាន key, one-way →</span>
  <span class="flow-loop"><b>Encryption</b> លាក់​ទិន្នន័យ, បញ្ច្រាស​បាន​ដោយ key — symmetric លឿន (AES); asymmetric ដោះស្រាយ​ការ​ចែក key (RSA)។ <b>Hashing</b> ធ្វើ fingerprint one-way (SHA-256) សម្រាប់ <b>Integrity</b> — បញ្ច្រាស​មិន​បាន។</span>
</div></div></div>
<table>
<thead><tr><th></th><th>Keys</th><th>ល្បឿន</th><th>ឧទាហរណ៍</th><th>ការពារ</th></tr></thead>
<tbody>
<tr><td><b>Symmetric</b></td><td>Key រួមតែមួយ</td><td>លឿន</td><td>AES, DES, 3DES</td><td>Confidentiality</td></tr>
<tr><td><b>Asymmetric</b></td><td>គូ Public + private</td><td>យឺត</td><td>RSA, ECC, Diffie-Hellman</td><td>Confidentiality + key exchange</td></tr>
<tr><td><b>Hashing</b></td><td>គ្មាន key (one-way)</td><td>លឿន</td><td>SHA-256, MD5*</td><td>Integrity</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">*MD5 / SHA-1 ត្រូវបានចាត់ទុកថាខ្សោយ/បែកបាក់ — គួរប្រើ SHA-256 ជាង។</p>
<div class="drill"><div class="q">Symmetric ទល់នឹង asymmetric encryption៖ keys, ល្បឿន, ឧទាហរណ៍មួយនីមួយៗ, និងបញ្ហាដែល asymmetric ដោះស្រាយ។</div>
<div class="a"><b>Symmetric</b>៖ key រួមតែមួយ, លឿន, ឧ. <b>AES</b>។ <b>Asymmetric</b>៖ គូ public/private key, យឺតជាង, ឧ. <b>RSA</b>។ Asymmetric ដោះស្រាយ <b>ការចែកចាយ key (key distribution)</b> — អ្នកអាចចែករំលែក public key ដោយចំហ ដូច្នេះភាគីពីរមិនចាំបាច់បញ្ជូន secret key ទេ។</div></div>
<div class="drill"><div class="q">តើ hashing ខុសពី encryption យ៉ាងម៉េច ហើយវាបម្រើ CIA property មួយណា?</div>
<div class="a">Hashing គឺជា <b>ផ្លូវតែមួយ (one-way)</b> (អ្នកមិនអាចបញ្ច្រាស hash ត្រឡប់ទៅជាទិន្នន័យវិញបានទេ) ហើយប្រើ <b>គ្មាន key</b>; encryption អាចបញ្ច្រាសវិញបានដោយ key។ Hashing បម្រើ <b>Integrity</b> — input ដូចគ្នា → hash ដូចគ្នា ដូច្នេះការផ្លាស់ប្តូរណាមួយអាចរកឃើញបាន។</div></div>
<div class="drill"><div class="q">តើ digital signature ដំណើរការយ៉ាងម៉េច ហើយវាផ្តល់របស់ 3 យ៉ាងណាខ្លះ?</div>
<div class="a">អ្នកផ្ញើ <b>hash</b> សារ ហើយ <b>encrypt hash នោះដោយ private key របស់គេ</b>។ អ្នកណាក៏អាច decrypt វាដោយ <b>public key</b> របស់អ្នកផ្ញើ រួចប្រៀបធៀប hashes។ វាផ្តល់ <b>Integrity</b> (hash ត្រូវគ្នា), <b>Authenticity</b> (មានតែ private key នោះទេអាច sign), និង <b>Non-repudiation</b> (អ្នកផ្ញើបដិសេធវាមិនបាន)។</div></div>

<!-- RISK -->
<h2 id="risk">11 · Risk management (ការគ្រប់គ្រងហានិភ័យ) <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  <b>Threat</b> (អ្វីដែលអាចបង្កគ្រោះថ្នាក់) ប្រើ <b>vulnerability</b> (ចំណុចខ្សោយ) ដើម្បីបង្កើត <b>risk</b>។ អ្នកស្ទើរតែមិនអាចទៅដល់ risk សូន្យបានទេ ដូច្នេះសុវត្ថិភាពគឺនិយាយអំពីការ <b>គ្រប់គ្រង</b> វាដល់កម្រិតមួយដែលអាចទទួលយកបាន។ <span class="mnemonic">Risk ≈ Likelihood × Impact។</span>
</div>
<div class="figure"><div class="figcap">របៀប​បង្កើត risk — និង​បួន​វិធី​ឆ្លើយ​តប</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">Threat</span>
  <span class="flow-arrow">exploit →</span>
  <span class="flow-node">Vulnerability</span>
  <span class="flow-arrow">=</span>
  <span class="flow-node is-plain">Risk = Likelihood × Impact</span>
  <span class="flow-loop">ឆ្លើយ​តប​បួន​វិធី៖ <b>Avoid</b> (លះបង់) · <b>Transfer</b> (ធានា​រ៉ាប់រង / outsource) · <b>Mitigate</b> (patch / firewall / backup) · <b>Accept</b> (ទទួល​យក)។ គ្មាន vulnerability → threat បង្ក​ការ​ខូច​មិន​បាន។</span>
</div></div></div>
<table>
<thead><tr><th>ពាក្យ</th><th>អត្ថន័យ</th></tr></thead>
<tbody>
<tr><td>Asset</td><td>អ្វីៗដែលមានតម្លៃ (ទិន្នន័យ, ប្រព័ន្ធ, កេរ្តិ៍ឈ្មោះ)</td></tr>
<tr><td>Threat</td><td>មូលហេតុដែលអាចបង្កគ្រោះថ្នាក់ (hacker, malware, ភ្លើង)</td></tr>
<tr><td>Vulnerability</td><td>ចំណុចខ្សោយដែល threat អាច exploit (server មិនទាន់ patch)</td></tr>
<tr><td>Exploit</td><td>សកម្មភាព/ឧបករណ៍ដែលប្រើ vulnerability</td></tr>
<tr><td>Risk</td><td>Likelihood × impact នៃ threat ដែល exploit vulnerability</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">បែងចែក threat, vulnerability, និង risk ជាមួយឧទាហរណ៍មួយដែលភ្ជាប់ពួកវាចូលគ្នា។</div>
<div class="a"><b>Threat</b> = hacker (គ្រោះថ្នាក់ដែលអាចមាន)។ <b>Vulnerability</b> = server មិនទាន់ patch (ចំណុចខ្សោយ)។ <b>Risk</b> = ឱកាស + ការខូចខាតនៃ hacker ដែល exploit server មិនទាន់ patch នោះ។ គ្មាន vulnerability → threat មិនអាចបង្កការខូចខាត → risk ទាប។</div></div>
<div class="drill"><div class="q">ប្រាប់វិធី 4 យ៉ាងដើម្បីឆ្លើយតបនឹង risk ជាមួយឧទាហរណ៍នីមួយៗ។</div>
<div class="a"><ul>
<li><b>Avoid</b> — កុំធ្វើសកម្មភាពដែលមានហានិភ័យ (បោះបង់ feature)។</li>
<li><b>Transfer</b> — ផ្ទេរវាទៅអ្នកផ្សេង (cyber-insurance, outsource)។</li>
<li><b>Mitigate</b> — បន្ថយ likelihood/impact (patch, firewall, backups)។</li>
<li><b>Accept</b> — ទទួលស្គាល់ និងរស់នៅជាមួយវា (impact ទាប, ជួសជុលថ្លៃពេក)។</li>
</ul></div></div>

<!-- SOCIAL -->
<h2 id="social">12 · Social engineering <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  វាយប្រហារ <b>មនុស្ស មិនមែនម៉ាស៊ីន</b> — មនុស្សជាខ្សែខ្សោយបំផុត។ អ្នកវាយប្រហារកេងប្រវ័ញ្ចទំនុកចិត្ត, ការភ័យខ្លាច, ភាពបន្ទាន់, ឬការចង់ដឹង ដើម្បីឲ្យនរណាម្នាក់ប្រគល់សិទ្ធិចូល ឬព័ត៌មាន។ គ្មាន firewall ណាទប់ស្កាត់អ្នកប្រើដែលត្រូវបានបោកឲ្យឲ្យ password របស់គេទេ។
</div>
<table>
<thead><tr><th>បច្ចេកទេស</th><th>វាជាអ្វី</th></tr></thead>
<tbody>
<tr><td>Phishing</td><td>អ៊ីមែលក្លែងបន្លំជាបណ្តុំ ដើម្បីប្រមូល credentials</td></tr>
<tr><td>Spear phishing</td><td>Phishing ដែលសំដៅទៅបុគ្គល/ស្ថាប័នជាក់លាក់</td></tr>
<tr><td>Whaling</td><td>Spear phishing សំដៅទៅថ្នាក់ដឹកនាំ (“ត្រីធំ”)</td></tr>
<tr><td>Vishing / Smishing</td><td>Phishing តាមការហៅទូរស័ព្ទ (voice) / តាម SMS</td></tr>
<tr><td>Pretexting</td><td>បង្កើតស្ថានភាពដែលគួរឲ្យជឿ ដើម្បីទាញយកព័ត៌មាន</td></tr>
<tr><td>Baiting</td><td>ទុកនុយ (ឧ. USB ឆ្លងមេរោគ) ឲ្យគេយក</td></tr>
<tr><td>Tailgating / piggybacking</td><td>ដើរតាមអ្នកមានសិទ្ធិឆ្លងកាត់ទ្វារសុវត្ថិភាព</td></tr>
<tr><td>Shoulder surfing</td><td>មើលនរណាម្នាក់វាយ password/PIN</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">តើ social engineering ជាអ្វី ហើយហេតុអ្វីបានជាវាមានប្រសិទ្ធភាពម៉្លេះ?</div>
<div class="a">ការកេងប្រវ័ញ្ច <b>មនុស្ស</b> ឲ្យបំពានសុវត្ថិភាព (ឲ្យ credentials/សិទ្ធិចូល) ជាជាងវាយប្រហារបច្ចេកវិទ្យា។ មានប្រសិទ្ធភាពព្រោះវាកេងប្រវ័ញ្ចទំនុកចិត្តរបស់មនុស្ស, ភាពបន្ទាន់, និងភាពចង់ជួយ — <b>ខ្សែខ្សោយបំផុត</b> — ហើយឆ្លងផុត technical controls ទាំងស្រុង។</div></div>
<div class="drill"><div class="q">Phishing ទល់នឹង spear phishing ទល់នឹង whaling។ ហើយ tailgating ជាអ្វី?</div>
<div class="a"><b>Phishing</b> = ជាបណ្តុំ/មិនសំដៅ។ <b>Spear phishing</b> = សំដៅទៅបុគ្គល/ក្រុមហ៊ុនជាក់លាក់។ <b>Whaling</b> = សំដៅទៅថ្នាក់ដឹកនាំដែលមានតម្លៃខ្ពស់។ <b>Tailgating</b> = ដើរតាមអ្នកមានសិទ្ធិឆ្លងកាត់ច្រកចូលសុវត្ថិភាពតាមរូបកាយ ដោយគ្មាន credentials ផ្ទាល់ខ្លួន។</div></div>
<div class="drill"><div class="q">ការការពារល្អបំផុតប្រឆាំង social engineering?</div>
<div class="a"><b>Security awareness training</b> + វប្បធម៌នៃការផ្ទៀងផ្ទាត់ (បញ្ជាក់សំណើតាមរយៈ channel ទីពីរ, កុំចែករំលែក credentials, រាយការណ៍សារគួរឲ្យសង្ស័យ)។ នេះជា <b>Operational</b> control។</div></div>

<!-- MALWARE -->
<h2 id="malware">13 · ប្រភេទ Malware ស៊ីជម្រៅ <span class="pill">extends hacking</span></h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  ចាត់ថ្នាក់ malware តាម <b>របៀបវារាលដាល</b> និង <b>អ្វីដែលវាធ្វើ</b>។ ការរាលដាល៖ ត្រូវការ host + អ្នកប្រើ (virus), រាលដាលខ្លួនឯង (worm), បោកអ្នកប្រើ (trojan)។ Payload/ឥរិយាបថ៖ ជំរិតយកប្រាក់ (ransomware), ស៊ើបការណ៍ (spyware/keylogger), លាក់ខ្លួន &amp; បន្តរស់ (rootkit), ធ្វើជាខ្ញុំ (botnet)។
</div>
<table>
<thead><tr><th>Malware</th><th>ឥរិយាបថ</th></tr></thead>
<tbody>
<tr><td>Virus</td><td>ភ្ជាប់ទៅ file; ត្រូវការអ្នកប្រើដំណើរការវាដើម្បីរាលដាល</td></tr>
<tr><td>Worm</td><td>ចម្លងខ្លួនឯងឆ្លងកាត់ network, គ្មានសកម្មភាពអ្នកប្រើ</td></tr>
<tr><td>Trojan</td><td>ក្លែងខ្លួនជា software ស្របច្បាប់</td></tr>
<tr><td><b>Ransomware</b></td><td>Encrypt files, ទាមទារការទូទាត់ (វាយលើ Availability)</td></tr>
<tr><td>Spyware / Keylogger</td><td>ប្រមូលព័ត៌មានដោយសម្ងាត់ / កត់ត្រាការវាយ keystrokes</td></tr>
<tr><td><b>Rootkit</b></td><td>លាក់ខ្លួនជ្រៅដោយសិទ្ធិ admin/root; ពិបាករកឃើញ/លុបណាស់</td></tr>
<tr><td>Botnet</td><td>បណ្តាញម៉ាស៊ីន “zombie” ឆ្លងមេរោគ ដែលគ្រប់គ្រងសម្រាប់ការវាយប្រហារ (DDoS, spam)</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Virus ទល់នឹង worm ទល់នឹង trojan — លក្ខណៈពិសេសខុសគ្នានៃនីមួយៗ។</div>
<div class="a"><b>Virus</b> ត្រូវការ host file + សកម្មភាពអ្នកប្រើ។ <b>Worm</b> ចម្លងខ្លួនឯងលើ network ដោយគ្មានជំនួយ។ <b>Trojan</b> ក្លែងខ្លួនជា software ស្របច្បាប់ដើម្បីឲ្យអ្នកប្រើដំណើរការវា។</div></div>
<div class="drill"><div class="q">តើ ransomware វាយ CIA property មួយណា ហើយ control មួយណាស្តារពីវាបានល្អបំផុត?</div>
<div class="a">ភាគច្រើន <b>Availability</b> (files ត្រូវចាក់សោ) — និង Integrity។ Control ស្តារល្អបំផុត៖ <b>backups ដែលនៅ offline/បានសាកល្បង</b> (ជា Corrective control) ដើម្បីឲ្យអ្នកស្តារដោយមិនបាច់បង់ប្រាក់។</div></div>
<div class="drill"><div class="q">អ្វីដែលធ្វើឲ្យ rootkit គ្រោះថ្នាក់ជាពិសេស?</div>
<div class="a">វាដំណើរការដោយ <b>សិទ្ធិ admin/root ហើយលាក់ខ្លួនឯង</b> (ទោះបីពី OS និង AV ក៏ដោយ) ផ្តល់ការគ្រប់គ្រងលាក់កំបាំងបន្តរហូត — ជារឿយៗត្រូវសង់ឡើងវិញទាំងស្រុងទើបលុបបាន។</div></div>

<!-- PRINCIPLES -->
<h2 id="principles">14 · គោលការណ៍រចនាសុវត្ថិភាព <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">គំរូគំនិត</span>
  គោលការណ៍ពីរបីយ៉ាងស្ថិតនៅពីក្រោមការសម្រេចចិត្តសុវត្ថិភាពល្អស្ទើរតែទាំងអស់។ បើសំណួរសួរថា “X អនុវត្តតាមគោលការណ៍ណា” ចូរផ្គូផ្គងវាមកទីនេះ។
</div>
<table>
<thead><tr><th>គោលការណ៍</th><th>អត្ថន័យ</th></tr></thead>
<tbody>
<tr><td><b>Defense in depth</b></td><td>Controls ច្រើនស្រទាប់; បើស្រទាប់មួយខូច ស្រទាប់ផ្សេងនៅតែការពារ</td></tr>
<tr><td><b>Least privilege</b></td><td>ផ្តល់ឲ្យអ្នកប្រើ/process នីមួយៗតែសិទ្ធិដែលវាត្រូវការ — គ្មានលើសនេះទេ</td></tr>
<tr><td><b>Zero trust</b></td><td>“កុំទុកចិត្តដែរ ផ្ទៀងផ្ទាត់ជានិច្ច” — authenticate រាល់សំណើ ទោះជាខាងក្នុង</td></tr>
<tr><td>Separation of duties</td><td>បំបែកការងារសំខាន់ៗឲ្យមនុស្សច្រើនដើម្បីកុំឲ្យអ្នកណាម្នាក់ធ្វើតែឯងបាន</td></tr>
<tr><td>Need to know</td><td>ចូលប្រើព័ត៌មានតែបើចាំបាច់សម្រាប់តួនាទីរបស់អ្នក</td></tr>
<tr><td>Fail securely</td><td>ពេលខូច គួរ default ទៅជាបដិសេធសិទ្ធិចូល មិនមែនអនុញ្ញាត</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">ពន្យល់ defense in depth, least privilege, និង zero trust មួយបន្ទាត់នីមួយៗ។</div>
<div class="a"><b>Defense in depth</b> — controls ជាស្រទាប់ ដូច្នេះការខូចតែមួយមិនមែនជាមហន្តរាយ។ <b>Least privilege</b> — សិទ្ធិចូលអប្បបរមាដែលចាំបាច់សម្រាប់ការងារ។ <b>Zero trust</b> — ផ្ទៀងផ្ទាត់រាល់អ្នកប្រើ/device/សំណើ កុំសន្មតថា network ខាងក្នុងមានសុវត្ថិភាព។</div></div>
<div class="drill"><div class="q">កម្មសិក្សាការីថ្មីម្នាក់ត្រូវបានផ្តល់សិទ្ធិចូលតែ folder មួយដែលគេត្រូវការ។ នោះជាគោលការណ៍ណា?</div>
<div class="a"><b>Least privilege</b> (និង “need to know”)។</div></div>

<!-- EXAM -->
<h2 id="exam">15 · សំណួរបែបប្រឡងផ្សំ</h2>
<p class="lead">លាយដូចសន្លឹកប្រឡងពិត — ឆ្លើយឲ្យពេញលើក្រដាសសិន។</p>
<div class="exam">
<div class="drill"><div class="q">សម្រាប់នីមួយៗ៖ ប្រាប់ CIA property ដែលត្រូវវាយ និង control មួយដែលការពារវា។ (a) Packet sniffing នៃ logins, (b) ransomware encrypt files, (c) DDoS botnet។</div>
<div class="a"><ul>
<li>(a) Sniffing logins → បំផ្លាញ <b>Confidentiality</b> → ការពារដោយ <b>encryption (TLS/SSH/VPN)</b>។</li>
<li>(b) Ransomware → បំផ្លាញ <b>Availability</b> (និង Integrity) → ការពារដោយ <b>backups</b> (Corrective control) + antivirus។</li>
<li>(c) DDoS → បំផ្លាញ <b>Availability</b> → ការពារដោយ <b>DDoS protection / redundancy</b>។</li>
</ul></div></div>
<div class="drill"><div class="q">ក្រុមហ៊ុនមួយដំឡើង CCTV, សរសេរ acceptable-use policy, ដាក់ firewall, និងស្តារ server ពី backup ក្រោយពេលកើតហេតុ។ ប្រាប់ GROUP និង TYPE នៃនីមួយៗ។</div>
<div class="a"><ul>
<li>CCTV → Group៖ <b>Physical</b> · Type៖ <b>Detective</b> (+ Deterrent)។</li>
<li>AUP → Group៖ <b>Managerial</b> · Type៖ <b>Directive</b>។</li>
<li>Firewall → Group៖ <b>Technical</b> · Type៖ <b>Preventive</b>។</li>
<li>ស្តារពី backup → Type៖ <b>Corrective</b> (control ខ្លួនវាជា Technical)។</li>
</ul></div></div>
<div class="drill"><div class="q">អ្នកត្រូវបានផ្តល់ការអនុញ្ញាតឲ្យសាកល្បង client មួយ។ គូសបញ្ជាក់ workflow សុវត្ថិភាព៖ ផ្ទៀងផ្ទាត់ tools → រៀបចំ lab → រកឃើញ hosts → scan target → នៅស្របច្បាប់។ បញ្ចូលពាក្យបញ្ជាសំខាន់ៗ។</div>
<div class="a"><ol>
<li><b>ផ្ទៀងផ្ទាត់ download Kali</b>៖ <code>sha256sum</code> + <code>gpg --verify</code> (រកមើល “Good signature”)។</li>
<li><b>ដំណើរការក្នុង VM</b>; ប្តូរ password default <code>kali/kali</code> (<code>passwd</code>); update៖ <code>sudo apt update &amp;&amp; sudo apt full-upgrade</code>។</li>
<li><b>រកឃើញ hosts</b>៖ <code>sudo arp-scan --interface=eth0 --localnet</code>។</li>
<li><b>Scan target</b>៖ <code>nmap -T4 -A &lt;ip&gt;</code> → អាន PORT/STATE/SERVICE/VERSION។</li>
<li><b>ស្របច្បាប់/ethical</b>៖ តែក្នុង scope ដែលមានការអនុញ្ញាត; ហ្វឹកហាត់លើ <b>Metasploitable</b> ក្នុង network ដែលញែកដាច់។</li>
</ol></div></div>
<div class="drill"><div class="q">ពន្យល់ហេតុអ្វី “authorisation” ជាខ្សែស្រឡាយដែលភ្ជាប់ប្រភេទ hacker, pen-testing, និងការព្រមានច្បាប់ Kali។</div>
<div class="a">សកម្មភាពបច្ចេកទេសដូចគ្នា (scanning, exploiting) គឺ <b>ethical (white hat / pen test)</b> តែពេលមាន authorisation ប៉ុណ្ណោះ; ដោយគ្មានវា វាក្លាយជា <b>ឧក្រិដ្ឋ (black hat)</b> ឬយ៉ាងហោចណាស់ <b>gray hat</b>។ ការព្រមានច្បាប់ Kali អនុវត្តបន្ទាត់ដូចគ្នា៖ សាកល្បងតែអ្វីដែលអ្នកជាម្ចាស់ ឬត្រូវបានអនុញ្ញាត។ Intent + authorisation, មិនមែនជំនាញ, ជាអ្វីដែលកំណត់ភាពស្របច្បាប់។</div></div>
</div>



<!-- ============ PAST MIDTERM ============ -->
<h2 id="midterm">16 · Past midterm — practical + written · ប្រឡងពាក់កណ្ដាលឆមាសចាស់</h2>
<p class="lead">From a past <b>Cyber Security Principle</b> midterm (lecturer Pen Davith). Section I is hands-on Linux/Kali commands; Section II is short written answers. Each item is shown in <b>Khmer + English</b> with answers in <b>both languages</b>. · ពីប្រឡងពាក់កណ្ដាលឆមាសចាស់ មុខវិជ្ជា <b>Cyber Security Principle</b> (សាស្ត្រាចារ្យ ពេន ដាវីត)។ ផ្នែក I ជា command Linux/Kali; ផ្នែក II ជាចម្លើយសរសេរខ្លី។</p>
<div class="exam">
<p class="lead" style="margin:6px 0 0"><b>I · អនុវត្តន៍ (Practical)</b></p>
<div class="drill"><div class="q"><b>I.1</b> · អនុវត្តជំហានក្នុងការតម្លើង និងដំណើរការ ClamAV នៅលើ Linux Server។ <span class="kh">— Give the steps/commands to install and run the ClamAV antivirus on a Linux server.</span></div>
<div class="a"><b>EN —</b> <pre style="margin-top:6px"><span class="pr">sudo apt update</span>                              <span class="cm"># update the system first</span>
<span class="pr">sudo apt install</span> clamav clamav-daemon -y      <span class="cm"># install ClamAV</span>
<span class="pr">sudo freshclam</span>                                 <span class="cm"># update the virus database</span>
<span class="pr">sudo systemctl enable</span> clamav-daemon            <span class="cm"># enable on boot</span>
<span class="pr">sudo systemctl start</span> clamav-daemon             <span class="cm"># start the service</span>
<span class="pr">sudo systemctl status</span> clamav-daemon            <span class="cm"># check status</span>
<span class="pr">sudo clamscan</span> -r --bell -i /                    <span class="cm"># scan, ring bell, list infected only</span>
<span class="pr">sudo clamscan</span> -r --remove /home                 <span class="cm"># scan + delete infected files</span>
<span class="pr">cat</span> /var/log/clamav/daily_scan.log              <span class="cm"># read the scan result</span></pre><br><br><b>ខ្មែរ —</b> <pre style="margin-top:6px"><span class="pr">sudo apt update</span>                              <span class="cm"># update ប្រព័ន្ធជាមុនសិន</span>
<span class="pr">sudo apt install</span> clamav clamav-daemon -y      <span class="cm"># តម្លើង ClamAV</span>
<span class="pr">sudo freshclam</span>                                 <span class="cm"># update database មេរោគ</span>
<span class="pr">sudo systemctl enable</span> clamav-daemon            <span class="cm"># បើកពេល boot</span>
<span class="pr">sudo systemctl start</span> clamav-daemon             <span class="cm"># ចាប់ផ្ដើម service</span>
<span class="pr">sudo systemctl status</span> clamav-daemon            <span class="cm"># ពិនិត្យ status</span>
<span class="pr">sudo clamscan</span> -r --bell -i /                    <span class="cm"># scan, បន្លឺសំឡេង, បង្ហាញតែ infected</span>
<span class="pr">sudo clamscan</span> -r --remove /home                 <span class="cm"># scan + លុប file ឆ្លងមេរោគ</span>
<span class="pr">cat</span> /var/log/clamav/daily_scan.log              <span class="cm"># អានលទ្ធផល scan</span></pre></div></div>
<div class="drill"><div class="q"><b>I.2</b> · អនុវត្តជំហានក្នុងការតម្លើង និងដំណើរការ OpenVAS។ <span class="kh">— Give the steps/commands to install and run OpenVAS.</span></div>
<div class="a"><b>EN —</b> <pre style="margin-top:6px"><span class="pr">sudo apt update</span>                  <span class="cm"># update the system first</span>
<span class="pr">sudo apt autoremove</span>              <span class="cm"># remove unnecessary packages</span>
<span class="pr">sudo apt install</span> openvas         <span class="cm"># install OpenVAS</span>
<span class="pr">gvm-setup</span>                         <span class="cm"># download the vulnerability database</span>
<span class="pr">gvm-check-setup</span>                   <span class="cm"># verify the installation</span>
<span class="pr">ospd-openvas</span>                      <span class="cm"># start the scanner service</span></pre><b>Note:</b> the paper wrote <code>sudo auto remove</code> — the correct command is <code>sudo apt autoremove</code>.<br><br><b>ខ្មែរ —</b> <pre style="margin-top:6px"><span class="pr">sudo apt update</span>                  <span class="cm"># update ប្រព័ន្ធជាមុនសិន</span>
<span class="pr">sudo apt autoremove</span>              <span class="cm"># លុប package ដែលមិនចាំបាច់</span>
<span class="pr">sudo apt install</span> openvas         <span class="cm"># តម្លើង OpenVAS</span>
<span class="pr">gvm-setup</span>                         <span class="cm"># ទាញ database ភាពងាយរងគ្រោះ</span>
<span class="pr">gvm-check-setup</span>                   <span class="cm"># ផ្ទៀងផ្ទាត់ការតម្លើង</span>
<span class="pr">ospd-openvas</span>                      <span class="cm"># ចាប់ផ្ដើម service scanner</span></pre><b>ចំណាំ៖</b> សន្លឹកសរសេរ <code>sudo auto remove</code> — command ត្រឹមត្រូវគឺ <code>sudo apt autoremove</code>។</div></div>
<div class="drill"><div class="q"><b>I.3</b> · អនុវត្តជំហានក្នុងការតម្លើង និងដំណើរការ Metasploit Framework។ <span class="kh">— Give the steps/commands to install and run the Metasploit Framework.</span></div>
<div class="a"><b>EN —</b> <pre style="margin-top:6px"><span class="pr">sudo apt update</span>                              <span class="cm"># update the system</span>
<span class="pr">sudo msfdb init</span>                              <span class="cm"># initialize the database</span>
<span class="pr">msfconsole</span>                                   <span class="cm"># start the framework</span>
<span class="pr">db_nmap</span> -F -sV -T5 [IP / Host]                <span class="cm"># fast port + version scan inside msf</span>
<span class="cm"># example:</span>
<span class="pr">db_nmap</span> -F -sV -T5 10.0.0.0/24</pre><br><br><b>ខ្មែរ —</b> <pre style="margin-top:6px"><span class="pr">sudo apt update</span>                              <span class="cm"># update ប្រព័ន្ធ</span>
<span class="pr">sudo msfdb init</span>                              <span class="cm"># initialize database</span>
<span class="pr">msfconsole</span>                                   <span class="cm"># ចាប់ផ្ដើម framework</span>
<span class="pr">db_nmap</span> -F -sV -T5 [IP / Host]                <span class="cm"># scan port + version លឿន ក្នុង msf</span>
<span class="cm"># ឧទាហរណ៍៖</span>
<span class="pr">db_nmap</span> -F -sV -T5 10.0.0.0/24</pre><b>ខ្លឹមសារ flag៖</b> <code>-F</code> = fast (port ពេញនិយម), <code>-sV</code> = រកកំណែ service, <code>-T5</code> = លឿនបំផុត។</div></div>
<p class="lead" style="margin:14px 0 0"><b>II · សំណួរសរសេរ (Written)</b></p>
<div class="drill"><div class="q"><b>II.1</b> · ទស្សនៈ (views) លើ Cyber Security និង Kali Linux។ <span class="kh">— Your view / overview of Cyber Security and Kali Linux.</span></div>
<div class="a"><b>EN —</b> <b>Cyber Security</b> = protecting <b>data, systems and networks</b> from threats and attacks. Goal = the <b>CIA triad</b>: <b>Confidentiality, Integrity, Availability</b>. It is a broad field: network security, application security, cloud security, incident response, forensics, identity &amp; access management, risk management, and governance.<br><br>
<b>Kali Linux</b> = a <b>Debian-based</b> distribution pre-loaded with pentesting &amp; forensic tools (nmap, Metasploit, Burp, John, Aircrack-ng, …). Its role: an environment for <b>study, penetration testing, vulnerability assessment, and security research</b>. <b>Who is it for?</b> Penetration testers, security analysts, network administrators — anyone interested in cyber security and digital forensics.<br><br><b>ខ្មែរ —</b> <b>Cyber Security</b> = ការការពារ <b>ទិន្នន័យ ប្រព័ន្ធ និងបណ្ដាញ</b> ពីការគំរាមកំហែង (threats) និងការវាយប្រហារ (attacks)។ គោលដៅ = <b>CIA triad</b>៖ <b>Confidentiality (សុវត្ថិភាព), Integrity (ត្រឹមត្រូវ), Availability (អាចប្រើបាន)</b>។ វាជាវិស័យទូលំទូលាយ៖ network security, application security, cloud security, incident response, forensics, identity &amp; access management, risk management, និងផ្នែកគ្រប់គ្រង។<br><br>
<b>Kali Linux</b> = distribution <b>មូលដ្ឋាន Debian</b> ដែលមានឧបករណ៍ pentesting &amp; forensic ស្រាប់ (nmap, Metasploit, Burp, John, Aircrack-ng, …)។ តួនាទី៖ ជា environment សម្រាប់ <b>ការសិក្សា, penetration testing, vulnerability assessment, និង security research</b>។ <b>សម្រាប់នរណា?</b> Penetration testers, security analysts, network administrators — អ្នកណាដែលចាប់អារម្មណ៍លើ cyber security និង digital forensics។</div></div>
<div class="drill"><div class="q"><b>II.2</b> · ជំហានដែល Attacker ប្រតិបត្តិ មុនពេលវាយប្រហារគោលដៅ។ <span class="kh">— What steps does an attacker perform before attacking a target?</span></div>
<div class="a"><b>EN —</b> <ol>
<li><b>Define the target</b> — decide exactly what they want to attack.</li>
<li><b>Scan the ports</b> of the target device — <code>nmap [options] address(range)</code>.</li>
<li><b>Scan / gather information</b> about the target IP to learn more detail — a tool like <b>OpenVAS</b> can assist the scan (vulnerability assessment).</li>
</ol>
This is the <b>reconnaissance / scanning</b> phase: know the target, find open ports &amp; services, then find weaknesses.<br><br><b>ខ្មែរ —</b> <ol>
<li><b>កំណត់គោលដៅ</b> — សម្រេចថាចង់វាយប្រហារអ្វីឲ្យច្បាស់។</li>
<li><b>Scan port</b> របស់ឧបករណ៍គោលដៅ — <code>nmap [options] address(range)</code>។</li>
<li><b>Scan / ប្រមូលព័ត៌មាន</b> អំពី IP គោលដៅ ដើម្បីដឹងលម្អិតបន្ថែម — ឧបករណ៍ដូចជា <b>OpenVAS</b> អាចជួយ scan (vulnerability assessment)។</li>
</ol>
នេះជាដំណាក់កាល <b>reconnaissance / scanning</b>៖ ស្គាល់គោលដៅ, រក port &amp; service ដែលបើក, រួចរកចំណុចខ្សោយ។</div></div>
<div class="drill"><div class="q"><b>II.3</b> · តើ External check គឺជាអ្វី? និងអត្ថប្រយោជន៍របស់វា។ <span class="kh">— What is an External check? And its benefits.</span></div>
<div class="a"><b>EN —</b> <b>External check</b> (External Security Testing / External Audit / External Vulnerability Assessment) = testing security <b>from outside the network</b> to evaluate whether a system or network is <b>vulnerable to outside attackers</b> (hackers). Benefits:
<ul>
<li><b>Find vulnerabilities</b> attackers could exploit, before they do.</li>
<li><b>Prevent external attacks.</b></li>
<li><b>Secure exposed/public systems</b> — web server, mail server, API gateway are checked for adequate protection.</li>
<li><b>Comply with standards &amp; regulations</b> — ISO 27001, PCI DSS, GDPR, NIST.</li>
<li><b>Build trust and resilience</b> — shows the organization is proactive, not waiting to be attacked.</li>
</ul><br><br><b>ខ្មែរ —</b> <b>External check</b> (External Security Testing / External Audit / External Vulnerability Assessment) = ការត្រួតពិនិត្យសន្តិសុខ <b>ពីខាងក្រៅបណ្ដាញ</b> ដើម្បីវាយតម្លៃថា ប្រព័ន្ធ ឬបណ្ដាញ <b>ងាយរងគ្រោះពីអ្នកវាយប្រហារខាងក្រៅ</b> (hackers) ឬអត់។ អត្ថប្រយោជន៍៖
<ul>
<li><b>រកចន្លោះអសុវត្ថិភាព</b> ដែលអ្នកវាយប្រហារអាចប្រើ មុនពួកគេរកឃើញ។</li>
<li><b>ការពារពីការវាយប្រហារខាងក្រៅ</b>។</li>
<li><b>ធានាសុវត្ថិភាពប្រព័ន្ធបើកចំហ</b> — web server, mail server, API gateway ត្រូវត្រួតពិនិត្យថាមានការការពារគ្រប់គ្រាន់។</li>
<li><b>អនុវត្តតាមស្តង់ដារ និងបទបញ្ញត្តិ</b> — ISO 27001, PCI DSS, GDPR, NIST។</li>
<li><b>បង្កើនភាពជឿជាក់ និងភាពរឹងមាំ</b> — បង្ហាញថាអង្គការសកម្ម មិនរង់ចាំឲ្យមានការវាយប្រហារ។</li>
</ul></div></div>
</div>

<p class="footnote">សង់ឡើងពី Cybersecurity Principles deck (Pen Davith / Davith Pen IT Academy) — controls, network security, hardening lab, hacking, និងជំពូក Kali Linux ពេញលេញ។ Print ឬ “Save as PDF” នឹងបង្ហាញគ្រប់ចម្លើយ។</p>
`;
export default html;
