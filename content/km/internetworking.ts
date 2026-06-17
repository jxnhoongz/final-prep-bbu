const html = `


<p class="lead">របៀបប្រើ៖ <b>អានប្រអប់គំនិត (concept box)</b> ជាមុនសិន (គំរូក្នុងគំនិត) បន្ទាប់មក <b>បិទអេក្រង់ ហើយឆ្លើយសំណួរ drill នីមួយៗឱ្យឮ ឬសរសេរលើក្រដាសមុននឹងចុចបង្ហាញចម្លើយ</b>។ ការស្គាល់មុខ (recognition) ធ្វើឱ្យយើងគិតថាយើងចេះ ប៉ុន្តែមានតែការនឹកចេញដោយខ្លួនឯង (retrieval) ទេទើបបញ្ជាក់ថាយើងចេះពិត។ Config នីមួយៗមាន drill ប្រភេទ “ពន្យល់បន្ទាត់នេះ” ព្រោះការប្រឡងលាយចម្លើយ <i>សរសេរ config</i> ជាមួយ <i>ពន្យល់គំនិត</i>។</p>
<p class="lead" style="color:#8a3f08"><b>មិនធ្លាប់រៀនរឿងនេះ / ភ្លេចអស់ហើយ?</b> កុំភ័យ — ចាប់ផ្តើមពី <a href="#foundations" style="color:#b4540a;font-weight:700">ផ្នែកទី 0</a>។ វាសង់មុខវិជ្ជានេះឡើងពីសូន្យ ដោយប្រើការប្រៀបធៀបងាយៗតែមួយ។ ផ្នែកផ្សេងទៀតនឹងយល់បានងាយក្រោយពេលនោះ។</p>

<!-- ============ FOUNDATIONS ============ -->
<h2 id="foundations" class="zero">0 · ចាប់ផ្តើមនៅទីនេះ — មុខវិជ្ជាទាំងមូលជាពាក្យសាមញ្ញ</h2>
<p>បើផ្នែកខាងក្រោមមើលទៅដូចជាពាក្យបំភ័ន្ត (OSPF, AD, LSDB, wildcard…) <b>សូមអាននេះមុនសិន</b>។ វាសន្មត់ថាអ្នក <b>មិនចេះអ្វីសោះ</b>។ ពេលគំនិតពីរបីនេះចូលក្បាលហើយ ផ្នែកដែលនៅសល់នឹងលែងជាពាក្យចៃដន្យ ហើយក្លាយជា “អូ — នេះគ្រាន់តែជាគំនិតដដែលម្តងទៀតប៉ុណ្ណោះ”។</p>

<div class="concept"><span class="label">ការប្រៀបធៀបតែមួយសម្រាប់មុខវិជ្ជាទាំងមូល</span>
Networking គ្រាន់តែជា <b>ប្រព័ន្ធប្រៃសណីយ៍សម្រាប់ទិន្នន័យ</b>។ កុំព្យូទ័របញ្ជូនកញ្ចប់ទិន្នន័យតូចៗហៅថា <b>packet</b>។ ដើម្បីឱ្យ packet មួយទៅពីកន្លែងមួយដល់កន្លែងមួយ វាលោតកាត់ <b>ការិយាល័យចែកសំបុត្រ</b> ជាបន្តបន្ទាប់។ ការិយាល័យចែកសំបុត្រទាំងនោះគឺ <b>router</b>។ <b>ស្ទើរតែអ្វីៗទាំងអស់ក្នុងមុខវិជ្ជានេះគឺនិយាយអំពីរបៀបដែល router សម្រេចចិត្តថាត្រូវបញ្ជូន packet នីមួយៗទៅណា។</b> ទុករូបភាពនេះក្នុងក្បាល ហើយពាក្យបច្ចេកទេសខាងក្រោមគ្រាន់តែជាស្លាកដាក់លើផ្នែកនីមួយៗរបស់វា។</div>
<div class="figure"><div class="figcap">packet លោត​ពី​ការិយាល័យ​មួយ​ទៅ​មួយ រហូត​ដល់​គោលដៅ</div>
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
  <span class="flow-loop">នៅ router នីមួយៗ៖ រក​គោលដៅ​ក្នុង <b>routing table</b> → បញ្ជូន​ចេញ​តាម​ទ្វារ​ត្រូវ។ មិន​ក្នុង​តារាង → ទម្លាក់ packet។ <b>ការ​រក​នោះ​ជា​ការងារ​ទាំងមូល​របស់ router។</b></span>
</div></div></div>

<h3>1. តើ network និង IP address ជាអ្វី?</h3>
<p><b>Network</b> គឺជាក្រុមឧបករណ៍ដែលអាចនិយាយជាមួយគ្នាដោយផ្ទាល់ — ដូចជាអគារការិយាល័យមួយ ឬ Wi-Fi ផ្ទះអ្នក។ ឧបករណ៍នីមួយៗមាន <b>IP address</b> = អាសយដ្ឋានប្រៃសណីយ៍របស់វា សរសេរជាលេខបួនក្រុម ឧ. <code>192.168.1.10</code>។ Network ទាំងមូលក៏មានអាសយដ្ឋាន + ទំហំ សរសេរបែប <code>192.168.1.0/24</code> — អានថា “ផ្លូវ <code>192.168.1.___</code> ផ្ទះលេខ .0 ដល់ .255”។</p>

<h3>2. តើ “/24” នោះជាអ្វី? (subnet mask)</h3>
<p><code>/24</code> (ឬទម្រង់វែង <code>255.255.255.0</code>) គ្រាន់តែប្រាប់អ្នកថា <b>ផ្លូវនោះធំប៉ុនណា</b> — មានអាសយដ្ឋានប៉ុន្មាននៅក្នុងក្រុម។ ផ្នែកដែលផ្ទុយនឹងវិចារណញ្ញាណ៖ <b>លេខ slash ធំជាង មានន័យថាក្រុមតូចជាង។</b></p>
<table>
<thead><tr><th>សរសេរជា</th><th>មានអាសយដ្ឋានប៉ុន្មាន</th><th>ប្រើសម្រាប់</th></tr></thead>
<tbody>
<tr><td>/24</td><td>256 (ផ្លូវធម្មតា)</td><td>LAN កុំព្យូទ័រធម្មតា</td></tr>
<tr><td>/30</td><td>4 (ច្រកល្ហកតូច)</td><td>តំណភ្ជាប់រវាង router ពីរ</td></tr>
<tr><td>/16</td><td>65,536 (ទីក្រុងទាំងមូល)</td><td>អង្គភាពធំ</td></tr>
</tbody>
</table>

<h3>3. តើ router ជាអ្វី?</h3>
<p><b>Router</b> គឺជាឧបករណ៍ដែលភ្ជាប់ network <b>ផ្សេងគ្នា</b> ហើយបញ្ជូនទិន្នន័យរវាងពួកវា — ការិយាល័យចែកសំបុត្ររវាងផ្លូវនិងទីក្រុង។ រន្ធខ្សែនីមួយៗលើ router គឺជា <b>interface</b> (គិតថា៖ ទ្វារ) ហើយទ្វារនីមួយៗបែរមុខទៅ network ផ្សេងគ្នា។</p>

<h3>4. Routing table — GPS របស់ router</h3>
<div class="concept"><span class="label">នេះជាគំនិតសំខាន់បំផុតមួយគត់</span>
Router នីមួយៗរក្សា <b>routing table</b>៖ បញ្ជីដែលនិយាយថា <b>“ដើម្បីទៅដល់ network X → បញ្ជូនវាចេញតាមទ្វារនេះ / ប្រគល់វាឱ្យ router បន្ទាប់នោះ។”</b> ពេល packet មកដល់ router រកមើលគោលដៅក្នុង table នេះ រួចបញ្ជូនវាបន្ត។ <b>ការរកមើលនោះគឺជាការងារទាំងមូលរបស់ router។</b> បើគោលដៅមិននៅក្នុង table ទេ packet នោះត្រូវបោះចោល។ ដូច្នេះ៖ <b>ចំណុចសំខាន់នៃអ្វីៗផ្សេងទៀតគ្រាន់តែជាការបំពេញ table នេះឱ្យត្រឹមត្រូវ។</b></div>

<h3>5. វិធីពីរបំពេញ table៖ static ទល់នឹង dynamic</h3>
<p><b>Static</b> = មនុស្សវាយ route នីមួយៗដោយដៃ។ បានសម្រាប់ router 2 គ្រឿង ប៉ុន្តែមិនអាចទៅរួចសម្រាប់ 200 គ្រឿង។ <b>Dynamic</b> = router ប្រាប់គ្នាទៅវិញទៅមកដោយស្វ័យប្រវត្តិ <b>នូវអ្វីដែលពួកវាអាចទៅដល់</b> ហើយសង់ table ដោយខ្លួនឯង។ អ្វីដែលអនុញ្ញាតឱ្យពួកវានិយាយដំណឹងគ្នាបែបនោះ ហៅថា <b>routing protocol</b>។</p>

<h3>6. តើ routing protocol ជាអ្វី — ហើយហេតុអ្វីមានបួន?</h3>
<p><b>Routing protocol</b> គឺជា <b>ភាសា + យុទ្ធសាស្ត្រ</b> ដែល router ប្រើដើម្បីប្រាប់គ្នាថា “នេះជាអ្វីដែលខ្ញុំអាចទៅដល់”។ មានច្រើនព្រោះពួកវាមានការដោះដូរផ្សេងគ្នា (សាមញ្ញ ទល់នឹង ឆ្លាត ការិយាល័យតូច ទល់នឹង Internet ទាំងមូល)។ <b>ពួកវាទាំងអស់ដោះស្រាយបញ្ហាដដែល</b> — បំពេញ table — គ្រាន់តែតាមវិធីផ្សេងគ្នា៖</p>
<table>
<thead><tr><th>Protocol</th><th>ក្នុងឃ្លាមួយ</th></tr></thead>
<tbody>
<tr><td><b>RIP</b></td><td>ចាស់បំផុត និងល្ងង់បំផុត។ សម្រាប់ network តូចៗប៉ុណ្ណោះ។</td></tr>
<tr><td><b>OSPF</b></td><td>ឆ្លាត និងលឿន។ ប្រើនៅក្នុងក្រុមហ៊ុនមួយ។ (ភាគច្រើននៃប្រឡងរបស់អ្នក)</td></tr>
<tr><td><b>EIGRP</b></td><td>hybrid លឿនរបស់ Cisco រក្សាផ្លូវបម្រុងត្រៀមរួចជាស្រេច។</td></tr>
<tr><td><b>BGP</b></td><td>ដំណើរការ Internet ពិតប្រាកដ — ភ្ជាប់ក្រុមហ៊ុន/ISP ទាំងមូលជាមួយគ្នា។</td></tr>
</tbody>
</table>

<h3>7. AD និង metric — ច្បាប់កាត់ស្មើពីរ</h3>
<p>ពេលខ្លះ router ស្តាប់ឮអំពី <b>គោលដៅដដែលពីprotocol ពីរផ្សេងគ្នា</b> ហើយពួកវាមិនយល់ស្របគ្នាលើផ្លូវល្អបំផុត។ វាសម្រេចចិត្តតាមពីរជំហាន៖</p>
<div class="concept"><span class="label">ជំហានទី 1 រួចជំហានទី 2</span>
<b>Administrative Distance (AD)</b> ឆ្លើយសំណួរ <b>“ខ្ញុំជឿពាក្យអ្នកណាជាង?”</b> Protocol នីមួយៗមានលេខទុកចិត្ត — <b>ទាបជាង = ទុកចិត្តជាង</b> — ហើយ router ជឿអ្នកដែលលេខទាបជាង។ <i>(នោះហើយជាអ្វីដែលផ្នែកទី 1 និយាយ។)</i><br><br>
<b>Metric</b> ចូលមកលេងតែ <b>បន្ទាប់</b> ពីវាបានសម្រេចជ្រើស protocol មួយរួចហើយ៖ បើ protocol នោះផ្តល់ផ្លូវពីរ metric គឺជា <b>ពិន្ទុដែលវាប្រើដើម្បីជ្រើសផ្លូវល្អជាង</b>។ Protocol នីមួយៗវាស់ខុសគ្នា — RIP រាប់ <i>ឆ្លងកាត់ router ប៉ុន្មាន</i> (hop) ឯ OSPF ប្រើ <i>ល្បឿន link</i>។</div>

<h3>8. គ្រឿងផ្សំដែលនៅសល់ (មួយបន្ទាត់ម្នាក់)</h3>
<table>
<tbody>
<tr><td><b>ACL</b></td><td>អ្នកយាមទ្វារដែលមានបញ្ជីភ្ញៀវ — អនុញ្ញាត ឬ ទប់ស្កាត់ traffic តាមច្បាប់។</td></tr>
<tr><td><b>NAT / PAT</b></td><td>អ្នកបកប្រែ — ប្តូរអាសយដ្ឋានឯកជន (private) ផ្ទះអ្នកទៅជាអាសយដ្ឋាន Internet សាធារណៈ (public) តែមួយ។</td></tr>
<tr><td><b>VPN (IPsec)</b></td><td>ផ្លូវរូងក្រោមដីពាសក្រោះ — តំណភ្ជាប់ឯកជន អ៊ិនគ្រីប រវាងការិយាល័យពីរលើ Internet សាធារណៈ។</td></tr>
<tr><td><b>GRE</b></td><td>ផ្លូវរូងធម្មតា (គ្មានក្រោះ) — ធ្វើឱ្យ router ពីរនៅឆ្ងាយគ្នាដើរដូចជាភ្ជាប់គ្នាដោយផ្ទាល់។</td></tr>
<tr><td><b>DHCP</b></td><td>បុគ្គលិកតុទទួលភ្ញៀវ — ចែក IP address ឱ្យឧបករណ៍ដោយស្វ័យប្រវត្តិ។</td></tr>
</tbody>
</table>

<div class="why"><span class="label">របៀបរៀនផ្នែកដែលនៅសល់នៃសន្លឹកនេះ</span>
ផ្នែកត្រូវបានដាក់លេខឱ្យត្រូវនឹង <b>លំដាប់សំណួរប្រឡង</b> របស់អ្នក មិនមែនងាយជាងមុនទេ។ បើអ្នករៀនថ្មីស្រឡាង លំដាប់នេះទន់ភ្លន់ជាង៖ <b>0 (នេះ) → 1 subnet mask → 2 IPv6 → 6 OSPF → 7 RIP → 8 EIGRP → 9 BGP</b> បន្ទាប់មក <b>3 AD → 4 classify → 5 wildcard</b> រួចគ្រឿងផ្សំ <b>12–16</b>។ សម្រាប់ protocol នីមួយៗ សួរសំណួរបួនដដែល៖ <b>(1)</b> វាដោះស្រាយបញ្ហាអ្វី? <b>(2)</b> វាចែករំលែក route យ៉ាងម៉េច? <b>(3)</b> metric &amp; AD របស់វាជាអ្វី? <b>(4)</b> config របស់វាមើលទៅយ៉ាងម៉េច?</div>

<h3>Drill មូលដ្ឋាន (ចាក់សោទាំងនេះមុននឹងបន្តទៅមុខ)</h3>
<div class="drill"><div class="q">ក្នុងមួយប្រយោគ៖ តើ router ពិតជាធ្វើអ្វី?</div>
<div class="a">វា <b>បញ្ជូន packet រវាង network ផ្សេងគ្នា</b> ដោយរកមើលគោលដៅក្នុង <b>routing table</b> របស់វា រួចបញ្ជូនវាតាមផ្លូវត្រឹមត្រូវ។</div></div>
<div class="drill"><div class="q">តើ routing table ជាអ្វី ហើយមានអ្វីកើតឡើងបើគោលដៅមិននៅក្នុងវា?</div>
<div class="a">បញ្ជីនៃ “ដើម្បីទៅដល់ network X → បញ្ជូនវាតាមផ្លូវនេះ”។ បើគោលដៅមិនមានក្នុងបញ្ជី router <b>បោះចោល packet</b> (លុះត្រាតែវាមាន default route — “ពេលមិនច្បាស់ បញ្ជូនមកទីនេះ” ដែលចាប់ទាំងអស់)។</div></div>
<div class="drill"><div class="q">Static ទល់នឹង dynamic routing ជាពាក្យសាមញ្ញ?</div>
<div class="a"><b>Static</b> = មនុស្សវាយ route នីមួយៗដោយដៃ។ <b>Dynamic</b> = router ដំណើរការ protocol ដើម្បីប្រាប់គ្នាថាអាចទៅដល់អ្វីខ្លះ ហើយបំពេញ table ដោយស្វ័យប្រវត្តិ។</div></div>
<div class="drill"><div class="q">AD ទល់នឹង metric — ខុសគ្នាត្រង់ណា?</div>
<div class="a"><b>AD</b> = ត្រូវជឿ <b>protocol/ប្រភព</b> ណាពេលពីរមិនយល់ស្រប (ទាបជាង = ទុកចិត្តជាង)។ <b>Metric</b> = ក្នុង protocol តែមួយ ផ្លូវ​ណាល្អជាង។ AD ជ្រើសប្រភព metric ជ្រើសផ្លូវ។</div></div>
<div class="drill"><div class="q">តើ <code>192.168.1.0/24</code> មានន័យអ្វី ហើយ <code>/30</code> ខុសគ្នាយ៉ាងម៉េច?</div>
<div class="a"><code>/24</code> = network នៃ <b>256</b> អាសយដ្ឋាន (LAN ធម្មតា)។ <code>/30</code> = network នៃ <b>4</b> អាសយដ្ឋានតែប៉ុណ្ណោះ ប្រើសម្រាប់តំណភ្ជាប់តូចរវាង router ពីរ។ លេខ slash ធំជាង = network តូចជាង។</div></div>
<div class="drill"><div class="q">ដាក់ឈ្មោះ routing protocol ទាំងបួន ហើយប្រាប់ថាមួយណាដំណើរការ Internet។</div>
<div class="a"><b>RIP, OSPF, EIGRP, BGP</b> — ហើយ <b>BGP</b> ដំណើរការ Internet (វាភ្ជាប់ក្រុមហ៊ុន/ISP ទាំងមូល បីផ្សេងទៀតធ្វើការនៅក្នុងអង្គភាពមួយ)។</div></div>

<!-- ============ AD ============ -->


<!-- ============ SUBNET MASKS ============ -->
<h2 id="subnet" class="zero">1 · IP address &amp; subnet mask — របៀបគណនាជាក់ស្តែង</h2>
<div class="plain"><span class="label">ជាពាក្យសាមញ្ញ</span>IP address មានពីរផ្នែក៖ <b>អ្នកនៅលើ network ណា</b> + <b>អ្នកជាឧបករណ៍ណា</b>។ <b>Subnet mask</b> គ្រាន់តែជាខ្សែបន្ទាត់ដែលប្រាប់ថាផ្នែកមួយចប់ត្រង់ណា ហើយផ្នែកមួយទៀតចាប់ផ្តើមត្រង់ណា។ អ្វីៗខាងក្រោមគឺជារបៀបរកខ្សែបន្ទាត់នោះ និងរាប់អាសយដ្ឋាន — ជាមួយល្បិចមួយ (“block size”) ដែលធ្វើឱ្យលឿន។</div>

<h3>រចនាសម្ព័ន្ធ៖ 32 bit, 4 octet</h3>
<p>IPv4 address មាន <b>32 bit</b> បង្ហាញជា <b>4 octet</b> (8 bit ក្នុងមួយ) ឧ. <code>192.168.1.10</code>។ Octet នីមួយៗមានតម្លៃ 0–255 (ព្រោះ 8 bit = 2⁸ = 256 តម្លៃដែលអាចមាន)។ <b>Subnet mask</b> ក៏ជា 4 octet ដែរ៖ <b>bit 1 របស់វាសម្គាល់ផ្នែក network ឯ bit 0 របស់វាសម្គាល់ផ្នែក host</b>។ <code>/24</code> (CIDR notation) គ្រាន់តែមានន័យថា “bit ដំបូង <b>24 bit ជា 1</b>” = <code>255.255.255.0</code>។</p>

<div class="figure"><div class="figcap">/24 — ត្រង់ណា​ផ្នែក network ចប់ ហើយ​ផ្នែក host ចាប់ផ្តើម</div>
<div class="figbox"><div class="addr">
  <div class="addr-row">
    <span class="addr-oct is-net">192</span>
    <span class="addr-oct is-net">168</span>
    <span class="addr-oct is-net">1</span>
    <span class="addr-oct is-host">10</span>
  </div>
  <div class="addr-legend">
    <span class="addr-key"><i class="is-net"></i> network — 24 bit ដំបូង (the “/24”)</span>
    <span class="addr-key"><i class="is-host"></i> host — 8 bit ចុងក្រោយ → 2⁸ − 2 = 254 ប្រើបាន</span>
  </div>
</div></div></div>
<h3>ជំហានទី 1 — រាប់អាសយដ្ឋាន</h3>
<div class="concept"><span class="label">រូបមន្តពីរដែលអ្នកត្រូវការ</span>
<b>Host bit</b> = 32 − (លេខ slash)។ <b>អាសយដ្ឋានសរុប</b> = 2<sup>host bit</sup>។ <b>Host ដែលប្រើបាន</b> = សរុប − 2 (អ្នកដក <b>network address</b> និង <b>broadcast address</b> ដែលមិនអាចផ្តល់ឱ្យឧបករណ៍)។</div>
<table>
<thead><tr><th>CIDR</th><th>Subnet mask</th><th>សរុប</th><th>Host ប្រើបាន</th><th>ការប្រើទូទៅ</th></tr></thead>
<tbody>
<tr><td>/24</td><td>255.255.255.0</td><td>256</td><td>254</td><td>LAN ធម្មតា</td></tr>
<tr><td>/25</td><td>255.255.255.128</td><td>128</td><td>126</td><td>ពាក់កណ្តាល LAN</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>64</td><td>62</td><td>LAN តូចជាង</td></tr>
<tr><td>/27</td><td>255.255.255.224</td><td>32</td><td>30</td><td>LAN តូច</td></tr>
<tr><td>/28</td><td>255.255.255.240</td><td>16</td><td>14</td><td>LAN ល្អិត</td></tr>
<tr><td>/29</td><td>255.255.255.248</td><td>8</td><td>6</td><td>host មួយក្តាប់</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>4</td><td>2</td><td>តំណ router ទៅ router</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">មើលឃើញហើយថាហេតុអ្វី <code>/30</code> ល្អឥតខ្ចោះសម្រាប់តំណរវាង router ពីរ៖ មានអាសយដ្ឋានប្រើបានពិតប្រាកដ 2 មួយសម្រាប់ router នីមួយៗ។</p>

<h3>ជំហានទី 2 — អាន mask ដែលធ្លាក់ក្នុង octet (តម្លៃវេទមន្ត 8)</h3>
<p>ពេលព្រំដែន network/host ធ្លាក់ <b>នៅខាងក្នុង</b> octet មួយ octet នោះជាតម្លៃមួយក្នុងចំណោម 8 ប៉ុណ្ណោះ។ ទន្ទេញជួរនេះ — វាជាល្បែងទាំងមូល៖</p>
<table>
<thead><tr><th>Mask octet</th><th>Binary</th><th>bit 1</th><th>Block size (256 − octet)</th></tr></thead>
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

<h3>ជំហានទី 3 — ល្បិច “block size” (រកថា IP មួយនៅក្នុង network ណា)</h3>
<div class="concept"><span class="label">ផ្លូវកាត់ដែលជំនួស binary ទាំងអស់</span>
<b>Block size = 256 − octet mask ដែលគួរយកចិត្តទុកដាក់។</b> បន្ទាប់មក network ចាប់ផ្តើមនៅ​ពហុគុណនៃ block size នោះ។ រកថាអាសយដ្ឋានរបស់អ្នកធ្លាក់ក្នុង block ណា → នោះជា <b>network address</b> ឯអាសយដ្ឋានមុន block បន្ទាប់គឺជា <b>broadcast</b>។</div>
<div class="why"><span class="label">ឧទាហរណ៍គណនា — 192.168.1.100 /26</span>
<b>/26</b> = mask <code>255.255.255.192</code>។ Octet គួរយកចិត្តទុកដាក់ = octet ទី 4 (192)។ <b>Block size = 256 − 192 = 64។</b> ដូច្នេះ network ចាប់ផ្តើមនៅ <code>.0, .64, .128, .192</code>។ <code>.100</code> ធ្លាក់ក្នុង block <b>.64</b> (ដែលដើរពី .64–.127)។ → Network = <code>192.168.1.64</code>, broadcast = <code>192.168.1.127</code>, ជួរប្រើបាន = <code>.65–.126</code>។</div>

<div class="drill"><div class="q">តើ <b>host ប្រើបាន</b> ប៉ុន្មាននៅក្នុង /24, /26, និង /30? (គណនាចេញ កុំទាយ)</div>
<div class="a">/24 → 2⁸ − 2 = <span class="blank">254</span> · /26 → 2⁶ − 2 = <span class="blank">62</span> · /30 → 2² − 2 = <span class="blank">2</span>។ (Host bit = 32 − slash; ប្រើបាន = 2^hostbit − 2។)</div></div>
<div class="drill"><div class="q">តើ /27 ផ្តល់ subnet mask អ្វី ហើយ block size របស់វាប៉ុន្មាន?</div>
<div class="a">/27 = 27 bit នៃ 1 = <code>255.255.255.224</code>។ Block size = 256 − 224 = <span class="blank">32</span>។ Network៖ .0, .32, .64, .96, .128 …</div></div>
<div class="drill"><div class="q">តើ 192.168.1.200 /26 ជាកម្មសិទ្ធិ network ណា? ផ្តល់ network + broadcast។</div>
<div class="a">Block size 64 → block .0/.64/.128/<b>.192</b>។ .200 នៅក្នុង block <b>.192</b> (ជួរ .192–.255)។ Network = <code>192.168.1.192</code>, broadcast = <code>192.168.1.255</code>។</div></div>
<div class="drill"><div class="q">ហេតុអ្វី /30 ជាស្តង់ដារសម្រាប់តំណរវាង router ពីរ?</div>
<div class="a">វាមានអាសយដ្ឋានប្រើបានពិតប្រាកដ <b>2</b> — មួយក្នុងមួយ router — មិនខ្ជះខ្ជាយអ្វីសោះ។ (4 សរុប − network − broadcast = 2)។</div></div>

<!-- ============ IPv6 ============ -->
<h2 id="ipv6">2 · IPv6 addressing — របៀបសរសេរ &amp; បំព្រួញ</h2>
<div class="plain"><span class="label">ជាពាក្យសាមញ្ញ</span>ពិភពលោកអស់ IPv4 address (មានតែប្រហែល 4.3 ពាន់លាន)។ IPv6 ជាការជំនួសដែលមានទំហំអាសយដ្ឋាន <b>ធំជាងច្រើនលើសលប់</b>។ ចំណុចសម្រាប់ប្រឡង៖ អាសយដ្ឋានវែង ដូច្នេះមាន <b>ច្បាប់ពីរសម្រាប់បំព្រួញ</b> — ហើយអ្នកត្រូវដឹងច្បាស់ថាលេខសូន្យណាដែលអ្នកអាចទម្លាក់ចេញ។</div>

<h3>ទម្រង់</h3>
<p>IPv6 address មាន <b>128 bit</b> (ធៀបនឹង 32 សម្រាប់ IPv4) សរសេរជា <b>8 ក្រុមនៃលេខ hexadecimal 4 ខ្ទង់</b> បំបែកដោយ colon។ លេខ hex គឺ 0–9 និង a–f។ ក្រុមនីមួយៗ = 16 bit។</p>
<div class="codewrap"><div class="cap">IPv6 address ពេញលេញ</div>
<pre>2001:0db8:0000:0000:0000:ff00:0042:8329</pre></div>

<h3>ច្បាប់បំព្រួញពីរ</h3>
<div class="concept"><span class="label">ច្បាប់ទី 1 — ទម្លាក់សូន្យនាំមុខក្នុងក្រុមនីមួយៗ</span>
ក្នុងក្រុមណាមួយ អ្នកអាចលុបសូន្យ <b>នាំមុខ</b> (ដែលនៅខាងមុខ)។ <code>0db8</code>→<code>db8</code>, <code>0042</code>→<code>42</code>, <code>0000</code>→<code>0</code>។ ប៉ុន្តែ <code>ff00</code> នៅដដែល <code>ff00</code> — សូន្យទាំងនោះនៅ <b>ខាងចុង</b> មិនមែនខាងមុខ។</div>
<div class="concept"><span class="label">ច្បាប់ទី 2 — ក្រុមសូន្យទាំងអស់ជាប់គ្នាមួយជួរក្លាយជា ::</span>
<b>ជួរក្រុមសូន្យទាំងអស់ជាប់គ្នាមួយ</b> អាចជំនួសដោយ <code>::</code>។ អ្នកអាចធ្វើបែបនេះ <b>តែម្តងគត់</b> ក្នុងអាសយដ្ឋានមួយ (បើធ្វើពីរដង គ្មាននរណាដឹងថា <code>::</code> នីមួយៗតំណាងឱ្យក្រុមសូន្យប៉ុន្មាន)។</div>
<div class="why"><span class="label">ច្បាប់ទាំងពីរអនុវត្ត ម្តងមួយជំហាន</span>
ពេញ៖ &nbsp;<code>2001:0db8:0000:0000:0000:ff00:0042:8329</code><br>
ច្បាប់ទី 1 (ទម្លាក់សូន្យនាំមុខ)៖ &nbsp;<code>2001:db8:0:0:0:ff00:42:8329</code><br>
ច្បាប់ទី 2 (ជួរសូន្យ → ::)៖ &nbsp;<b><code>2001:db8::ff00:42:8329</code></b></div>

<table>
<thead><tr><th>អនុញ្ញាត</th><th>មិនអនុញ្ញាត</th></tr></thead>
<tbody>
<tr><td>ទម្លាក់សូន្យ <b>នាំមុខ</b>៖ <code>0042 → 42</code></td><td>ទម្លាក់សូន្យ <b>ខាងចុង/កណ្តាល</b>៖ <code>ff00 → ff</code> ✗</td></tr>
<tr><td>ប្រើ <code>::</code> សម្រាប់ជួរសូន្យមួយ</td><td>ប្រើ <code>::</code> <b>ពីរដង</b> ក្នុងអាសយដ្ឋានមួយ ✗</td></tr>
<tr><td><code>0000</code> តែឯង → <code>0</code></td><td>ទុកក្រុមមួយឱ្យមានលេខ hex លើសពី 4 ខ្ទង់ ✗</td></tr>
</tbody>
</table>

<h3>អាសយដ្ឋានពីរបីដែលគួរស្គាល់</h3>
<table>
<tbody>
<tr><td><code>::1</code></td><td>Loopback (IPv6 version នៃ 127.0.0.1)</td></tr>
<tr><td><code>::</code></td><td>អាសយដ្ឋានមិនកំណត់ / សូន្យទាំងអស់</td></tr>
<tr><td><code>fe80::/10</code></td><td>Link-local (ផ្តល់ស្វ័យប្រវត្តិលើគ្រប់ interface)</td></tr>
<tr><td><code>ff02::5</code> / <code>ff02::9</code></td><td>Multicast — router OSPFv3 ទាំងអស់ / RIPng (ភ្ជាប់ត្រឡប់ទៅ §7, §13)</td></tr>
<tr><td><code>/64</code></td><td>ទំហំធម្មតានៃ IPv6 subnet មួយ</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">ចំណាំ៖ IPv6 <b>គ្មាន broadcast</b> — វាប្រើ multicast ជំនួសវិញ។</p>

<div class="drill"><div class="q">តើ IPv6 address ប៉ុន្មាន bit ហើយសរសេរយ៉ាងម៉េច?</div>
<div class="a"><b>128 bit</b> (IPv4 គឺ 32) សរសេរជា <b>8 ក្រុមនៃលេខ hex 4 ខ្ទង់</b> បំបែកដោយ colon។</div></div>
<div class="drill"><div class="q">បំព្រួញ <code>2001:0db8:0000:0000:0000:ff00:0042:8329</code> ឱ្យពេញលេញ។</div>
<div class="a"><code>2001:db8::ff00:42:8329</code> (ទម្លាក់សូន្យនាំមុខ រួចបម្លែងជួរនៃក្រុម 0000 បីទៅជា <code>::</code>)។</div></div>
<div class="drill"><div class="q">តើអ្នកអាចប្រើ <code>::</code> ពីរដងក្នុងអាសយដ្ឋានមួយបានទេ? ហេតុអ្វី / ហេតុអ្វីមិនបាន?</div>
<div class="a"><b>មិនបាន។</b> <code>::</code> មានន័យថា “បំពេញដោយក្រុមសូន្យតាមចំនួនត្រូវការ ដើម្បីឱ្យគ្រប់ 8”។ ពីរវានឹងធ្វើឱ្យមិនច្បាស់លាស់ — អ្នកមិនអាចដឹងថាក្រុមសូន្យប៉ុន្មានជារបស់ណាមួយឡើយ។</div></div>
<div class="drill"><div class="q">ពង្រីក <code>2001:db8::1</code> ត្រឡប់ទៅទម្រង់ពេញ 8 ក្រុមវិញ។</div>
<div class="a">មានក្រុមសរសេរ 3 (2001, db8, 1) ដូច្នេះ <code>::</code> តំណាងឱ្យក្រុមសូន្យ 5៖ <code>2001:0db8:0000:0000:0000:0000:0000:0001</code>។</div></div>
<div class="drill"><div class="q">ហេតុអ្វី <code>ff00</code> មិនត្រូវបានបំព្រួញទៅ <code>ff</code>?</div>
<div class="a">ព្រោះច្បាប់ទី 1 ទម្លាក់តែសូន្យ <b>នាំមុខ</b> (ខាងមុខក្រុម)។ ក្នុង <code>ff00</code> សូន្យនៅ <b>ខាងចុង</b> ដូច្នេះវាត្រូវនៅដដែល។</div></div>

<!-- ============ AD ============ -->
<h2 id="ad">3 · Administrative Distance (AD)</h2>
<div class="plain"><span class="label">ជាពាក្យសាមញ្ញ</span>Router របស់អ្នកពេលខ្លះស្តាប់ឮ “ខ្ញុំអាចទៅដល់ network X” ពី <b>protocol ពីរផ្សេងគ្នាក្នុងពេលតែមួយ</b> ហើយពួកវាមិនយល់ស្រប។ AD គ្រាន់តែជា <b>ពិន្ទុទុកចិត្ត</b> ដែលសម្រេចថាត្រូវជឿមួយណា។ <b>លេខទាបជាង = ទុកចិត្តជាង។</b> នោះហើយជាគំនិតទាំងមូល — តារាងខាងក្រោមគ្រាន់តែជាពិន្ទុ។</div>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  AD គឺជា <b>ចំណាត់ថ្នាក់ទុកចិត្តរបស់ router ចំពោះប្រភពនៃ route</b> មិនមែនជារង្វាស់ចម្ងាយ។ ពេល protocol ពីរផ្តល់ផ្លូវទៅ network ដដែល router មិនអាចប្រៀបធៀប “hop count” នឹង “cost” បានទេ — ឯកតាខុសគ្នា។ ដូច្នេះវាសួរមុនថា <b>“ខ្ញុំជឿពាក្យអ្នកណាជាង?”</b> = AD ទាបបំផុតឈ្នះ។ Metric ជាអ្នកកាត់ស្មើតែ <i>នៅក្នុង</i> protocol តែមួយ។ <span class="mnemonic">AD ទាបជាង = គួរឱ្យជឿជាង។</span>
</div>
<div class="figure"><div class="figcap">ជឿ​ពាក្យ​អ្នកណា — AD ទាប​ឈ្នះ</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">Connected 0</span>
  <span class="flow-node">Static 1</span>
  <span class="flow-node">eBGP 20</span>
  <span class="flow-node">EIGRP 90</span>
  <span class="flow-node">OSPF 110</span>
  <span class="flow-node">RIP 120</span>
  <span class="flow-node">iBGP 200</span>
  <span class="flow-node is-plain">255 = មិន​អាច​ទៅ​ដល់</span>
  <span class="flow-loop">← ទុកចិត្ត​ជាង&nbsp;&nbsp;·&nbsp;&nbsp;ទុកចិត្ត​តិច → &nbsp; Router ដំឡើង route ពី​ប្រភព <b>AD ទាប​បំផុត</b> ហើយ​មិន​ដែល​ប្រៀបធៀប metric ឆ្លង protocol។</span>
</div></div></div>

<table>
  <thead><tr><th>ប្រភព</th><th>AD</th><th>ប្រភព</th><th>AD</th></tr></thead>
  <tbody>
    <tr><td>Connected interface</td><td>0</td><td>OSPF</td><td>110</td></tr>
    <tr><td>Static route</td><td>1</td><td>IS-IS</td><td>115</td></tr>
    <tr><td>eBGP (external)</td><td>20</td><td>RIP</td><td>120</td></tr>
    <tr><td>EIGRP (internal)</td><td>90</td><td>EIGRP (external)</td><td>170</td></tr>
    <tr><td>IGRP</td><td>100</td><td>iBGP (internal)</td><td>200</td></tr>
    <tr><td colspan="2"></td><td>មិនស្គាល់ / ទៅមិនដល់</td><td>255</td></tr>
  </tbody>
</table>

<div class="drill"><div class="q">បំពេញកន្លែងទំនេរ៖ Connected __, Static __, eBGP __, EIGRP __, OSPF __, RIP __, iBGP __។</div>
<div class="a">Connected <span class="blank">0</span>, Static <span class="blank">1</span>, eBGP <span class="blank">20</span>, EIGRP <span class="blank">90</span>, OSPF <span class="blank">110</span>, RIP <span class="blank">120</span>, iBGP <span class="blank">200</span>។ (EIGRP external 170, ទៅមិនដល់ 255)។</div></div>

<div class="drill"><div class="q">ហេតុអ្វី eBGP (20) ឈ្នះ OSPF (110) ទោះបី OSPF តាមធម្មតា “ឆ្លាតជាង”?</div>
<div class="a">ព្រោះ AD ត្រូវបានសម្រេច <b>មុន</b> metric។ Router ដែលមានទាំង route eBGP និង OSPF ទៅ prefix ដដែល ដំឡើង route eBGP សុទ្ធតែព្រោះ 20 &lt; 110 — វាមិនដែលប្រៀបធៀប metric ខាងក្នុងរបស់ពួកវាទេ។ AD ជា filter ដំបូង metric កាត់ស្មើតែក្នុងចំណោម route ពី protocol <i>ដដែល</i> ប៉ុណ្ណោះ។</div></div>

<div class="drill"><div class="q">ផ្នែកគំនិត៖ route មួយលេចឡើងជាមួយ AD 255។ តើវាមានន័យអ្វី ហើយ router ធ្វើអ្វី?</div>
<div class="a">255 = “មិនទុកចិត្ត / ទៅមិនដល់”។ Router <b>នឹងមិនដំឡើងវាក្នុង routing table</b> សោះ។ វាប្រៀបដូចជាអនន្តសម្រាប់ការទុកចិត្ត។</div></div>

<!-- ============ classify ============ -->
<h2 id="classify">4 · ការចាត់ថ្នាក់ routing protocol</h2>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  អ័ក្សឯករាជ្យពីរ។ <b>(A) វារៀន topology យ៉ាងម៉េច?</b> និង <b>(B) វាដំណើរការឆ្ងាយប៉ុនណា?</b> Protocol មួយមានចម្លើយមួយលើអ័ក្សនីមួយៗ — ឧ. OSPF ជា <i>link-state</i> (អ័ក្ស A) និង <i>IGP</i> (អ័ក្ស B)។
</div>

<table>
<thead><tr><th>តាម algorithm (របៀបវារៀន)</th><th>សមាជិក</th><th>គំនិត</th></tr></thead>
<tbody>
<tr><td>Distance-vector</td><td>RIP, IGRP, EIGRP*</td><td>“Routing តាមពាក្យចចាមអារ៉ាម” — ដឹងតែទិសដៅ + ចម្ងាយពីអ្នកជិតខាង</td></tr>
<tr><td>Link-state</td><td>OSPF, IS-IS</td><td>Router នីមួយៗសង់ផែនទីពេញដូចគ្នាបេះបិទ រួចដំណើរការ SPF (Dijkstra)</td></tr>
<tr><td>Path-vector</td><td>BGP</td><td>តាមដានបញ្ជីពេញលេញនៃលេខ AS ដែល route បានឆ្លងកាត់</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">*EIGRP ជា distance-vector <b>កម្រិតខ្ពស់</b> / hybrid (DUAL)។</p>

<table>
<thead><tr><th>តាមវិសាលភាព (scope)</th><th>មានន័យ</th><th>សមាជិក</th></tr></thead>
<tbody>
<tr><td>IGP — Interior Gateway Protocol</td><td>នៅក្នុង autonomous system មួយ</td><td>RIP, OSPF, EIGRP, IS-IS</td></tr>
<tr><td>EGP — Exterior Gateway Protocol</td><td>រវាង autonomous system</td><td>BGP</td></tr>
</tbody>
</table>

<div class="drill"><div class="q">ចាត់ថ្នាក់ OSPF, RIP, EIGRP, BGP លើអ័ក្សទាំងពីរ (algorithm + scope)។</div>
<div class="a"><ul>
<li><b>OSPF</b> — link-state, IGP</li>
<li><b>RIP</b> — distance-vector, IGP</li>
<li><b>EIGRP</b> — distance-vector កម្រិតខ្ពស់ (hybrid), IGP</li>
<li><b>BGP</b> — path-vector, EGP</li>
</ul></div></div>

<div class="drill"><div class="q">Static ទល់នឹង dynamic routing — ផ្តល់គុណសម្បត្តិ 2 ម្នាក់ៗ។</div>
<div class="a"><b>Static៖</b> គ្មាន overhead លើ CPU/bandwidth, អ្នកគ្រប់គ្រងបញ្ជាពេញលេញ, សុវត្ថិភាពជាង (គ្មានការផ្សាយ advertisement), អាចទស្សន៍ទាយបាន។ ល្អសម្រាប់ network តូច/stub។<br>
<b>Dynamic៖</b> សម្របខ្លួនស្វ័យប្រវត្តិពេល topology ប្តូរ / link ដាច់, ពង្រីកទៅ network ធំ, កាត់បន្ថយការងារដោយដៃ។ ប៉ុន្តែខ្ជះខ្ជាយ CPU, memory, bandwidth។</div></div>

<!-- ============ wildcard ============ -->
<h2 id="wildcard">5 · Wildcard mask</h2>
<div class="plain"><span class="label">ជាពាក្យសាមញ្ញ</span>មាន command មួយចំនួនធ្វើឱ្យអ្នកសរសេរ subnet <b>បញ្ច្រាស</b>។ Wildcard mask គ្រាន់តែជា version បញ្ច្រាសនៃ subnet mask ធម្មតា។ មានរូបមន្តមួយជំហាន (255 − លេខនីមួយៗ) ដូច្នេះកុំទន្ទេញ — គណនាចេញ។</div>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  Wildcard mask គឺជា <b>រូបអវិជ្ជមាន (negative) នៃ subnet mask</b>។ <code>0</code> = “bit នេះត្រូវផ្គូផ្គងពិតប្រាកដ” ឯ <code>255</code> (1 ទាំងអស់) = “មិនខ្វល់”។ រូបមន្តលឿនក្នុងមួយ octet៖ <b>255 − octet subnet mask</b>។ ប្រើនៅក្នុង statement <code>network</code> របស់ OSPF/EIGRP និងនៅក្នុង ACL។
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
<div class="drill"><div class="q">បម្លែងទៅ wildcard៖ /24, /30, /26, /16។ (ធ្វើមុននឹងបង្ហាញ)</div>
<div class="a">/24 → <span class="blank">0.0.0.255</span> · /30 → <span class="blank">0.0.0.3</span> · /26 → <span class="blank">0.0.0.63</span> · /16 → <span class="blank">0.0.255.255</span></div></div>

<!-- ============ OSPF ============ -->
<h2 id="ospf">6 · OSPF <span class="kh">— Open Shortest Path First</span></h2>
<div class="plain"><span class="label">ជាពាក្យសាមញ្ញ</span>OSPF ជាវិធីមួយដែល router ប្រើដើម្បីរៀន route។ Router នីមួយៗ <b>ចែករំលែក “ផែនទី” នៃការតភ្ជាប់របស់ខ្លួន</b> ជាមួយអ្នកដទៃទាំងអស់ ដូច្នេះ router នីមួយៗកាន់ <b>ផែនទីពេញលេញនៃ network</b> ហើយគណនាផ្លូវល្អបំផុតដោយខ្លួនឯង។ វាជាអ្នកឆ្លាត លឿន ដែលប្រើ <b>នៅក្នុងក្រុមហ៊ុនមួយ</b> — ហើយភាគច្រើននៃប្រឡងរបស់អ្នកគឺអំពីវា។</div>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  Router នីមួយៗ flood <b>LSA</b> ដែលពិពណ៌នា link របស់វា។ Router ទាំងអស់ក្នុង area មួយ ប្រមូលទាំងនេះទៅជា <b>LSDB (link-state database)</b> ដូចគ្នាបេះបិទមួយ — ផែនទីរួម។ បន្ទាប់មក router នីមួយៗដំណើរការ <b>SPF (Dijkstra)</b> លើផែនទីនោះ ដើម្បីគណនា shortest-path tree របស់ខ្លួន។ ដោយសារគ្រប់គ្នាចែករំលែកផែនទីដូចគ្នា OSPF converge លឿន និងគ្មាន loop តាមការរចនា។ Area រក្សាផែនទីឱ្យតូច ឯ <b>Area 0 ជា backbone</b> ដែល area ផ្សេងទៀតគ្រប់រូបត្រូវប៉ះ។
</div>
<div class="figure"><div class="figcap">គ្រប់គ្នា​សង់​ផែនទី​ដូចគ្នា រួច​ម្នាក់ៗ​រក​ផ្លូវ​ខ្លី​បំផុត​របស់​ខ្លួន</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">router នីមួយៗ flood LSA</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">LSDB ដូចគ្នា (ផែនទីរួម) គ្រប់​កន្លែង</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">ម្នាក់ៗ​ដំណើរការ SPF / Dijkstra</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node is-plain">shortest-path tree ផ្ទាល់ខ្លួន</span>
  <span class="flow-loop">ផែនទី​ដូចគ្នា​គ្រប់ router → converge លឿន, គ្មាន loop។ <b>DR/BDR</b> លើ segment រួម​កាត់​បន្ថយ adjacency ពី n(n−1)/2 មក​ត្រឹម ~n។</span>
</div></div></div>

<h3>លក្ខណៈ 10 ដែលត្រូវដឹង</h3>
<table>
<tbody>
<tr><td>ប្រភេទ</td><td>Link-state IGP (សង់ LSDB, ដំណើរការ SPF/Dijkstra)</td></tr>
<tr><td>Classless</td><td>គាំទ្រ VLSM &amp; CIDR (បញ្ជូន mask ក្នុង update)</td></tr>
<tr><td>Metric</td><td><b>Cost</b> ដែល Cost = 10⁸ / Bandwidth(bps) = 100,000,000 / BW</td></tr>
<tr><td>Convergence</td><td>លឿន — triggered update + SPF</td></tr>
<tr><td>Hierarchy</td><td>ផ្អែកលើ area; គ្រប់ area ភ្ជាប់ទៅ <b>Area 0</b> (backbone)</td></tr>
<tr><td>AD</td><td>110</td></tr>
<tr><td>Protocol number</td><td>IP protocol <b>89</b> (មិនមែន TCP/UDP)</td></tr>
<tr><td>Timer</td><td>Hello/Dead = <b>10/40</b> s (broadcast &amp; p2p); 30/120 s លើ NBMA</td></tr>
<tr><td>DR/BDR</td><td>បោះឆ្នោតលើ multi-access network ដើម្បីកាត់បន្ថយ adjacency</td></tr>
<tr><td>Router-ID</td><td>ID 32-bit តម្រូវឱ្យមានដើម្បីដំណើរការ</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">Multicast៖ <code>224.0.0.5</code> = router OSPF ទាំងអស់ · <code>224.0.0.6</code> = DR/BDR។</p>

<div class="drill"><div class="q">សូត្ររូបមន្ត OSPF cost ហើយគណនា cost នៃ link 100 Mbps និង T1 1.544 Mbps។</div>
<div class="a">Cost = <b>10⁸ / bandwidth គិតជា bps</b>។<br>
100 Mbps = 10⁸ bps → cost = 10⁸/10⁸ = <span class="blank">1</span>។<br>
T1 1.544 Mbps = 1,544,000 bps → cost = 10⁸/1,544,000 ≈ <span class="blank">64</span>។</div></div>

<div class="drill"><div class="q">លំដាប់ជ្រើស OSPF Router-ID (3 ជំហាន)។</div>
<div class="a"><ol>
<li>command <b>Manual</b> <code>router-id</code> (ឈ្នះជានិច្ច)</li>
<li>បើគ្មាន → IP interface <b>loopback</b> ខ្ពស់បំផុត</li>
<li>បើគ្មាន → IP interface <b>physical</b> active ខ្ពស់បំផុត</li>
</ol>ការប្តូរវាបន្ទាប់ពី process ដំណើរការហើយត្រូវការ <code>clear ip ospf process</code>។</div></div>

<div class="drill"><div class="q">ច្បាប់បោះឆ្នោត DR/BDR — ហើយហេតុអ្វី OSPF ខំបោះឆ្នោតពួកវា?</div>
<div class="a"><b>ហេតុអ្វី៖</b> លើ segment multi-access (broadcast) ដែលមាន router n គ្រឿង full mesh = n(n−1)/2 adjacency និង flooding ស្ទួន។ DR ជាចំណុចកណ្តាលដែលគ្រប់គ្នា sync ជាមួយ (BDR = បម្រុង) ដូច្នេះ adjacency ធ្លាក់មកប្រហែល n។<br>
<b>បោះឆ្នោត៖</b> <b>interface priority</b> ខ្ពស់បំផុត (0–255, default 1) ឈ្នះ; ស្មើគ្នា → <b>Router-ID</b> ខ្ពស់បំផុត។ Priority <b>0 = មិនដែល</b> ក្លាយជា DR/BDR។ មិន preempt (router ល្អជាងដែលចូលក្រោយ មិនយកជំនួសទេ)។</div></div>

<div class="drill"><div class="q">ហេតុអ្វី “classless” របស់ OSPF សំខាន់ ក្នុងមួយប្រយោគ?</div>
<div class="a">វាផ្ទុក subnet mask ក្នុង update របស់វា ដូច្នេះវាគាំទ្រ <b>VLSM</b> (ប្រវែង mask ផ្សេងគ្នា) និង CIDR summarization — មិនដូច RIPv1 ដែលជា classful។</div></div>

<h3>Config (ត្រៀមpaste)</h3>
<div class="codewrap"><div class="cap">OSPF single-area មូលដ្ឋាន</div>
<pre><span class="cm">! process id 1 មានន័យក្នុងម៉ាស៊ីនមូលដ្ឋានប៉ុណ្ណោះ (មិនចាំបាច់ត្រូវនឹងអ្នកជិតខាង)</span>
<span class="pr">router ospf</span> 1
 <span class="pr">router-id</span> 1.1.1.1
 <span class="pr">network</span> 192.168.1.0 0.0.0.255 <span class="pr">area</span> 0
 <span class="pr">network</span> 10.0.0.0 0.0.0.3 <span class="pr">area</span> 0
<span class="cm">! ជម្រើស៖ ធ្វើ loopback ជា RID / ផ្សាយវា</span>
<span class="pr">interface</span> loopback0
 <span class="pr">ip address</span> 1.1.1.1 255.255.255.255</pre></div>

<div class="codewrap"><div class="cap">Command ផ្ទៀងផ្ទាត់</div>
<pre><span class="pr">show ip ospf neighbor</span>          <span class="cm">! adjacency + state (FULL?), នរណាជា DR/BDR</span>
<span class="pr">show ip ospf interface brief</span>   <span class="cm">! interface ណាដំណើរការ OSPF, area, cost</span>
<span class="pr">show ip route ospf</span>             <span class="cm">! route ដែលរៀនពី OSPF (សម្គាល់ O)</span>
<span class="pr">show ip ospf database</span>          <span class="cm">! LSDB ខ្លួនឯង</span>
<span class="pr">show ip protocols</span>              <span class="cm">! RID, timer, network ដែលផ្សាយ</span></pre></div>

<div class="drill"><div class="q">ពន្យល់៖ <code>network 10.0.0.0 0.0.0.3 area 0</code> — តើផ្នែកនីមួយៗធ្វើអ្វី?</div>
<div class="a"><ul>
<li><code>network</code> = interface ណាដែលត្រូវបើក OSPF (មិនមែន “ផ្សាយ network នេះ” បែប RIP ទេ)។</li>
<li><code>10.0.0.0</code> = អាសយដ្ឋានគោលដែលត្រូវផ្គូផ្គង។</li>
<li><code>0.0.0.3</code> = wildcard = /30 → ផ្គូផ្គង interface ក្នុង 10.0.0.0–10.0.0.3។</li>
<li><code>area 0</code> = ដាក់ interface ទាំងនោះចូល area 0 (backbone)។</li>
</ul></div></div>

<div class="drill"><div class="q">ពន្យល់៖ <code>show ip ospf neighbor</code> ប្រាប់អ្នកអ្វី ហើយ state ណាមានន័យថា “ដំណើរការពេញលេញ”?</div>
<div class="a">វារាយ neighbour OSPF នីមួយៗ, Router-ID, priority, <b>state</b>, dead-time, និងអាសយដ្ឋានរបស់វា។ State ស្ថិតស្ថេរល្អគឺ <b>FULL</b> (database sync គ្នា)។ លើ link multi-access គូ non-DR ដែលដំណើរការ អាចស្ថិតនៅ <b>2-WAY</b> តាមការរចនា — មានតែទំនាក់ទំនង DR/BDR ទេដែលឡើង FULL។ ជាប់នៅ INIT/EXSTART ជាធម្មតា = MTU ឬ timer/subnet មិនត្រូវគ្នា។</div></div>

<!-- ============ RIP ============ -->
<h2 id="rip">7 · RIP / RIPv2 / RIPng</h2>
<div class="plain"><span class="label">ជាពាក្យសាមញ្ញ</span>RIP ជាវិធីចាស់បំផុត និងសាមញ្ញបំផុត។ Router នីមួយៗគ្រាន់តែប្រាប់អ្នកជិតខាង <b>“នេះជាអ្វីៗដែលខ្ញុំអាចទៅដល់ ហើយឆ្ងាយប៉ុន្មាន router”</b> (មួយ “hop”) ហើយពួកគេបញ្ជូនដំណឹងបន្ត។ ងាយរៀបចំ ប៉ុន្តែយឺត និងមិនសូវឆ្លាត — សមតែសម្រាប់ <b>network តូចៗ</b>។ វាកំណត់ត្រឹម 15 hop ដោយចេតនា។</div>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  Distance-vector សុទ្ធ៖ router មិនដឹងផែនទីទេ វាគ្រាន់តែជឿសេចក្តីសង្ខេបរបស់អ្នកជិតខាង (“routing តាមពាក្យចចាមអារ៉ាម”) ហើយបន្ថែម 1 hop។ សាមញ្ញ ប៉ុន្តែ converge យឺត និងងាយ loop ដូច្នេះ RIP រុំខ្លួនវានឹងច្បាប់ការពារ loop។ ដែនកំណត់ 15 hop ជា “សម្រាប់ network តូចតែប៉ុណ្ណោះ” ដោយចេតនា — <b>16 = អនន្ត = ទៅមិនដល់</b>។
</div>
<table>
<tbody>
<tr><td>ប្រភេទ / metric</td><td>Distance-vector IGP; metric = <b>hop count</b></td></tr>
<tr><td>Hop អតិបរមា</td><td><b>15</b>; 16 = ទៅមិនដល់ (អនន្ត)</td></tr>
<tr><td>AD</td><td>120</td></tr>
<tr><td>Update</td><td>table ពេញរៀងរាល់ <b>30 s</b> (periodic)</td></tr>
<tr><td>Transport</td><td>UDP <b>520</b> (RIPv1/v2); RIPng = UDP <b>521</b></td></tr>
<tr><td>v1 ទល់នឹង v2</td><td>v1 classful, broadcast 255.255.255.255, គ្មាន VLSM/auth · v2 classless, multicast <b>224.0.0.9</b>, VLSM + auth</td></tr>
<tr><td>RIPng (IPv6)</td><td>multicast <b>FF02::9</b></td></tr>
</tbody>
</table>
<p style="font-size:13px;color:var(--muted)">Timer៖ update 30s · invalid 180s · hold-down 180s · flush 240s។</p>

<div class="drill"><div class="q">ដាក់ឈ្មោះយន្តការការពារ loop របស់ RIP ទាំង 4 ហើយប្រាប់ថាមួយៗធ្វើអ្វី។</div>
<div class="a"><ul>
<li><b>Split horizon</b> — កុំផ្សាយ route ត្រឡប់ចេញតាម interface ដែលអ្នករៀនវាមក។</li>
<li><b>Route poisoning</b> — សម្គាល់ route ដែលខូចជា metric 16 (អនន្ត) ដើម្បីសម្លាប់វាឱ្យលឿន។</li>
<li><b>Poison reverse</b> — បញ្ជូន route ដែលដាក់ពុល (16) <i>ត្រឡប់</i> ទៅប្រភពវិញ ដោយលុបលើ split horizon ដើម្បីលុបចោលវាដោយសកម្ម។</li>
<li><b>Hold-down timer</b> (180s) — មិនអើពើ update អាក្រក់ជាងអំពី route មួយរយៈពេល ដើម្បីកុំឱ្យព័ត៌មានចាស់/អាក្រក់ ដំឡើងវាឡើងវិញ។</li>
</ul>(+ triggered update សម្រាប់ប្រតិកម្មលឿនជាង)។</div></div>

<div class="drill"><div class="q">RIPv1 ទល់នឹង RIPv2 — ភាពខុសគ្នាមួយដែលសំខាន់បំផុតសម្រាប់ប្រឡង?</div>
<div class="a"><b>v2 ជា classless</b> (ផ្ទុក subnet mask → គាំទ្រ VLSM) ហើយប្រើ multicast 224.0.0.9; v1 ជា classful (គ្មាន mask, គ្មាន VLSM) ហើយ broadcast។ នោះហើយជាមូលហេតុ config ពិតប្រាកដប្រើ <code>version 2</code> + <code>no auto-summary</code>។</div></div>

<h3>Config</h3>
<div class="codewrap"><div class="cap">RIPv2 (IPv4)</div>
<pre><span class="pr">router rip</span>
 <span class="pr">version</span> 2
 <span class="pr">no auto-summary</span>          <span class="cm">! រក្សា subnet VLSM, កុំ summarize ទៅ classful</span>
 <span class="pr">network</span> 192.168.1.0       <span class="cm">! classful network — គ្មាន wildcard ក្នុង RIP!</span>
 <span class="pr">network</span> 10.0.0.0</pre></div>
<div class="codewrap"><div class="cap">RIPng (IPv6) — បើកក្នុង per-interface</div>
<pre><span class="pr">ipv6 unicast-routing</span>
<span class="pr">interface</span> g0/0
 <span class="pr">ipv6 rip</span> MYPROC <span class="pr">enable</span></pre></div>

<div class="drill"><div class="q">ពន្យល់៖ ហេតុអ្វី statement <code>network</code> របស់ RIP មិនយក wildcard mask ប៉ុន្តែ OSPF យក?</div>
<div class="a"><code>network</code> របស់ RIP យកអាសយដ្ឋាន network <b>classful</b> — វាបើក RIP លើ interface ណាដែលធ្លាក់ក្នុងជួរ classful នោះ ដោយមិនត្រូវការ mask។ <code>network … wildcard … area</code> របស់ OSPF ត្រូវការ wildcard ដើម្បីជ្រើស interface ឱ្យច្បាស់ ហើយចាត់ពួកវាទៅ area។ ការរចនាខុសគ្នា៖ RIP = ឆ្គង/classful, OSPF = ច្បាស់/យល់ដឹង area។</div></div>

<!-- ============ EIGRP ============ -->
<h2 id="eigrp">8 · EIGRP</h2>
<div class="plain"><span class="label">ជាពាក្យសាមញ្ញ</span>EIGRP ជាវិធីរបស់ Cisco ដែលលាយភាពសាមញ្ញរបស់ RIP ជាមួយល្បឿនរបស់ OSPF។ ល្បិចរបស់វា៖ វារក្សា <b>ផ្លូវបម្រុងត្រៀមរួចជាស្រេច</b> ដូច្នេះបើ link ដាច់ វាប្តូរទៅភ្លាមៗ ជំនួសឱ្យការគណនាឡើងវិញ។</div>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  “ល្អបំផុតនៃទាំងពីរ” របស់ Cisco៖ ភាពសាមញ្ញ distance-vector + ល្បឿន link-state។ Algorithm <b>DUAL</b> គណនាជាមុននូវផ្លូវបម្រុង (<b>feasible successor</b>) ដូច្នេះពេលផ្លូវចម្បង (<b>successor</b>) ដាច់ វាប្តូរភ្លាមៗ — គ្មានព្យុះគណនាឡើងវិញ។ អ្នកជិតខាងត្រូវចែក <b>លេខ AS</b> ដូចគ្នាទើបនិយាយគ្នាបាន។
</div>
<table>
<tbody>
<tr><td>ប្រភេទ</td><td>Distance-vector កម្រិតខ្ពស់ / hybrid (DUAL)</td></tr>
<tr><td>AD</td><td><b>90</b> internal (170 external)</td></tr>
<tr><td>Metric</td><td>បន្សំ៖ <b>bandwidth + delay</b> ជា default (អាចបន្ថែម load, reliability, MTU)</td></tr>
<tr><td>Protocol / multicast</td><td>IP protocol 88 · multicast 224.0.0.10</td></tr>
<tr><td>ពាក្យគន្លឹះ</td><td>Successor (ផ្លូវល្អបំផុត), Feasible Successor (ផ្លូវបម្រុងគ្មាន loop)</td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">EIGRP config (លេខ AS ត្រូវតែដូចអ្នកជិតខាង)</div>
<pre><span class="pr">router eigrp</span> 12
 <span class="pr">no auto-summary</span>
 <span class="pr">network</span> 192.168.140.0 0.0.0.255
 <span class="pr">network</span> 140.140.130.0 0.0.0.3</pre></div>
<div class="drill"><div class="q">តើអ្វីត្រូវដូចគ្នារវាង router ពីរ ដើម្បីឱ្យពួកវាបង្កើត EIGRP neighborship? ហើយ “feasible successor” ជាអ្វី?</div>
<div class="a"><b>លេខ AS</b> (ត្រង់នេះ 12) ត្រូវដូចគ្នា (បូក K-value និង subnet ចម្បង)។ <b>Feasible successor</b> ជា <b>route បម្រុង</b> គ្មាន loop ដែលត្រៀមមុនរួចជាស្រេច ទុកក្នុង topology table ដូច្នេះ DUAL ប្តូរភ្លាមៗដោយមិនគណនាឡើងវិញ។</div></div>

<!-- ============ BGP ============ -->
<h2 id="bgp">9 · BGP <span class="kh">— Border Gateway Protocol</span></h2>
<div class="plain"><span class="label">ជាពាក្យសាមញ្ញ</span>BGP ជាវិធីដែលដំណើរការ <b>Internet ពិតប្រាកដ</b>។ បីផ្សេងទៀតធ្វើការ <b>នៅក្នុង</b> ក្រុមហ៊ុនមួយ; BGP ភ្ជាប់ក្រុមហ៊ុននិង ISP ទាំងមូល <b>ជាមួយគ្នា</b>។ ក្រុមហ៊ុននីមួយៗជា “AS” (autonomous system) ដែលមានលេខ ហើយ BGP តាមដានថា route ឆ្លងកាត់លេខ AS ណាខ្លះ។</div>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  BGP ជា routing protocol <b>រវាង</b> អង្គភាព — “routing protocol របស់ Internet”។ វាជា <b>path-vector</b>៖ វាផ្សាយបញ្ជីពេញលេញនៃ <b>លេខ AS</b> ដែល route ឆ្លងកាត់ ដែលជារបៀបវាស្វែងរក loop (ឃើញ AS របស់ខ្លួនឯង → ទម្លាក់ចោល) និងអនុវត្តគោលនយោបាយអាជីវកម្ម។ វាដំណើរការលើ <b>TCP 179</b> (អាចទុកចិត្តបាន គ្មាន flooding)។ eBGP = រវាង AS ផ្សេងគ្នា (AD 20); iBGP = ក្នុង AS តែមួយ (AD 200)។
</div>
<div class="codewrap"><div class="cap">eBGP config — កត់សម្គាល់ភាពខុសគ្នាពី IGP</div>
<pre><span class="pr">router bgp</span> 122                       <span class="cm">! 122 = លេខ AS របស់ខ្ញុំ</span>
 <span class="pr">bgp router-id</span> 1.1.1.1
 <span class="pr">neighbor</span> 140.140.130.2 <span class="pr">remote-as</span> 123  <span class="cm">! AS របស់ peer = 123 → eBGP</span>
 <span class="pr">network</span> 192.168.140.0 <span class="pr">mask</span> 255.255.255.0  <span class="cm">! ប្រើ 'mask', មិនមែន wildcard</span></pre></div>
<div class="drill"><div class="q">វិធីពីរយ៉ាងដែល config BGP ខុសគ្នាខាង syntax ពី config OSPF/EIGRP។</div>
<div class="a"><ol>
<li>អ្នកកំណត់ <b>neighbor</b> នីមួយៗច្បាស់លាស់ ជាមួយ <code>remote-as</code> របស់វា (គ្មាន auto-discovery / multicast hello)។</li>
<li>statement <code>network</code> ប្រើ keyword <b>mask</b> + subnet mask ពិតប្រាកដ <b>មិនមែន wildcard</b>។</li>
</ol>ម្យ៉ាងទៀត៖ eBGP រវាងលេខ AS ផ្សេងគ្នា, iBGP លេខ AS ដូចគ្នា។</div></div>
<div class="drill"><div class="q">តើ BGP ការពារ routing loop រវាង autonomous system យ៉ាងម៉េច?</div>
<div class="a">តាម <b>AS-path</b>៖ AS នីមួយៗបន្ថែមលេខរបស់ខ្លួននៅខាងមុខ។ បើ router ឃើញ <b>AS របស់ខ្លួនឯងមានរួចក្នុង path</b> route នោះជា loop ហើយត្រូវបោះចោល។ (ការការពារ loop បែប path-vector)។</div></div>

<!-- ============ IPsec ============ -->
<h2 id="ipsec">10 · IPsec site-to-site VPN</h2>
<div class="plain"><span class="label">ជាពាក្យសាមញ្ញ</span><b>VPN</b> សង់ផ្លូវរូងឯកជន <b>អ៊ិនគ្រីប</b> ឆ្លងកាត់ Internet សាធារណៈ ដូច្នេះការិយាល័យពីរអាចនិយាយគ្នាដោយសុវត្ថិភាព ដូចជាពួកវានៅលើ network ឯកជនដូចគ្នា — គ្មាននរណានៅកណ្តាលអាចអានបានទេ។ <b>IPsec</b> ជាសំណុំច្បាប់សម្រាប់សង់ផ្លូវរូងនោះ។ Router ពីរយល់ស្របលើច្បាប់ជាមុនសិន (Phase 1) រួចចាប់ផ្តើមអ៊ិនគ្រីបទិន្នន័យពិត (Phase 2)។</div>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  Router ពីរសង់ផ្លូវរូងអ៊ិនគ្រីបឆ្លងកាត់ Internet សាធារណៈ ក្នុង <b>ការចរចាពីរ</b>។ <b>Phase 1 (IKE / ISAKMP)</b> សង់ឆានែល <i>គ្រប់គ្រង</i> សុវត្ថិភាព និងផ្ទៀងផ្ទាត់ peer (គិតថា៖ ចាប់ដៃគ្នាដោយឯកជន)។ <b>Phase 2 (IPsec SA)</b> ចរចារបៀបអ៊ិនគ្រីប <i>ទិន្នន័យអ្នកប្រើពិតប្រាកដ</i>។ ចុងទាំងពីរត្រូវយល់ស្របលើ parameter គ្រប់យ៉ាង បើពុំនោះ Phase 1 មិនដែលឡើងទេ។
</div>
<div class="figure"><div class="figcap">ការ​ចរចា​ពីរ​សង់​ផ្លូវរូង​អ៊ិនគ្រីប</div>
<div class="figbox"><div class="flow">
  <span class="flow-node is-plain">Router តំបន់ A</span>
  <span class="flow-arrow">════ ផ្លូវរូង​អ៊ិនគ្រីប ════</span>
  <span class="flow-node is-plain">Router តំបន់ B</span>
  <span class="flow-loop"><b>Phase 1 (IKE / ISAKMP):</b> ផ្ទៀងផ្ទាត់ peer + សង់​ឆានែល​គ្រប់គ្រង​សុវត្ថិភាព (aes · sha · pre-share · DH group)។ <b>បន្ទាប់ Phase 2 (IPsec SA):</b> អ៊ិនគ្រីប​ទិន្នន័យ​អ្នកប្រើ​ពិត (transform set)។ ចុង​ទាំងពីរ​ត្រូវ​ផ្គូផ្គង​គ្រប់ parameter។</span>
</div></div></div>
<table>
<thead><tr><th>parameter ISAKMP (Phase 1)</th><th>ឧទាហរណ៍</th><th>អត្ថន័យ</th></tr></thead>
<tbody>
<tr><td>encryption</td><td>aes</td><td>cipher សម្រាប់ឆានែលគ្រប់គ្រង</td></tr>
<tr><td>hash</td><td>sha</td><td>ការត្រួតពិនិត្យភាពត្រឹមត្រូវ (integrity)</td></tr>
<tr><td>authentication</td><td>pre-share</td><td>peer បញ្ជាក់អត្តសញ្ញាណដោយ secret រួម</td></tr>
<tr><td>group</td><td>2</td><td>group <b>Diffie-Hellman</b> (កម្លាំងផ្លាស់ប្តូរ key, 1024-bit)</td></tr>
<tr><td>lifetime</td><td>86400</td><td>អាយុកាល SA គិតជាវិនាទី = <b>24 ម៉ោង</b></td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">Phase 1 — ISAKMP policy + pre-shared key</div>
<pre><span class="pr">crypto isakmp policy</span> 10
 <span class="pr">encryption</span> aes
 <span class="pr">hash</span> sha
 <span class="pr">authentication</span> pre-share
 <span class="pr">group</span> 2
 <span class="pr">lifetime</span> 86400
<span class="cm">! secret រួម ភ្ជាប់ទៅ public IP របស់ peer</span>
<span class="pr">crypto isakmp key</span> cisco123 <span class="pr">address</span> 202.193.25.22</pre></div>
<div class="codewrap"><div class="cap">Phase 2 — transform set, ACL interesting-traffic, crypto map</div>
<pre><span class="pr">crypto ipsec transform-set</span> TSET <span class="pr">esp-aes esp-sha-hmac</span>
<span class="cm">! 'interesting traffic' = អ្វីដែលត្រូវអ៊ិនគ្រីប (LAN ទៅ LAN ឆ្ងាយ)</span>
<span class="pr">access-list</span> 110 <span class="pr">permit ip</span> 192.168.1.0 0.0.0.255 192.168.2.0 0.0.0.255
<span class="pr">crypto map</span> CMAP 10 <span class="pr">ipsec-isakmp</span>
 <span class="pr">set peer</span> 202.193.25.22
 <span class="pr">set transform-set</span> TSET
 <span class="pr">match address</span> 110
<span class="pr">interface</span> g0/0
 <span class="pr">crypto map</span> CMAP        <span class="cm">! អនុវត្តលើ interface ខាងក្រៅ/សាធារណៈ</span></pre></div>

<div class="drill"><div class="q">ពន្យល់ <code>group 2</code> និង <code>lifetime 86400</code>។</div>
<div class="a"><b>group 2</b> = Diffie-Hellman group 2 (1024-bit) — កំណត់ថាការផ្លាស់ប្តូរ key រួមខ្លាំងប៉ុណ្ណា; peer ទាំងពីរត្រូវប្រើ group ដូចគ្នា។ <b>lifetime 86400</b> = security association រស់នៅ 86,400 វិនាទី = <b>24 ម៉ោង</b> រួច re-key។</div></div>
<div class="drill"><div class="q">តើ ACL “interesting traffic” សម្រាប់អ្វី ហើយអ្នកអនុវត្ត crypto map នៅឯណា?</div>
<div class="a">ACL (ត្រង់នេះ permit ip LAN1 → LAN2) កំណត់ថា <b>traffic ណាដែលត្រូវអ៊ិនគ្រីប</b> ហើយបញ្ជូនចុះតាមផ្លូវរូង; អ្វីដែលមិនផ្គូផ្គងត្រូវបញ្ជូនធម្មតា។ <b>crypto map ត្រូវអនុវត្តលើ interface ខាងក្រៅ/សាធារណៈ</b> ដែលបែរមុខទៅ peer។</div></div>
<div class="drill"><div class="q">ផ្នែកគំនិត៖ Phase 1 ការពារអ្វី ទល់នឹង Phase 2 ការពារអ្វី?</div>
<div class="a">Phase 1 (IKE/ISAKMP) ការពារ <b>ឆានែលចរចា/គ្រប់គ្រង</b> និងផ្ទៀងផ្ទាត់ peer។ Phase 2 (IPsec SA) ការពារ <b>ទិន្នន័យអ្នកប្រើពិតប្រាកដ</b> ដែលឆ្លងកាត់ផ្លូវរូង។</div></div>

<!-- ============ GRE ============ -->
<h2 id="gre">11 · GRE tunnel <span class="pill">ពី labs</span></h2>
<div class="plain"><span class="label">ជាពាក្យសាមញ្ញ</span>GRE ជា <b>ផ្លូវរូងធម្មតា</b> ដែលធ្វើឱ្យ router ពីរនៅឆ្ងាយគ្នាដើរដូចជាមានខ្សែតែមួយភ្ជាប់ពួកវាដោយផ្ទាល់។ ដោយខ្លួនវាផ្ទាល់ វា <b>គ្មានសោ</b> (គ្មាន encryption) ដូច្នេះវាជារឿយៗត្រូវរុំក្នុង IPsec ដើម្បីបានទាំងពីរ៖ ភាពបត់បែនរបស់ GRE + សុវត្ថិភាពរបស់ IPsec។</div>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  GRE រុំ (encapsulate) packet មួយក្នុង packet មួយទៀត ដូច្នេះ router ឆ្ងាយពីរ ដើរដូចជាភ្ជាប់គ្នាដោយផ្ទាល់ដោយ link point-to-point និម្មិត។ វាអាចផ្ទុក <b>multicast/routing protocol និង traffic មិនមែន IP</b> — ដែល IPsec ធម្មតាមិនអាច — ប៉ុន្តែ <b>GRE គ្មាន encryption</b>។ លំនាំទូទៅគឺ “GRE over IPsec”៖ GRE សម្រាប់ភាពបត់បែន, IPsec សម្រាប់សុវត្ថិភាព។ Protocol number <b>47</b>។
</div>
<div class="figure"><div class="figcap">GRE over IPsec — packet រុំ​ដោយ​ស្រទាប់​ពីរ</div>
<div class="figbox"><div class="encap">
  <div class="encap-l lvl1"><span class="encap-cap">IPsec (ESP) — បន្ថែម encryption 🔒</span>
    <div class="encap-l lvl2"><span class="encap-cap">GRE header — ផ្ទុក OSPF / multicast / មិនមែន IP</span>
      <div class="encap-l lvl3"><span class="encap-cap">packet IP ដើម — ទិន្នន័យ​អ្នក</span></div>
    </div>
  </div>
</div></div></div>
<div class="codewrap"><div class="cap">GRE tunnel រវាង site ពីរ</div>
<pre><span class="pr">interface</span> tunnel0
 <span class="pr">ip address</span> 172.16.0.1 255.255.255.252   <span class="cm">! subnet /30 ផ្ទាល់ខ្លួនរបស់ tunnel</span>
 <span class="pr">tunnel source</span> g0/0                     <span class="cm">! interface/IP ពិតមូលដ្ឋាន</span>
 <span class="pr">tunnel destination</span> 203.0.113.2          <span class="cm">! public IP ពិតរបស់ peer</span>
 <span class="cm">! tunnel mode gre ip   (នេះជា default)</span></pre></div>
<div class="drill"><div class="q">ពីរយ៉ាងដែល GRE ធ្វើបាន តែ IPsec VPN ធម្មតាមិនអាច — ហើយរបស់ធំដែលវាខ្វះ។</div>
<div class="a">GRE អាចផ្ទុក <b>multicast / dynamic routing protocol</b> (OSPF, EIGRP) និង <b>protocol មិនមែន IP</b> តាមផ្លូវរូង។ អ្វីដែលវាខ្វះ៖ <b>encryption</b> — ដូច្នេះវាជារឿយៗដំណើរការក្នុង IPsec (GRE over IPsec)។</div></div>

<!-- ============ STATIC ============ -->
<h2 id="static">12 · Static &amp; default route <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  Static route គឺអ្នក <b>ប្រាប់ router ដោយដៃ</b> ថា “ដើម្បីទៅដល់ network X, បញ្ជូនទៅ next-hop Y”។ គ្មាន protocol, គ្មាន overhead, AD <b>1</b> (ទុកចិត្តជាង dynamic protocol ណាមួយ)។ <b>Default route</b> <code>0.0.0.0 0.0.0.0</code> ជា “gateway of last resort” — ប្រើសម្រាប់គោលដៅណាក៏ដោយដែលមិននៅក្នុង table (តាមធម្មតាទៅ ISP)។
</div>
<div class="codewrap"><div class="cap">Static + default route</div>
<pre><span class="cm">! ទៅដល់ 192.168.5.0/24 តាម next-hop 10.0.0.2</span>
<span class="pr">ip route</span> 192.168.5.0 255.255.255.0 10.0.0.2
<span class="cm">! ...ឬតាម exit interface</span>
<span class="pr">ip route</span> 192.168.5.0 255.255.255.0 g0/0
<span class="cm">! default route (gateway of last resort)</span>
<span class="pr">ip route</span> 0.0.0.0 0.0.0.0 203.0.113.1
<span class="cm">! floating static = បម្រុង (លើក AD ខ្ពស់ជាង dynamic protocol)</span>
<span class="pr">ip route</span> 192.168.5.0 255.255.255.0 10.0.0.6 200</pre></div>
<div class="drill"><div class="q">តើ AD នៃ static route ប៉ុន្មាន ហើយ default route ប្រើសម្រាប់អ្វី?</div>
<div class="a">Static AD = <b>1</b> (ឈ្នះតែដោយ connected = 0)។ Default route <code>0.0.0.0/0</code> ផ្គូផ្គង <b>គោលដៅណាក៏ដោយ ដែលមិននៅក្នុង routing table</b> — “gateway of last resort” តាមធម្មតាចង្អុលទៅ ISP/edge។</div></div>
<div class="drill"><div class="q">តើ “floating static route” ជាអ្វី ហើយអ្នកបង្កើតវាយ៉ាងម៉េច?</div>
<div class="a">Static route <b>បម្រុង</b> ដែលធ្វើសកម្មភាពតែពេលផ្លូវចម្បង (dynamic) បាត់ប៉ុណ្ណោះ។ អ្នកឱ្យវានូវ <b>AD ខ្ពស់ជាង</b> ផ្លូវចម្បង ដូច្នេះវា “អណ្តែត” ដោយមិនប្រើ រហូតដល់ត្រូវការ — ឧ. <code>ip route … 10.0.0.6 200</code> (AD 200 &gt; OSPF 110)។</div></div>

<!-- ============ OSPF DEEPER ============ -->
<h2 id="ospfdeep">13 · OSPF ស៊ីជម្រៅ៖ area, state, network type <span class="pill">បន្ថែម OSPF</span></h2>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  Router ពីរមិនលោតផ្ទាល់ទៅផ្លាស់ប្តូរ route ទេ — ពួកវាដើរកាត់ <b>adjacency state</b> ខណៈពួកវាស្គាល់គ្នា និង sync database។ Network ធំៗបែងចែកជា <b>area</b> ដើម្បីឱ្យ LSDB នៅតូច; router ដែលនៅព្រំដែនរវាង area (ឬរវាង OSPF និងខាងក្រៅ) ទទួលតួនាទីពិសេស។
</div>
<h3>Neighbor state (តាមលំដាប់)</h3>
<p><b>Down → Init → 2-Way → ExStart → Exchange → Loading → Full។</b> ចំណុចត្រួតពិនិត្យមានប្រយោជន៍ពីរ៖ <b>2-Way</b> = ពួកវាឃើញគ្នា (ហើយ DR/BDR ត្រូវបោះឆ្នោត); <b>Full</b> = database sync ពេញលេញ (គោលដៅ)។</p>
<div class="figure"><div class="figcap">ស្ថានភាព adjacency — ការ​ឡើង​ទៅ FULL</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">Down</span><span class="flow-arrow">→</span>
  <span class="flow-node">Init</span><span class="flow-arrow">→</span>
  <span class="flow-node">2-Way</span><span class="flow-arrow">→</span>
  <span class="flow-node">ExStart</span><span class="flow-arrow">→</span>
  <span class="flow-node">Exchange</span><span class="flow-arrow">→</span>
  <span class="flow-node">Loading</span><span class="flow-arrow">→</span>
  <span class="flow-node is-plain">FULL ✓</span>
  <span class="flow-loop"><b>2-Way</b> = ឃើញ​គ្នា &amp; DR/BDR ត្រូវ​បោះឆ្នោត។ <b>FULL</b> = database sync (ស្ថានភាព​ល្អ)។ ជាប់​ត្រឹម ExStart ≈ MTU mismatch។</span>
</div></div></div>
<table>
<thead><tr><th>តួនាទី router</th><th>អត្ថន័យ</th></tr></thead>
<tbody>
<tr><td>Internal router</td><td>គ្រប់ interface នៅក្នុង area តែមួយ</td></tr>
<tr><td>Backbone router</td><td>មាន interface ក្នុង area 0</td></tr>
<tr><td><b>ABR</b> (Area Border Router)</td><td>ភ្ជាប់ area មួយទៀតទៅ area 0; summarize រវាង area</td></tr>
<tr><td><b>ASBR</b> (Autonomous System Boundary Router)</td><td>Redistribute route ខាងក្រៅ (ឧ. ពី RIP/BGP) ចូល OSPF</td></tr>
</tbody>
</table>
<table>
<thead><tr><th>Network type</th><th>DR/BDR?</th><th>Hello/Dead</th></tr></thead>
<tbody>
<tr><td>Broadcast (Ethernet)</td><td>បាទ/ចាស</td><td>10 / 40</td></tr>
<tr><td>Point-to-point (serial)</td><td>ទេ</td><td>10 / 40</td></tr>
<tr><td>NBMA (Frame Relay)</td><td>បាទ/ចាស</td><td>30 / 120</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">រាយ OSPF neighbor state តាមលំដាប់។ មួយណាជា state ចុងក្រោយដែលល្អ?</div>
<div class="a">Down → Init → 2-Way → ExStart → Exchange → Loading → <b>Full</b>។ <b>Full</b> = sync គ្នា = ល្អ។ (2-Way ជារឿងធម្មតា/រំពឹងទុក រវាង router non-DR ពីរលើ segment broadcast)។</div></div>
<div class="drill"><div class="q">ABR ទល់នឹង ASBR — មួយបន្ទាត់ម្នាក់ៗ។</div>
<div class="a"><b>ABR</b> នៅព្រំដែន <b>រវាង OSPF area</b> (ប៉ះ area 0 ជានិច្ច) ហើយ summarize route រវាងពួកវា។ <b>ASBR</b> នៅព្រំដែនរវាង OSPF និង <b>routing domain ផ្សេង</b> ហើយ redistribute route ខាងក្រៅចូល។</div></div>
<div class="drill"><div class="q">លើ network type ណាខ្លះ OSPF បោះឆ្នោត DR/BDR ហើយហេតុអ្វីមិនលើ point-to-point?</div>
<div class="a">តែលើ type <b>multi-access</b> (broadcast, NBMA) ដែល router ច្រើនចែក segment — DR កាត់បន្ថយ overhead នៃ adjacency/flooding។ លើ <b>point-to-point</b> មាន router តែពីរ ដូច្នេះ DR គ្មានប្រយោជន៍ឡើយ។</div></div>

<!-- ============ ACL ============ -->
<h2 id="acl">14 · Access Control List (ACL) <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  ACL ជា <b>បញ្ជីច្បាប់ permit/deny តាមលំដាប់</b> ដែល router ពិនិត្យ <b>ពីលើចុះក្រោម, ផ្គូផ្គងដំបូងឈ្នះ</b> រួចឈប់។ មាន <b><code>deny any</code> មើលមិនឃើញនៅខាងក្រោម</b> — ដូច្នេះ ACL ដែលមានតែ permit នឹងទប់ស្កាត់អ្វីៗផ្សេងទៀតស្ងាត់ៗ។ ACL <b>Standard</b> ផ្គូផ្គង <b>source IP តែប៉ុណ្ណោះ</b> → ដាក់ជិត <b>គោលដៅ</b>។ ACL <b>Extended</b> ផ្គូផ្គង source + dest + protocol + port → ដាក់ជិត <b>source</b> (ទម្លាក់ traffic មិនចង់បានឱ្យឆាប់)។
</div>
<div class="figure"><div class="figcap">ពិនិត្យ​ពី​លើ​ចុះ​ក្រោម — ផ្គូផ្គង​ដំបូង​ឈ្នះ រួច​ឈប់</div>
<div class="figbox"><div class="stack">
  <div class="stack-item"><span>1 · permit 192.168.1.0</span><span class="stack-tag">ពិនិត្យ​មុន</span></div>
  <div class="stack-item is-top"><span>2 · permit tcp … eq 80</span><span class="stack-tag">← ផ្គូផ្គង → ឈប់</span></div>
  <div class="stack-item"><span>3 · deny …</span><span class="stack-tag">មិន​ដល់</span></div>
  <div class="stack-item"><span>(មើលមិនឃើញ) deny any</span><span class="stack-tag">ប្រយោល — ទម្លាក់​ឯ​ទៀត</span></div>
</div>
<div class="lc-branch">Router ឈប់​ត្រឹម <b>ផ្គូផ្គង​ដំបូង</b>។ ACL ដែល​មាន​តែ <code>permit</code> នៅ​តែ​ទប់​ស្កាត់​ឯ​ទៀត​តាម <b>deny any</b> លាក់​នៅ​បាត។</div>
</div></div>
<table>
<thead><tr><th></th><th>Standard</th><th>Extended</th></tr></thead>
<tbody>
<tr><td>ជួរលេខ</td><td>1–99 (1300–1999)</td><td>100–199 (2000–2699)</td></tr>
<tr><td>ផ្គូផ្គង</td><td>Source IP តែប៉ុណ្ណោះ</td><td>Source, dest, protocol, port</td></tr>
<tr><td>ដាក់ជិត</td><td>គោលដៅ</td><td>Source</td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">Standard, extended, និងការអនុវត្តវា</div>
<pre><span class="cm">! standard — តាម source តែប៉ុណ្ណោះ</span>
<span class="pr">access-list</span> 10 <span class="pr">permit</span> 192.168.1.0 0.0.0.255
<span class="cm">! extended — អនុញ្ញាត web ពី subnet មួយ ទៅកន្លែងណាក៏បាន</span>
<span class="pr">access-list</span> 110 <span class="pr">permit tcp</span> 192.168.1.0 0.0.0.255 <span class="pr">any eq</span> 80
<span class="cm">! អនុវត្តលើ interface ក្នុងទិសដៅមួយ</span>
<span class="pr">interface</span> g0/0
 <span class="pr">ip access-group</span> 110 <span class="pr">in</span></pre></div>
<div class="drill"><div class="q">Standard ទល់នឹង extended ACL៖ ជួរលេខ, មួយៗផ្គូផ្គងអ្វី, និងដាក់មួយៗនៅឯណា។</div>
<div class="a"><b>Standard</b> (1–99)៖ ផ្គូផ្គង <b>source IP តែប៉ុណ្ណោះ</b> → ដាក់ <b>ជិតគោលដៅ</b> (ដាក់ជិត source នឹងទប់ស្កាត់ច្រើនពេក)។ <b>Extended</b> (100–199)៖ ផ្គូផ្គង <b>source + destination + protocol + port</b> → ដាក់ <b>ជិត source</b> ដើម្បីទម្លាក់ traffic មិនចង់បានឱ្យឆាប់។</div></div>
<div class="drill"><div class="q">តើ “implicit deny” ជាអ្វី ហើយវាបង្កើតអន្ទាក់អ្វី?</div>
<div class="a">ACL គ្រប់មួយបញ្ចប់ដោយ <b><code>deny any</code></b> ដែលមើលមិនឃើញ។ អន្ទាក់៖ បើ ACL របស់អ្នកមានតែ statement <code>permit</code> នោះ <b>អ្វីៗដែលមិនបាន permit ច្បាស់ៗ ត្រូវបានទម្លាក់ចោល</b>។ អ្នកត្រូវ permit traffic ដែលអ្នកចង់បាន រួមទាំង flow ត្រឡប់/ដែលត្រូវការ។</div></div>

<!-- ============ NAT ============ -->
<h2 id="nat">15 · NAT / PAT <span class="pill">core</span></h2>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  NAT បកប្រែ <b>អាសយដ្ឋានឯកជន (RFC1918) ↔ អាសយដ្ឋានសាធារណៈ</b> ដូច្នេះ network ខាងក្នុងអាចទៅដល់ Internet។ មានបីប្រភេទ៖ <b>Static NAT</b> = map 1-ទៅ-1 ថេរ។ <b>Dynamic NAT</b> = pool នៃ public IP ចែកតាមត្រូវការ។ <b>PAT (overload)</b> = host ខាងក្នុងច្រើនចែក public IP <b>តែមួយ</b> បែងចែកដោយ <b>port number</b> — នេះជាអ្វីដែល router ផ្ទះធ្វើ។
</div>
<div class="figure"><div class="figcap">PAT — host ឯកជន​ច្រើន​ចែក public IP តែ​មួយ បែងចែក​ដោយ port</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">192.168.1.10</span>
  <span class="flow-node">192.168.1.11</span>
  <span class="flow-node">192.168.1.12</span>
  <span class="flow-arrow">— NAT (overload) →</span>
  <span class="flow-node is-plain">203.0.113.5 : {port}</span>
  <span class="flow-loop">host ឯកជន​បី → public IP <b>តែ​មួយ</b>។ Router តាមដាន​ម្នាក់ៗ​ដោយ <b>source port</b> ដូច្នេះ​ការ​ឆ្លើយ​ត្រឡប់​ទៅ host ត្រូវ។ (Static NAT = 1-ទៅ-1 ថេរ; Dynamic = pool។)</span>
</div></div></div>
<div class="codewrap"><div class="cap">PAT (overload) — ប្រើច្រើនជាងគេ</div>
<pre><span class="pr">interface</span> g0/0
 <span class="pr">ip nat inside</span>          <span class="cm">! ខាង private/LAN</span>
<span class="pr">interface</span> g0/1
 <span class="pr">ip nat outside</span>         <span class="cm">! ខាង public/WAN</span>
<span class="pr">access-list</span> 1 <span class="pr">permit</span> 192.168.1.0 0.0.0.255
<span class="pr">ip nat inside source list</span> 1 <span class="pr">interface</span> g0/1 <span class="pr">overload</span>
<span class="cm">! ផ្ទៀងផ្ទាត់៖</span>
<span class="pr">show ip nat translations</span></pre></div>
<div class="drill"><div class="q">Static NAT ទល់នឹង Dynamic NAT ទល់នឹង PAT — បែងចែកក្នុងមួយបន្ទាត់ម្នាក់ៗ។</div>
<div class="a"><ul>
<li><b>Static NAT</b> — map មួយ-ទៅ-មួយ ថេរ (ឧ. server សាធារណៈ)។</li>
<li><b>Dynamic NAT</b> — pool នៃ public IP ផ្តល់តាមតម្រូវការ មួយ-ទៅ-មួយ ខណៈកំពុងប្រើ។</li>
<li><b>PAT / overload</b> — host ឯកជនច្រើន → public IP <b>តែមួយ</b> បំបែកដោយ source port។</li>
</ul></div></div>
<div class="drill"><div class="q">តើ keyword <code>overload</code> ធ្វើអ្វី ហើយ interface ណាជា <code>ip nat inside</code> ទល់នឹង <code>outside</code>?</div>
<div class="a"><code>overload</code> បើក <b>PAT</b> — ការចែករំលែកផ្អែកលើ port នៃ public address តែមួយ។ <code>ip nat inside</code> = interface <b>private/LAN</b>; <code>ip nat outside</code> = interface <b>public/WAN</b>។</div></div>

<!-- ============ DHCP + verify ============ -->
<h2 id="dhcp">16 · DHCP &amp; សន្លឹកសង្ខេបការផ្ទៀងផ្ទាត់</h2>
<div class="concept">
  <span class="label">គំរូក្នុងគំនិត</span>
  DHCP ផ្តល់ IP config ដោយស្វ័យប្រវត្តិទៅ host។ ការចាប់ដៃគឺ <b>DORA</b>៖ <b>D</b>iscover (client broadcast) → <b>O</b>ffer (server ស្នើ) → <b>R</b>equest (client ទទួលយក) → <b>A</b>ck (server បញ្ជាក់)។ មិនរាប់បញ្ចូលអាសយដ្ឋានដែលអ្នកប្រើ static (router, server) ដូច្នេះវាមិនត្រូវចែកចេញ។
</div>
<div class="figure"><div class="figcap">DORA — ការ​ចាប់ដៃ DHCP ៤ ជំហាន</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">D — Discover</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">O — Offer</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">R — Request</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">A — Ack</span>
  <span class="flow-loop">Client <b>broadcast</b> Discover → server <b>Offer</b> អាសយដ្ឋាន → client <b>Request</b> វា → server <b>Ack</b> lease។ (Discover/Request ពី client; Offer/Ack ពី server។)</span>
</div></div></div>
<div class="codewrap"><div class="cap">Router ជា DHCP server</div>
<pre><span class="pr">ip dhcp excluded-address</span> 192.168.1.1 192.168.1.10
<span class="pr">ip dhcp pool</span> LAN
 <span class="pr">network</span> 192.168.1.0 255.255.255.0
 <span class="pr">default-router</span> 192.168.1.1
 <span class="pr">dns-server</span> 8.8.8.8</pre></div>
<div class="drill"><div class="q">ពន្យល់ការចាប់ដៃ DHCP (DORA) និងជំហាននីមួយៗធ្វើអ្វី។</div>
<div class="a"><b>D</b>iscover — client broadcast រកមើល server · <b>O</b>ffer — server ផ្តល់អាសយដ្ឋាន · <b>R</b>equest — client ស្នើសុំអាសយដ្ឋានដែលផ្តល់នោះ · <b>A</b>ck — server ទទួលស្គាល់/បញ្ជាក់ lease។</div></div>
<h3>Command ផ្ទៀងផ្ទាត់ — ឯកសារយោងរហ័ស</h3>
<table>
<thead><tr><th>គោលដៅ</th><th>Command</th></tr></thead>
<tbody>
<tr><td>Routing table ពេញ</td><td><code>show ip route</code></td></tr>
<tr><td>Route ពី protocol មួយ</td><td><code>show ip route ospf</code> / <code>eigrp</code> / <code>rip</code> / <code>bgp</code></td></tr>
<tr><td>សង្ខេប protocol (RID, timer, network)</td><td><code>show ip protocols</code></td></tr>
<tr><td>Neighbour / state OSPF</td><td><code>show ip ospf neighbor</code></td></tr>
<tr><td>Neighbour EIGRP</td><td><code>show ip eigrp neighbors</code></td></tr>
<tr><td>Peer BGP</td><td><code>show ip bgp summary</code></td></tr>
<tr><td>NAT translation</td><td><code>show ip nat translations</code></td></tr>
<tr><td>IP interface (រហ័ស)</td><td><code>show ip interface brief</code></td></tr>
</tbody>
</table>
<div class="drill"><div class="q">អ្នកត្រូវបញ្ជាក់ (a) protocol ណាផ្តល់ route ឱ្យអ្នក, (b) state adjacency OSPF, (c) ថា PAT ដំណើរការ។ ដាក់ឈ្មោះ command មួយសម្រាប់នីមួយៗ។</div>
<div class="a">(a) <code>show ip route</code> (លេខកូដអក្សរ O/D/R/B) · (b) <code>show ip ospf neighbor</code> (រកមើល FULL) · (c) <code>show ip nat translations</code>។</div></div>

<!-- ============ EXAM ============ -->
<h2 id="exam">17 · សំណួរបែបប្រឡងបញ្ចូលគ្នា</h2>
<p class="lead">ទាំងនេះលាយប្រធានបទដូចសន្លឹកប្រឡងពិត។ សាកល្បងឆ្លើយឱ្យពេញលើក្រដាសជាមុនសិន។</p>

<div class="exam">
<div class="drill"><div class="q">Router មួយរៀន 192.168.50.0/24 ពីទាំង OSPF និង RIP។ (a) មួយណាត្រូវដំឡើង ហើយហេតុអ្វី? (b) បើមានតែ RIP ហើយ route នោះឆ្ងាយ 17 hop តើមានអ្វីកើតឡើង?</div>
<div class="a">(a) <b>OSPF</b> — AD 110 &lt; RIP 120; AD ត្រូវប្រៀបធៀបមុន metric។ (b) 17 &gt; 15 ដូច្នេះវាលើស max របស់ RIP; route នោះត្រូវចាត់ទុកជា <b>16 = ទៅមិនដល់</b> ហើយមិនប្រើ។</div></div>

<div class="drill"><div class="q">សរសេរ config OSPF single-area ពេញលេញសម្រាប់ router ដែលមាន RID 2.2.2.2 ដែលដំណើរការ OSPF លើ 192.168.141.0/24 និងលើ link /30 140.140.130.0។ បន្ទាប់មកផ្តល់ command ដើម្បីបញ្ជាក់ថា neighbour ជា FULL។</div>
<div class="a"><pre style="margin-top:6px"><span class="pr">router ospf</span> 1
 <span class="pr">router-id</span> 2.2.2.2
 <span class="pr">network</span> 192.168.141.0 0.0.0.255 <span class="pr">area</span> 0
 <span class="pr">network</span> 140.140.130.0 0.0.0.3 <span class="pr">area</span> 0</pre>
បញ្ជាក់៖ <code>show ip ospf neighbor</code> (រកមើល state FULL)។</div></div>

<div class="drill"><div class="q">Router បីគ្រឿង, AS 122 / 123 / 124។ សរសេរ config eBGP លើ R1 (AS122, RID 1.1.1.1) peer ទៅ 140.140.130.2 (AS123) ផ្សាយ 192.168.140.0/24។</div>
<div class="a"><pre style="margin-top:6px"><span class="pr">router bgp</span> 122
 <span class="pr">bgp router-id</span> 1.1.1.1
 <span class="pr">neighbor</span> 140.140.130.2 <span class="pr">remote-as</span> 123
 <span class="pr">network</span> 192.168.140.0 <span class="pr">mask</span> 255.255.255.0</pre>
ចងចាំ៖ <code>mask</code> មិនមែន wildcard; <code>remote-as 123</code> ≠ AS របស់ខ្ញុំ → នេះជា eBGP (AD 20)។</div></div>

<div class="drill"><div class="q">ពន្យល់ តាមលំដាប់ ថាមានអ្វីកើតឡើងពេលអ្នកលើក site-to-site IPsec VPN រវាង 104.15.240.21 (LAN 192.168.1.0/24) និង 202.193.25.22 (LAN 192.168.2.0/24)។</div>
<div class="a"><ol>
<li><b>Interesting traffic</b> (192.168.1.0 → 192.168.2.0) ប៉ះ crypto map ហើយ trigger IKE។</li>
<li><b>Phase 1 (ISAKMP)៖</b> peer យល់ស្របលើ policy (aes/sha/pre-share/group 2/lifetime), ផ្ទៀងផ្ទាត់តាម pre-shared key, ហើយដំណើរការ Diffie-Hellman ដើម្បីសង់ឆានែលគ្រប់គ្រងសុវត្ថិភាព។</li>
<li><b>Phase 2 (IPsec SA)៖</b> ពួកវាចរចា transform set (esp-aes esp-sha-hmac) សម្រាប់ទិន្នន័យ។</li>
<li>ឥឡូវទិន្នន័យអ្នកប្រើត្រូវអ៊ិនគ្រីបពីចុងម្ខាងទៅចុងម្ខាងតាមផ្លូវរូង; SA re-key នៅ lifetime (86400s)។</li>
</ol></div></div>

<div class="drill"><div class="q">អ្នកត្រូវការផ្លូវរូងដែលផ្ទុក OSPF រវាង site ពីរ ហើយ ក៏អ៊ិនគ្រីបវាផងដែរ។ អ្នកប្រើអ្វី ហើយហេតុអ្វីបច្ចេកវិទ្យាពីរ?</div>
<div class="a"><b>GRE over IPsec។</b> GRE ព្រោះ IPsec តែម្នាក់ឯងមិនអាចផ្ទុក multicast/OSPF; IPsec ព្រោះ GRE តែម្នាក់ឯងគ្មាន encryption។ GRE ផ្តល់ការដឹកជញ្ជូនសម្រាប់ routing, IPsec ផ្តល់ការសម្ងាត់ (confidentiality)។</div></div>
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

<p class="footnote">សង់ឡើងពីសន្លឹកចម្លើយ Internetworking ដែលបានដាក់ពិន្ទុរបស់អ្នក (OSPF/RIP/dynamic routing/Router-ID/IPsec + ផ្នែក config EIGRP/OSPF/BGP)។ GRE បន្ថែមពី standard IOS / labs របស់អ្នក។ បោះពុម្ព ឬ “Save as PDF” នឹងបង្ហាញចម្លើយទាំងអស់ដោយស្វ័យប្រវត្តិ។</p>
`;
export default html;
