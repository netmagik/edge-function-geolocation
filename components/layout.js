import head from "./head.js";

export default function layout(data) {
  return `
<!DOCTYPE html>
<html lang="en">
  ${head({
    title: data.title,
    metaDescription: data.metaDescription,
    url: data.url,
    openGraphImageName: data.openGraphImageName,
  })}
  <body>
  <main class="main">

    <section class="home__section">  
    ${data.content}
    </section>
    <p>
      ${data.url.pathname !== "/" ? `<a href="/">Explore more examples</a>` : ""}
    </p>
    <hr/>
   
  </main>
  </body>
</html>
`;
}
