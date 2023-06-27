import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/favicon.png" />
				</Head>
				<body className="bg-primary">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
