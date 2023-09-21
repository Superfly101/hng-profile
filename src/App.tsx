import { useState } from "react";
import { StrictModeDroppable } from "./components/Droppable";
import NavBar from "./components/NavBar";
import { IMAGE, IMAGE_LIST } from "./utils/index";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";

function App() {
  const [images, setImages] = useState<IMAGE[]>(IMAGE_LIST);

  const handleDrag = (result: DropResult) => {
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination!.index, 0, reorderedItem);

    setImages(items);
  };
  return (
    <>
      <NavBar />
      <main className="px-4 py-4">
        <h1>Hello World</h1>
        <DragDropContext onDragEnd={handleDrag}>
          <StrictModeDroppable droppableId="images">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="image-list"
              >
                {IMAGE_LIST.map((image, index) => (
                  <Draggable
                    key={image.id}
                    draggableId={image.id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div>
                          <img src={image.url} alt={image.title} />
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </main>
    </>
  );
}

export default App;
