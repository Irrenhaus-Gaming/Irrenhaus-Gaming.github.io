import os
from jinja2 import Environment, FileSystemLoader, select_autoescape
from datetime import datetime, timezone
import utility
import markdown

TEMPLATE_PATH = "templates"
WIKI_SOURCES = "wiki-sources"
WIKI_OUTPUT = "wiki"
TEMPLATE_NAME = "wiki-base.html"

def render_page(env, page, relative_pages = {}, relative_path= ""):
    print(f"Rendering page: {page.get('file')} with relative path: {relative_path}")
    template = env.get_template(os.path.basename(TEMPLATE_NAME))
    output_path= os.path.join(WIKI_OUTPUT, relative_path, page.get("output_filename"))
    with open(os.path.join(WIKI_SOURCES, relative_path, page.get("file")), encoding='utf-8') as f:
        page_content = markdown.markdown(f.read(), extensions=['fenced_code', 'tables', 'smarty', 'attr_list'])
    
    output_html = template.render(
        generated_at=datetime.now(timezone.utc).timestamp(),
        page=page,
        page_content=page_content,
        relative_pages=relative_pages,
        relative_path=relative_path

    )
    # Write output
    if os.path.dirname(output_path):
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(output_html)
    print(f"Generated {output_path}")

def main():
    env = Environment(
        loader=FileSystemLoader(TEMPLATE_PATH),
        autoescape=select_autoescape(["html", "xml"]),
    )

    wiki_layout = utility.load_json(os.path.join(WIKI_SOURCES, "wiki-layout.json"))

    for page in wiki_layout.get("layout",{}).get("main-pages", []):
        print(f"Generating page: {page}")
        render_page(env, page, wiki_layout.get("layout",{}).get("main-pages", []))


    for group, value in wiki_layout.get("layout", {}).get("relative-pages", {}).items():
        for page in value.get("pages", []):
            print(f"Generating page: {page['file']}")
            relevant_pages = value.get("pages", []).copy()
            for main_page in wiki_layout.get("layout",{}).get("main-pages", []):
                main_page["isMainPage"] = True
                relevant_pages.append(main_page)
            render_page(env, page, relevant_pages , value.get("path"))


if __name__ == "__main__":
    main()
