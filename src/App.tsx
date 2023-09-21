import { useState } from "react";
import { StrictModeDroppable } from "./components/Droppable";
import NavBar from "./components/NavBar";
import { IMAGE, IMAGE_LIST, TAGS } from "./utils/index";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import { useAuth0 } from "@auth0/auth0-react";

type Tags =
  | "all"
  | "food"
  | "city"
  | "animal"
  | "cars"
  | "animation"
  | "people"
  | "landscape"
  | string;

function App() {
  const [images, setImages] = useState<IMAGE[]>(IMAGE_LIST);
  const [activeTag, setActiveTag] = useState<Tags>("all");

  const { isAuthenticated } = useAuth0();

  const activeClass = "border-2 border-blue-300 text-blue-400 font-[500]";

  const handleFilter = (value: Tags) => {
    setActiveTag(value);
    if (value === "all") {
      setImages(IMAGE_LIST);
      return;
    }
    setImages(IMAGE_LIST.filter((image) => image.tag.toLowerCase() === value));
  };

  const handleDrag = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination!.index, 0, reorderedItem);

    setImages(items);
  };

  return (
    <>
      <NavBar />
      <main className="px-4 py-4">
        <section className="flex flex-col text-center gap-8 min-h-[30rem] justify-center">
          <h1 className="font-bold text-3xl">
            Rearrange the images by dragging and dropping
          </h1>
          {!isAuthenticated && (
            <p className="text-red-400 text-lg">
              <span className="font-[500]">Note: </span>You have to login to use
              drag and drop feature!
            </p>
          )}
        </section>
        <section className="flex flex-col gap-4">
          <div className="border-y-2 py-2 flex gap-4 items-center text-center">
            <div>
              <p className="font-[500]">Filter:</p>
            </div>

            <ul className="flex gap-2 flex-wrap">
              {TAGS.map((tag, index) => (
                <li
                  key={index}
                  onClick={() => handleFilter(tag)}
                  className={`cursor-pointer border border-gray-700 rounded-lg px-4 py-2 ${
                    activeTag === tag ? activeClass : null
                  } `}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {isAuthenticated ? (
            <DragDropContext onDragEnd={handleDrag}>
              <StrictModeDroppable droppableId="images">
                {(provided) => (
                  <ul
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="relative grid gap-4 grid-cols-16 md:grid-cols-18"
                  >
                    {images.map((image, index) => (
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
                            <div className="relative">
                              <img
                                src={image.url}
                                alt={image.title}
                                className="w-full m-2"
                              />
                              <span className="absolute top-3 right-1 border rounded-full bg-slate-400 px-2 text-white text-sm">
                                {image.tag}
                              </span>
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
          ) : (
            <section>
              <ul className="relative grid gap-4 grid-cols-16 md:grid-cols-18">
                {images.map((image, index) => (
                  <li key={index}>
                    <div className="relative">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full m-2"
                      />
                      <span className="absolute top-3 right-1 border rounded-full bg-slate-400 px-2 text-white text-sm">
                        {image.tag}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
