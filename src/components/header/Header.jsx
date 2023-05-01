import Link from "next/link";
import Image from "next/image";

export const Header = () => {
     return (
          <header>
               <div>
                    <div className="topNav">
                         <Image
                              src={`/images/logo_black.png`}
                              width={50}
                              height={50}
                              alt="logo"
                         />
                         <nav>
                              <ul>
                                   <li>
                                        <Link href="/" passHref>
                                             Home
                                        </Link>
                                   </li>
                                   <li>
                                        <Link href="/about-us" passHref>
                                             About
                                        </Link>
                                   </li>
                                   <li>
                                        <Link href="/events" passHref>
                                             Events
                                        </Link>
                                   </li>
                              </ul>
                         </nav>
                    </div>
                    <p className="title">Minima dolores amet nemo! </p>
               </div>
          </header>
     );
};
