(function() {var type_impls = {
"arrow_array":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericListBuilder%3COffsetSize,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#103-121\">source</a><a href=\"#impl-GenericListBuilder%3COffsetSize,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>, T: <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a>&gt; <a class=\"struct\" href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#105-108\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.new\" class=\"fn\">new</a>(values_builder: T) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\"><code>GenericListBuilder</code></a> from a given values array builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#112-120\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(values_builder: T, capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\"><code>GenericListBuilder</code></a> from a given values array builder\n<code>capacity</code> is the number of items to pre-allocate space for in this builder</p>\n</div></details></div></details>",0,"arrow_array::builder::ListBuilder","arrow_array::builder::LargeListBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericListBuilder%3COffsetSize,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#159-331\">source</a><a href=\"#impl-GenericListBuilder%3COffsetSize,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>, T&gt; <a class=\"struct\" href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;<div class=\"where\">where\n    T: 'static + <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.values\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#167-169\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.values\" class=\"fn\">values</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns the child array builder as a mutable reference.</p>\n<p>This mutable reference can be used to append values into the child array builder,\nbut you must call <a href=\"#method.append\"><code>append</code></a> to delimit each distinct list value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.values_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#172-174\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.values_ref\" class=\"fn\">values_ref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Returns the child array builder as an immutable reference</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#182-185\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.append\" class=\"fn\">append</a>(&amp;mut self, is_valid: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>)</h4></section></summary><div class=\"docblock\"><p>Finish the current variable-length list array slot</p>\n<h5 id=\"panics\"><a href=\"#panics\">Panics</a></h5>\n<p>Panics if the length of <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#method.values\" title=\"method arrow_array::builder::generic_list_builder::GenericListBuilder::values\"><code>Self::values</code></a> exceeds <code>OffsetSize::MAX</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.next_offset\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#193-195\">source</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.next_offset\" class=\"fn\">next_offset</a>(&amp;self) -&gt; OffsetSize</h4></section></summary><div class=\"docblock\"><p>Returns the next offset</p>\n<h5 id=\"panics-1\"><a href=\"#panics-1\">Panics</a></h5>\n<p>Panics if the length of <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#method.values\" title=\"method arrow_array::builder::generic_list_builder::GenericListBuilder::values\"><code>Self::values</code></a> exceeds <code>OffsetSize::MAX</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_value\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#244-250\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.append_value\" class=\"fn\">append_value</a>&lt;I, V&gt;(&amp;mut self, i: I)<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Append a value to this <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\"><code>GenericListBuilder</code></a></p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>builder = ListBuilder::new(Int32Builder::new());\n\nbuilder.append_value([<span class=\"prelude-val\">Some</span>(<span class=\"number\">1</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">2</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">3</span>)]);\nbuilder.append_value([]);\nbuilder.append_value([<span class=\"prelude-val\">None</span>]);\n\n<span class=\"kw\">let </span>array = builder.finish();\n<span class=\"macro\">assert_eq!</span>(array.len(), <span class=\"number\">3</span>);\n\n<span class=\"macro\">assert_eq!</span>(array.value_offsets(), <span class=\"kw-2\">&amp;</span>[<span class=\"number\">0</span>, <span class=\"number\">3</span>, <span class=\"number\">3</span>, <span class=\"number\">4</span>]);\n<span class=\"kw\">let </span>values = array.values().as_primitive::&lt;Int32Type&gt;();\n<span class=\"macro\">assert_eq!</span>(values, <span class=\"kw-2\">&amp;</span>Int32Array::from(<span class=\"macro\">vec!</span>[<span class=\"prelude-val\">Some</span>(<span class=\"number\">1</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">2</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">3</span>), <span class=\"prelude-val\">None</span>]));</code></pre></div>\n<p>This is an alternative API to appending directly to <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#method.values\" title=\"method arrow_array::builder::generic_list_builder::GenericListBuilder::values\"><code>Self::values</code></a> and\ndelimiting the result with <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#method.append\" title=\"method arrow_array::builder::generic_list_builder::GenericListBuilder::append\"><code>Self::append</code></a></p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>builder = ListBuilder::new(Int32Builder::new());\n\nbuilder.values().append_value(<span class=\"number\">1</span>);\nbuilder.values().append_value(<span class=\"number\">2</span>);\nbuilder.values().append_value(<span class=\"number\">3</span>);\nbuilder.append(<span class=\"bool-val\">true</span>);\nbuilder.append(<span class=\"bool-val\">true</span>);\nbuilder.values().append_null();\nbuilder.append(<span class=\"bool-val\">true</span>);\n\n<span class=\"kw\">let </span>array = builder.finish();\n<span class=\"macro\">assert_eq!</span>(array.len(), <span class=\"number\">3</span>);\n\n<span class=\"macro\">assert_eq!</span>(array.value_offsets(), <span class=\"kw-2\">&amp;</span>[<span class=\"number\">0</span>, <span class=\"number\">3</span>, <span class=\"number\">3</span>, <span class=\"number\">4</span>]);\n<span class=\"kw\">let </span>values = array.values().as_primitive::&lt;Int32Type&gt;();\n<span class=\"macro\">assert_eq!</span>(values, <span class=\"kw-2\">&amp;</span>Int32Array::from(<span class=\"macro\">vec!</span>[<span class=\"prelude-val\">Some</span>(<span class=\"number\">1</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">2</span>), <span class=\"prelude-val\">Some</span>(<span class=\"number\">3</span>), <span class=\"prelude-val\">None</span>]));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_null\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#256-259\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.append_null\" class=\"fn\">append_null</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Append a null to this <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\"><code>GenericListBuilder</code></a></p>\n<p>See <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#method.append_value\" title=\"method arrow_array::builder::generic_list_builder::GenericListBuilder::append_value\"><code>Self::append_value</code></a> for an example use.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_option\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#265-274\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.append_option\" class=\"fn\">append_option</a>&lt;I, V&gt;(&amp;mut self, i: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;I&gt;)<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Appends an optional value into this <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\"><code>GenericListBuilder</code></a></p>\n<p>If <code>Some</code> calls <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#method.append_value\" title=\"method arrow_array::builder::generic_list_builder::GenericListBuilder::append_value\"><code>Self::append_value</code></a> otherwise calls <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#method.append_null\" title=\"method arrow_array::builder::generic_list_builder::GenericListBuilder::append_null\"><code>Self::append_null</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#277-300\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"arrow_array/array/list_array/struct.GenericListArray.html\" title=\"struct arrow_array::array::list_array::GenericListArray\">GenericListArray</a>&lt;OffsetSize&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <a href=\"arrow_array/array/list_array/struct.GenericListArray.html\" title=\"struct arrow_array::array::list_array::GenericListArray\"><code>GenericListArray</code></a> and reset this builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#303-325\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"arrow_array/array/list_array/struct.GenericListArray.html\" title=\"struct arrow_array::array::list_array::GenericListArray\">GenericListArray</a>&lt;OffsetSize&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <a href=\"arrow_array/array/list_array/struct.GenericListArray.html\" title=\"struct arrow_array::array::list_array::GenericListArray\"><code>GenericListArray</code></a> without resetting the builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offsets_slice\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#328-330\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html#tymethod.offsets_slice\" class=\"fn\">offsets_slice</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[OffsetSize]</a></h4></section></summary><div class=\"docblock\"><p>Returns the current offsets buffer as a slice</p>\n</div></details></div></details>",0,"arrow_array::builder::ListBuilder","arrow_array::builder::LargeListBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericListBuilder%3COffsetSize,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#90\">source</a><a href=\"#impl-Debug-for-GenericListBuilder%3COffsetSize,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#90\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow_array::builder::ListBuilder","arrow_array::builder::LargeListBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Extend%3COption%3CV%3E%3E-for-GenericListBuilder%3CO,+B%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#333-351\">source</a><a href=\"#impl-Extend%3COption%3CV%3E%3E-for-GenericListBuilder%3CO,+B%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O, B, V, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\">GenericListBuilder</a>&lt;O, B&gt;<div class=\"where\">where\n    O: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>,\n    B: <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;E&gt;,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = E&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#340-350\">source</a><a href=\"#method.extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\" class=\"fn\">extend</a>&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;&gt;(&amp;mut self, iter: T)</h4></section></summary><div class='docblock'>Extends a collection with the contents of an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#376\">source</a><a href=\"#method.extend_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_one\" class=\"fn\">extend_one</a>(&amp;mut self, item: A)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Extends a collection with exactly one element.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_reserve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#384\">source</a><a href=\"#method.extend_reserve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\" class=\"fn\">extend_reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Reserves capacity in a collection for the given number of additional elements. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\">Read more</a></div></details></div></details>","Extend<Option<V>>","arrow_array::builder::ListBuilder","arrow_array::builder::LargeListBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrayBuilder-for-GenericListBuilder%3COffsetSize,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#123-157\">source</a><a href=\"#impl-ArrayBuilder-for-GenericListBuilder%3COffsetSize,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OffsetSize: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>, T&gt; <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a> for <a class=\"struct\" href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\">GenericListBuilder</a>&lt;OffsetSize, T&gt;<div class=\"where\">where\n    T: 'static + <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#129-131\">source</a><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class=\"docblock\"><p>Returns the builder as a non-mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#134-136\">source</a><a href=\"#method.as_any_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any_mut\" class=\"fn\">as_any_mut</a>(&amp;mut self) -&gt; &amp;mut dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class=\"docblock\"><p>Returns the builder as a mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_box_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#139-141\">source</a><a href=\"#method.into_box_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.into_box_any\" class=\"fn\">into_box_any</a>(self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;Self&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the boxed builder as a box of <code>Any</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#144-146\">source</a><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of array slots in the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#149-151\">source</a><a href=\"#method.finish\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class=\"docblock\"><p>Builds the array and reset this builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#154-156\">source</a><a href=\"#method.finish_cloned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class=\"docblock\"><p>Builds the array without resetting the builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/mod.rs.html#240-242\">source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#method.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether number of array slots is zero</div></details></div></details>","ArrayBuilder","arrow_array::builder::ListBuilder","arrow_array::builder::LargeListBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenericListBuilder%3CO,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#97-101\">source</a><a href=\"#impl-Default-for-GenericListBuilder%3CO,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>, T: <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow_array/builder/generic_list_builder/struct.GenericListBuilder.html\" title=\"struct arrow_array::builder::generic_list_builder::GenericListBuilder\">GenericListBuilder</a>&lt;O, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_list_builder.rs.html#98-100\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","arrow_array::builder::ListBuilder","arrow_array::builder::LargeListBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()