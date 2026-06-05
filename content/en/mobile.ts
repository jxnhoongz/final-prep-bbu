const html = `

<p class="lead">This subject is <b>mixed Android (Java) + Flutter (Dart)</b>. The exam asks you to <b>write small snippets from memory</b> (open an activity, navigate screens, declare permissions, build a class/widget) and to <b>explain concepts</b> (lifecycle, stateless vs stateful). Drills make you <i>write the code</i> before you peek — that’s the skill that’s tested.</p>
<div class="tagrow"><span class="tag-a">Android / Java</span><span class="tag-f">Flutter / Dart</span></div>


<!-- LIFECYCLE -->
<h2 id="lifecycle">1 · Activity lifecycle <span class="tag-a" style="vertical-align:middle">Android</span></h2>
<div class="concept">
  <span class="label">The mental model</span>
  Android constantly creates, pauses, and destroys your screen to manage memory and interruptions (calls, rotation, switching apps). Each transition fires a callback so you can <b>save/release at the right moment</b>. Read it as a staircase up to “visible &amp; interactive,” then back down. <span class="mnemonic">Create → Start → Resume … Pause → Stop → Destroy.</span>
</div>
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

<p class="footnote">Built from the graded Mobile Programming II exam (Build Bright University) — Android intents/lifecycle/manifest + Java class, and Flutter Navigator/StatefulWidget/pubspec + Dart named constructor. Print or “Save as PDF” reveals every answer.</p>
`;
export default html;
