import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
     return (
          <>
               <div className="events-page">
                    {data.map((ev) => (
                         <Link href={`/events/${ev.id}`} key={ev.id} passHref>
                              <div className="card">
                                   <Image
                                        src={ev.image}
                                        alt={ev.title}
                                        width={300}
                                        height={200}
                                   />
                                   <h2>{ev.title}</h2>
                              </div>
                         </Link>
                    ))}
               </div>
          </>
     );
};

export default AllEvents;
