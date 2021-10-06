package pe.popehiflo.todolist.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pe.popehiflo.todolist.model.Tarea;

@Repository
public interface TareaRepository  extends MongoRepository<Tarea, String> {
}
