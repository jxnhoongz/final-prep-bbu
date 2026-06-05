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

<p class="footnote">សង់​ឡើង​ពី​ការ​ប្រឡង Mobile Programming II ដែល​បាន​ដាក់​ពិន្ទុ (Build Bright University) — Android intents/lifecycle/manifest + Java class, និង Flutter Navigator/StatefulWidget/pubspec + Dart named constructor។ ការ​បោះពុម្ព ឬ “Save as PDF” នឹង​បង្ហាញ​ចម្លើយ​ទាំងអស់។</p>
`;
export default html;
