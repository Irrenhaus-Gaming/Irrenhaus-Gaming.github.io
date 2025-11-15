import os
from jinja2 import Environment, FileSystemLoader, select_autoescape
from datetime import datetime, timezone
import utility
import markdown

TEMPLATE_PATH = "templates"
WIKI_SOURCES = "wiki-sources"
TEMPLATE_NAME = "base.html"

def render_page(env, page, path, relative_pages = {}):
    template = env.get_template(os.path.basename(TEMPLATE_NAME))
    
    with open(page, encoding='utf-8') as f:
        page_content = markdown.markdown(f.read())
    
    output_html = template.render(
        generated_at=datetime.now(timezone.utc).timestamp(),
        page_content=page_content
    )
    # Write output
    if os.path.dirname(path):
        os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(output_html)
    print(f"Generated {path}")

def main():
    env = Environment(
        loader=FileSystemLoader(TEMPLATE_PATH),
        autoescape=select_autoescape(["html", "xml"]),
    )

    wiki_layout = utility.load_json(os.path.join(WIKI_SOURCES, "wiki-layout.json"))

    for page in wiki_layout.get("layout",{}).get("main-pages", []):
        print(f"Generating page: {page}")
        render_page(env, os.path.join(WIKI_SOURCES, page), page)


    for group, value in wiki_layout.get("layout", {}).get("relative-pages", {}).items():
        for page in value.get("pages", []):
            print(f"Generating page: {page['file']}")


if __name__ == "__main__":
    main()
