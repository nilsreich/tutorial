---
title: ToDo App
# We can even add meta tags to the page! This sets the keywords meta tag.
# <meta name="keywords" content="my SEO keywords"/>
meta:
  - name: keywords
  - content: my SEO keywords
---
# Erstellen einer ToDo App mit Svelte

Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
``` js{4}
<script>
  let t = [];

  function update(event) {
    t = [...t, http://event.target.value];
  }
</script>

{#each t as i}<li>{i}</li>{/each}

<input on:change={update} />
```