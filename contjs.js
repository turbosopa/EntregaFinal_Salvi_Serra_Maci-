window.onload = function () {
    let img = document.querySelectorAll(".imcomp");
    img.forEach(function (ima) {
        ima.addEventListener('click', function () {
            if (ima.src.endsWith("imeig/Lali.jpeg")) {
                ima.src = "imeig/GuaLali.jpg";
                alert("L'últim guanyador va ser el Barça!");

            }
            else if (ima.src.endsWith("imeig/GuaLali.jpg")) {
                ima.src = "imeig/Lali.jpeg";
            }
            else if (ima.src.endsWith("imeig/Prem.png")) {
                ima.src = "imeig/GuaPrem.jpg";
                alert("L'últim guanyador va ser el Manchester City!");

            }
            else if (ima.src.endsWith("imeig/GuaPrem.jpg")) {
                ima.src = "imeig/Prem.png";
            }
            else if (ima.src.endsWith("imeig/bundes.webp")) {
                ima.src = "imeig/GuaBun.png";
                alert("L'últim guanyador va ser el Bayern!");

            }
            else if (ima.src.endsWith("imeig/GuaBun.png")) {
                ima.src = "imeig/bundes.webp";
            }
            else if (ima.src.endsWith("imeig/serie.jpg")) {
                ima.src = "imeig/GuaSer.jpg";
                alert("L'últim guanyador va ser el Napoli!");

            }
            else if (ima.src.endsWith("imeig/GuaSer.jpg")) {
                ima.src = "imeig/serie.jpg";
            }
            else if (ima.src.endsWith("imeig/Ered.jpg")) {
                ima.src = "imeig/GuaEre.avif";
                alert("L'últim guanyador va ser el Feyenoord!");

            }
            else if (ima.src.endsWith("imeig/GuaEre.avif")) {
                ima.src = "imeig/Ered.jpg";
            }
            else if (ima.src.endsWith("imeig/ligu1.jpg")) {
                ima.src = "imeig/GuaLig.webp";
                alert("L'últim guanyador va ser el PSG!");

            }
            else if (ima.src.endsWith("imeig/GuaLig.webp")) {
                ima.src = "imeig/ligu1.jpg";
            }
            else if (ima.src.endsWith("imeig/Rei.jpeg")) {
                ima.src = "imeig/GuaRei.webp";
                alert("L'últim guanyador va ser el Real Madrid!");

            }
            else if (ima.src.endsWith("imeig/GuaRei.webp")) {
                ima.src = "imeig/Rei.jpeg";
            }
            else if (ima.src.endsWith("imeig/engli.jpg")) {
                ima.src = "imeig/GuaEng.jpg";
                alert("L'últim guanyador va ser el Manchester United!");

            }
            else if (ima.src.endsWith("imeig/GuaEng.jpg")) {
                ima.src = "imeig/engli.jpg";
            }
            else if (ima.src.endsWith("imeig/dfbpok.jpg")) {
                ima.src = "imeig/GuaDfb.webp";
                alert("L'últim guanyador va ser el Leipzig!");

            }
            else if (ima.src.endsWith("imeig/GuaDfb.webp")) {
                ima.src = "imeig/dfbpok.jpg";
            }
            else if (ima.src.endsWith("imeig/coppa.webp")) {
                ima.src = "imeig/GuaCop.avif";
                alert("L'últim guanyador va ser el Inter Milan!");

            }
            else if (ima.src.endsWith("imeig/GuaCop.avif")) {
                ima.src = "imeig/coppa.webp";
            }
            else if (ima.src.endsWith("imeig/KNVB.jpg")) {
                ima.src = "imeig/GuaKnv.jpg";
                alert("L'últim guanyador va ser el Feyenoord!");

            }
            else if (ima.src.endsWith("imeig/GuaKnv.jpg")) {
                ima.src = "imeig/KNVB.jpg";
            }
            else if (ima.src.endsWith("imeig/coupe.jpg")) {
                ima.src = "imeig/GuaFra.jpg";
                alert("L'últim guanyador va ser el PSG!");

            }
            else if (ima.src.endsWith("imeig/GuaFra.jpg")) {
                ima.src = "imeig/coupe.jpg";
            }
            else if (ima.src.endsWith("imeig/super.jpg")) {
                ima.src = "imeig/GuaSup.jpg";
                alert("L'últim guanyador va ser el Barça!");

            }
            else if (ima.src.endsWith("imeig/GuaSup.jpg")) {
                ima.src = "imeig/super.jpg";
            }
            else if (ima.src.endsWith("imeig/Cham.jpeg")) {
                ima.src = "imeig/GuaCha.webp";
                alert("L'últim guanyador va ser el Manchester City!");

            }
            else if (ima.src.endsWith("imeig/GuaCha.webp")) {
                ima.src = "imeig/Cham.jpeg";
            }
            else if (ima.src.endsWith("imeig/Euroli.jpeg")) {
                ima.src = "imeig/GuaEuroli.jpg";
                alert("El penultim guanyador va ser el Eintracht Frankfurt!");

            }
            else if (ima.src.endsWith("imeig/GuaEuroli.jpg")) {
                ima.src = "imeig/Euroli.jpeg";
            }
            else if (ima.src.endsWith("imeig/Confe.jpeg")) {
                ima.src = "imeig/GuaCon.webp";
                alert("L'últim guanyador va ser el West Ham!");

            }
            else if (ima.src.endsWith("imeig/GuaCon.webp")) {
                ima.src = "imeig/Confe.jpeg";
            }
            else if (ima.src.endsWith("imeig/Supercop.webp")) {
                ima.src = "imeig/GuaSeur.jpg";
                alert("L'últim guanyador va ser el Manchester City!");

            }
            else if (ima.src.endsWith("imeig/GuaSeur.jpg")) {
                ima.src = "imeig/Supercop.webp";
            }
            else if (ima.src.endsWith("imeig/copalib.jpg")) {
                ima.src = "imeig/GuaLib.png";
                alert("L'ultim guanyador va ser el Fluminense!");

            }
            else if (ima.src.endsWith("imeig/GuaLib.png")) {
                ima.src = "imeig/copalib.jpg";
            }
            else if (ima.src.endsWith("imeig/clubes.webp")) {
                ima.src = "imeig/GuaClu.jpg";
                alert("L'ultim guanyador va ser el Manchester City!");

            }
            else if (ima.src.endsWith("imeig/GuaClu.jpg")) {
                ima.src = "imeig/clubes.webp";
            }
            else if (ima.src.endsWith("imeig/mundial.jpg")) {
                ima.src = "imeig/GuaMun.jpeg";
                alert("L'ultim guanyador va ser Argentina!");

            }
            else if (ima.src.endsWith("imeig/GuaMun.jpeg")) {
                ima.src = "imeig/mundial.jpg";
            }
            else if (ima.src.endsWith("imeig/Eurocopa.png")) {
                ima.src = "imeig/GuaEuroco.jpg";
                alert("L'ultim guanyador va ser Italia!");

            }
            else if (ima.src.endsWith("imeig/GuaEuroco.jpg")) {
                ima.src = "imeig/Eurocopa.png";
            }
            else if (ima.src.endsWith("imeig/CopaAmerica.avif")) {
                ima.src = "imeig/GuaAme.jpg";
                alert("L'ultim guanyador va ser Argentina!");

            }
            else if (ima.src.endsWith("imeig/GuaAme.jpg")) {
                ima.src = "imeig/CopaAmerica.avif";
            }
            else if (ima.src.endsWith("imeig/finalissima.jpg")) {
                ima.src = "imeig/GuaFin.jpg";
                alert("L'ultim guanyador va ser Argentina!");

            }
            else if (ima.src.endsWith("imeig/GuaFin.jpg")) {
                ima.src = "imeig/finalissima.jpg";
            }
        })
    })
}