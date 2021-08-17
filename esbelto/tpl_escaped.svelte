<script id="esbelto">
  let escape = getEscape();
  let {title, text, projects} = getVariables();
</script>

<head>
  <title>{escape(title)}</title>
</head>
<body>
  <p>{escape(text)}</p>
  {#if projects.length}
    {#each projects as project}
      <a href="{escape(project.url)}">{escape(project.name)}</a>
      <p>{escape(project.description)}</p>
    {/each}
  {:else}
    No projects
  {/if}
</body>
