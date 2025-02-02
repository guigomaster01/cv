/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Development and Analyst","location":"Anhanguera","url":"http://anhanguera.com.br","institute":"Faculdade Anhanguera","date":"2025 - enroll","tags":["Programming","Network","Cybersecurity","Software Development","Database Management","Agile Methodologies","Problem-Solving","Entrepreneurial Mindset"]};
				const file = "C:/Users/rfrodrigues/Downloads/resume/src/pages/studies/studie1.md";
				const url = "/resume/studies/studie1";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
