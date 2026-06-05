const html = `


<p class="lead">របៀបប្រើ៖ <b>អានប្រអប់គំនិត (concept box)</b> ជាមុនសិន (គំរូក្នុងគំនិត) បន្ទាប់មក <b>បិទអេក្រង់ ហើយឆ្លើយសំណួរ drill នីមួយៗឱ្យឮ ឬសរសេរលើក្រដាសមុននឹងចុចបង្ហាញចម្លើយ</b>។ ការស្គាល់មុខ (recognition) ធ្វើឱ្យយើងគិតថាយើងចេះ ប៉ុន្តែមានតែការនឹកចេញដោយខ្លួនឯង (retrieval) ទេទើបបញ្ជាក់ថាយើងចេះពិត។ Config នីមួយៗមាន drill ប្រភេទ “ពន្យល់បន្ទាត់នេះ” ព្រោះការប្រឡងលាយចម្លើយ <i>សរសេរ config</i> ជាមួយ <i>ពន្យល់គំនិត</i>។</p>
<p class="lead" style="color:#8a3f08"><b>មិនធ្លាប់រៀនរឿងនេះ / ភ្លេចអស់ហើយ?</b> កុំភ័យ — ចាប់ផ្តើមពី <a href="#foundations" style="color:#b4540a;font-weight:700">ផ្នែកទី 0</a>។ វាសង់មុខវិជ្ជានេះឡើងពីសូន្យ ដោយប្រើការប្រៀបធៀបងាយៗតែមួយ។ ផ្នែកផ្សេងទៀតនឹងយល់បានងាយក្រោយពេលនោះ។</p>

<!-- ============ FOUNDATIONS ============ -->
<h2 id="foundations" class="zero">0 · ចាប់ផ្តើមនៅទីនេះ — មុខវិជ្ជាទាំងមូលជាពាក្យសាមញ្ញ</h2>
<p>បើផ្នែកខាងក្រោមមើលទៅដូចជាពាក្យបំភ័ន្ត (OSPF, AD, LSDB, wildcard…) <b>សូមអាននេះមុនសិន</b>។ វាសន្មត់ថាអ្នក <b>មិនចេះអ្វីសោះ</b>។ ពេលគំនិតពីរបីនេះចូលក្បាលហើយ ផ្នែកដែលនៅសល់នឹងលែងជាពាក្យចៃដន្យ ហើយក្លាយជា “អូ — នេះគ្រាន់តែជាគំនិតដដែលម្តងទៀតប៉ុណ្ណោះ”។</p>

<div class="concept"><span class="label">ការប្រៀបធៀបតែមួយសម្រាប់មុខវិជ្ជាទាំងមូល</span>
Networking គ្រាន់តែជា <b>ប្រព័ន្ធប្រៃសណីយ៍សម្រាប់ទិន្នន័យ</b>។ កុំព្យូទ័របញ្ជូនកញ្ចប់ទិន្នន័យតូចៗហៅថា <b>packet</b>។ ដើម្បីឱ្យ packet មួយទៅពីកន្លែងមួយដល់កន្លែងមួយ វាលោតកាត់ <b>ការិយាល័យចែកសំបុត្រ</b> ជាបន្តបន្ទាប់។ ការិយាល័យចែកសំបុត្រទាំងនោះគឺ <b>router</b>។ <b>ស្ទើរតែអ្វីៗទាំងអស់ក្នុងមុខវិជ្ជានេះគឺនិយាយអំពីរបៀបដែល router សម្រេចចិត្តថាត្រូវបញ្ជូន packet នីមួយៗទៅណា។</b> ទុករូបភាពនេះក្នុងក្បាល ហើយពាក្យបច្ចេកទេសខាងក្រោមគ្រាន់តែជាស្លាកដាក់លើផ្នែកនីមួយៗរបស់វា។</div>

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

<p class="footnote">សង់ឡើងពីសន្លឹកចម្លើយ Internetworking ដែលបានដាក់ពិន្ទុរបស់អ្នក (OSPF/RIP/dynamic routing/Router-ID/IPsec + ផ្នែក config EIGRP/OSPF/BGP)។ GRE បន្ថែមពី standard IOS / labs របស់អ្នក។ បោះពុម្ព ឬ “Save as PDF” នឹងបង្ហាញចម្លើយទាំងអស់ដោយស្វ័យប្រវត្តិ។</p>
`;
export default html;
