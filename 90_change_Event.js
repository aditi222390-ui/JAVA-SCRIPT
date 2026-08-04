<select id="city">
    <option>Pune</option>
    <option>Mumbai</option>
</select>

<script>
const city = document.getElementById("city");

city.addEventListener("change", function () {
    console.log(city.value);
});
</script>