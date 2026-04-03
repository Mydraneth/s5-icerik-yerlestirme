// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

document.getElementById("logo-img").src = "./images/logo.webp";

let navLinks = document.querySelectorAll("nav a");
for (let i = 0; i<navLinks.length; i++) {
	navLinks[i].classList.add("italic");
}
navLinks[0].textContent = "Hizmetler";
navLinks[1].textContent = "Portföy";
navLinks[2].textContent = "Ekip";
navLinks[3].textContent = "İçgörüler";
navLinks[4].textContent = "Referanslar";

document.querySelector(".cta-text h1").textContent = "Dijital Pazarlama Uzmanı";
document.querySelector(".cta-text button").textContent = "Ücretsiz Analiz";
document.getElementById("cta-img").src = "./images/cta-img.webp";
document.getElementById("middle-img").src= "./images/graphs.webp";
document.querySelector(".main-content .top-content .text-content:nth-child(1) h4").textContent = "Çalışma Prensiplerimiz";
document.querySelector(".main-content .top-content .text-content:nth-child(1) p").textContent = "Her projede veri odaklı yaklaşımı benimsiyor, ölçülebilir sonuçları hedefliyoruz. Müşterilerimizin sektörlerini derinlemesine analiz ederek, hedef kitlelerinin davranışlarını anlıyor ve bu doğrultuda stratejiler geliştiriyoruz. Şeffaf raporlama sistemimizle tüm kampanya performanslarını detaylı şekilde paylaşıyor, sürekli optimizasyon ile ROI'nizi maksimize ediyoruz.";
document.querySelector(".main-content .top-content .text-content:nth-child(2) h4").textContent = "Hizmet Kapsamımız";
document.querySelector(".main-content .top-content .text-content:nth-child(2) p").textContent = "Google Ads, Facebook Ads, Instagram Ads kampanyalarından SEO ve içerik pazarlamaya, e-ticaret optimizasyonundan sosyal medya yönetimine kadar dijital pazarlamanın tüm alanlarında hizmet veriyoruz. 360 derece dijital pazarlama yaklaşımımızla markanızın online görünürlüğünü artırıyor ve satışlarınızı büyütüyoruz.";
document.querySelector(".bottom-content .text-content:nth-child(1)  h4").textContent = "Markanızı di̇ji̇tal dünyada başarıya taşıyoruz";
document.querySelector(".bottom-content .text-content:nth-child(1)  p").textContent = "5 yılı aşkın tecrübemizle 500'den fazla projeyi başarıyla tamamladık. Küçük işletmelerden büyük şirketlere kadar her ölçekte müşterimize özel stratejiler geliştiriyor, dijital pazarlama hedeflerine ulaşmalarını sağlıyoruz.";
document.querySelector(".bottom-content .text-content:nth-child(2) h4").textContent = "Veri odaklı yaklaşım - ölçülebilir sonuçlar";
document.querySelector(".bottom-content .text-content:nth-child(2) p").textContent = "Her kampanyamızı detaylı analiz ve araştırma ile başlatıyor, sürekli A/B test yaparak optimum performansı yakalıyoruz. Gerçek zamanlı raporlama sistemimizle kampanya performanslarını şeffaf şekilde paylaşıyor, hedeflenen KPI'ları tutturmak için sürekli iyileştirmeler yapıyoruz."; 
document.querySelector(".bottom-content .text-content:nth-child(3) h4").textContent = "Sizin için özel stratejiler geliştiriyoruz";
document.querySelector(".bottom-content .text-content:nth-child(3) p").textContent = "Her sektörün kendine özgü dinamikleri olduğunu biliyor, bu doğrultuda size özel pazarlama stratejileri geliştiriyoruz. Hedef kitlenizi analiz ediyor, rakip analizi yapıyor ve markanızın dijital dünyada öne çıkması için yaratıcı çözümler sunuyoruz. Uzun vadeli ortaklık anlayışımızla markanızın büyümesine katkı sağlıyoruz.";
document.querySelector(".contact h4").textContent = "İletişim";

document.querySelector(".contact p:nth-child(2)").textContent = "Maslak Mahallesi Büyükdere Cad. No:255 Sarıyer İstanbul, Türkiye";
document.querySelector(".contact p:nth-child(3)").textContent = "+90 (212) 789-4561";
document.querySelector(".contact p:nth-child(4)").textContent = "info@dijitalpazarlamaajansı.com";
document.querySelector("footer a").textContent = "Copyright Dijital Pazarlama Ajansı 2025";
document.querySelector("footer a").classList.add("bold");