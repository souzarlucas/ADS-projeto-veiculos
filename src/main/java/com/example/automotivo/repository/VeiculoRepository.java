package com.example.automotivo.repository;

import com.example.automotivo.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
    List<Veiculo> findByMarcaContainingIgnoreCase(String marca);
}