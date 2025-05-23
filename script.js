 function previewPDF(pdfUrl) {
  const viewer = document.getElementById('pdfViewer');
  const container = document.getElementById('pdfPreviewContainer');

  viewer.src = pdfUrl;
  container.style.display = 'block';
}

function closePreview() {
  const viewer = document.getElementById('pdfViewer');
  const container = document.getElementById('pdfPreviewContainer');

  container.style.display = 'none';
  viewer.src = '';
}

// Live Search Feature
const searchBar = document.getElementById("searchBar");
const pdfItems = document.querySelectorAll(".pdf-item");

searchBar.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase().trim();
  pdfItems.forEach((item) => {
    const category = item.getAttribute("data-category").toLowerCase();
    if (category.includes(searchTerm)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});