
const menuBtn = document.querySelector(".open");
const xmarkBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

// Open sidebar when menu button is clicked
menuBtn.addEventListener("click", () => {
	sidebar.classList.add("active");
	console.log("Sidebar opened");
});

// Close sidebar when close button is clicked
xmarkBtn.addEventListener("click", () => {
	sidebar.classList.remove("active");
	console.log("Sidebar closed via button");
});

// Close the sidebar when clicking outside of it
document.addEventListener("click", (e) => {
		//already menu button in the document layer, and we set whenever touch doucument layer sidebar will be closed, so when we touch menu button (already in document layer) it colsed the side bar immediately so prevent this action we put the condition below
	if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
		sidebar.classList.remove("active");
		console.log("Sidebar closed via outside click");
	}
});

// Prevent clicks inside the sidebar from closing it
sidebar.addEventListener("click", (e) => {
	e.stopPropagation();
});
