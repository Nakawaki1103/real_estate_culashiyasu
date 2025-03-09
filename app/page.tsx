import { ArrowRight, CheckCircle, ChevronDown, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="py-4 px-6 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-cursive text-gray-800">culashiyasu</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="#service" className="text-sm font-medium hover:text-gray-600">
              サービス内容
            </Link>
            <Link href="#flow" className="text-sm font-medium hover:text-gray-600">
              ご利用の流れ
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-gray-600">
              よくある質問
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-gray-600">
              お問い合わせ
            </Link>
          </nav>
          <Link href="#contact" className="hidden md:block bg-black text-white px-4 py-2 text-sm font-medium">
            お問い合わせ
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">自分の住む部屋は</h1>
          <h1 className="text-4xl font-bold mb-2">自分で探して</h1>
          <h1 className="text-4xl font-bold mb-8">費用をお得に！</h1>

          <div className="border-2 border-black max-w-xl mx-auto">
            <div className="p-8 text-center">
              <p className="text-2xl mb-4">ポータルサイトで見つけた</p>
              <p className="text-2xl mb-8">お部屋を送信するだけ</p>

              <div className="bg-black text-white py-3 px-4 text-xl mb-10">
                <p>仲介手数料がすべて</p>
              </div>

              <div className="flex justify-center items-center gap-4">
                <div className="flex items-end">
                  <span className="text-8xl font-bold leading-none">0</span>
                  <span className="text-2xl mb-3">円</span>
                </div>
                <span className="text-4xl mx-2 mb-6">OR</span>
                <div className="flex items-end">
                  <span className="text-8xl font-bold leading-none">3</span>
                  <span className="text-2xl mb-3">万円</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="#contact"
              className="bg-black text-white px-8 py-3 text-lg font-medium inline-flex items-center"
            >
              今すぐ相談する <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">サービス内容</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">通常の不動産仲介</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <span>仲介手数料が家賃の1ヶ月分</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <span>物件探しから内見まで時間がかかる</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <span>営業担当者の都合に合わせる必要がある</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm border-2 border-black">
              <h3 className="text-xl font-bold mb-4">culashiyasuの場合</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-2 mt-0.5" />
                  <span>仲介手数料が0円または3万円のみ</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-2 mt-0.5" />
                  <span>自分で見つけた物件をそのまま契約可能</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-black mr-2 mt-0.5" />
                  <span>オンラインで手続きが完結</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              culashiyasuなら、自分で見つけた物件をそのまま契約できるので
              <br />
              余計な仲介手数料を支払う必要がありません。
            </p>
            <Link href="#flow" className="text-black font-medium inline-flex items-center">
              詳しい利用の流れを見る <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">ご利用の流れ</h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">物件を見つける</h3>
                <p>SUUMOやHOME'S、アットホームなどのポータルサイトで気に入った物件を見つけます。</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">物件情報を送信</h3>
                <p>見つけた物件の情報（URL、物件名、住所など）をculashiyasuに送信します。</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">内見の調整</h3>
                <p>物件の内見希望日時をお知らせいただければ、管理会社と調整します。</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
                  4
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">契約手続き</h3>
                <p>契約に必要な書類をオンラインで提出し、仲介手数料0円または3万円のみで契約完了です。</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="bg-black text-white px-8 py-3 text-lg font-medium inline-flex items-center"
            >
              今すぐ相談する <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">なぜ仲介手数料が0円または3万円なのですか？</h3>
              <p>
                通常の不動産仲介では、お客様の物件探しから内見、契約までのサポートに多くの時間とコストがかかります。culashiyasuでは、お客様自身が物件を見つけることで、このコストを大幅に削減し、その分を手数料の引き下げに反映しています。
              </p>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">0円と3万円の違いは何ですか？</h3>
              <p>
                物件によって管理会社からの仲介手数料が異なります。仲介手数料が無料の物件の場合は0円、仲介手数料が発生する物件の場合は一律3万円となります。物件情報をお送りいただいた際に、どちらに該当するかをお知らせします。
              </p>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">どんな物件でも対応可能ですか？</h3>
              <p>
                基本的には主要なポータルサイトに掲載されている賃貸物件であれば対応可能です。ただし、一部の管理会社や物件オーナーによっては対応できない場合もございますので、まずはお問い合わせください。
              </p>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">内見はどのように行いますか？</h3>
              <p>
                内見は通常通り行うことができます。ご希望の日時をお知らせいただければ、管理会社と調整し、内見のアレンジをいたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">お気軽にご連絡ください</h3>
              <p className="mb-6">物件情報の送信や、サービスに関するご質問など、お気軽にお問い合わせください。</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">電話番号</p>
                    <p>03-1234-5678（平日 10:00-18:00）</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">メールアドレス</p>
                    <p>info@culashiyasu.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">所在地</p>
                    <p>〒150-0043 東京都渋谷区道玄坂1-1-1 渋谷ビル5F</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6">
              <h3 className="text-xl font-bold mb-4">お問い合わせフォーム</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    お名前
                  </label>
                  <input type="text" id="name" className="w-full border border-gray-300 p-2" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    メールアドレス
                  </label>
                  <input type="email" id="email" className="w-full border border-gray-300 p-2" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    電話番号
                  </label>
                  <input type="tel" id="phone" className="w-full border border-gray-300 p-2" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    お問い合わせ内容
                  </label>
                  <textarea id="message" rows={4} className="w-full border border-gray-300 p-2"></textarea>
                </div>

                <button type="submit" className="bg-black text-white px-6 py-2 font-medium">
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-cursive mb-4">culashiyasu</h3>
              <p className="text-gray-400">自分で見つけた物件をお得に契約できる新しい不動産サービス</p>
            </div>

            <div>
              <h4 className="font-medium mb-4">リンク</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#service" className="text-gray-400 hover:text-white">
                    サービス内容
                  </Link>
                </li>
                <li>
                  <Link href="#flow" className="text-gray-400 hover:text-white">
                    ご利用の流れ
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-400 hover:text-white">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li>株式会社culashiyasu</li>
                <li>〒150-0043 東京都渋谷区道玄坂1-1-1</li>
                <li>宅地建物取引業免許 東京都知事 (1) 第12345号</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 culashiyasu All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

