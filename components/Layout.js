import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="boxed-layout">
      <div className="boxed-container">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
