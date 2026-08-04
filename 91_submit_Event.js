<form id="form">
    <input type="text">
    <button>Submit</button>
</form>

<script>
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form Submitted");
});
</script>