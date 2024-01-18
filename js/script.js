const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

function tampilData() {
  $(".body-alquran").html("");
  $.getJSON("https://equran.id/api/v2/surat", function (data) {
    let api = data.data;
    // console.log(api);
    $.each(api, function (i, data) {
      $(".body-alquran").append(
        `<div class="card" data-id="${data.nomor}">
        <div class="box-number" id="${data.namaLatin}">
        <div class="number">
        <span>${data.nomor}</span>
        </div>
        </div>
        <div class="name">
        <span class="name-surah">${data.namaLatin}</span>
        <span class="arti-surah">${data.arti}</span>
        </div>
        <div class="ayat">
        <span class="name-ayat">${data.nama}</span>
        <span class="jumlah-ayat">${data.jumlahAyat} Ayat</span>
        </div>
        </div>`
      );
    });
  });
}

$(".button-search").on("click", function () {
  $(".body-alquran").html("");
  let input = $("#searchInput").val().toLowerCase();
  $.getJSON("https://equran.id/api/v2/surat", function (data) {
    let cek = data.data;
    let found = false;
    $.each(cek, function (i, data) {
      if (input == data.namaLatin.toLowerCase()) {
        let cek = data.nomor;
        console.log(cek);
        $(".body-alquran").html("");
        $(".body-alquran").append(
          `<div class="card" data-id="${cek}">
            <div class="box-number"  id="${data.namaLatin}">
            <div class="number">
            <span>${data.nomor}</span>
            </div>
            </div>
            <div class="name">
            <span class="name-surah">${data.namaLatin}</span>
            <span class="arti-surah">${data.arti}</span>
            </div>
            <div class="ayat">
            <span class="name-ayat">${data.nama}</span>
            <span class="jumlah-ayat">${data.jumlahAyat} Ayat</span>
            </div>
            </div>`
        );
        found = true;
        // return false;
      }
      if (!found) {
        $(".body-alquran").html("");
        $(".body-alquran").append(`
        <div style="width:100%; display:flex; flex-direction: column; align-items:center;">
        <h2 class="notfound" style="color:#fff;">Nama Surat <span style="color:red;">"${input}"</span> Tidak di Temukan !</h2> 
        <a href="#read" onclick="tampilData()"><button style="padding:8px 15px;  font-weight: bold; font-size:15px; margin-top:20px;">Lihat Semua Surat</button></a>
        </div>
        `);
      }
    });
  });
});

tampilData();

function searchSurah() {}

$(document).on("click", ".card", function () {
  let id = $(this).data("id");
  localStorage.setItem("id", id);
  window.location.href = "tampil.html";
});
