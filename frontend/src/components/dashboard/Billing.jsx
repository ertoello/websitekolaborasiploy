import {bill, bill2, bill3, bill4, bill5 } from "../../assets";
import styles, { layout } from "../../pages/style";
import { FaChartLine, FaShoppingCart, FaUsers, FaStore } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { Link } from "react-router-dom";

const Billing = () => (
  <section
    id="DASHBOARD INTERAKTIF"
    className={`${layout.sectionReverse} relative overflow-hidden`}
  >
    {/* Background Gradient */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#3FA3CE] to-[#EF8B8B] opacity-10 blur-3xl -z-10"></div>

    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Bagian Kiri - Ilustrasi */}
      <div className="w-full md:w-auto overflow-x-auto">
        <div className="flex md:grid md:grid-cols-2 gap-4 p-6 w-max md:w-full">
          {/* Gambar-gambar (semua dalam 1 baris saat mobile) */}
          <img
            src={bill}
            alt="billing"
            className="w-[250px] h-auto rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:rotate-2"
          />
          <img
            src={bill2}
            alt="billing2"
            className="w-[250px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:-rotate-2"
          />
          <img
            src={bill3}
            alt="billing3"
            className="w-[200px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-1"
          />
          <img
            src={bill4}
            alt="billing4"
            className="w-[200px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:-rotate-1"
          />
          <img
            src={bill5}
            alt="billing5"
            className="w-[180px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-2"
          />
        </div>
      </div>

      {/* Bagian Kanan - Konten */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-[600px]">
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#145C75] mb-4">
          📊 DASHBOARD INTERAKTIF
        </h2>
        <p className="text-lg text-[#525252] mb-6">
          Agar pengguna dapat memahami perkembangan transformasi digital desa
          secara langsung, platform ini menyediakan dashboard interaktif yang
          menyajikan berbagai informasi penting dalam satu tampilan yang jelas
          dan mudah diakses.
        </p>
        <p className="text-lg text-[#525252] mb-6">
          Di dashboard ini, pengguna dapat melihat:
        </p>

        {/* Fitur Dashboard */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex items-center space-x-3">
            <FaChartLine className="text-[#BF5F5F] text-3xl" />
            <span className="text-[#3E3E3E] font-medium">
              Statistik perkembangan ekonomi desa
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <FaUsers className="text-[#3FA3CE] text-2xl" />
            <span className="text-[#3E3E3E] font-medium">
              Update kegiatan komunitas
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <MdOutlineBusinessCenter className="text-[#C06C6C] text-5xl" />
            <span className="text-[#3E3E3E] font-medium">
              Informasi terbaru tentang digitalisasi desa
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <FaStore className="text-[#66B2D6] text-2xl" />
            <span className="text-[#3E3E3E] font-medium">
              Pengumuman penting
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/login">
          <button className="mt-8 bg-[#BF5F5F] hover:bg-[#FF9999] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all hover:scale-105">
            🚀 Mulai Sekarang
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default Billing;
