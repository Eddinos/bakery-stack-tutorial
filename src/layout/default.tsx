import { Child, JSXNode } from "hono/jsx";

export default function ({ children }: { children: Child}) {
    return (
        <html>
            <head>
                <title>Let's bake some buns !</title>
                <link rel="stylesheet" href="/static/global.css" />
                <script src="https://unpkg.com/htmx.org@2.0.1"></script>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}