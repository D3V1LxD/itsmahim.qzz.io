import Link from 'next/link';

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-primary">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/#blog" 
            className="inline-flex items-center text-accent hover:text-textPrimary transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="glass p-8 md:p-12 rounded-2xl">
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-textSecondary">
                <span>October 2024</span>
                <span>•</span>
                <span>15 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                General Arrangement Plan
              </h1>
              <p className="text-xl text-textSecondary">
                A comprehensive guide to understanding ship layout design and crew accommodation planning
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-accent mb-4">Introduction</h2>
              <p className="text-textSecondary leading-relaxed mb-6">
                A General Arrangement Plan (GAP) is a technical drawing that shows the layout of a vessel or a structure. The purpose of a GAP is to provide a detailed and accurate representation of the design of a vessel or structure, including the spatial arrangement of equipment, machinery, systems, and spaces. A GAP is an essential document used in the construction and operation of any vessel or structure, as it provides a clear visual representation of the design and helps to ensure that all components fit together correctly.
              </p>

              <h2 className="text-2xl font-bold text-accent mb-4 mt-8">Types of Ships and Their General Arrangement Plan</h2>
              <p className="text-textSecondary leading-relaxed mb-6">
                Different types of ships have different General Arrangement Plans based on their intended use and function. The GAP for each type of ship is designed to accommodate the specific requirements of the crew and passengers, as well as the cargo or equipment being transported.
              </p>

              <div className="space-y-6">
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">1. Bulk Carriers</h3>
                  <p className="text-textSecondary leading-relaxed">
                    A bulk carrier is a type of ship that transports large quantities of unpackaged bulk cargo such as coal, ore, and grain. The GAP for a bulk carrier typically includes several cargo holds and a large open deck area for loading and unloading cargo. The crew accommodation is usually located towards the aft of the vessel, and the captain&apos;s cabin is typically located on the bridge deck.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">2. Container Ships</h3>
                  <p className="text-textSecondary leading-relaxed">
                    A container ship is a type of ship that carries cargo in containers. The GAP for a container ship typically includes a large open deck area for container storage, and the crew accommodation is usually located towards the aft of the vessel. The captain&apos;s cabin is typically located on the bridge deck.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">3. Tankers</h3>
                  <p className="text-textSecondary leading-relaxed">
                    A tanker is a type of ship that carries liquid cargo such as oil, gas, and chemicals. The GAP for a tanker typically includes several cargo tanks and a large open deck area for loading and unloading cargo. The crew accommodation is usually located towards the aft of the vessel, and the captain&apos;s cabin is typically located on the bridge deck.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">4. Passenger Ships</h3>
                  <p className="text-textSecondary leading-relaxed">
                    A passenger ship is a type of ship that is designed to transport passengers. The GAP for a passenger ship typically includes several decks with cabins, dining areas, and entertainment areas. The crew accommodation is usually located towards the aft of the vessel, and the captain&apos;s cabin is typically located on the bridge deck.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-accent mb-4 mt-8">Crew Accommodation</h2>
              <p className="text-textSecondary leading-relaxed mb-6">
                The crew accommodation on a ship is designed to provide a comfortable living space for the crew members who are typically at sea for long periods. The size and layout of the crew accommodation depend on the size and type of the vessel, as well as the number of crew members.
              </p>
              <p className="text-textSecondary leading-relaxed mb-6">
                The crew accommodation typically includes cabins, mess rooms, recreation areas, and a medical center. The cabins are designed to accommodate one or two crew members, and they usually include a bunk bed, a desk, and a wardrobe. The size and layout of the cabin depend on the rank of the crew member.
              </p>

              <h3 className="text-xl font-bold text-accent mb-3 mt-6">Captain&apos;s Cabin</h3>
              <p className="text-textSecondary leading-relaxed mb-4">
                The captain&apos;s cabin on a ship is typically the most luxurious and spacious cabin onboard. It is reserved for the captain and a select few other senior officers who are allowed access to the room. The cabin is designed to provide the captain with a comfortable living space and a private retreat.
              </p>
              <p className="text-textSecondary leading-relaxed mb-6">
                The size of the captain&apos;s cabin varies based on the size and type of the ship. On smaller vessels, it may be around 15-20 square meters, while on larger ships, it may be up to 30-40 square meters. The cabin typically includes a double bed, a desk, a wardrobe, a private bathroom, and comfortable seating area.
              </p>

              <h3 className="text-xl font-bold text-accent mb-3 mt-6">Officers&apos; Cabins</h3>
              <p className="text-textSecondary leading-relaxed mb-4">
                The officer&apos;s cabins are typically located towards the aft of the ship and are reserved for the ship&apos;s officers. The size can vary depending on the rank of the officer, with higher-ranking officers being assigned larger cabins.
              </p>
              <p className="text-textSecondary leading-relaxed mb-6">
                For example, the cabin for the ship&apos;s chief officer may be around 15-20 square meters, while the cabins for the second and third officers may be around 10-15 square meters. The cabins typically include a single or double bed, a desk, a wardrobe, and a private bathroom.
              </p>

              <h3 className="text-xl font-bold text-accent mb-3 mt-6">Crew Cabins</h3>
              <p className="text-textSecondary leading-relaxed mb-6">
                The crew cabins are typically located towards the bow of the ship and are smaller than the officer&apos;s cabins. The size of the cabin for an able seaman or ordinary seaman may be around 4-6 square meters, while the cabins for the bosun or chief cook may be around 8-10 square meters. The cabins usually include bunk beds, lockers or wardrobes, and a shared bathroom.
              </p>

              <h2 className="text-2xl font-bold text-accent mb-4 mt-8">Important Spaces on a Ship</h2>
              
              <div className="space-y-6 mt-6">
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">Mess Room</h3>
                  <p className="text-textSecondary leading-relaxed">
                    The mess room is a communal area where crew members gather to eat and socialize. All crew members, including officers and ratings, are allowed to access the mess room. It includes tables, chairs, and often entertainment options like television. The galley may be attached where meals are prepared and served.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">Recreation Room</h3>
                  <p className="text-textSecondary leading-relaxed">
                    The recreation room is designed for crew members to relax and engage in recreational activities during their downtime. It may include comfortable seating, gaming consoles, exercise equipment, televisions, and board games. Some ships have a gym or exercise area within the recreation room.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">Bridge</h3>
                  <p className="text-textSecondary leading-relaxed">
                    The bridge is the command center of the ship where navigation, communication, and safety are controlled. It includes helm station, navigation equipment (radar, GPS), communication equipment (radios, satellite phones), safety equipment, and workspaces for the captain and officers.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">Engine Room</h3>
                  <p className="text-textSecondary leading-relaxed">
                    The engine room houses the ship&apos;s engines and mechanical systems. It contains the main engine, auxiliary engines, pumps, heat exchangers, electrical systems, and control systems. The engine room must have adequate ventilation and cooling to ensure safe operation.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">Galley</h3>
                  <p className="text-textSecondary leading-relaxed">
                    The galley is the onboard kitchen where meals are prepared. It contains cooking equipment (ovens, stoves, grills), refrigeration, food storage, and dishwashing areas. The galley must meet safety standards with adequate ventilation and fire suppression systems.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">Sickbay</h3>
                  <p className="text-textSecondary leading-relaxed">
                    The sickbay is the onboard medical facility staffed by qualified medical officers. It includes a treatment area, small ward for patient observation, emergency procedure area, medical equipment (defibrillator, oxygen, ECG), and a pharmacy. It may also have a quarantine area for contagious illnesses.
                  </p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-accent mb-3">Cargo Hold</h3>
                  <p className="text-textSecondary leading-relaxed">
                    The cargo hold is designed for transportation of goods, located below deck and accessed by cargo hatches. It is divided into compartments separated by bulkheads and equipped with ventilation and fire suppression systems. It can carry dry bulk cargo, liquid cargo, containerized cargo, or specialized cargo like vehicles and machinery.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-accent mb-4 mt-8">Conclusion</h2>
              <p className="text-textSecondary leading-relaxed mb-6">
                A General Arrangement Plan is a crucial document used in the design, construction, and operation of ships. The GAP provides a detailed and accurate representation of the layout of the vessel, including the crew accommodation, cargo space, machinery, and systems. Understanding the various components of a GAP is essential for anyone involved in naval architecture and ship design.
              </p>

              <h3 className="text-xl font-bold text-accent mb-3 mt-6">Recommended Reference Books</h3>
              <ul className="list-disc list-inside space-y-2 text-textSecondary">
                <li>&quot;Ship Construction Sketches and Notes&quot; by John Campbell</li>
                <li>&quot;Marine Structural Design&quot; by Yong Bai and Wei-Chou Virgil Ping</li>
                <li>&quot;Marine Engineering: Principles and Practice&quot; by M.A. Meguid and T. E. Meguid</li>
                <li>&quot;Ship Design and Construction&quot; by David J. Eyres</li>
                <li>&quot;Principles of Naval Architecture&quot; by E. C. Tupper</li>
              </ul>
            </div>

            {/* Author Info */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
                  👨‍🔬
                </div>
                <div>
                  <h4 className="font-bold text-textPrimary">Md. Mahim Khan</h4>
                  <p className="text-textSecondary text-sm">
                    Naval Architecture & Offshore Engineering Student
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
