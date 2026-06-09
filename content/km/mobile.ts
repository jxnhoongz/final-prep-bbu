const html = `

<p class="lead">មុខវិជ្ជានេះ <b>លាយ Android (Java) + Flutter (Dart)</b>។ ការប្រឡង​នឹង​ឲ្យ​អ្នក <b>សរសេរ​កូដ​ខ្លីៗ​ដោយ​ចាំ​ក្នុង​ខួរ</b> (បើក activity មួយ, ផ្លាស់ទី​ពី​អេក្រង់​មួយ​ទៅ​មួយ, ប្រកាស permission, បង្កើត class/widget) និង​ឲ្យ <b>ពន្យល់​គំនិត​មូលដ្ឋាន</b> (lifecycle, stateless ធៀប stateful)។ លំហាត់​ហ្វឹកហាត់​បង្ខំ​ឲ្យ​អ្នក <i>សរសេរ​កូដ​ខ្លួនឯង</i> មុន​នឹង​លួច​មើល​ចម្លើយ — នោះ​ហើយ​ជា​ជំនាញ​ដែល​គេ​ប្រឡង​សាកល្បង។</p>
<div class="tagrow"><span class="tag-a">Android / Java</span><span class="tag-f">Flutter / Dart</span></div>


<!-- LIFECYCLE -->
<h2 id="lifecycle">1 · Activity lifecycle <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  Android តែងតែ​បង្កើត, ផ្អាក, និង​បំផ្លាញ​អេក្រង់​របស់​អ្នក​ដើម្បី​គ្រប់គ្រង memory និង​ការ​រំខាន (ការ​ហៅ​ទូរស័ព្ទ, ការ​បង្វិល​អេក្រង់, ការ​ប្ដូរ​កម្មវិធី)។ រាល់​ការ​ផ្លាស់ប្ដូរ​នីមួយៗ​នឹង​ហៅ callback មួយ ដើម្បី​ឲ្យ​អ្នក​អាច <b>រក្សាទុក/ដោះលែង​នៅ​ពេល​ត្រឹមត្រូវ</b>។ សូម​ស្រមៃ​វា​ដូច​កាំ​ជណ្ដើរ​ឡើង​ទៅ​រក “មើល​ឃើញ &amp; ប្រើ​បាន” រួច​ចុះ​មក​វិញ។ <span class="mnemonic">Create → Start → Resume … Pause → Stop → Destroy។</span>
</div>
<table>
<thead><tr><th>Callback</th><th>ហៅ​នៅ​ពេល</th></tr></thead>
<tbody>
<tr><td><code>onCreate()</code></td><td>Activity ត្រូវ​បាន​បង្កើត — សង់ UI, <code>setContentView</code>, init ម្ដង</td></tr>
<tr><td><code>onStart()</code></td><td>ចាប់ផ្ដើម​មើល​ឃើញ</td></tr>
<tr><td><code>onResume()</code></td><td>នៅ​ខាង​មុខ​អេក្រង់, អ្នក​ប្រើ​អាច​ប៉ះ​ប្រើ​បាន (កំពុង​ដំណើរការ)</td></tr>
<tr><td><code>onPause()</code></td><td>បាត់​ការ​ផ្ដោត​ការ​យក​ចិត្ត​ទុក​ដាក់ (មាន dialog/activity ផ្សេង​នៅ​មុខ) — រក្សាទុក​ស្ថានភាព​តិចតួច</td></tr>
<tr><td><code>onStop()</code></td><td>លែង​មើល​ឃើញ​ហើយ — ដោះលែង​ធនធាន​ធំៗ</td></tr>
<tr><td><code>onDestroy()</code></td><td>កំពុង​ត្រូវ​បាន​បំផ្លាញ (finish / ប្រព័ន្ធ​សម្លាប់)</td></tr>
<tr><td><code>onRestart()</code></td><td>ត្រឡប់​មក​មើល​ឃើញ​វិញ​បន្ទាប់​ពី onStop</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">សរសេរ lifecycle callbacks តាម​លំដាប់​ចាប់​ពី​ការ​បើក​ដំណើរការ​រហូត​ដល់​ការ​បំផ្លាញ។</div>
<div class="a"><span class="blank">onCreate → onStart → onResume</span> → (កំពុង​ដំណើរការ) → <span class="blank">onPause → onStop → onDestroy</span>។ ការ​ត្រឡប់​មក​វិញ​ពី stop គឺ onRestart → onStart → onResume។</div></div>
<div class="drill"><div class="q">មាន​ការ​ហៅ​ទូរស័ព្ទ​មក​រំខាន​កម្មវិធី​របស់​អ្នក រួច​អ្នក​ប្រើ​ត្រឡប់​មក​វិញ។ តើ callback ណា​ខ្លះ​ហៅ​ពេល​ចេញ​ទៅ និង​ពេល​ត្រឡប់​មក​វិញ?</div>
<div class="a">ពេល​ចេញ​ទៅ៖ <b>onPause → onStop</b>។ ពេល​ត្រឡប់​មក​វិញ៖ <b>onRestart → onStart → onResume</b>។</div></div>
<div class="drill"><div class="q">តើ​អ្នក​ដាក់ <code>setContentView()</code> ក្នុង callback ណា ហើយ​ហេតុ​អ្វី​ដាក់​ត្រង់​នោះ?</div>
<div class="a"><b>onCreate()</b> — វា​ដំណើរការ​តែ​ម្ដង​ពេល activity ត្រូវ​បាន​បង្កើត ដែល​ជា​កន្លែង​ត្រឹមត្រូវ​សម្រាប់​ផ្ទុក layout និង​ធ្វើ​ការ​រៀបចំ​តែ​ម្ដង។</div></div>

<!-- COMPONENTS -->
<h2 id="components">2 · App components &amp; layouts <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<table>
<thead><tr><th>Component</th><th>តួនាទី</th></tr></thead>
<tbody>
<tr><td><b>Activity</b></td><td>អេក្រង់​មួយ​ដែល​មាន UI</td></tr>
<tr><td><b>Service</b></td><td>ការងារ​ខាង​ក្រោយ, គ្មាន UI</td></tr>
<tr><td><b>BroadcastReceiver</b></td><td>ឆ្លើយតប​ទៅ​នឹង​ព្រឹត្តិការណ៍​ប្រព័ន្ធ/ទូទាំង​កម្មវិធី</td></tr>
<tr><td><b>ContentProvider</b></td><td>ចែករំលែក​ទិន្នន័យ​រវាង​កម្មវិធី</td></tr>
</tbody>
</table>
<table>
<thead><tr><th>Layout</th><th>រៀបចំ​កូន​ធាតុ…</th></tr></thead>
<tbody>
<tr><td>LinearLayout</td><td>ក្នុង​ជួរ​មួយ ឬ​ឈរ​មួយ</td></tr>
<tr><td>RelativeLayout</td><td>ទាក់ទង​គ្នា​ទៅ​វិញ​ទៅ​មក / ទៅ parent</td></tr>
<tr><td>ConstraintLayout</td><td>តាម constraint (បត់បែន, រចនាសម្ព័ន្ធ​រាបស្មើ)</td></tr>
<tr><td>FrameLayout</td><td>ដាក់​ត្រួត​លើ​គ្នា</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">ដាក់​ឈ្មោះ Android components ស្នូល​ទាំង 4 និង​មុខងារ​នីមួយៗ។</div>
<div class="a"><ul><li><b>Activity</b> — អេក្រង់ UI មួយ</li><li><b>Service</b> — ការងារ​ខាង​ក្រោយ, គ្មាន UI</li><li><b>BroadcastReceiver</b> — ប្រតិកម្ម​ទៅ​នឹង​ព្រឹត្តិការណ៍</li><li><b>ContentProvider</b> — ចែករំលែក​ទិន្នន័យ​ឆ្លង​កម្មវិធី</li></ul></div></div>
<div class="drill"><div class="q">តើ Adapter ប្រើ​សម្រាប់​អ្វី?</div>
<div class="a">វា​ជា <b>ស្ពាន​ភ្ជាប់​រវាង​សំណុំ​ទិន្នន័យ និង view</b> ដែល​បង្ហាញ​វា (ឧ. ListView/RecyclerView)។ វា​យក​ទិន្នន័យ​នីមួយៗ​មក​បង្កើត​ជា view សម្រាប់​ជួរ​នោះ។</div></div>

<!-- INTENTS -->
<h2 id="intents">3 · Intents — ផ្លាស់ទី​រវាង​អេក្រង់ <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  Intent គឺ​ជា <b>សារ​មួយ​ដែល​ស្នើ​ឲ្យ​ប្រព័ន្ធ​ចាប់ផ្ដើម​អ្វី​មួយ</b>។ <b>Explicit</b> = អ្នក​ប្រាប់​ឈ្មោះ class គោលដៅ​ច្បាស់លាស់ (អេក្រង់​របស់​អ្នក​ផ្ទាល់)។ <b>Implicit</b> = អ្នក​រៀបរាប់​សកម្មភាព (“បើក​គេហទំព័រ​មួយ”) រួច​ឲ្យ OS ជ្រើស​យក​កម្មវិធី​សមរម្យ។ ដើម្បី​ប្ដូរ​អេក្រង់ អ្នក​បង្កើត explicit Intent មួយ រួច​ហៅ <code>startActivity</code>។
</div>
<div class="codewrap"><div class="cap">បើក activity ផ្សេង (explicit intent) — ត្រូវ​ចាំ​ឲ្យ​បាន</div>
<pre><span class="ty">Intent</span> intent = <span class="kw">new</span> <span class="ty">Intent</span>(MainActivity.<span class="kw">this</span>, LoginActivity.<span class="kw">class</span>);
startActivity(intent);</pre></div>
<div class="drill"><div class="q">សរសេរ​កូដ Java ដើម្បី​បើក LoginActivity ពី MainActivity។ (សរសេរ​មុន រួច​ពិនិត្យ)</div>
<div class="a"><pre style="margin-top:6px"><span class="ty">Intent</span> intent = <span class="kw">new</span> <span class="ty">Intent</span>(MainActivity.<span class="kw">this</span>, LoginActivity.<span class="kw">class</span>);
startActivity(intent);</pre></div></div>
<div class="drill"><div class="q">Explicit ធៀប implicit intent — មួយ​បន្ទាត់​ម្នាក់។</div>
<div class="a"><b>Explicit</b>៖ អ្នក​បញ្ជាក់ component/class ច្បាស់លាស់​ដែល​ត្រូវ​ចាប់ផ្ដើម (activity របស់​អ្នក​ផ្ទាល់)។ <b>Implicit</b>៖ អ្នក​បញ្ជាក់​សកម្មភាព/ទិន្នន័យ រួច​ប្រព័ន្ធ​រក​កម្មវិធី​ដែល​អាច​ដោះស្រាយ​វា (ឧ. ACTION_VIEW URL មួយ)។</div></div>

<!-- MANIFEST -->
<h2 id="manifest">4 · Manifest &amp; permissions <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  <code>AndroidManifest.xml</code> គឺ​ជា <b>សេចក្ដី​ប្រកាស​របស់​កម្មវិធី​ទៅ OS</b>៖ រាល់ activity និង​រាល់​សមត្ថភាព​រសើប​ដែល​វា​ត្រូវការ។ ឧទាហរណ៍ ការ​ចូល​ប្រើ network ត្រូវ​ស្នើ​ជាមួយ INTERNET permission បើ​មិន​ដូច្នេះ​ការ​ហៅ​នឹង​បរាជ័យ។
</div>
<div class="codewrap"><div class="cap">ប្រកាស​ការ​ចូល​ប្រើ​អ៊ីនធឺណិត​ក្នុង manifest</div>
<pre>&lt;uses-permission android:name=<span class="st">"android.permission.INTERNET"</span> /&gt;</pre></div>
<div class="drill"><div class="q">សរសេរ​បន្ទាត់ manifest ដែល​ផ្ដល់​ការ​ចូល​ប្រើ​អ៊ីនធឺណិត។</div>
<div class="a"><pre style="margin-top:6px">&lt;uses-permission android:name=<span class="st">"android.permission.INTERNET"</span> /&gt;</pre></div></div>
<div class="drill"><div class="q">តើ AndroidManifest.xml សម្រាប់​អ្វី? ដាក់​ឈ្មោះ​អ្វី​ពីរ​ដែល​ប្រកាស​នៅ​ក្នុង​វា។</div>
<div class="a">វា​ប្រកាស​កម្មវិធី​ទៅ​ប្រព័ន្ធ។ មាន៖ <b>activities/components</b> របស់​កម្មវិធី, <b>permissions</b> ដែល​ស្នើ, metadata កម្មវិធី, launcher activity, min/target SDK ។ល។</div></div>

<!-- JAVA -->
<h2 id="java">5 · សរសេរ class Java មួយ <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  class មួយ = fields (ទិន្នន័យ) + constructor (របៀប​បង្កើត​មួយ) + methods (អាកប្បកិរិយា)។ Java ត្រូវការ <b>types</b> ច្បាស់លាស់​លើ​អ្វី​គ្រប់​យ៉ាង និង constructor ដែល​ឈ្មោះ​ត្រូវ​ផ្គូផ្គង​នឹង class។
</div>
<div class="codewrap"><div class="cap">class ប្រឡង​ធម្មតា​មួយ (fields + constructor + getter)</div>
<pre><span class="kw">public class</span> <span class="ty">Teacher</span> {
    <span class="kw">private</span> <span class="ty">String</span> name;
    <span class="kw">private</span> <span class="ty">int</span> age;

    <span class="kw">public</span> <span class="ty">Teacher</span>(<span class="ty">String</span> name, <span class="ty">int</span> age) {  <span class="cm">// constructor</span>
        <span class="kw">this</span>.name = name;
        <span class="kw">this</span>.age = age;
    }

    <span class="kw">public</span> <span class="ty">String</span> getName() { <span class="kw">return</span> name; }
}</pre></div>
<div class="drill"><div class="q">ដោយ​ចាំ​ក្នុង​ខួរ សរសេរ class Java <code>Student</code> ដែល​មាន String name + int id, constructor មួយ, និង getName() មួយ។</div>
<div class="a"><pre style="margin-top:6px"><span class="kw">public class</span> <span class="ty">Student</span> {
    <span class="kw">private</span> <span class="ty">String</span> name;
    <span class="kw">private</span> <span class="ty">int</span> id;

    <span class="kw">public</span> <span class="ty">Student</span>(<span class="ty">String</span> name, <span class="ty">int</span> id) {
        <span class="kw">this</span>.name = name;
        <span class="kw">this</span>.id = id;
    }

    <span class="kw">public</span> <span class="ty">String</span> getName() { <span class="kw">return</span> name; }
}</pre></div></div>

<!-- FLUTTER -->
<h2 id="flutter">6 · គំនិត​មូលដ្ឋាន Flutter &amp; widgets <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  នៅ​ក្នុង Flutter <b>អ្វី​គ្រប់​យ៉ាង​សុទ្ធតែ​ជា widget</b> — layout, text, padding, ទាំង​អេក្រង់​ទាំងមូល — ផ្គុំ​ចូល​គ្នា​ជា​ដើមឈើ (tree)។ framework ហៅ <code>build()</code> របស់​អ្នក​ដើម្បី​គូរ UI (ឡើង​វិញ) ពី​ទិន្នន័យ​បច្ចុប្បន្ន។ ភាព​ខុស​គ្នា​ធំ៖ <b>StatelessWidget</b> មិន​ដែល​ប្ដូរ​ក្រោយ build; <b>StatefulWidget</b> រក្សា​ស្ថានភាព​ដែល​ប្ដូរ​បាន ហើយ​គូរ​ឡើង​វិញ​ពេល​អ្នក​ហៅ <code>setState()</code>។ <span class="mnemonic">ទិន្នន័យ​ប្ដូរ → setState() → build() ដំណើរការ​ម្ដង​ទៀត → UI ប្ដូរ។</span>
</div>
<table>
<thead><tr><th>គំនិត</th><th>អត្ថន័យ</th></tr></thead>
<tbody>
<tr><td>StatelessWidget</td><td>UI មិន​ប្ដូរ; គ្មាន​ស្ថានភាព​ខាង​ក្នុង​ដែល​ប្ដូរ</td></tr>
<tr><td>StatefulWidget</td><td>មាន object <code>State</code>; <code>setState()</code> បង្ក​ឲ្យ build ឡើង​វិញ</td></tr>
<tr><td><code>build()</code></td><td>ត្រឡប់​ដើមឈើ widget ដែល​ត្រូវ​គូរ</td></tr>
<tr><td>MaterialApp / Scaffold / AppBar</td><td>ឫស​កម្មវិធី / គ្រោង​ទំព័រ / របារ​ខាង​លើ</td></tr>
<tr><td><code>pubspec.yaml</code></td><td>config គម្រោង៖ dependencies &amp; assets</td></tr>
<tr><td>Hot reload</td><td>អនុវត្ត​ការ​ប្ដូរ​កូដ​ភ្លាមៗ​ដោយ​មិន​បាត់​ស្ថានភាព</td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">ចំណុច​ចូល (entry point)</div>
<pre><span class="kw">void</span> main() {
  runApp(<span class="ty">MyApp</span>());
}</pre></div>
<div class="drill"><div class="q">StatelessWidget ធៀប StatefulWidget — ពេល​ណា​ត្រូវ​ប្រើ​មួយ​ណា ហើយ method ណា​បង្ក​ឲ្យ​គូរ​ឡើង​វិញ?</div>
<div class="a"><b>StatelessWidget</b> ពេល UI មិន​ប្ដូរ​ពី​ទិន្នន័យ​ខាង​ក្នុង (មាតិកា​ថេរ)។ <b>StatefulWidget</b> ពេល UI ត្រូវ​ប្ដូរ​ឆ្លើយតប​នឹង​ទិន្នន័យ/អន្តរកម្ម។ ការ​ហៅ <b><code>setState()</code></b> ប្រាប់ Flutter ឲ្យ​ដំណើរការ <code>build()</code> ឡើង​វិញ ហើយ​គូរ​ឡើង​វិញ។</div></div>
<div class="drill"><div class="q">តើ <code>pubspec.yaml</code> សម្រាប់​អ្វី? ដាក់​ឈ្មោះ​អ្វី​ពីរ​ដែល​វា​ផ្ទុក។</div>
<div class="a">ឯកសារ config របស់​គម្រោង Flutter។ ផ្ទុក <b>dependencies</b> (packages) និង <b>assets</b> ដែល​ប្រកាស (រូបភាព/fonts) បូក​នឹង​ឈ្មោះ/កំណែ/ការ​កំណត់ SDK របស់​កម្មវិធី។</div></div>
<div class="drill"><div class="q">តើ <code>main()</code> ធ្វើ​អ្វី​ក្នុង​កម្មវិធី Flutter?</div>
<div class="a">វា​ជា​ចំណុច​ចូល; វា​ហៅ <code>runApp(MyApp())</code> ដើម្បី​ដំឡើង widget ឫស និង​ចាប់ផ្ដើម​កម្មវិធី។</div></div>

<!-- NAV -->
<h2 id="nav">7 · Navigator — ផ្លាស់ទី​រវាង​អេក្រង់ <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  Flutter គ្រប់គ្រង​អេក្រង់​ជា <b>stack នៃ routes</b>។ <code>push</code> ដាក់​អេក្រង់​ថ្មី​នៅ​លើ​គេ; <code>pop</code> ដក​អេក្រង់​លើ​គេ​ចេញ​ដើម្បី​ត្រឡប់​ក្រោយ។ នេះ​ជា​សមមូល​នៅ Flutter នៃ startActivity / ប៊ូតុង​ត្រឡប់​ក្រោយ​របស់ Android។
</div>
<div class="codewrap"><div class="cap">ទៅ​អេក្រង់​ផ្សេង / ត្រឡប់​ក្រោយ — ត្រូវ​ចាំ​ទាំង​ពីរ</div>
<pre><span class="cm">// push a new screen onto the stack</span>
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => <span class="ty">OtherScreen</span>()),
);

<span class="cm">// go back</span>
Navigator.pop(context);</pre></div>
<div class="drill"><div class="q">សរសេរ​កូដ Flutter ដើម្បី​ទៅ OtherScreen និង​កូដ​ដើម្បី​ត្រឡប់​ក្រោយ។</div>
<div class="a"><pre style="margin-top:6px">Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => <span class="ty">OtherScreen</span>()),
);

Navigator.pop(context);</pre></div></div>
<div class="drill"><div class="q">ផ្គូផ្គង​គំនិត​ការ​រុករក​អេក្រង់​របស់ Android ទៅ​នឹង​របស់ Flutter។</div>
<div class="a">Android <code>startActivity(intent)</code> ≈ Flutter <code>Navigator.push(...)</code>; Android back/<code>finish()</code> ≈ Flutter <code>Navigator.pop(context)</code>។ ទាំង​ពីរ​គ្រប់គ្រង <b>stack នៃ​អេក្រង់</b>។</div></div>

<!-- DART -->
<h2 id="dart">8 · Dart class + named constructor <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  Dart អនុញ្ញាត​ឲ្យ class មួយ​មាន <b>constructor ច្រើន​ជាង​មួយ</b> តាម​រយៈ <b>named constructors</b> (<code>ClassName.label(...)</code>) — មាន​ប្រយោជន៍​ពេល​អ្នក​ចង់​មាន​វិធី​ច្រើន​ដើម្បី​បង្កើត object មួយ។ Dart ក៏​ប្រើ <b>named parameters</b> ក្នុង <code>{ }</code> ជា​ញឹកញាប់​ជាមួយ <code>required</code>។
</div>
<div class="codewrap"><div class="cap">class Dart ដែល​មាន named constructor មួយ</div>
<pre><span class="kw">class</span> <span class="ty">Student</span> {
  <span class="ty">String</span> name;
  <span class="ty">int</span> id;

  <span class="cm">// default constructor</span>
  <span class="ty">Student</span>(<span class="kw">this</span>.name, <span class="kw">this</span>.id);

  <span class="cm">// named constructor</span>
  <span class="ty">Student</span>.allParams(<span class="kw">this</span>.name, <span class="kw">this</span>.id);
}

<span class="cm">// use it:</span>
<span class="kw">var</span> s = <span class="ty">Student</span>.allParams(<span class="st">"Vatana"</span>, 1);</pre></div>
<div class="codewrap"><div class="cap">Named parameters (ប្រើ​ញឹកញាប់​ក្នុង widgets)</div>
<pre><span class="ty">Slide</span>({<span class="kw">required this</span>.name, <span class="kw">required this</span>.imageUrl});
<span class="cm">// call:</span>
<span class="ty">Slide</span>(name: <span class="st">"Slide1"</span>, imageUrl: <span class="st">"url1"</span>);</pre></div>
<div class="drill"><div class="q">សរសេរ class Dart <code>Student</code> ដែល​មាន name + id និង named constructor <code>Student.allParams</code> រួច​បង្កើត​មួយ។</div>
<div class="a"><pre style="margin-top:6px"><span class="kw">class</span> <span class="ty">Student</span> {
  <span class="ty">String</span> name;
  <span class="ty">int</span> id;
  <span class="ty">Student</span>(<span class="kw">this</span>.name, <span class="kw">this</span>.id);
  <span class="ty">Student</span>.allParams(<span class="kw">this</span>.name, <span class="kw">this</span>.id);
}

<span class="kw">var</span> s = <span class="ty">Student</span>.allParams(<span class="st">"Vatana"</span>, 1);</pre></div></div>
<div class="drill"><div class="q">តើ named constructor ជា​អ្វី ហើយ​ហេតុ​អ្វី​ប្រើ​វា?</div>
<div class="a">វិធី​ទីពីរ (មាន​ឈ្មោះ) ដើម្បី​បង្កើត object មួយ៖ <code>ClassName.label(...)</code>។ Dart អនុញ្ញាត​តែ constructor គ្មាន​ឈ្មោះ​មួយ ដូច្នេះ named constructors ផ្ដល់​ឲ្យ​អ្នក <b>វិធី​ច្រើន​ដែល​មាន​ស្លាក​ច្បាស់លាស់​ដើម្បី​បង្កើត instance</b> (ឧ. ពី JSON, ជាមួយ params ទាំងអស់ ។ល។)។</div></div>
<div class="drill"><div class="q">ហៅ widget <code>Slide</code> ដែល​ទទួល named params <code>name</code> និង <code>imageUrl</code>។</div>
<div class="a"><code>Slide(name: "Slide1", imageUrl: "url1");</code></div></div>

<!-- PASS DATA -->
<h2 id="extras">9 · បញ្ជូន​ទិន្នន័យ​រវាង activities <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  Intent តែ​មួយ​ដែល​បើក​អេក្រង់​អាច <b>ផ្ទុក​ទិន្នន័យ</b> ជា “extras” បែប key-value។ អ្នក​ផ្ញើ​ភ្ជាប់​ជាមួយ <code>putExtra("key", value)</code>; activity ដែល​ទទួល​អាន​ជាមួយ <code>getIntent().getStringExtra("key")</code> (ឬ getIntExtra ។ល។)។
</div>
<div class="codewrap"><div class="cap">ផ្ញើ extras រួច​អាន​វា​នៅ​ខាង​ម្ខាង​ទៀត</div>
<pre><span class="cm">// sender</span>
<span class="ty">Intent</span> i = <span class="kw">new</span> <span class="ty">Intent</span>(MainActivity.<span class="kw">this</span>, DetailActivity.<span class="kw">class</span>);
i.putExtra(<span class="st">"username"</span>, <span class="st">"Vatana"</span>);
i.putExtra(<span class="st">"age"</span>, 22);
startActivity(i);

<span class="cm">// receiver — inside DetailActivity.onCreate()</span>
<span class="ty">String</span> name = getIntent().getStringExtra(<span class="st">"username"</span>);
<span class="kw">int</span> age = getIntent().getIntExtra(<span class="st">"age"</span>, 0);  <span class="cm">// 0 = default</span></pre></div>
<div class="drill"><div class="q">សរសេរ​កូដ​ដើម្បី​ផ្ញើ String "username" = "Vatana" ទៅ DetailActivity និង​កូដ​ដើម្បី​អាន​វា​នៅ​ទី​នោះ។</div>
<div class="a"><pre style="margin-top:6px"><span class="ty">Intent</span> i = <span class="kw">new</span> <span class="ty">Intent</span>(MainActivity.<span class="kw">this</span>, DetailActivity.<span class="kw">class</span>);
i.putExtra(<span class="st">"username"</span>, <span class="st">"Vatana"</span>);
startActivity(i);
<span class="cm">// in DetailActivity:</span>
<span class="ty">String</span> name = getIntent().getStringExtra(<span class="st">"username"</span>);</pre></div></div>

<!-- SHAREDPREFS -->
<h2 id="prefs">10 · SharedPreferences <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  SharedPreferences គឺ​ជា <b>កន្លែង​ផ្ទុក key-value តូច​ដែល​នៅ​ស្ថិតស្ថេរ</b> ដែល​នៅ​គង់​បន្ទាប់​ពី​ការ​បើក​កម្មវិធី​ឡើង​វិញ — ល្អ​ឥត​ខ្ចោះ​សម្រាប់ settings, ទង់ “បាន​ចូល​គណនី”, ឬ token ដែល​រក្សាទុក។ មិន​មែន​សម្រាប់​ទិន្នន័យ​ធំ ឬ​មាន​រចនាសម្ព័ន្ធ​ទេ (ប្រើ database សម្រាប់​នោះ)។ សរសេរ​តាម​រយៈ <b>Editor</b> រួច​ហៅ <code>apply()</code>។
</div>
<div class="codewrap"><div class="cap">រក្សាទុក និង​អាន​តម្លៃ​មួយ</div>
<pre><span class="cm">// save</span>
<span class="ty">SharedPreferences</span> prefs = getSharedPreferences(<span class="st">"myPrefs"</span>, MODE_PRIVATE);
<span class="ty">SharedPreferences.Editor</span> editor = prefs.edit();
editor.putString(<span class="st">"token"</span>, <span class="st">"abc123"</span>);
editor.apply();              <span class="cm">// async save</span>

<span class="cm">// read (with a default if missing)</span>
<span class="ty">String</span> token = prefs.getString(<span class="st">"token"</span>, <span class="kw">null</span>);</pre></div>
<div class="drill"><div class="q">តើ SharedPreferences សម្រាប់​អ្វី ហើយ​ពេល​ណា​អ្នក​មិន​គួរ​ប្រើ​វា?</div>
<div class="a">សម្រាប់ <b>ទិន្នន័យ key-value តូច​ដែល​ត្រូវ​នៅ​គង់</b> បន្ទាប់​ពី​បើក​ឡើង​វិញ (settings, ទង់​ចូល​គណនី, token)។ <b>កុំ</b> ប្រើ​វា​សម្រាប់​ទិន្នន័យ​ច្រើន ឬ​ស្មុគស្មាញ/ទាក់ទង​គ្នា — ប្រើ database (SQLite/Room) ជំនួស​វិញ។</div></div>
<div class="drill"><div class="q">សរសេរ​កូដ​ដើម្បី​រក្សាទុក String "token" = "abc123" រួច​អាន​វា​មក​វិញ។</div>
<div class="a"><pre style="margin-top:6px"><span class="ty">SharedPreferences</span> prefs = getSharedPreferences(<span class="st">"myPrefs"</span>, MODE_PRIVATE);
prefs.edit().putString(<span class="st">"token"</span>, <span class="st">"abc123"</span>).apply();
<span class="ty">String</span> token = prefs.getString(<span class="st">"token"</span>, <span class="kw">null</span>);</pre></div></div>

<!-- LISTS & FRAGMENTS -->
<h2 id="lists">11 · Lists, adapters &amp; fragments <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  ដើម្បី​បង្ហាញ​បញ្ជី​រមូរ​មួយ អ្នក​ត្រូវ​មាន <b>ប្រភព​ទិន្នន័យ</b> + <b>Adapter</b> មួយ​ដែល​បម្លែង​ធាតុ​នីមួយៗ​ទៅ​ជា view ជួរ។ <b>RecyclerView</b> ជា​បញ្ជី​ទំនើប​ដែល​មាន​ប្រសិទ្ធភាព — វា <b>កែ​ប្រើ​ឡើង​វិញ</b> (recycle) នូវ view ជួរ​ដែល​ចេញ​ក្រៅ​អេក្រង់ ជំនួស​ឲ្យ​ការ​បង្កើត​រាប់​ពាន់។ <b>Fragment</b> ជា​ផ្នែក UI ដែល​អាច​កែ​ប្រើ​ឡើង​វិញ​បាន​ដែល​មាន lifecycle ផ្ទាល់​ខ្លួន ដាក់​នៅ​ក្នុង activity មួយ (ល្អ​សម្រាប់ tabs / layouts ឆ្លើយតប)។
</div>
<table>
<thead><tr><th>ធាតុ</th><th>តួនាទី</th></tr></thead>
<tbody>
<tr><td>RecyclerView</td><td>បញ្ជី​រមូរ​មាន​ប្រសិទ្ធភាព; កែ​ប្រើ view ឡើង​វិញ (ត្រូវការ Adapter + ViewHolder + LayoutManager)</td></tr>
<tr><td>ListView</td><td>បញ្ជី​ចាស់, សាមញ្ញ​ជាង (ArrayAdapter); មាន​ប្រសិទ្ធភាព​តិច​ជាង</td></tr>
<tr><td>Adapter</td><td>ស្ពាន៖ ភ្ជាប់​ធាតុ​ទិន្នន័យ​នីមួយៗ​ទៅ view ជួរ​របស់​វា</td></tr>
<tr><td>Fragment</td><td>ផ្នែក UI ដែល​កែ​ប្រើ​ឡើង​វិញ​បាន ដែល​មាន lifecycle ផ្ទាល់​ខ្លួន (<code>onCreateView</code>)</td></tr>
<tr><td>Toast</td><td>សារ​លោត​ឡើង​ខ្លី</td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">Click listener + Toast</div>
<pre>button.setOnClickListener(<span class="kw">new</span> <span class="ty">View.OnClickListener</span>() {
    <span class="kw">public void</span> onClick(<span class="ty">View</span> v) {
        <span class="ty">Toast</span>.makeText(MainActivity.<span class="kw">this</span>, <span class="st">"Clicked!"</span>, <span class="ty">Toast</span>.LENGTH_SHORT).show();
    }
});</pre></div>
<div class="drill"><div class="q">តើ RecyclerView ជា​អ្វី ហើយ​ហេតុ​អ្វី​គួរ​ប្រើ​វា​ជាង ListView? តើ Adapter ធ្វើ​អ្វី?</div>
<div class="a"><b>RecyclerView</b> = បញ្ជី​រមូរ​មាន​ប្រសិទ្ធភាព​ដែល <b>កែ​ប្រើ​ឡើង​វិញ</b> នូវ view ដែល​ចេញ​ក្រៅ​អេក្រង់ (ដូច្នេះ​បញ្ជី 10,000 ធាតុ​ប្រើ​តែ object view មួយ​ចំនួន​តូច)។ <b>Adapter</b> ភ្ជាប់​ធាតុ​ទិន្នន័យ​នីមួយៗ​ទៅ view សម្រាប់​ជួរ​នោះ (ហើយ ViewHolder ផ្ទុក​ទុក sub-views របស់​ជួរ)។</div></div>
<div class="drill"><div class="q">តើ Fragment ជា​អ្វី ហើយ​វា​ទាក់ទង​នឹង Activity យ៉ាង​ដូចម្ដេច?</div>
<div class="a"><b>Fragment</b> ជា​ផ្នែក UI ដែល​កែ​ប្រើ​ឡើង​វិញ​បាន មាន​ម៉ូឌុល ដែល​មាន lifecycle ផ្ទាល់​ខ្លួន <b>ដាក់​នៅ​ក្នុង Activity មួយ</b>។ activity មួយ​អាច​ដាក់ fragments ច្រើន​បាន (tabs, master-detail) ធ្វើ​ឲ្យ layouts កែ​ប្រើ​ឡើង​វិញ​បាន និង​ឆ្លើយតប។</div></div>
<div class="drill"><div class="q">សរសេរ​កូដ​ដើម្បី​បង្ហាញ Toast និយាយ​ថា "Clicked!" ពេល​ប៉ះ​ប៊ូតុង។</div>
<div class="a"><pre style="margin-top:6px">button.setOnClickListener(v ->
    <span class="ty">Toast</span>.makeText(<span class="kw">this</span>, <span class="st">"Clicked!"</span>, <span class="ty">Toast</span>.LENGTH_SHORT).show());</pre></div></div>

<!-- FLUTTER LAYOUT -->
<h2 id="flayout">12 · Flutter layout &amp; បញ្ជូន​ទិន្នន័យ <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  អ្នក​សង់​អេក្រង់​ដោយ <b>ដាក់ layout widgets ត្រួត​គ្នា</b>៖ <b>Column</b> ដាក់​កូន​ធាតុ​បញ្ឈរ, <b>Row</b> ផ្ដេក, <b>Container</b> ជា​ប្រអប់​មួយ (padding/margin/color), <b>ListView</b> រមូរ។ ដើម្បី​ផ្ញើ​ទិន្នន័យ​ទៅ​អេក្រង់​ថ្មី អ្នក​បញ្ជូន​វា​តាម​រយៈ <b>constructor</b> របស់​អេក្រង់; ដើម្បី​ទទួល​តម្លៃ <b>ត្រឡប់​មក​វិញ</b>, <code>await</code> ការ push រួច <code>pop</code> ជាមួយ​តម្លៃ​មួយ។
</div>
<table>
<thead><tr><th>Widget</th><th>រៀបចំ</th></tr></thead>
<tbody>
<tr><td>Column</td><td>កូន​ធាតុ​បញ្ឈរ</td></tr>
<tr><td>Row</td><td>កូន​ធាតុ​ផ្ដេក</td></tr>
<tr><td>Container</td><td>ប្រអប់​តែ​មួយ​ដែល​មាន padding/margin/decoration</td></tr>
<tr><td>ListView / ListView.builder</td><td>បញ្ជី​រមូរ (builder = មាន​ប្រសិទ្ធភាព, តាម​តម្រូវ​ការ)</td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">បញ្ជូន​ទិន្នន័យ​ទៅ​មុខ និង​ទទួល​លទ្ធផល​ត្រឡប់​មក​វិញ</div>
<pre><span class="cm">// pass data into the new screen via its constructor</span>
Navigator.push(context, MaterialPageRoute(
  builder: (context) => <span class="ty">DetailScreen</span>(name: <span class="st">"Vatana"</span>),
));

<span class="cm">// get a value back from the pushed screen</span>
<span class="kw">final</span> result = <span class="kw">await</span> Navigator.push(context,
  MaterialPageRoute(builder: (context) => <span class="ty">PickScreen</span>()));
<span class="cm">// inside PickScreen, return a value: Navigator.pop(context, "chosen");</span>

<span class="cm">// build a dynamic list</span>
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) => <span class="ty">Text</span>(items[index]),
);</pre></div>
<div class="drill"><div class="q">Column ធៀប Row — តើ​មួយ​ណា​ធ្វើ​អ្វី?</div>
<div class="a"><b>Column</b> រៀបចំ​កូន​ធាតុ​របស់​វា <b>បញ្ឈរ</b> (លើ→ក្រោម); <b>Row</b> រៀបចំ​ពួក​វា <b>ផ្ដេក</b> (ឆ្វេង→ស្ដាំ)។</div></div>
<div class="drill"><div class="q">តើ​អ្នក​បញ្ជូន​ទិន្នន័យ​ទៅ​អេក្រង់​ថ្មី​នៅ​ក្នុង Flutter យ៉ាង​ដូចម្ដេច ហើយ​អ្នក​ទទួល​តម្លៃ​ត្រឡប់​មក​វិញ​ពី​វា​យ៉ាង​ដូចម្ដេច?</div>
<div class="a"><b>ទៅ៖</b> បញ្ជូន​វា​តាម​រយៈ constructor របស់​អេក្រង់ — <code>DetailScreen(name: "Vatana")</code> នៅ​ក្នុង builder របស់ MaterialPageRoute។ <b>ត្រឡប់​មក​វិញ៖</b> <code>final result = await Navigator.push(...)</code> ហើយ​អេក្រង់​ម្ខាង​ទៀត​ត្រឡប់​វា​ជាមួយ <code>Navigator.pop(context, value)</code>។</div></div>
<div class="drill"><div class="q">តើ <code>ListView.builder</code> ជា​អ្វី ហើយ​ហេតុ​អ្វី​ប្រើ​វា​ជាង ListView ធម្មតា?</div>
<div class="a">វា​សង់​ធាតុ​បញ្ជី <b>ដោយ​ខ្ជិល, តាម​តម្រូវ​ការ</b> (តែ​អ្វី​ដែល​មើល​ឃើញ) តាម​រយៈ <code>itemCount</code> + <code>itemBuilder</code> — មាន​ប្រសិទ្ធភាព​សម្រាប់​បញ្ជី​វែង/ផ្លាស់ប្ដូរ ខុស​ពី ListView ធម្មតា​ដែល​សង់​កូន​ធាតុ​ទាំងអស់​តាំង​ពី​ដំបូង។</div></div>

<!-- DART ESSENTIALS -->
<h2 id="dartcore">13 · Dart មូលដ្ឋាន &amp; async <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  <b>var</b> = type ត្រូវ​ទាយ​យក, កំណត់​តម្លៃ​ឡើង​វិញ​បាន។ <b>final</b> = កំណត់​តម្លៃ​តែ​ម្ដង (ពេល runtime)។ <b>const</b> = ថេរ​ពេល compile។ <b>Null safety៖</b> <code>String</code> មិន​អាច​ជា null បាន​ឡើយ; <code>String?</code> អាច​បាន។ ការងារ​ដែល​ដំណើរការ​យូរ​ត្រឡប់ <b>Future</b> (តម្លៃ​ដែល​មក​ដល់​ពេល​ក្រោយ) — សម្គាល់ function ជា <code>async</code> រួច <code>await</code> លទ្ធផល។
</div>
<div class="codewrap"><div class="cap">Variables, collections, null safety, async</div>
<pre><span class="kw">var</span> name = <span class="st">"Vatana"</span>;        <span class="cm">// inferred String, reassignable</span>
<span class="kw">final</span> id = 1;               <span class="cm">// set once</span>
<span class="kw">const</span> pi = 3.14;            <span class="cm">// compile-time constant</span>
<span class="ty">String</span>? nickname;           <span class="cm">// nullable (may be null)</span>

<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; names = [<span class="st">"A"</span>, <span class="st">"B"</span>];
<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="kw">int</span>&gt; scores = {<span class="st">"math"</span>: 90};

<span class="ty">Future</span>&lt;<span class="kw">void</span>&gt; loadData() <span class="kw">async</span> {
  <span class="kw">var</span> data = <span class="kw">await</span> fetchFromApi();  <span class="cm">// wait for the Future</span>
  print(data);
}</pre></div>
<div class="drill"><div class="q">var ធៀប final ធៀប const — បែងចែក​ពួក​វា។</div>
<div class="a"><b>var</b> = type ត្រូវ​ទាយ​យក, កំណត់​តម្លៃ​ឡើង​វិញ​បាន។ <b>final</b> = កំណត់​តម្លៃ​ម្ដង (តម្លៃ​ដឹង​ពេល runtime)។ <b>const</b> = ថេរ​ពេល compile (តម្លៃ​ដឹង​ពេល compile, មិន​ប្ដូរ​បាន​ស៊ីជម្រៅ)។</div></div>
<div class="drill"><div class="q">តើ <code>String?</code> មាន​ន័យ​យ៉ាង​ណា ធៀប <code>String</code> នៅ​ក្នុង Dart?</div>
<div class="a"><code>String</code> គឺ <b>មិន​អាច​ជា null</b> — វា​មិន​អាច​ផ្ទុក null បាន​ឡើយ។ <code>String?</code> គឺ <b>អាច​ជា null</b> — វា​អាច​ជា null ហើយ​អ្នក​ត្រូវ​ដោះស្រាយ​វា (ជាមួយ <code>?.</code>, <code>??</code>, ឬ <code>!</code>)។ នេះ​ជា <b>null safety</b> របស់ Dart។</div></div>
<div class="drill"><div class="q">តើ Future ជា​អ្វី ហើយ <code>await</code> ធ្វើ​អ្វី?</div>
<div class="a"><b>Future</b> ជា​តម្លៃ​ដែល​នឹង​មាន <b>ពេល​ក្រោយ</b> (ឧ. លទ្ធផល network/file)។ <code>await</code> (នៅ​ក្នុង function <code>async</code>) <b>ផ្អាក​រហូត​ដល់ Future បញ្ចប់</b> ហើយ​ផ្ដល់​តម្លៃ​របស់​វា​ឲ្យ​អ្នក ដូច្នេះ​កូដ async អាន​ពី​លើ​ទៅ​ក្រោម​ដូច​កូដ​ធម្មតា។</div></div>

<!-- BRIDGE -->
<h2 id="bridge">14 · Android ↔ Flutter តារាង​ប្រៀបធៀប</h2>
<div class="concept"><span class="label">ហេតុ​អ្វី​មាន​តារាង​នេះ</span>ការ​ប្រឡង​លាយ​ទាំង​ពីរ។ បើ​អ្នក​ដឹង​ម្ខាង អ្នក​អាច​វិភាគ​ទៅ​ម្ខាង​ទៀត​បាន — ពួក​វា​ដោះស្រាយ​បញ្ហា​ដូច​គ្នា​ដោយ syntax ខុស​គ្នា។</div>
<table>
<thead><tr><th>ការងារ</th><th>Android (Java)</th><th>Flutter (Dart)</th></tr></thead>
<tbody>
<tr><td>អេក្រង់​មួយ</td><td>Activity</td><td>Widget (Stateless/Stateful) + Scaffold</td></tr>
<tr><td>ទៅ​អេក្រង់​បន្ទាប់</td><td><code>startActivity(intent)</code></td><td><code>Navigator.push(...)</code></td></tr>
<tr><td>ត្រឡប់​ក្រោយ</td><td><code>finish()</code> / back</td><td><code>Navigator.pop(context)</code></td></tr>
<tr><td>ប្ដូរ UI ពេល​ទិន្នន័យ​ប្ដូរ</td><td>ប្ដូរ view ក្នុង​កូដ</td><td><code>setState()</code> → rebuild</td></tr>
<tr><td>ប្រកាស config/deps</td><td>AndroidManifest.xml</td><td>pubspec.yaml</td></tr>
<tr><td>Layout</td><td>LinearLayout / ConstraintLayout (XML)</td><td>Column / Row / widgets (កូដ)</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">ដោយ​មិន​មើល៖ ផ្ដល់​សមមូល Flutter នៃ startActivity, finish(), និង AndroidManifest.xml។</div>
<div class="a"><code>startActivity</code> → <b>Navigator.push</b> · <code>finish()</code> → <b>Navigator.pop</b> · AndroidManifest.xml → <b>pubspec.yaml</b> (config/deps)។</div></div>

<!-- EXAM -->
<h2 id="exam">15 · សំណួរ​បែប​ប្រឡង​លាយ​បញ្ចូល​គ្នា</h2>
<p class="lead">សរសេរ​ចម្លើយ​នីមួយៗ​ឲ្យ​ពេញលេញ​មុន​នឹង​បង្ហាញ។</p>
<div class="exam">
<div class="drill"><div class="q">(Android) ប៊ូតុង​ចូល​គណនី​គួរ​បើក LoginActivity ហើយ​កម្មវិធី​ហៅ web API មួយ។ សរសេរ​កូដ intent និង manifest permission។</div>
<div class="a"><pre style="margin-top:6px"><span class="ty">Intent</span> intent = <span class="kw">new</span> <span class="ty">Intent</span>(MainActivity.<span class="kw">this</span>, LoginActivity.<span class="kw">class</span>);
startActivity(intent);</pre>
<pre style="margin-top:8px">&lt;uses-permission android:name=<span class="st">"android.permission.INTERNET"</span> /&gt;</pre></div></div>
<div class="drill"><div class="q">(គំនិត) ពន្យល់ activity lifecycle ពេញលេញ​ពេល​អ្នក​ប្រើ​បើក​កម្មវិធី, មាន​ការ​ហៅ​មក, រួច​ត្រឡប់​មក​វិញ​ហើយ​បិទ​វា។</div>
<div class="a">បើក៖ onCreate → onStart → onResume (កំពុង​ដំណើរការ)។ ការ​ហៅ​មក​រំខាន៖ onPause → onStop។ ត្រឡប់​មក​វិញ៖ onRestart → onStart → onResume។ បិទ៖ onPause → onStop → onDestroy។</div></div>
<div class="drill"><div class="q">(Flutter) អេក្រង់​រាប់​លេខ​មួយ​ត្រូវ​បង្ហាញ​លេខ​ដែល​កើន​ឡើង​ពេល​ប៉ះ​ប៊ូតុង។ ប្រើ widget ប្រភេទ​ណា, method ណា​គូរ​វា​ឡើង​វិញ, ហើយ​អ្នក​រុករក​ទៅ​អេក្រង់ Results ក្រោយ​មក​យ៉ាង​ដូចម្ដេច?</div>
<div class="a"><b>StatefulWidget</b> (ចំនួន​រាប់​ប្ដូរ)។ ហៅ <b><code>setState()</code></b> នៅ​ក្នុង tap handler ដើម្បី​បូក​បន្ថែម + rebuild។ រុករក៖ <code>Navigator.push(context, MaterialPageRoute(builder: (context) => ResultsScreen()));</code>។</div></div>
<div class="drill"><div class="q">(Dart) សរសេរ class Student ដែល​មាន named constructor allParams(name, id), បង្កើត​វា​ជា instance, រួច​ត្រឡប់​ក្រោយ​មួយ​អេក្រង់។</div>
<div class="a"><pre style="margin-top:6px"><span class="kw">class</span> <span class="ty">Student</span> {
  <span class="ty">String</span> name; <span class="ty">int</span> id;
  <span class="ty">Student</span>(<span class="kw">this</span>.name, <span class="kw">this</span>.id);
  <span class="ty">Student</span>.allParams(<span class="kw">this</span>.name, <span class="kw">this</span>.id);
}
<span class="kw">var</span> s = <span class="ty">Student</span>.allParams(<span class="st">"Vatana"</span>, 1);
Navigator.pop(context);</pre></div></div>
<div class="drill"><div class="q">(ប្រៀបធៀប) កម្មវិធី​ដូច​គ្នា​មាន​ទាំង​នៅ Android និង Flutter។ តើ​ម្ខាងៗ​ផ្លាស់ទី​ទៅ​អេក្រង់​ទីពីរ និង​ប្ដូរ UI ពេល​ទិន្នន័យ​ប្ដូរ​យ៉ាង​ដូចម្ដេច?</div>
<div class="a"><b>Android៖</b> ផ្លាស់ទី​អេក្រង់​ជាមួយ <code>startActivity(new Intent(...))</code>; ប្ដូរ​ដោយ​ប្ដូរ view ក្នុង​កូដ។ <b>Flutter៖</b> ផ្លាស់ទី​ជាមួយ <code>Navigator.push(...)</code>; ប្ដូរ​ដោយ​ហៅ <code>setState()</code> នៅ​ក្នុង StatefulWidget ដើម្បី​បង្ក​ឲ្យ <code>build()</code> ដំណើរការ។</div></div>
</div>

<!-- ===================================================================== -->
<!-- PROFESSOR'S FINAL PREVIEW — extra concepts added on top              -->
<!-- ===================================================================== -->
<h2 id="preview">16 · ពី​ការ​មើល​បង្ហាញ​ចុង​ក្រោយ​របស់​សាស្ត្រាចារ្យ — គំនិត​បន្ថែម</h2>
<p class="lead">ផ្នែក​ទាំងនេះ​គ្រប​ដណ្ដប់​លើ​អ្វី​ដែល​នៅ​សល់​ក្នុង​ការ​មើល​បង្ហាញ​របស់​សាស្ត្រាចារ្យ​អ្នក៖ បញ្ជី “តើ​អ្វី​ទៅ…?”, state management, networking, storage, scaffold, និង​កិច្ចការ​អនុវត្ត​ពីរ។ ច្បាប់​ដូច​គ្នា​នឹង​សន្លឹក​ទាំងមូល — <b>យល់​គំនិត, កុំ​ទន្ទេញ​ពាក្យ​ពេចន៍</b>។ កន្លែង​ណា​ដែល​ចម្លើយ​ដែល​ការ​ប្រឡង​រំពឹង​ទុក​សរសេរ​មិន​សូវ​ច្បាស់ មាន <span style="color:var(--warn)">ចំណុច​ប្រយ័ត្ន​ប្រឡង</span> តូច​មួយ។</p>

<div class="concept">
  <span class="label">គំនិត​មូលដ្ឋាន​សម្រាប់​រាល់ “តើ X ជា​អ្វី?”</span>
  ពាក្យ​នីមួយៗ​ពិត​ជា​សួរ​ថា “តើ​វា​ធ្វើ​ការងារ​អ្វី?”។ សូម​ចាំ​ផែនទី​នេះ៖ <b>platform</b> ជា​កន្លែង​ដែល​កម្មវិធី​អ្នក​ដំណើរការ (Android), <b>SDK</b> ជា​ប្រអប់​ឧបករណ៍​សម្រាប់​សង់​លើ platform មួយ, <b>language</b> ជា​អ្វី​ដែល​អ្នក​សរសេរ (Java, Dart), និង <b>backend service</b> ជា server របស់​អ្នក​ផ្សេង​ដែល​អ្នក​ជួល​ជំនួស​ឲ្យ​ការ​សង់​ផ្ទាល់​ខ្លួន។
</div>
<table>
<thead><tr><th>ពាក្យ</th><th>តើ​ពិត​ជា​អ្វី</th></tr></thead>
<tbody>
<tr><td><b>Android</b></td><td><b>ប្រព័ន្ធ​ប្រតិបត្តិការ</b> + platform ចល័ត​របស់ Google — អ្វី​ដែល​ដំណើរការ​កម្មវិធី​អ្នក​លើ​ទូរស័ព្ទ/ថេប្លេត។</td></tr>
<tr><td><b>JDK</b></td><td><b>Java Development Kit</b>៖ ប្រអប់​ឧបករណ៍​ដើម្បី compile + run Java (compiler, libraries, JVM)។ Android-ក្នុង-Java ត្រូវការ​វា។</td></tr>
<tr><td><b>SDK</b></td><td><b>Software Development Kit</b>៖ កញ្ចប់​ឧបករណ៍ + libraries + ឯកសារ​សម្រាប់​សង់​លើ platform មួយ (“Android SDK”, “Flutter SDK”)។</td></tr>
<tr><td><b>Flutter SDK</b></td><td>ប្រអប់​ឧបករណ៍​របស់ Google ដើម្បី​សង់ <b>កម្មវិធី​មួយ​សម្រាប់ Android, iOS, web &amp; desktop</b> ពី codebase <b>Dart</b> តែ​មួយ (widgets, engine, CLI, hot reload)។</td></tr>
<tr><td><b>Firebase</b></td><td><b>backend-as-a-service</b> របស់ Google៖ auth, database (Firestore), storage, hosting, push ដែល​រៀបចំ​រួច​ស្រេច — ដូច្នេះ​អ្នក​មិន​ត្រូវ​សង់/ដំណើរការ server ទេ។</td></tr>
</tbody>
</table>
<div class="why"><span class="label">ចំណុច​ប្រយ័ត្ន​ប្រឡង</span> សំណួរ​ជ្រើស​ចម្លើយ​សួរ​ថា “JDK តំណាង​ឲ្យ…?” ហើយ​ចង់​បាន <b>“Software Development Kit”</b>។ ជ្រើស​យក​ជម្រើស​នោះ ប៉ុន្តែ​សូម​ដឹង​ថា​វា​ពិត​ប្រាកដ​គឺ <b>Java</b> Development Kit — ខ្សែ​ឧបករណ៍ Java។</div>
<div class="drill"><div class="q">មួយ​បន្ទាត់​ម្នាក់៖ តើ Android, JDK, SDK, និង Firebase ជា​អ្វី?</div>
<div class="a"><b>Android</b> = OS ចល័ត​របស់ Google ដែល​កម្មវិធី​អ្នក​ដំណើរការ​លើ។ <b>JDK</b> = កញ្ចប់​ដើម្បី compile/run Java។ <b>SDK</b> = ប្រអប់​ឧបករណ៍ libraries/tools ដើម្បី​សង់​លើ platform មួយ។ <b>Firebase</b> = backend រៀបចំ​រួច​របស់ Google (auth, database, storage) ប្រើ​ជំនួស​ឲ្យ​ការ​សង់ server។</div></div>
<div class="drill"><div class="q">តើ Flutter SDK ជា​អ្វី ហើយ​វា​ប្រើ​ភាសា​អ្វី?</div>
<div class="a">ប្រអប់​ឧបករណ៍​ដើម្បី​សង់ <b>កម្មវិធី​មួយ​សម្រាប់ platform ច្រើន</b> (Android/iOS/web/desktop) ពី codebase តែ​មួយ។ ភាសា៖ <b>Dart</b>។</div></div>

<h2 id="why-flutter">17 · ហេតុ​អ្វី Flutter? (និង​អ្នក​ណា​បង្កើត​វា) <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  ជា​ធម្មតា​អ្នក​នឹង​សង់​កម្មវិធី Android មួយ និង​កម្មវិធី iOS <b>ដាច់​ដោយ​ឡែក</b> មួយ​ទៀត — codebase ពីរ។ ការ​ផ្ដល់​ជូន​របស់ Flutter៖ <b>សរសេរ​ម្ដង, ដំណើរការ​លើ Android + iOS + web + desktop</b>។ វា​គូរ widgets ផ្ទាល់​ខ្លួន ដូច្នេះ UI មើល​ទៅ​ស៊ីសង្វាក់​គ្នា​គ្រប់​ទីកន្លែង ហើយ <b>hot reload</b> បង្ហាញ​ការ​ប្ដូរ​ក្នុង​រយៈ​ពេល​មិន​ដល់​មួយ​វិនាទី។ បង្កើត​ដោយ <b>Google</b>, សរសេរ​ដោយ <b>Dart</b>។
</div>
<div class="drill"><div class="q">ហេតុ​អ្វី​ក្រុម​ការងារ​ជ្រើស Flutter? មូលហេតុ​ស្នូល + អត្ថប្រយោជន៍​ពីរ។</div>
<div class="a">ស្នូល៖ <b>codebase តែ​មួយ → platform ច្រើន</b>, គ្មាន​ការងារ​ទ្វេ។ អត្ថប្រយោជន៍៖ <b>hot reload</b> (ការ​ប្ដូរ​ភ្លាមៗ), សំណុំ <b>widget</b> ស៊ីសង្វាក់​សម្បូរបែប, performance ជិត​ដូច native។</div></div>
<div class="drill"><div class="q">តើ​អ្នក​ណា​អភិវឌ្ឍ Flutter ហើយ​អ្នក​សរសេរ​វា​ដោយ​ភាសា​អ្វី?</div>
<div class="a"><b>Google</b> · ភាសា​គឺ <b>Dart</b>។</div></div>

<h2 id="state-mgmt">18 · State management: setState → Provider → GetX, &amp; MVVM <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  “State” = ទិន្នន័យ​ដែល UI របស់​អ្នក​បង្ហាញ។ ក្នុង​កម្មវិធី​តូច <code>setState()</code> គូរ widget <b>មួយ</b> ឡើង​វិញ។ ប៉ុន្តែ​ពេល​អេក្រង់​ច្រើន​ត្រូវការ​ទិន្នន័យ​ដូច​គ្នា (អ្នក​ប្រើ​ដែល​បាន​ចូល​គណនី, cart, theme) ការ​បញ្ជូន​វា​ដោយ​ដៃ និង​ហៅ setState គ្រប់​ទីកន្លែង​ក្លាយ​ជា​រញ៉េរញ៉ៃ។ <b>State management ដោះស្រាយ​បញ្ហា​មួយ៖ រក្សា​ទិន្នន័យ​នៅ​កន្លែង​តែ​មួយ ហើយ​ឲ្យ widget ណា​ក៏​បាន​អាន/ប្ដូរ​វា​ដោយ​មិន​ត្រូវ​ភ្ជាប់​ដោយ​ដៃ។</b>
</div>
<table>
<thead><tr><th>វិធី</th><th>តើ​វា​ធ្វើ​អ្វី / ពេល​ណា</th></tr></thead>
<tbody>
<tr><td><code>setState()</code></td><td>មាន​ស្រាប់។ State ក្នុង​មូលដ្ឋាន​ខាង​ក្នុង StatefulWidget <b>មួយ</b>។ សាមញ្ញ; មិន​ចែករំលែក​ឆ្លង​អេក្រង់​ទេ។</td></tr>
<tr><td><b>Provider</b></td><td>វិធី​ដែល​ក្រុម Flutter ណែនាំ​ដើម្បី <b>ចែករំលែក state ចុះ​តាម​ដើមឈើ widget</b>។ អ្នក “provide” model មួយ​នៅ​លើ​គេ; widgets “watch” វា ហើយ build ឡើង​វិញ​ពេល​វា​ប្ដូរ។ ច្បាស់លាស់, boilerplate ច្រើន​បន្តិច។</td></tr>
<tr><td><b>GetX</b></td><td>package ទាំងអស់​ក្នុង​មួយ៖ <b>state + navigation + dependency injection</b>។ Reactive (<code>.obs</code> + <code>Obx</code>), boilerplate តិច​ណាស់, មិន​ត្រូវការ <code>context</code> សម្រាប់ routing ទេ។ “វេទមន្ត” ច្រើន​ជាង, ច្បាស់លាស់​តិច​ជាង។</td></tr>
</tbody>
</table>
<div class="concept">
  <span class="label">MVVM — pattern នៅ​ពី​ក្រោយ​វា</span>
  <b>MVVM = Model–View–ViewModel</b>៖ វិធី​មួយ​ដើម្បី <b>បំបែក UI ចេញ​ពី logic</b>។ <b>Model</b> = ទិន្នន័យ, <b>View</b> = widgets ដែល​អ្នក​ប្រើ​មើល​ឃើញ, <b>ViewModel</b> = logic/state ដែល View ភ្ជាប់​ទៅ (គ្មាន​កូដ UI)។ View គ្រាន់​តែ​បង្ហាញ ViewModel ហើយ​ផ្ញើ events ទៅ​វា។ Provider/GetX ជា​ឧបករណ៍​ដែល​អ្នក​ប្រើ​ដើម្បី​ភ្ជាប់ MVVM ចូល​គ្នា។
</div>
<div class="drill"><div class="q">តើ Provider/GetX ដោះស្រាយ​បញ្ហា​អ្វី​ដែល <code>setState</code> ដោះស្រាយ​មិន​បាន?</div>
<div class="a"><code>setState</code> ប្ដូរ​តែ <b>state ក្នុង​មូលដ្ឋាន​របស់ widget មួយ</b> ប៉ុណ្ណោះ។ Provider/GetX រក្សា​ទិន្នន័យ​ដែល​ចែករំលែក​នៅ <b>កន្លែង​តែ​មួយ</b> ដូច្នេះ <b>widget ណា​ក៏​បាន​ទូទាំង​កម្មវិធី</b> អាច​អាន និង​ប្រតិកម្ម​ទៅ​នឹង​វា ដោយ​មិន​ត្រូវ​បញ្ជូន​វា​កាត់​តាម constructor គ្រប់​មួយ។</div></div>
<div class="drill"><div class="q">ប្រៀបធៀប Provider និង GetX (boilerplate · វិសាលភាព · រចនាប័ទ្ម)។</div>
<div class="a"><b>Boilerplate៖</b> Provider ច្រើន​ជាង, GetX ខ្លី។ <b>វិសាលភាព៖</b> Provider = state ប៉ុណ្ណោះ; GetX = state + routing + DI។ <b>រចនាប័ទ្ម៖</b> Provider ច្បាស់លាស់ (អ្នក​ឃើញ​ការ​ភ្ជាប់); GetX លាក់​ច្រើន​ជាង (reactive <code>.obs</code>, គ្មាន <code>context</code> សម្រាប់ nav)។ គ្មាន​មួយ​ណា “ត្រឹមត្រូវ” ទេ — Provider ផ្ដោត​លើ​ភាព​ច្បាស់លាស់, GetX ផ្ដោត​លើ​ល្បឿន។</div></div>
<div class="drill"><div class="q">តើ MVVM តំណាង​ឲ្យ​អ្វី ហើយ​អ្វី​នៅ​ក្នុង​ផ្នែក​នីមួយៗ?</div>
<div class="a"><b>Model</b> = ទិន្នន័យ · <b>View</b> = UI/widgets · <b>ViewModel</b> = logic + state ដែល View ភ្ជាប់​ទៅ (គ្មាន UI)។ គោលដៅ៖ រក្សា UI និង logic ដាច់​ពី​គ្នា ដើម្បី​ឲ្យ​នីមួយៗ​អាច​សាកល្បង និង​កែ​ប្រើ​ឡើង​វិញ​បាន។</div></div>

<h2 id="networking">19 · និយាយ​ទៅ server៖ http ធៀប https <span class="tag-a" style="vertical-align:middle">Android</span> <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  កម្មវិធី​អ្នក​សុំ​ទិន្នន័យ​ពី server ជាមួយ <b>HTTP request</b> (<b>GET</b> ដើម្បី​អាន, <b>POST</b> ដើម្បី​ផ្ញើ) ហើយ​ទទួល <b>response</b> ត្រឡប់​មក​វិញ (ជា​ធម្មតា JSON)។ <b>HTTP</b> ផ្ញើ​វា​ជា​អក្សរ​ធម្មតា; <b>HTTPS</b> ដូច​គ្នា​ប៉ុន្តែ <b>បំ​ប្លែង​ជា​សម្ងាត់​ដោយ TLS</b> — “S” គឺ <b>Secure</b> (រូប​សោ)។ ប្រើ HTTPS សម្រាប់​ទិន្នន័យ​ពិត។ នៅ​លើ Android អ្នក​ក៏​ត្រូវការ INTERNET permission ដែរ។
</div>
<table>
<thead><tr><th>តម្រូវ​ការ</th><th>Android (Java)</th><th>Flutter (Dart)</th></tr></thead>
<tbody>
<tr><td>ហៅ REST API</td><td><b>Retrofit</b> (ឬ HttpURLConnection)</td><td>package <b><code>http</code></b> (ឬ Dio)</td></tr>
<tr><td>Permission ដើម្បី​ប្រើ network</td><td>INTERNET ក្នុង manifest</td><td>—</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">ភាព​ខុស​គ្នា​រវាង http និង https?</div>
<div class="a">ទាំង​ពីរ​ផ្ទុក web requests; <b>https = http + TLS encryption</b>។ HTTP ជា​អក្សរ​ធម្មតា (អាន​បាន​បើ​ត្រូវ​ស្ទាក់​ចាប់); HTTPS <b>បំ​ប្លែង​ជា​សម្ងាត់ &amp; ផ្ទៀងផ្ទាត់</b> (“S” = Secure)។ ប្រើ HTTPS សម្រាប់​អ្វី​ដែល​រសើប។</div></div>
<div class="drill"><div class="q">កម្មវិធី Android របស់​អ្នក​ត្រូវ​ហៅ web API មួយ — ដាក់​ឈ្មោះ library request មួយ និង permission ដែល​ត្រូវការ។</div>
<div class="a">Library៖ <b>Retrofit</b> (ឬ HttpURLConnection / OkHttp)។ Permission៖ <code>&lt;uses-permission android:name="android.permission.INTERNET" /&gt;</code>។ សមមូល Flutter៖ package <code>http</code>។</div></div>

<h2 id="storage-l10n">20 · Local storage &amp; ការ​ប្ដូរ​ភាសា <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  <b>Local storage</b> = រក្សាទុក​ទិន្នន័យ <b>នៅ​លើ​ឧបករណ៍</b> ដើម្បី​ឲ្យ​វា​នៅ​គង់​បន្ទាប់​ពី​បើក​ឡើង​វិញ (token, settings, cache តូច) — គ្មាន server។ វា​សម្រាប់​ទិន្នន័យ <b>key-value តូច</b>, មិន​មែន​ទិន្នន័យ​ធំ/ទាក់ទង​គ្នា (ប្រើ database សម្រាប់​នោះ)។ Android៖ <b>SharedPreferences</b>; Flutter៖ package <b>shared_preferences</b> / localstorage។ ដាច់​ដោយ​ឡែក, <b>easy_localization</b> ជា package ដែល​អនុញ្ញាត​ឲ្យ​កម្មវិធី <b>ប្ដូរ​ភាសា</b>។
</div>
<table>
<thead><tr><th>ការងារ</th><th>ឧបករណ៍</th></tr></thead>
<tbody>
<tr><td>រក្សា​ទិន្នន័យ​តូច​នៅ​លើ​ឧបករណ៍</td><td>Android: SharedPreferences · Flutter: shared_preferences / localstorage</td></tr>
<tr><td>គាំទ្រ​ភាសា​ច្រើន (ប្ដូរ​ភាសា)</td><td>Flutter: <b>easy_localization</b></td></tr>
</tbody>
</table>
<div class="drill"><div class="q">តើ local storage សម្រាប់​អ្វី ហើយ​អ្នក​មិន​គួរ​ប្រើ​វា​សម្រាប់​អ្វី?</div>
<div class="a">សម្រាប់ <b>ទិន្នន័យ​តូច​ដែល​ត្រូវ​នៅ​គង់​លើ​ឧបករណ៍</b> បន្ទាប់​ពី​បើក​ឡើង​វិញ (login token, settings)។ <b>មិន</b> មែន​សម្រាប់​ទិន្នន័យ​ធំ ឬ​ទាក់ទង​គ្នា — ប្រើ database សម្រាប់​ពួក​នោះ។</div></div>
<div class="drill"><div class="q">តើ package Flutter ណា​ប្ដូរ​ភាសា​កម្មវិធី ហើយ​មួយ​ណា​រក្សា​ទិន្នន័យ​តូច​ក្នុង​មូលដ្ឋាន?</div>
<div class="a"><b>easy_localization</b> → ប្ដូរ​ភាសា។ <b>shared_preferences</b> (ឬ localstorage) → រក្សា​ទិន្នន័យ key-value តូច​នៅ​លើ​ឧបករណ៍។</div></div>

<h2 id="scaffold">21 · Scaffold — គ្រោង​ទំព័រ​របស់ Flutter <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">គំនិត​ឲ្យ​ងាយ​យល់</span>
  រាល់​អេក្រង់ Material អង្គុយ​នៅ​ក្នុង <b>Scaffold</b> — <b>គ្រោង​ដែល​ផ្ដល់​ឲ្យ​អ្នក​នូវ​ប្រអប់​ទំព័រ​ស្តង់ដារ</b>៖ <code>appBar</code> (របារ​ខាង​លើ), <code>body</code> (មាតិកា), <code>floatingActionButton</code>, <code>drawer</code> (ម៉ឺនុយ​ចំហៀង), <code>bottomNavigationBar</code>។ អ្នក​មិន​ដាក់​ទីតាំង​ពួក​វា​ដោយ​ដៃ​ទេ; Scaffold រៀបចំ​ពួក​វា។
</div>
<div class="codewrap"><div class="cap">អេក្រង់​អប្បបរមា​មួយ</div>
<pre><span class="ty">Scaffold</span>(
  appBar: <span class="ty">AppBar</span>(title: <span class="ty">Text</span>(<span class="st">"Home"</span>)),
  body: <span class="ty">Center</span>(child: <span class="ty">Text</span>(<span class="st">"Hello"</span>)),
);</pre></div>
<div class="drill"><div class="q">តើ Scaffold ជា​អ្វី? ដាក់​ឈ្មោះ​ប្រអប់​បី​ដែល​វា​ផ្ដល់។</div>
<div class="a"><b>រចនាសម្ព័ន្ធ​ទំព័រ Material មូលដ្ឋាន</b> សម្រាប់​អេក្រង់​មួយ។ ប្រអប់ (បី​ណា​ក៏​បាន)៖ <b>appBar</b>, <b>body</b>, <b>floatingActionButton</b>, <b>drawer</b>, <b>bottomNavigationBar</b>។</div></div>

<h2 id="practice">22 · អនុវត្ត — សរសេរ​ទាំងនេះ​ពី​ទំព័រ​ទទេ</h2>
<p class="lead">ផ្នែក “Practice” នៃ​ការ​មើល​បង្ហាញ។ សង់​នីមួយៗ​ដោយ​ចាំ​ក្នុង​ខួរ៖ យល់​រូបរាង​ជា​មុន រួច​ទើប​កូដ។</p>
<div class="exam">
<div class="concept"><span class="label">កិច្ចការ 1 — class Java <code>Employee</code> (fields + constructor + getters &amp; setters)</span>
class មួយ​ផ្គុំ <b>ទិន្នន័យ (fields)</b> ជាមួយ <b>វិធី​សង់​វា (constructor)</b> និង <b>ការ​ចូល​ប្រើ​ដែល​គ្រប់គ្រង (getters/setters)</b>។ Fields ជា <code>private</code> ដូច្នេះ​កូដ​ខាង​ក្រៅ​ត្រូវ​ឆ្លង​កាត់ getters/setters — នោះ​ហើយ​ជា <b>encapsulation</b>, ដែល​អនុញ្ញាត​ឲ្យ class ផ្ទៀងផ្ទាត់ និង​ប្ដូរ​ខាង​ក្នុង​របស់​វា​ដោយ​សុវត្ថិភាព។</div>
<div class="codewrap"><div class="cap">Employee: id, name, phone, gender</div>
<pre><span class="kw">public class</span> <span class="ty">Employee</span> {
    <span class="kw">private</span> <span class="ty">int</span> id;
    <span class="kw">private</span> <span class="ty">String</span> name;
    <span class="kw">private</span> <span class="ty">String</span> phone;
    <span class="kw">private</span> <span class="ty">String</span> gender;

    <span class="kw">public</span> <span class="ty">Employee</span>(<span class="ty">int</span> id, <span class="ty">String</span> name, <span class="ty">String</span> phone, <span class="ty">String</span> gender) {
        <span class="kw">this</span>.id = id;
        <span class="kw">this</span>.name = name;
        <span class="kw">this</span>.phone = phone;
        <span class="kw">this</span>.gender = gender;
    }

    <span class="kw">public</span> <span class="ty">int</span> getId() { <span class="kw">return</span> id; }
    <span class="kw">public void</span> setId(<span class="ty">int</span> id) { <span class="kw">this</span>.id = id; }

    <span class="kw">public</span> <span class="ty">String</span> getName() { <span class="kw">return</span> name; }
    <span class="kw">public void</span> setName(<span class="ty">String</span> name) { <span class="kw">this</span>.name = name; }

    <span class="kw">public</span> <span class="ty">String</span> getPhone() { <span class="kw">return</span> phone; }
    <span class="kw">public void</span> setPhone(<span class="ty">String</span> phone) { <span class="kw">this</span>.phone = phone; }

    <span class="kw">public</span> <span class="ty">String</span> getGender() { <span class="kw">return</span> gender; }
    <span class="kw">public void</span> setGender(<span class="ty">String</span> gender) { <span class="kw">this</span>.gender = gender; }
}</pre></div>
<div class="drill"><div class="q">ហេតុ​អ្វី fields <code>private</code> ជាមួយ getters/setters public ជំនួស​ឲ្យ fields public?</div>
<div class="a"><b>Encapsulation</b>៖ ការ​លាក់ fields អនុញ្ញាត​ឲ្យ class <b>គ្រប់គ្រង និង​ផ្ទៀងផ្ទាត់</b> ការ​ចូល​ប្រើ (ឧ. បដិសេធ phone មិន​ត្រឹមត្រូវ​ក្នុង setter) និង​ប្ដូរ​ខាង​ក្នុង​របស់​វា​ពេល​ក្រោយ​ដោយ​មិន​បំបែក callers។</div></div>

<div class="concept"><span class="label">កិច្ចការ 2 — class exception Flutter សម្រាប់​កំហុស​ការ​ភ្ជាប់ server</span>
custom exception គ្រាន់​តែ​ជា <b>class ដែល implements <code>Exception</code></b> ផ្ទុក​សារ​មួយ។ អ្នក <code>throw</code> វា​ពេល​ការ​ហៅ network បរាជ័យ, ហើយ <code>catch</code> វា​នៅ​កន្លែង​ដែល​អ្នក​ហៅ API ដូច្នេះ UI បង្ហាញ​កំហុស​ដែល​មាន​មិត្តភាព​ជំនួស​ឲ្យ​ការ​គាំង។</div>
<div class="codewrap"><div class="cap">កំណត់, throw, និង catch connection exception</div>
<pre><span class="kw">class</span> <span class="ty">ServerConnectionException</span> <span class="kw">implements</span> <span class="ty">Exception</span> {
  <span class="kw">final</span> <span class="ty">String</span> message;
  <span class="ty">ServerConnectionException</span>(<span class="kw">this</span>.message);

  <span class="kw">@override</span>
  <span class="ty">String</span> toString() => <span class="st">"ServerConnectionException: \$message"</span>;
}

<span class="cm">// use it</span>
<span class="ty">Future</span>&lt;<span class="kw">void</span>&gt; loadData() <span class="kw">async</span> {
  <span class="kw">try</span> {
    <span class="kw">final</span> res = <span class="kw">await</span> http.get(url);
    <span class="kw">if</span> (res.statusCode != 200) {
      <span class="kw">throw</span> <span class="ty">ServerConnectionException</span>(<span class="st">"Failed: \${res.statusCode}"</span>);
    }
  } <span class="kw">catch</span> (e) {
    <span class="kw">throw</span> <span class="ty">ServerConnectionException</span>(<span class="st">"Cannot reach server"</span>);
  }
}</pre></div>
<div class="drill"><div class="q">តើ​អ្នក​បង្កើត custom exception នៅ​ក្នុង Flutter យ៉ាង​ដូចម្ដេច ហើយ​ដោះស្រាយ​វា​ពេល​ការ​ហៅ server បរាជ័យ?</div>
<div class="a">បង្កើត class ដែល <code>implements Exception</code> ជាមួយ​សារ​មួយ; <code>throw</code> វា​ពេល​បរាជ័យ។ រុំ​ការ​ហៅ network ក្នុង <code>try { } catch (e) { }</code> ហើយ​ដោះស្រាយ/throw ឡើង​វិញ ដូច្នេះ UI បង្ហាញ​កំហុស​ជំនួស​ឲ្យ​ការ​គាំង។</div></div>
</div>

<p class="footnote">សង់​ឡើង​ពី​ការ​ប្រឡង Mobile Programming II ដែល​បាន​ដាក់​ពិន្ទុ <b>និង​ការ​មើល​បង្ហាញ​ប្រឡង​ចុង​ក្រោយ​របស់​សាស្ត្រាចារ្យ</b> (Build Bright University) — Android lifecycle/intents/manifest + Java classes, Flutter widgets/Navigator/Scaffold + Dart, បូក​នឹង state management (Provider/GetX/MVVM), networking (http/https), local storage និង localisation។ ការ​បោះពុម្ព ឬ “Save as PDF” នឹង​បង្ហាញ​ចម្លើយ​ទាំងអស់។</p>
`;
export default html;
