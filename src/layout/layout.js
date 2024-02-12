"use cleint";

export default function Layout({ type, children, className }) {
    switch (type) {
        case "section":
            return <section className={`bg-white flex flex-wrap justify-center w-full ${className}`} >
                <div className="flex max-w-standard px-4 w-full flex-wrap">
                    {children}
                </div>
            </section >
    }

}
