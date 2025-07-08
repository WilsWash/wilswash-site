---
layout: layout.njk
title: Quote
---

<div class="form-wrapper">
    <form name="quote-form" method="POST" data-netlify="true">
        <!-- REMOVE THIS LINE WHILE TESTING -->
        <input type="hidden" name="_redirect" value="https://wilswash.com/thanks/">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required><br><br>
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required><br><br>
        <label>Services Needed:</label>
        <div class="checkbox-group">
            <input type="checkbox" id="house-wash" name="services" value="house-wash">
            <label for="house-wash">House Wash</label>
            <input type="checkbox" id="driveway-cleaning" name="services" value="driveway-cleaning">
            <label for="driveway-cleaning">Driveway Cleaning</label>
            <input type="checkbox" id="walkway-cleaning" name="services" value="walkway-cleaning">
            <label for="walkway-cleaning">Walkway Cleaning</label>
            <input type="checkbox" id="dumpster-bin" name="services" value="dumpster-bin">
            <label for="dumpster-bin">Dumpster Bin Cleaning</label>
            <input type="checkbox" id="other" name="services" value="other">
            <label for="other">Other</label>
        </div><br><br>
        <label for="details">Details:</label>
        <textarea id="details" name="details" rows="4"></textarea><br><br>
        <button type="submit">Submit</button>
    </form>
</div>