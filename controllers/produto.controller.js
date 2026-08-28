const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/produto.controller");

router.get("/:id", produtoController.buscarPorId);
router.get("/:id", produtoController.buscarEstoqueFilial);
router.get("/", produtoController.listarProdutos);
router.post("/", produtoController.cadastrar);
router.put("/:id", produtoController.atualizar);
router.delete("/:id", produtoController.excluir);

module.exports = router;