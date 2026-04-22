package com.example.automotivo.controller;

import com.example.automotivo.model.Veiculo;
import com.example.automotivo.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoRepository repository;

    @PostMapping
    public Veiculo adicionar(@RequestBody Veiculo v) {
        return repository.save(v);
    }

    @GetMapping
    public List<Veiculo> listar() {
        return repository.findAll();
    }

    @GetMapping("/filtro")
    public List<Veiculo> filtrar(@RequestParam String marca) {
        return repository.findByMarcaContainingIgnoreCase(marca);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Long id) {
        repository.deleteById(id);
    }
}