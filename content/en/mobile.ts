const html = `

<p class="lead">This subject is <b>mixed Android (Java) + Flutter (Dart)</b>. The exam asks you to <b>write small snippets from memory</b> (open an activity, navigate screens, declare permissions, build a class/widget) and to <b>explain concepts</b> (lifecycle, stateless vs stateful). Drills make you <i>write the code</i> before you peek — that’s the skill that’s tested.</p>
<div class="tagrow"><span class="tag-a">Android / Java</span><span class="tag-f">Flutter / Dart</span></div>


<!-- LIFECYCLE -->
<h2 id="lifecycle">1 · Activity lifecycle <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Android constantly creates, pauses, and destroys your screen to manage memory and interruptions (calls, rotation, switching apps). Each transition fires a callback so you can <b>save/release at the right moment</b>. Read it as a staircase up to “visible &amp; interactive,” then back down. <span class="mnemonic">Create → Start → Resume … Pause → Stop → Destroy.</span>
</div>
<div class="figure"><div class="figcap">Picture it — a staircase up to RUNNING, then back down</div>
<div class="figbox"><div class="lc">
  <div class="lc-step" style="--i:0"><span class="lc-dir">↗</span><span class="lc-name">onCreate()</span><span class="lc-note">build UI · setContentView · init once</span></div>
  <div class="lc-step" style="--i:1"><span class="lc-dir">↗</span><span class="lc-name">onStart()</span><span class="lc-note">becoming visible</span></div>
  <div class="lc-step lc-peak" style="--i:2"><span class="lc-dir">●</span><span class="lc-name">onResume()</span><span class="lc-note">RUNNING — visible &amp; interactive</span></div>
  <div class="lc-step" style="--i:2"><span class="lc-dir">↘</span><span class="lc-name">onPause()</span><span class="lc-note">losing focus — save light state</span></div>
  <div class="lc-step" style="--i:1"><span class="lc-dir">↘</span><span class="lc-name">onStop()</span><span class="lc-note">no longer visible — release resources</span></div>
  <div class="lc-step" style="--i:0"><span class="lc-dir">↘</span><span class="lc-name">onDestroy()</span><span class="lc-note">activity gone (finish / system kill)</span></div>
  <div class="lc-branch">Coming back after onStop loops up: <code>onRestart()</code> → <code>onStart()</code> → <code>onResume()</code>.</div>
</div></div></div>
<table>
<thead><tr><th>Callback</th><th>Fires when</th></tr></thead>
<tbody>
<tr><td><code>onCreate()</code></td><td>Activity is created — build UI, <code>setContentView</code>, init once</td></tr>
<tr><td><code>onStart()</code></td><td>Becoming visible</td></tr>
<tr><td><code>onResume()</code></td><td>In foreground, user can interact (running)</td></tr>
<tr><td><code>onPause()</code></td><td>Losing focus (dialog/other activity in front) — save light state</td></tr>
<tr><td><code>onStop()</code></td><td>No longer visible — release heavier resources</td></tr>
<tr><td><code>onDestroy()</code></td><td>Being destroyed (finish / system kill)</td></tr>
<tr><td><code>onRestart()</code></td><td>Coming back to visible after onStop</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Write the lifecycle callbacks in order from launch to destruction.</div>
<div class="a"><span class="blank">onCreate → onStart → onResume</span> → (running) → <span class="blank">onPause → onStop → onDestroy</span>. Returning from stop goes onRestart → onStart → onResume.</div></div>
<div class="drill"><div class="q">A phone call interrupts your app, then the user returns. Which callbacks fire going away and coming back?</div>
<div class="a">Going away: <b>onPause → onStop</b>. Coming back: <b>onRestart → onStart → onResume</b>.</div></div>
<div class="drill"><div class="q">Which callback do you put <code>setContentView()</code> in, and why there?</div>
<div class="a"><b>onCreate()</b> — it runs once when the activity is created, the right place to inflate the layout and do one-time setup.</div></div>

<!-- COMPONENTS -->
<h2 id="components">2 · App components &amp; layouts <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<table>
<thead><tr><th>Component</th><th>Role</th></tr></thead>
<tbody>
<tr><td><b>Activity</b></td><td>A single screen with UI</td></tr>
<tr><td><b>Service</b></td><td>Background work, no UI</td></tr>
<tr><td><b>BroadcastReceiver</b></td><td>Responds to system/app-wide events</td></tr>
<tr><td><b>ContentProvider</b></td><td>Shares data between apps</td></tr>
</tbody>
</table>
<table>
<thead><tr><th>Layout</th><th>Arranges children…</th></tr></thead>
<tbody>
<tr><td>LinearLayout</td><td>In a single row or column</td></tr>
<tr><td>RelativeLayout</td><td>Relative to each other / parent</td></tr>
<tr><td>ConstraintLayout</td><td>By constraints (flexible, flat hierarchy)</td></tr>
<tr><td>FrameLayout</td><td>Stacked on top of each other</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Name the 4 core Android components and what each is for.</div>
<div class="a"><ul><li><b>Activity</b> — a UI screen</li><li><b>Service</b> — background work, no UI</li><li><b>BroadcastReceiver</b> — reacts to events</li><li><b>ContentProvider</b> — shares data across apps</li></ul></div></div>
<div class="drill"><div class="q">What is an Adapter for?</div>
<div class="a">It’s the <b>bridge between a data set and a view</b> that displays it (e.g. ListView/RecyclerView). It takes each data item and produces the view for that row.</div></div>

<!-- INTENTS -->
<h2 id="intents">3 · Intents — moving between screens <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  An Intent is a <b>message that asks the system to start something</b>. <b>Explicit</b> = you name the exact target class (your own screens). <b>Implicit</b> = you describe an action (“open a web page”) and let the OS pick an app. To switch screens you build an explicit Intent and call <code>startActivity</code>.
</div>
<div class="figure"><div class="figcap">Two kinds of Intent — name the target, or name the action</div>
<div class="figbox"><div class="tree">
<div class="tree-row"><b>Intent</b><span class="twig"> — "start something"</span></div>
<div class="tree-row"><span class="twig">├─ </span><b>Explicit</b><span class="twig">  → you name the class → LoginActivity (your own screen)</span></div>
<div class="tree-row"><span class="twig">└─ </span><b>Implicit</b><span class="twig">  → you name an action → OS picks an app → Browser / Maps / Dialer</span></div>
</div></div></div>
<div class="codewrap"><div class="cap">Open another activity (explicit intent) — memorise this</div>
<pre><span class="ty">Intent</span> intent = <span class="kw">new</span> <span class="ty">Intent</span>(MainActivity.<span class="kw">this</span>, LoginActivity.<span class="kw">class</span>);
startActivity(intent);</pre></div>
<div class="drill"><div class="q">Write the Java to open LoginActivity from MainActivity. (write it, then check)</div>
<div class="a"><pre style="margin-top:6px"><span class="ty">Intent</span> intent = <span class="kw">new</span> <span class="ty">Intent</span>(MainActivity.<span class="kw">this</span>, LoginActivity.<span class="kw">class</span>);
startActivity(intent);</pre></div></div>
<div class="drill"><div class="q">Explicit vs implicit intent — one line each.</div>
<div class="a"><b>Explicit</b>: you specify the exact component/class to start (your own activities). <b>Implicit</b>: you specify an action/data and the system finds an app that can handle it (e.g. ACTION_VIEW a URL).</div></div>

<!-- MANIFEST -->
<h2 id="manifest">4 · Manifest &amp; permissions <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  <code>AndroidManifest.xml</code> is the app’s <b>declaration to the OS</b>: every activity, and every sensitive capability it needs. Network access, for example, must be requested with the INTERNET permission or calls fail.
</div>
<div class="codewrap"><div class="cap">Declare internet access in the manifest</div>
<pre>&lt;uses-permission android:name=<span class="st">"android.permission.INTERNET"</span> /&gt;</pre></div>
<div class="drill"><div class="q">Write the manifest line that grants internet access.</div>
<div class="a"><pre style="margin-top:6px">&lt;uses-permission android:name=<span class="st">"android.permission.INTERNET"</span> /&gt;</pre></div></div>
<div class="drill"><div class="q">What is the AndroidManifest.xml for? Name two things declared in it.</div>
<div class="a">It declares the app to the system. Contains: the app’s <b>activities/components</b>, requested <b>permissions</b>, app metadata, the launcher activity, min/target SDK, etc.</div></div>

<!-- JAVA -->
<h2 id="java">5 · Writing a Java class <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  A class = fields (data) + constructor (how to build one) + methods (behaviour). Java needs explicit <b>types</b> on everything and a constructor whose name matches the class.
</div>
<div class="codewrap"><div class="cap">A typical exam class (fields + constructor + getter)</div>
<pre><span class="kw">public class</span> <span class="ty">Teacher</span> {
    <span class="kw">private</span> <span class="ty">String</span> name;
    <span class="kw">private</span> <span class="ty">int</span> age;

    <span class="kw">public</span> <span class="ty">Teacher</span>(<span class="ty">String</span> name, <span class="ty">int</span> age) {  <span class="cm">// constructor</span>
        <span class="kw">this</span>.name = name;
        <span class="kw">this</span>.age = age;
    }

    <span class="kw">public</span> <span class="ty">String</span> getName() { <span class="kw">return</span> name; }
}</pre></div>
<div class="drill"><div class="q">From memory, write a Java <code>Student</code> class with String name + int id, a constructor, and a getName().</div>
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
<h2 id="flutter">6 · Flutter mental model &amp; widgets <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  In Flutter <b>everything is a widget</b> — layout, text, padding, the whole screen — composed into a tree. The framework calls your <code>build()</code> to (re)draw the UI from current data. The big distinction: <b>StatelessWidget</b> never changes after build; <b>StatefulWidget</b> holds mutable state and redraws when you call <code>setState()</code>. <span class="mnemonic">Data changes → setState() → build() runs again → UI updates.</span>
</div>
<div class="figure"><div class="figcap">The redraw loop — why a StatefulWidget updates</div>
<div class="figbox"><div class="flow">
  <span class="flow-node is-plain">data changes</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">setState()</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">build()</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node is-plain">UI updates</span>
  <span class="flow-loop">↺ Every tap/change calls setState() → Flutter re-runs build() → the screen redraws. A StatelessWidget skips this loop.</span>
</div></div></div>
<table>
<thead><tr><th>Concept</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>StatelessWidget</td><td>Immutable UI; no internal changing state</td></tr>
<tr><td>StatefulWidget</td><td>Has a <code>State</code> object; <code>setState()</code> triggers rebuild</td></tr>
<tr><td><code>build()</code></td><td>Returns the widget tree to render</td></tr>
<tr><td>MaterialApp / Scaffold / AppBar</td><td>App root / page skeleton / top bar</td></tr>
<tr><td><code>pubspec.yaml</code></td><td>Project config: dependencies &amp; assets</td></tr>
<tr><td>Hot reload</td><td>Apply code changes instantly without losing state</td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">Entry point</div>
<pre><span class="kw">void</span> main() {
  runApp(<span class="ty">MyApp</span>());
}</pre></div>
<div class="drill"><div class="q">StatelessWidget vs StatefulWidget — when do you need which, and what method triggers a redraw?</div>
<div class="a"><b>StatelessWidget</b> when the UI never changes from internal data (static content). <b>StatefulWidget</b> when the UI must update in response to data/interaction. Calling <b><code>setState()</code></b> tells Flutter to re-run <code>build()</code> and redraw.</div></div>
<div class="drill"><div class="q">What is <code>pubspec.yaml</code> for? Name two things it holds.</div>
<div class="a">The Flutter project’s config file. Holds <b>dependencies</b> (packages) and declared <b>assets</b> (images/fonts), plus app name/version/SDK constraints.</div></div>
<div class="drill"><div class="q">What does <code>main()</code> do in a Flutter app?</div>
<div class="a">It’s the entry point; it calls <code>runApp(MyApp())</code> to mount the root widget and start the app.</div></div>

<!-- NAV -->
<h2 id="nav">7 · Navigator — moving between screens <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Flutter manages screens as a <b>stack of routes</b>. <code>push</code> puts a new screen on top; <code>pop</code> removes the top to go back. This is the Flutter equivalent of Android’s startActivity / back button.
</div>
<div class="figure"><div class="figcap">A stack of screens — push adds on top, pop removes the top</div>
<div class="figbox"><div class="stack">
  <div class="stack-item is-top"><span>DetailScreen</span><span class="stack-tag">← top · visible now</span></div>
  <div class="stack-item"><span>ListScreen</span><span class="stack-tag">push ↑ / pop ↓</span></div>
  <div class="stack-item"><span>HomeScreen</span><span class="stack-tag">bottom · first route</span></div>
</div>
<div class="lc-branch"><code>Navigator.push</code> drops a new screen on top (it becomes visible); <code>Navigator.pop</code> lifts the top off, revealing the one beneath. Same idea as Android’s back stack.</div>
</div></div>
<div class="codewrap"><div class="cap">Go to another screen / go back — memorise both</div>
<pre><span class="cm">// push a new screen onto the stack</span>
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => <span class="ty">OtherScreen</span>()),
);

<span class="cm">// go back</span>
Navigator.pop(context);</pre></div>
<div class="drill"><div class="q">Write the Flutter code to navigate to OtherScreen, and the code to go back.</div>
<div class="a"><pre style="margin-top:6px">Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => <span class="ty">OtherScreen</span>()),
);

Navigator.pop(context);</pre></div></div>
<div class="drill"><div class="q">Map the Android navigation idea to the Flutter one.</div>
<div class="a">Android <code>startActivity(intent)</code> ≈ Flutter <code>Navigator.push(...)</code>; Android back/<code>finish()</code> ≈ Flutter <code>Navigator.pop(context)</code>. Both manage a <b>stack of screens</b>.</div></div>

<!-- DART -->
<h2 id="dart">8 · Dart class + named constructor <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Dart lets a class have <b>more than one constructor</b> via <b>named constructors</b> (<code>ClassName.label(...)</code>) — handy when you want multiple ways to build an object. Dart also uses <b>named parameters</b> in <code>{ }</code>, often with <code>required</code>.
</div>
<div class="codewrap"><div class="cap">Dart class with a named constructor</div>
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
<div class="codewrap"><div class="cap">Named parameters (common in widgets)</div>
<pre><span class="ty">Slide</span>({<span class="kw">required this</span>.name, <span class="kw">required this</span>.imageUrl});
<span class="cm">// call:</span>
<span class="ty">Slide</span>(name: <span class="st">"Slide1"</span>, imageUrl: <span class="st">"url1"</span>);</pre></div>
<div class="drill"><div class="q">Write a Dart <code>Student</code> class with name + id and a named constructor <code>Student.allParams</code>, then create one.</div>
<div class="a"><pre style="margin-top:6px"><span class="kw">class</span> <span class="ty">Student</span> {
  <span class="ty">String</span> name;
  <span class="ty">int</span> id;
  <span class="ty">Student</span>(<span class="kw">this</span>.name, <span class="kw">this</span>.id);
  <span class="ty">Student</span>.allParams(<span class="kw">this</span>.name, <span class="kw">this</span>.id);
}

<span class="kw">var</span> s = <span class="ty">Student</span>.allParams(<span class="st">"Vatana"</span>, 1);</pre></div></div>
<div class="drill"><div class="q">What is a named constructor and why use one?</div>
<div class="a">A second (named) way to construct an object: <code>ClassName.label(...)</code>. Dart allows only one unnamed constructor, so named constructors give you <b>multiple, clearly-labelled ways to create instances</b> (e.g. from JSON, with all params, etc.).</div></div>
<div class="drill"><div class="q">Call a widget <code>Slide</code> that takes named params <code>name</code> and <code>imageUrl</code>.</div>
<div class="a"><code>Slide(name: "Slide1", imageUrl: "url1");</code></div></div>

<!-- PASS DATA -->
<h2 id="extras">9 · Passing data between activities <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  The same Intent that opens a screen can <b>carry data</b> as key-value “extras.” The sender attaches with <code>putExtra("key", value)</code>; the receiving activity reads with <code>getIntent().getStringExtra("key")</code> (or getIntExtra, etc.).
</div>
<div class="codewrap"><div class="cap">Send extras, then read them on the other side</div>
<pre><span class="cm">// sender</span>
<span class="ty">Intent</span> i = <span class="kw">new</span> <span class="ty">Intent</span>(MainActivity.<span class="kw">this</span>, DetailActivity.<span class="kw">class</span>);
i.putExtra(<span class="st">"username"</span>, <span class="st">"Vatana"</span>);
i.putExtra(<span class="st">"age"</span>, 22);
startActivity(i);

<span class="cm">// receiver — inside DetailActivity.onCreate()</span>
<span class="ty">String</span> name = getIntent().getStringExtra(<span class="st">"username"</span>);
<span class="kw">int</span> age = getIntent().getIntExtra(<span class="st">"age"</span>, 0);  <span class="cm">// 0 = default</span></pre></div>
<div class="drill"><div class="q">Write the code to send a String "username" = "Vatana" to DetailActivity, and the code to read it there.</div>
<div class="a"><pre style="margin-top:6px"><span class="ty">Intent</span> i = <span class="kw">new</span> <span class="ty">Intent</span>(MainActivity.<span class="kw">this</span>, DetailActivity.<span class="kw">class</span>);
i.putExtra(<span class="st">"username"</span>, <span class="st">"Vatana"</span>);
startActivity(i);
<span class="cm">// in DetailActivity:</span>
<span class="ty">String</span> name = getIntent().getStringExtra(<span class="st">"username"</span>);</pre></div></div>

<!-- SHAREDPREFS -->
<h2 id="prefs">10 · SharedPreferences <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  SharedPreferences is <b>small persistent key-value storage</b> that survives app restarts — perfect for settings, a “logged-in” flag, or a saved token. Not for large or structured data (use a database for that). Write through an <b>Editor</b> and call <code>apply()</code>.
</div>
<div class="codewrap"><div class="cap">Save and read a value</div>
<pre><span class="cm">// save</span>
<span class="ty">SharedPreferences</span> prefs = getSharedPreferences(<span class="st">"myPrefs"</span>, MODE_PRIVATE);
<span class="ty">SharedPreferences.Editor</span> editor = prefs.edit();
editor.putString(<span class="st">"token"</span>, <span class="st">"abc123"</span>);
editor.apply();              <span class="cm">// async save</span>

<span class="cm">// read (with a default if missing)</span>
<span class="ty">String</span> token = prefs.getString(<span class="st">"token"</span>, <span class="kw">null</span>);</pre></div>
<div class="drill"><div class="q">What is SharedPreferences for, and when should you NOT use it?</div>
<div class="a">For <b>small key-value data that must persist</b> across restarts (settings, login flag, token). <b>Don’t</b> use it for large datasets or complex/relational data — use a database (SQLite/Room) instead.</div></div>
<div class="drill"><div class="q">Write code to save a String "token" = "abc123", then read it back.</div>
<div class="a"><pre style="margin-top:6px"><span class="ty">SharedPreferences</span> prefs = getSharedPreferences(<span class="st">"myPrefs"</span>, MODE_PRIVATE);
prefs.edit().putString(<span class="st">"token"</span>, <span class="st">"abc123"</span>).apply();
<span class="ty">String</span> token = prefs.getString(<span class="st">"token"</span>, <span class="kw">null</span>);</pre></div></div>

<!-- LISTS & FRAGMENTS -->
<h2 id="lists">11 · Lists, adapters &amp; fragments <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  To show a scrolling list you need a <b>data source</b> + an <b>Adapter</b> that turns each item into a row view. <b>RecyclerView</b> is the efficient modern list — it <b>recycles</b> off-screen row views instead of creating thousands. A <b>Fragment</b> is a reusable chunk of UI with its own lifecycle, hosted inside an activity (good for tabs / responsive layouts).
</div>
<table>
<thead><tr><th>Thing</th><th>Role</th></tr></thead>
<tbody>
<tr><td>RecyclerView</td><td>Efficient scrollable list; recycles views (needs Adapter + ViewHolder + LayoutManager)</td></tr>
<tr><td>ListView</td><td>Older, simpler list (ArrayAdapter); less efficient</td></tr>
<tr><td>Adapter</td><td>Bridge: binds each data item to its row view</td></tr>
<tr><td>Fragment</td><td>Reusable UI section with its own lifecycle (<code>onCreateView</code>)</td></tr>
<tr><td>Toast</td><td>Short pop-up message</td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">Click listener + Toast</div>
<pre>button.setOnClickListener(<span class="kw">new</span> <span class="ty">View.OnClickListener</span>() {
    <span class="kw">public void</span> onClick(<span class="ty">View</span> v) {
        <span class="ty">Toast</span>.makeText(MainActivity.<span class="kw">this</span>, <span class="st">"Clicked!"</span>, <span class="ty">Toast</span>.LENGTH_SHORT).show();
    }
});</pre></div>
<div class="drill"><div class="q">What is a RecyclerView and why prefer it over ListView? What does the Adapter do?</div>
<div class="a"><b>RecyclerView</b> = efficient scrollable list that <b>recycles</b> off-screen views (so a 10,000-item list uses only a handful of view objects). The <b>Adapter</b> binds each data item to the view for that row (and a ViewHolder caches the row’s sub-views).</div></div>
<div class="drill"><div class="q">What is a Fragment and how does it relate to an Activity?</div>
<div class="a">A <b>Fragment</b> is a reusable, modular piece of UI with its own lifecycle, <b>hosted inside an Activity</b>. One activity can host several fragments (tabs, master-detail), making layouts reusable and responsive.</div></div>
<div class="drill"><div class="q">Write code to show a Toast saying "Clicked!" when a button is tapped.</div>
<div class="a"><pre style="margin-top:6px">button.setOnClickListener(v ->
    <span class="ty">Toast</span>.makeText(<span class="kw">this</span>, <span class="st">"Clicked!"</span>, <span class="ty">Toast</span>.LENGTH_SHORT).show());</pre></div></div>

<!-- FLUTTER LAYOUT -->
<h2 id="flayout">12 · Flutter layout &amp; passing data <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  You build screens by <b>nesting layout widgets</b>: <b>Column</b> stacks children vertically, <b>Row</b> horizontally, <b>Container</b> is a box (padding/margin/color), <b>ListView</b> scrolls. To send data to a new screen you pass it through the screen’s <b>constructor</b>; to get a value <b>back</b>, <code>await</code> the push and <code>pop</code> with a value.
</div>
<div class="figure"><div class="figcap">Everything is a widget — a screen is a tree of them</div>
<div class="figbox"><div class="tree">
<div class="tree-row"><b>MaterialApp</b><span class="twig">          — app root</span></div>
<div class="tree-row"><span class="twig">└─ </span><b>Scaffold</b><span class="twig">          — page skeleton</span></div>
<div class="tree-row"><span class="twig">   ├─ </span><b>AppBar</b><span class="twig">         — top bar</span></div>
<div class="tree-row"><span class="twig">   └─ </span>body: <b>Column</b><span class="twig">   — stacks children vertically</span></div>
<div class="tree-row"><span class="twig">      ├─ </span>Text<span class="twig">         — a child widget</span></div>
<div class="tree-row"><span class="twig">      ├─ </span>Row<span class="twig">          — children side by side</span></div>
<div class="tree-row"><span class="twig">      └─ </span>ElevatedButton<span class="twig"></span></div>
</div></div></div>
<table>
<thead><tr><th>Widget</th><th>Arranges</th></tr></thead>
<tbody>
<tr><td>Column</td><td>Children vertically</td></tr>
<tr><td>Row</td><td>Children horizontally</td></tr>
<tr><td>Container</td><td>A single box with padding/margin/decoration</td></tr>
<tr><td>ListView / ListView.builder</td><td>Scrollable list (builder = efficient, on demand)</td></tr>
</tbody>
</table>
<div class="codewrap"><div class="cap">Pass data forward, and get a result back</div>
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
<div class="drill"><div class="q">Column vs Row — what does each do?</div>
<div class="a"><b>Column</b> arranges its children <b>vertically</b> (top→bottom); <b>Row</b> arranges them <b>horizontally</b> (left→right).</div></div>
<div class="drill"><div class="q">How do you pass data TO a new screen in Flutter, and how do you get a value BACK from it?</div>
<div class="a"><b>To:</b> pass it through the screen’s constructor — <code>DetailScreen(name: "Vatana")</code> inside the MaterialPageRoute builder. <b>Back:</b> <code>final result = await Navigator.push(...)</code> and the other screen returns it with <code>Navigator.pop(context, value)</code>.</div></div>
<div class="drill"><div class="q">What is <code>ListView.builder</code> and why use it over a plain ListView?</div>
<div class="a">It builds list items <b>lazily, on demand</b> (only what’s visible), via <code>itemCount</code> + <code>itemBuilder</code> — efficient for long/dynamic lists, unlike a plain ListView that builds all children up front.</div></div>

<!-- DART ESSENTIALS -->
<h2 id="dartcore">13 · Dart essentials &amp; async <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  <b>var</b> = type inferred, reassignable. <b>final</b> = set once (at runtime). <b>const</b> = compile-time constant. <b>Null safety:</b> <code>String</code> can never be null; <code>String?</code> can. Long-running work returns a <b>Future</b> (a value that arrives later) — mark the function <code>async</code> and <code>await</code> the result.
</div>
<div class="figure"><div class="figcap">await — pause here until the Future arrives, then continue</div>
<div class="figbox"><div class="flow">
  <span class="flow-node">call fetchFromApi()</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node is-plain">⏳ Future pending…</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node">await gives the value</span>
  <span class="flow-arrow">→</span>
  <span class="flow-node is-plain">next line runs</span>
  <span class="flow-loop">A Future = a value that arrives later. <code>await</code> (inside an <code>async</code> function) waits without freezing the app, so the code still reads top-to-bottom.</span>
</div></div></div>
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
<div class="drill"><div class="q">var vs final vs const — distinguish them.</div>
<div class="a"><b>var</b> = type inferred, can be reassigned. <b>final</b> = assigned once (value known at runtime). <b>const</b> = compile-time constant (value known at compile time, deeply immutable).</div></div>
<div class="drill"><div class="q">What does <code>String?</code> mean vs <code>String</code> in Dart?</div>
<div class="a"><code>String</code> is <b>non-nullable</b> — it can never hold null. <code>String?</code> is <b>nullable</b> — it may be null, and you must handle that (with <code>?.</code>, <code>??</code>, or <code>!</code>). This is Dart’s <b>null safety</b>.</div></div>
<div class="drill"><div class="q">What is a Future, and what does <code>await</code> do?</div>
<div class="a">A <b>Future</b> is a value that will be available <b>later</b> (e.g. a network/file result). <code>await</code> (inside an <code>async</code> function) <b>pauses until the Future completes</b> and gives you its value, so async code reads top-to-bottom like normal code.</div></div>

<!-- BRIDGE -->
<h2 id="bridge">14 · Android ↔ Flutter cheat-bridge</h2>
<div class="concept"><span class="label">Why this table</span>The exam mixes both. If you know one side, you can reason to the other — they solve the same problems with different syntax.</div>
<table>
<thead><tr><th>Task</th><th>Android (Java)</th><th>Flutter (Dart)</th></tr></thead>
<tbody>
<tr><td>A screen</td><td>Activity</td><td>Widget (Stateless/Stateful) + Scaffold</td></tr>
<tr><td>Go to next screen</td><td><code>startActivity(intent)</code></td><td><code>Navigator.push(...)</code></td></tr>
<tr><td>Go back</td><td><code>finish()</code> / back</td><td><code>Navigator.pop(context)</code></td></tr>
<tr><td>Update UI on data change</td><td>Update view in code</td><td><code>setState()</code> → rebuild</td></tr>
<tr><td>Declare config/deps</td><td>AndroidManifest.xml</td><td>pubspec.yaml</td></tr>
<tr><td>Layout</td><td>LinearLayout / ConstraintLayout (XML)</td><td>Column / Row / widgets (code)</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Without looking: give the Flutter equivalent of startActivity, finish(), and AndroidManifest.xml.</div>
<div class="a"><code>startActivity</code> → <b>Navigator.push</b> · <code>finish()</code> → <b>Navigator.pop</b> · AndroidManifest.xml → <b>pubspec.yaml</b> (config/deps).</div></div>

<!-- EXAM -->
<h2 id="exam">15 · Combined exam-style questions</h2>
<p class="lead">Write each answer fully before revealing.</p>
<div class="exam">
<div class="drill"><div class="q">(Android) A login button should open LoginActivity, and the app calls a web API. Write the intent code AND the manifest permission.</div>
<div class="a"><pre style="margin-top:6px"><span class="ty">Intent</span> intent = <span class="kw">new</span> <span class="ty">Intent</span>(MainActivity.<span class="kw">this</span>, LoginActivity.<span class="kw">class</span>);
startActivity(intent);</pre>
<pre style="margin-top:8px">&lt;uses-permission android:name=<span class="st">"android.permission.INTERNET"</span> /&gt;</pre></div></div>
<div class="drill"><div class="q">(Concept) Explain the full activity lifecycle when the user opens an app, gets a call, then returns and closes it.</div>
<div class="a">Open: onCreate → onStart → onResume (running). Call interrupts: onPause → onStop. Return: onRestart → onStart → onResume. Close: onPause → onStop → onDestroy.</div></div>
<div class="drill"><div class="q">(Flutter) A counter screen must show a number that increases on a button tap. Which widget type, which method redraws it, and how do you navigate to a Results screen afterwards?</div>
<div class="a"><b>StatefulWidget</b> (the count changes). Call <b><code>setState()</code></b> inside the tap handler to increment + rebuild. Navigate: <code>Navigator.push(context, MaterialPageRoute(builder: (context) => ResultsScreen()));</code>.</div></div>
<div class="drill"><div class="q">(Dart) Write a Student class with a named constructor allParams(name, id), instantiate it, then go back a screen.</div>
<div class="a"><pre style="margin-top:6px"><span class="kw">class</span> <span class="ty">Student</span> {
  <span class="ty">String</span> name; <span class="ty">int</span> id;
  <span class="ty">Student</span>(<span class="kw">this</span>.name, <span class="kw">this</span>.id);
  <span class="ty">Student</span>.allParams(<span class="kw">this</span>.name, <span class="kw">this</span>.id);
}
<span class="kw">var</span> s = <span class="ty">Student</span>.allParams(<span class="st">"Vatana"</span>, 1);
Navigator.pop(context);</pre></div></div>
<div class="drill"><div class="q">(Compare) The same app exists in Android and Flutter. How does each move to a second screen and update the UI when data changes?</div>
<div class="a"><b>Android:</b> move screen with <code>startActivity(new Intent(...))</code>; update by changing views in code. <b>Flutter:</b> move with <code>Navigator.push(...)</code>; update by calling <code>setState()</code> in a StatefulWidget to trigger <code>build()</code>.</div></div>
</div>

<!-- ===================================================================== -->
<!-- PROFESSOR'S FINAL PREVIEW — extra concepts added on top              -->
<!-- ===================================================================== -->
<h2 id="preview">16 · From the professor’s final preview — extra concepts</h2>
<p class="lead">These cover the rest of your professor’s preview: the “What is…?” list, state management, networking, storage, scaffold, and the two practice tasks. Same rule as the whole sheet — <b>understand the idea, don’t memorise the wording</b>. Where the exam’s expected answer is loosely worded, there’s a small <span style="color:var(--warn)">exam watch-out</span>.</p>

<div class="concept">
  <span class="label">The mental model for every “What is X?”</span>
  Each term is really asking “what job does this do?” Keep this map: a <b>platform</b> is where your app runs (Android), an <b>SDK</b> is a box of tools to build for a platform, a <b>language</b> is what you write in (Java, Dart), and a <b>backend service</b> is someone else’s server you rent instead of building your own.
</div>
<table>
<thead><tr><th>Term</th><th>What it actually is</th></tr></thead>
<tbody>
<tr><td><b>Android</b></td><td>Google’s mobile <b>operating system</b> + platform — what runs your app on phones/tablets.</td></tr>
<tr><td><b>JDK</b></td><td><b>Java Development Kit</b>: the toolbox to compile + run Java (compiler, libraries, JVM). Android-in-Java needs it.</td></tr>
<tr><td><b>SDK</b></td><td><b>Software Development Kit</b>: a kit of tools + libraries + docs for building on a platform (“Android SDK”, “Flutter SDK”).</td></tr>
<tr><td><b>Flutter SDK</b></td><td>Google’s toolkit to build <b>one app for Android, iOS, web &amp; desktop</b> from a single <b>Dart</b> codebase (widgets, engine, CLI, hot reload).</td></tr>
<tr><td><b>Firebase</b></td><td>Google’s <b>backend-as-a-service</b>: ready-made auth, database (Firestore), storage, hosting, push — so you don’t build/run a server.</td></tr>
</tbody>
</table>
<div class="why"><span class="label">Exam watch-out</span> The multiple-choice asks “JDK stands for…?” and wants <b>“Software Development Kit.”</b> Pick that option, but know it’s precisely the <b>Java</b> Development Kit — the Java toolchain.</div>
<div class="drill"><div class="q">One line each: what is Android, JDK, an SDK, and Firebase?</div>
<div class="a"><b>Android</b> = Google’s mobile OS your app runs on. <b>JDK</b> = the kit to compile/run Java. <b>SDK</b> = a toolbox of libraries/tools to build for a platform. <b>Firebase</b> = Google’s ready-made backend (auth, database, storage) used instead of building a server.</div></div>
<div class="drill"><div class="q">What is the Flutter SDK, and what language does it use?</div>
<div class="a">The toolkit to build <b>one app for many platforms</b> (Android/iOS/web/desktop) from a single codebase. Language: <b>Dart</b>.</div></div>

<h2 id="why-flutter">17 · Why Flutter? (and who made it) <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Normally you’d build an Android app and a <b>separate</b> iOS app — two codebases. Flutter’s pitch: <b>write once, run on Android + iOS + web + desktop</b>. It draws its own widgets so the UI looks consistent everywhere, and <b>hot reload</b> shows changes in under a second. Made by <b>Google</b>, written in <b>Dart</b>.
</div>
<div class="drill"><div class="q">Why do teams pick Flutter? Core reason + two perks.</div>
<div class="a">Core: <b>one codebase → many platforms</b>, no double work. Perks: <b>hot reload</b> (instant changes), a rich consistent <b>widget</b> set, near-native performance.</div></div>
<div class="drill"><div class="q">Who developed Flutter, and in what language do you write it?</div>
<div class="a"><b>Google</b> · language is <b>Dart</b>.</div></div>

<h2 id="state-mgmt">18 · State management: setState → Provider → GetX, &amp; MVVM <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  “State” = the data your UI shows. In a tiny app <code>setState()</code> redraws <b>one</b> widget. But when many screens need the same data (logged-in user, cart, theme), passing it by hand and calling setState everywhere gets tangled. <b>State management solves one problem: hold the data in one place and let any widget read/update it without manual wiring.</b>
</div>
<table>
<thead><tr><th>Approach</th><th>What it does / when</th></tr></thead>
<tbody>
<tr><td><code>setState()</code></td><td>Built-in. Local state inside <b>one</b> StatefulWidget. Simple; doesn’t share across screens.</td></tr>
<tr><td><b>Provider</b></td><td>The Flutter-team-recommended way to <b>share state down the widget tree</b>. You “provide” a model at the top; widgets “watch” it and rebuild when it changes. Explicit, a bit more boilerplate.</td></tr>
<tr><td><b>GetX</b></td><td>All-in-one package: <b>state + navigation + dependency injection</b>. Reactive (<code>.obs</code> + <code>Obx</code>), very little boilerplate, no <code>context</code> needed for routing. More “magic”, less explicit.</td></tr>
</tbody>
</table>
<div class="concept">
  <span class="label">MVVM — the pattern behind it</span>
  <b>MVVM = Model–View–ViewModel</b>: a way to <b>separate UI from logic</b>. <b>Model</b> = the data, <b>View</b> = the widgets the user sees, <b>ViewModel</b> = the logic/state the View binds to (no UI code). The View just displays the ViewModel and sends it events. Provider/GetX are the tools you use to wire MVVM together.
</div>
<div class="figure"><div class="figcap">MVVM — keep the UI and the logic apart</div>
<div class="figbox"><div class="flow">
  <span class="flow-node is-plain">View (widgets)</span>
  <span class="flow-arrow">⇄</span>
  <span class="flow-node">ViewModel (logic + state)</span>
  <span class="flow-arrow">⇄</span>
  <span class="flow-node is-plain">Model (data)</span>
  <span class="flow-loop">The <b>View</b> shows the ViewModel &amp; sends it events; the <b>ViewModel</b> holds state and talks to the <b>Model</b> (data). No UI code in the ViewModel. Provider/GetX wire it together.</span>
</div></div></div>
<div class="drill"><div class="q">What problem do Provider/GetX solve that <code>setState</code> doesn’t?</div>
<div class="a"><code>setState</code> only updates <b>one widget’s local state</b>. Provider/GetX keep shared data in <b>one place</b> so <b>any widget across the app</b> can read and react to it, without threading it through every constructor.</div></div>
<div class="drill"><div class="q">Compare Provider and GetX (boilerplate · scope · style).</div>
<div class="a"><b>Boilerplate:</b> Provider more, GetX terse. <b>Scope:</b> Provider = state only; GetX = state + routing + DI. <b>Style:</b> Provider explicit (you see the wiring); GetX hides more (reactive <code>.obs</code>, no <code>context</code> for nav). Neither is “correct” — Provider favours clarity, GetX favours speed.</div></div>
<div class="drill"><div class="q">What does MVVM stand for and what lives in each part?</div>
<div class="a"><b>Model</b> = data · <b>View</b> = the UI/widgets · <b>ViewModel</b> = logic + state the View binds to (no UI). Goal: keep UI and logic separate so each is testable and reusable.</div></div>

<h2 id="networking">19 · Talking to a server: http vs https <span class="tag-a" style="vertical-align:middle">Android</span> <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Your app asks a server for data with an <b>HTTP request</b> (<b>GET</b> to read, <b>POST</b> to send) and gets a <b>response</b> back (usually JSON). <b>HTTP</b> sends it as plain text; <b>HTTPS</b> is the same but <b>encrypted with TLS</b> — the “S” is <b>Secure</b> (the padlock). Use HTTPS for real data. On Android you also need the INTERNET permission.
</div>
<div class="figure"><div class="figcap">App ⇄ Server — and what the “S” adds</div>
<div class="figbox"><div class="flow">
  <span class="flow-node is-plain">Your app</span>
  <span class="flow-arrow">— GET / POST →</span>
  <span class="flow-node">Server</span>
  <span class="flow-arrow">← JSON —</span>
  <span class="flow-node is-plain">response</span>
  <span class="flow-loop">🔒 <b>https = http + TLS encryption</b> (“S” = Secure). Plain http is readable if intercepted. Android also needs the INTERNET permission.</span>
</div></div></div>
<table>
<thead><tr><th>Need</th><th>Android (Java)</th><th>Flutter (Dart)</th></tr></thead>
<tbody>
<tr><td>Call a REST API</td><td><b>Retrofit</b> (or HttpURLConnection)</td><td>the <b><code>http</code></b> package (or Dio)</td></tr>
<tr><td>Permission to use the network</td><td>INTERNET in the manifest</td><td>—</td></tr>
</tbody>
</table>
<div class="drill"><div class="q">Difference between http and https?</div>
<div class="a">Both carry web requests; <b>https = http + TLS encryption</b>. HTTP is plain text (readable if intercepted); HTTPS is <b>encrypted &amp; authenticated</b> (“S” = Secure). Use HTTPS for anything sensitive.</div></div>
<div class="drill"><div class="q">Your Android app must call a web API — name a request library and the required permission.</div>
<div class="a">Library: <b>Retrofit</b> (or HttpURLConnection / OkHttp). Permission: <code>&lt;uses-permission android:name="android.permission.INTERNET" /&gt;</code>. Flutter equivalent: the <code>http</code> package.</div></div>

<h2 id="storage-l10n">20 · Local storage &amp; changing language <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  <b>Local storage</b> = saving data <b>on the device</b> so it survives restarts (a token, settings, a small cache) — no server. It’s for <b>small key-value</b> data, not big/relational data (use a database for that). Android: <b>SharedPreferences</b>; Flutter: the <b>shared_preferences</b> / localstorage package. Separately, <b>easy_localization</b> is the package that lets the app <b>switch languages</b>.
</div>
<table>
<thead><tr><th>Job</th><th>Tool</th></tr></thead>
<tbody>
<tr><td>Persist small data on the device</td><td>Android: SharedPreferences · Flutter: shared_preferences / localstorage</td></tr>
<tr><td>Support multiple languages (change language)</td><td>Flutter: <b>easy_localization</b></td></tr>
</tbody>
</table>
<div class="drill"><div class="q">What is local storage for, and what should you NOT use it for?</div>
<div class="a">For <b>small data that must persist on the device</b> across restarts (login token, settings). <b>Not</b> for large or relational datasets — use a database for those.</div></div>
<div class="drill"><div class="q">Which Flutter package changes the app’s language, and which stores small data locally?</div>
<div class="a"><b>easy_localization</b> → change language. <b>shared_preferences</b> (or localstorage) → store small key-value data on the device.</div></div>

<h2 id="scaffold">21 · Scaffold — the Flutter page skeleton <span class="tag-f" style="vertical-align:middle">Flutter</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Every Material screen sits inside a <b>Scaffold</b> — the <b>skeleton that gives you the standard page slots</b>: <code>appBar</code> (top bar), <code>body</code> (content), <code>floatingActionButton</code>, <code>drawer</code> (side menu), <code>bottomNavigationBar</code>. You don’t position these by hand; Scaffold lays them out.
</div>
<div class="figure"><div class="figcap">A Scaffold gives every screen the same labelled slots</div>
<div class="figbox"><div class="skel">
  <div class="skel-bar">appBar — top bar</div>
  <div class="skel-body">body — your content<div class="skel-fab">+</div></div>
  <div class="skel-nav">bottomNavigationBar</div>
</div>
<div class="lc-branch">The “+” is the <code>floatingActionButton</code>; a swipe-in side menu is the <code>drawer</code>. You fill the slots — Scaffold positions them.</div>
</div></div>
<div class="codewrap"><div class="cap">A minimal screen</div>
<pre><span class="ty">Scaffold</span>(
  appBar: <span class="ty">AppBar</span>(title: <span class="ty">Text</span>(<span class="st">"Home"</span>)),
  body: <span class="ty">Center</span>(child: <span class="ty">Text</span>(<span class="st">"Hello"</span>)),
);</pre></div>
<div class="drill"><div class="q">What is a Scaffold? Name three slots it provides.</div>
<div class="a">The <b>basic Material page structure</b> for a screen. Slots (any three): <b>appBar</b>, <b>body</b>, <b>floatingActionButton</b>, <b>drawer</b>, <b>bottomNavigationBar</b>.</div></div>

<h2 id="practice">22 · Practice — write these from a blank page</h2>
<p class="lead">The preview’s “Practice” section. Build each from memory: understand the shape first, then the code.</p>
<div class="exam">
<div class="concept"><span class="label">Task 1 — Java <code>Employee</code> class (fields + constructor + getters &amp; setters)</span>
A class bundles <b>data (fields)</b> with <b>a way to build it (constructor)</b> and <b>controlled access (getters/setters)</b>. Fields are <code>private</code> so outside code goes through getters/setters — that’s <b>encapsulation</b>, which lets the class validate and change its internals safely.</div>
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
<div class="drill"><div class="q">Why <code>private</code> fields with public getters/setters instead of public fields?</div>
<div class="a"><b>Encapsulation</b>: hiding the fields lets the class <b>control and validate</b> access (e.g. reject a bad phone in a setter) and change its internals later without breaking callers.</div></div>

<div class="concept"><span class="label">Task 2 — Flutter exception class for a server-connection error</span>
A custom exception is just a <b>class that implements <code>Exception</code></b> carrying a message. You <code>throw</code> it when a network call fails, and <code>catch</code> it where you call the API, so the UI shows a friendly error instead of crashing.</div>
<div class="codewrap"><div class="cap">Define, throw, and catch a connection exception</div>
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
<div class="drill"><div class="q">How do you make a custom exception in Flutter, and handle it when a server call fails?</div>
<div class="a">Make a class that <code>implements Exception</code> with a message; <code>throw</code> it on failure. Wrap the network call in <code>try { } catch (e) { }</code> and handle/rethrow so the UI shows an error instead of crashing.</div></div>
</div>

<p class="footnote">Built from the graded Mobile Programming II exam <b>and the professor’s final-exam preview</b> (Build Bright University) — Android lifecycle/intents/manifest + Java classes, Flutter widgets/Navigator/Scaffold + Dart, plus state management (Provider/GetX/MVVM), networking (http/https), local storage and localisation. Print or “Save as PDF” reveals every answer.</p>
`;
export default html;
