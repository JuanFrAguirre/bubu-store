const router = require("express").Router();
const { send } = require("express/lib/response");
const path = require("path");

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/productos", (req, res) => {
	res.render("productos");
});

router.get("/productos/:id", (req, res) => {
	let productId = req.params.id;
	// if (String(Number(productId)) === 'NaN' ) {
	if (isNaN(Number(productId))) {
		res.render('404')
	}

	res.render("producto", {
		nombre: "Virginia",
		productId: productId,
	});
});

router.get("/contacto", (req, res) => {
	res.render("contacto");
});

module.exports = router;
