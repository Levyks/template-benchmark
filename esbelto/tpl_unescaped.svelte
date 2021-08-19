<script id="esbelto">
  let {title, text, projects} = getVariables();
</script>

<head>
  <title>{@html title}</title>
</head>
<body>
  <p>{@html text}</p>
  {#if projects.length}
    {#each projects as project}
      <a href="{@html project.url}">{@html project.name}</a>
      <p>{@html project.description}</p>
    {/each}
  {:else}
    No projects
  {/if}
</body>
