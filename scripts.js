const destinations = [
    {
        id: 'mangaluru',
        name: 'Mangaluru',
        image: 'assets/destinations/mangaluru.png',
        color: '#FF6B6B',
        famousPlaces: [
            {
                name: 'Panambur Beach',
                image: 'assets/places/panambur_beach.jpg',
                description: 'A clean and popular beach known for its golden sands and water sports.'
            },
            {
                name: 'Tannirbhavi Beach',
                image: 'https://www.hlimg.com/images/things2do/738X538/28mn_mnrmm1_Bea_29_2176132g_1508082724t.jpg',
                description: 'A peaceful beach perfect for relaxation, reachable by a scenic ferry.'
            },
            {
                name: 'Kadri Temple',
                image: 'assets/places/kadri_temple.jpg',
                description: 'An ancient Hindu temple with unique architecture and historical significance.'
            },
            {
                name: 'St. Aloysius Chapel',
                image: 'https://aroundmangalore.com/wp-content/uploads/2015/08/Aloysius-Chapel-1.png',
                description: 'Famous for its exquisite ceiling paintings that rival the Sistine Chapel.'
            }
        ]
    },
    {
        id: 'mysuru',
        name: 'Mysuru – North & South',
        image: 'assets/destinations/mysuru.png',
        color: '#FFD93D',
        famousPlaces: [
            {
                name: 'Mysore Palace',
                image: 'https://images.unsplash.com/photo-1588665805566-22442468305c?auto=format&fit=crop&q=80&w=800',
                description: 'One of the most magnificent palaces in India, a true architectural marvel.'
            },
            {
                name: 'Chamundi Hills',
                image: 'https://photos.wikimapia.org/p/00/04/45/95/57_full.jpg',
                description: 'Home to the Chamundeshwari Temple with panoramic views of the city.'
            },
            {
                name: 'Brindavan Gardens',
                image: 'https://c8.alamy.com/comp/BY24T5/illuminated-fountains-at-brindavan-gardens-in-mysore-india-BY24T5.jpg',
                description: 'Beautifully landscaped gardens famous for their musical fountain shows.'
            },
            {
                name: 'Zoo',
                image: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg',
                description: 'Sri Chamarajendra Zoological Gardens, one of the oldest and best in India.'
            }
        ]
    },
    {
        id: 'mysuru_east_west',
        name: 'Mysuru – East & West',
        image: 'https://www.itslife.in/wp-content/gallery/travel/travel-mysore-heritage-blgs-clock-tower-2.jpg',
        color: '#F59E0B',
        famousPlaces: [
            {
                name: 'Dodda Gadiyara (Clock Tower)',
                image: 'https://www.itslife.in/wp-content/gallery/travel/travel-mysore-heritage-blgs-clock-tower-2.jpg',
                description: 'Iconic 75-foot silver-jubilee clock tower built in 1927 featuring Indo-Saracenic architecture.'
            },
            {
                name: 'Jayalakshmi Vilas Mansion',
                image: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2024/03/Palace-Museum-1068x801.jpg',
                description: 'Magnificent heritage mansion located inside Manasagangotri campus.'
            },
            {
                name: 'Garuda Mall Mysuru',
                image: 'https://static-blog.treebo.com/wp-content/uploads/2018/04/Garuda-Mall-Mysore-1-1.jpg',
                description: 'Popular shopping mall near city bus stand with retail, dining and entertainment.'
            },
            {
                name: 'Kukkarahalli Nature Trail',
                image: 'https://live.staticflickr.com/65535/50948988027_64c8bd54e0.jpg',
                description: 'Scenic nature trail around Kukkarahalli lake popular for morning walks and bird watching.'
            }
        ]
    },
    {
        id: 'bangalore',
        name: 'Bangalore – North & South',
        image: 'assets/destinations/bangalore.png',
        color: '#8338EC',
        famousPlaces: [
            {
                name: 'Lalbagh Botanical Garden',
                image: 'https://www.nobroker.in/blog/wp-content/uploads/2024/03/lalbagh-botanical-garden-1.jpg',
                description: 'A historic garden with a massive glass house and diverse flora.'
            },
            {
                name: 'Bangalore Palace',
                image: 'https://anvayaplaces.b-cdn.net/places/125_0.webp',
                description: 'A royal palace inspired by Windsor Castle, known for its Tudor-style architecture.'
            },
            {
                name: 'ISKCON Temple',
                image: 'https://images.unsplash.com/photo-1610416976865-c81b957697b0?auto=format&fit=crop&q=80&w=800',
                description: 'A massive cultural complex and temple dedicated to Krishna and Radha.'
            },
            {
                name: 'Cubbon Park',
                image: 'https://bangaloretourism.in/images/v2/places-to-visit/cubbon-park-bangalore/cubbon-park-bangalore-bangalore-entry-ticket-price-bangalore-tourism-cr-pmekara.jpg',
                description: 'The lungs of the city, a sprawling green space with many historic buildings.'
            }
        ]
    },
    {
        id: 'bangalore_east_west',
        name: 'Bangalore – East & West',
        image: 'https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg',
        color: '#3B82F6',
        famousPlaces: [
            {
                name: 'Lalbagh Botanical Garden',
                image: 'https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg',
                description: 'Sprawling 240-acre botanical garden featuring the famous glass house and tropical plants.'
            },
            {
                name: 'Phoenix Marketcity & VR Mall',
                image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=800',
                description: 'East Bangalore’s premier shopping, dining and entertainment twin-mall hub.'
            },
            {
                name: 'Indiranagar 100ft Road',
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
                description: 'Vibrant nightlife, trendy cafes, boutique shopping and artisan breweries.'
            },
            {
                name: 'HAL Aerospace Museum',
                image: 'https://im.whatshot.in/img/2021/Sep/1-0-cropped-1633005698.jpg',
                description: 'India’s first aviation museum displaying real fighter jets and helicopters.'
            }
        ]
    },

    {
        id: 'manipal',
        name: 'Manipal',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
        color: '#EC4899',
        disabled: false,
        famousPlaces: [
            {
                name: 'End Point Park',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
                description: 'A scenic clifftop park offering panoramic views of the Swarna River valley and Western Ghats.'
            },
            {
                name: 'Hasta Shilpa Heritage Village',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
                description: 'A unique open-air museum showcasing restored traditional South Indian heritage houses and crafts.'
            },
            {
                name: 'Anatomy Museum (MAP)',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
                description: 'One of Asia’s largest pathology & anatomy museums with thousands of fascinating specimens.'
            },
            {
                name: 'Venugopal Temple',
                image: 'https://images.unsplash.com/photo-1609949279531-cf48d64bed89?auto=format&fit=crop&q=80&w=800',
                description: 'A serene and beautifully maintained temple complex surrounded by manicured green lawns.'
            }
        ]
    }
];

const mangaloreCategories = [
    { id: 'beaches', name: 'Beaches', desc: 'Explore famous beaches →', image: 'assets/places/panambur_beach.jpg' },
    { id: 'temples', name: 'Temples', desc: 'Explore famous temples →', image: 'assets/places/kadri_temple.jpg' },
    { id: 'malls', name: 'Malls', desc: 'Explore shopping malls →', image: 'https://i.ytimg.com/vi/5hSQ865UkQA/maxresdefault.jpg' },
    { id: 'trekking', name: 'Trekking Places', desc: 'Explore trekking spots →', image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=600' },
    { id: 'churches', name: 'Famous Churches', desc: 'Explore famous churches →', image: 'https://aroundmangalore.com/wp-content/uploads/2015/08/Aloysius-Chapel-1.png' },
    { id: 'restaurants', name: 'Best Restaurants', desc: 'Explore best restaurants →', image: 'https://www.crazymasalafood.com/wp-content/images/machali-mangalore-hotel.png' },
    { id: 'parks', name: 'Parks & Gardens', desc: 'Explore green parks →', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600' },
    { id: 'breweries', name: 'Breweries & Pubs', desc: 'Explore pubs →', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600' },
    { id: 'boating', name: 'Boating & Water Sports', desc: 'Explore boating spots →', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600' },
    { id: 'gaming', name: 'Gaming & Esports Zone', desc: 'Explore top game houses →', image: 'assets/places/esports_arena_1.jpg' }
];

const mangaloreCategoryData = {
    'beaches': {
        name: 'Mangalore Beaches',
        places: [
            { 
                name: 'Panambur Beach', 
                image: 'assets/places/panambur_beach.jpg', 
                description: 'A clean and popular beach known for its golden sands and water sports.',
                rating: '4.5',
                bestTime: '4:30 PM – 7:00 PM (Sunset)',
                busRoutes: `<strong>Bus Numbers:</strong> 2B, 45, 45A, 45B, 45C, 45D, 45E, 45F, 45G, 45H<br><strong>📍 Board At:</strong> State Bank Bus Stand / KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Kottara Chowki<br>│<br>⚪ Kuloor<br>│<br>🔴 Panambur Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🏖️ Panambur Beach</div>`,
                bestChoice: 'Jet Ski & Water Sports Adventures <strong>(~10 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Tannirbhavi Beach', 
                image: 'https://www.hlimg.com/images/things2do/738X538/28mn_mnrmm1_Bea_29_2176132g_1508082724t.jpg', 
                description: 'A peaceful beach perfect for relaxation, reachable by a scenic ferry.',
                rating: '4.7',
                bestTime: '5:00 PM – 7:15 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 1A, 2A<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Urva Stores<br>│<br>⚪ Kuloor<br>│<br>🔴 Tannirbhavi Bus Stop<br>│<br>🚶 Walk 5–8 min<br>│<br>🏖️ Tannirbhavi Beach</div>`,
                bestChoice: 'Scenic Ferry Ride & Sunset View <strong>(~9 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Someshwara Beach', 
                image: 'https://visitmangalore.in/_next/image?url=https:%2F%2Fapi.visitmangalore.in%2Fuploads%2F5_a_SOMESHWARA_BEACH_9e97b6ef87.jpg&w=1920&q=75', 
                description: 'Famous for the Rudra Shile (huge rocks) and the ancient Someshwara Temple.',
                rating: '4.6',
                bestTime: '4:30 PM – 6:30 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 44A, 46A, 46B, 46C, 46D, 46E, 46M<br><strong>📍 Board At:</strong> State Bank Bus Stand, KSRTC Bus Stand, or Kankanady<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Kankanady<br>│<br>⚪ Pumpwell<br>│<br>⚪ Ullal Junction<br>│<br>🔴 Someshwara Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🏖️ Someshwara Beach</div>`,
                bestChoice: 'Rudra Shile Rock Formations Exploration <strong>(~17 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Surathkal Beach', 
                image: 'https://www.mustvisitplace.com/wp-content/uploads/2019/03/Surathkal-beach-3-768x648.jpg', 
                description: 'A serene beach known for its lighthouse that offers a spectacular view.',
                rating: '4.8',
                bestTime: '5:00 PM – 7:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 2A, 36, 36A, 36E, 36M, 45, 45A<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Kottara Chowki<br>│<br>⚪ Kuloor<br>│<br>⚪ Surathkal Market<br>│<br>🔴 Surathkal Bus Stop<br>│<br>🚶 Walk 8 min<br>│<br>🏖️ Surathkal Beach</div>`,
                bestChoice: 'Panoramic View from the Lighthouse <strong>(~16 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Sasihithlu Beach', 
                image: 'assets/places/sasihithlu_beach.jpg', 
                description: 'A pristine and scenic beach where the river meets the Arabian Sea, popular for surfing.',
                rating: '4.9',
                bestTime: '6:00 AM – 9:00 AM',
                busRoutes: `<strong>Bus Numbers:</strong> 2A, 36A, 36E<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Kottara Chowki<br>│<br>⚪ Surathkal<br>│<br>⚪ Mukka<br>│<br>🔴 Sasihithlu Junction<br>│<br>🚖 Auto (3–5 km)<br>│<br>🏖️ Sasihithlu Beach</div>`,
                bestChoice: 'Surfing at the River Mouth Confluence <strong>(~24 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Ullal Beach', 
                image: 'assets/places/ullal_beach.jpg', 
                description: 'A tranquil beach offering spectacular sunset views and a peaceful environment.',
                rating: '4.4',
                bestTime: '5:00 PM – 7:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 44A, 46A, 46B, 46C, 46D, 46E, 46M<br><strong>📍 Board At:</strong> State Bank Bus Stand, KSRTC Bus Stand, or Kankanady<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Kankanady<br>│<br>⚪ Pumpwell<br>│<br>⚪ Ullal Junction<br>│<br>🔴 Ullal Bus Stand<br>│<br>🚶 Walk 5 min<br>│<br>🏖️ Ullal Beach</div>`,
                bestChoice: 'Tranquil Shoreline Sunset Walks <strong>(~12 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Bengre Beach', 
                image: 'assets/places/bengre_beach.png', 
                description: 'A picturesque coastal stretch where the river meets the Arabian Sea, offering breathtaking sunsets.',
                rating: '4.5',
                bestTime: '4:30 PM – 6:45 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 2B, 34F<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Bunder<br>│<br>⚪ Fisheries College<br>│<br>⚪ Bengre Cross<br>│<br>🔴 Bengre Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🏖️ Bengre Beach</div>`,
                bestChoice: 'Scenic Estuary Sunset views <strong>(~12 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Talapady Beach', 
                image: 'assets/places/talapady_beach.jpg', 
                description: 'A serene and less crowded beach ideal for relaxing walks along the shoreline.',
                rating: '4.2',
                bestTime: '5:00 PM – 7:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 47, 47A, 48, 53E<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Kankanady<br>│<br>⚪ Pumpwell<br>│<br>⚪ Ullal<br>│<br>⚪ Talapady<br>│<br>🔴 Talapady Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🏖️ Talapady Beach</div>`,
                bestChoice: 'Quiet Coastal Beach Walk <strong>(~17 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Batapady Beach', 
                image: 'assets/places/batapady_beach.jpg', 
                description: 'A hidden gem offering a calm environment and pristine beauty, perfect for a peaceful getaway.',
                bestTime: '4:30 PM – 7:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 48, 53E<br><strong>📍 Board At:</strong> State Bank Bus Stand (Get down at Talapady, take auto)<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Kankanady<br>│<br>⚪ Pumpwell<br>│<br>⚪ Ullal<br>│<br>⚪ Talapady<br>│<br>🔴 Talapady Bus Stop<br>│<br>🚖 Auto (2–3 km)<br>│<br>🏖️ Batapady Beach</div>`,
                bestChoice: 'Hidden Seaside Scenic Gateway <strong>(~19 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Mukka Beach', 
                image: 'assets/places/mukka_beach.jpg', 
                description: 'Known for its golden sands and the nearby NITK lighthouse, offering a panoramic view of the sea.',
                bestTime: '5:00 PM – 7:15 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 2, 2A, 36, 36M<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Kottara Chowki<br>│<br>⚪ Surathkal<br>│<br>🔴 Mukka Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🏖️ Mukka Beach</div>`,
                bestChoice: 'Golden Sands & Seagull Watching <strong>(~20 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Kodical Beach', 
                image: 'assets/places/kodical_beach.jpg', 
                description: 'A beautiful coastline with a mix of sandy stretches and rocky shores, perfect for an evening stroll.',
                bestTime: '4:30 PM – 6:30 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 1B, 1C, 2, 2A<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Urva Stores<br>│<br>🔴 Kodikal Bus Stop<br>│<br>🚖 Auto (2 km)<br>│<br>🏖️ Kodikal Beach</div>`,
                bestChoice: 'Rocky Shore Scenic Stroll <strong>(~7 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Chitrapura Beach', 
                image: 'assets/places/chitrapura_beach.jpg', 
                description: 'A quiet and peaceful beach, perfect for long walks and enjoying the serene coastal breeze.',
                bestTime: '5:00 PM – 7:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 36, 36M, 45, 45A<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Kottara Chowki<br>│<br>⚪ Surathkal<br>│<br>🔴 Chitrapura Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🏖️ Chitrapura Beach</div>`,
                bestChoice: 'Quiet Coastal Sea Breeze Relaxation <strong>(~12 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1473116763269-255448993767?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Mulki Beach', 
                image: 'assets/places/mulki_beach.jpg', 
                description: 'A popular destination for water sports enthusiasts, especially known for surfing and kayaking.',
                bestTime: '6:00 AM – 10:00 AM',
                busRoutes: `<strong>Bus Numbers:</strong> 2A, 36A, 36E<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand (Get down at Mulki, take auto)<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Kottara Chowki<br>│<br>⚪ Surathkal<br>│<br>⚪ Mukka<br>│<br>🔴 Mulki Bus Stand<br>│<br>🚖 Auto (2–3 km)<br>│<br>🏖️ Mulki Beach</div>`,
                bestChoice: 'Kayaking & Surfing Lessons <strong>(~29 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Hosabettu Beach', 
                image: 'assets/places/hosabettu_beach.gif', 
                description: 'A beautiful hidden coastal gem that offers a pristine environment away from the city crowd.',
                bestTime: '5:00 PM – 7:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 36, 36M, 45, 45A<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Kottara Chowki<br>│<br>⚪ Surathkal<br>│<br>⚪ Hosabettu<br>│<br>🔴 Hosabettu Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🏖️ Hosabettu Beach</div>`,
                bestChoice: 'Isolated Beach View & Solitude <strong>(~14 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'temples': {
        name: 'Mangalore Temples',
        places: [
            { 
                name: 'Swami Koragajja Temple', 
                image: 'assets/places/swami_koragajja_temple.jpg', 
                description: 'A highly revered sacred shrine dedicated to Swami Koragajja, drawing countless devotees seeking blessings.',
                openHours: '6:00 AM – 1:00 PM, 4:00 PM – 9:00 PM',
                bestTime: 'Evening Aarti (6:30 PM)',
                busRoutes: `<strong>Bus Numbers:</strong> 40, 42, 43, 44, 45, 47, 50, 51<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Jyothi<br>│<br>⚪ Kankanady<br>│<br>⚪ Pumpwell<br>│<br>⚪ Kuthar<br>│<br>🔴 Koragajja Temple Stop<br>│<br>🚶 Walk 3 min<br>│<br>🛕 Swami Koragajja Temple</div>`,
                bestChoice: 'Koragajja Darshan & Offering Betel Leaves',
                bestChoiceImg: 'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Kadri Manjunath Temple', 
                image: 'assets/places/kadri_temple.jpg', 
                description: 'An ancient Hindu temple with unique architecture and historical significance.',
                openHours: '5:30 AM – 1:00 PM, 4:00 PM – 8:30 PM',
                bestTime: 'Morning Pooja (7:00 AM)',
                busRoutes: `<strong>Bus Numbers:</strong> 12A, 14A, 21, 22, 30<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi<br>│<br>⚪ Bunts Hostel<br>│<br>🔴 Kadri<br>│<br>🚶 Walk 2 min<br>│<br>🛕 Kadri Manjunath Temple</div>`,
                bestChoice: 'Lokeshwara Bronze Statue & Natural Springs',
                bestChoiceImg: 'https://images.unsplash.com/photo-1609137882611-37f2252a11b9?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Kudroli Gokarnath Temple', 
                image: 'https://imvoyager.com/wp-content/uploads/2021/04/Kudroli-Temple-Mangalore-Kudroli-Gokarnanatha-Temple-Gokarnanatheshwara-Temple--640x437.png', 
                description: 'A beautiful temple known for its magnificent Dasara celebrations.',
                openHours: '6:00 AM – 2:00 PM, 4:30 PM – 9:00 PM',
                bestTime: 'Evening lighting (6:30 PM)',
                busRoutes: `<strong>Bus Numbers:</strong> 16, 16A<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Car Street<br>│<br>⚪ Kudroli<br>│<br>🔴 Gokarnath Temple Stop<br>│<br>🚶 Walk 2 min<br>│<br>🛕 Kudroli Gokarnath Temple</div>`,
                bestChoice: 'Golden Gopuram View & Dasara Festivities',
                bestChoiceImg: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Mangaladevi Temple', 
                image: 'https://www.thetravelmagazine.net/wp-content/uploads/Mangaladevi-Temple-Sunset.jpg', 
                description: 'The ancient temple after which the city of Mangalore is named.',
                openHours: '6:00 AM – 1:00 PM, 4:00 PM – 8:30 PM',
                bestTime: 'Navratri Festival Week (All day)',
                busRoutes: `<strong>Bus Numbers:</strong> 27, 27A, 29<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Attavar<br>│<br>⚪ Bolar<br>│<br>🔴 Mangaladevi Stop<br>│<br>🚶 Walk 2 min<br>│<br>🛕 Mangaladevi Temple</div>`,
                bestChoice: 'Traditional Pooja & Historic Temple Origin Site',
                bestChoiceImg: 'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Polali Rajarajeshwari Temple', 
                image: 'https://tempotravellermangalore.in/uploads/image/tour-packages/pilgrimage-places-in-mangalore/polali-rajarajeshwari-temple.jpg', 
                description: 'Famous for its wooden idols and the historic Polali Chendu festival.',
                openHours: '6:00 AM – 12:30 PM, 4:00 PM – 8:00 PM',
                bestTime: 'Polali Chendu Festival (March/April)',
                busRoutes: `<strong>Bus Numbers:</strong> 12A, 44B<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi<br>│<br>⚪ Kadri<br>│<br>⚪ Kaikamba<br>│<br>🔴 Polali Bus Stand<br>│<br>🚶 Walk 5 min<br>│<br>🛕 Polali Rajarajeshwari Temple</div>`,
                bestChoice: 'Sri Rajarajeshwari Clay Idol Darshan',
                bestChoiceImg: 'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Kateel Temple', 
                image: 'assets/places/kateel_temple.webp', 
                description: 'A prominent Hindu temple dedicated to Goddess Durgaparameshwari, located on an islet in the Nandini River.',
                openHours: '6:00 AM – 9:30 PM',
                bestTime: 'Morning Aarti (10:00 AM)',
                busRoutes: `<strong>Bus Numbers:</strong> 43, 43A<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi<br>│<br>⚪ Nanthoor<br>│<br>⚪ Vamanjoor<br>│<br>⚪ Kaikamba<br>│<br>🔴 Kateel Bus Stand<br>│<br>🚶 Walk 3 min<br>│<br>🛕 Kateel Temple</div>`,
                bestChoice: 'Island Temple Darshan & River Sunset Views',
                bestChoiceImg: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Someshwara Temple', 
                image: 'assets/places/someshwara_temple.jpg', 
                description: 'An ancient Shiva temple situated by the sea, known for its historic architecture and beautiful surroundings.',
                openHours: '6:00 AM – 1:00 PM, 4:00 PM – 8:00 PM',
                bestTime: 'Sunset timings (5:30 PM)',
                busRoutes: `<strong>Bus Numbers:</strong> 44A, 46A, 46D, 46E, 46M<br><strong>📍 Board At:</strong> State Bank Bus Stand, KSRTC Bus Stand or Kankanady<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Kankanady<br>│<br>⚪ Pumpwell<br>│<br>⚪ Ullal<br>│<br>🔴 Someshwara Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🛕 Someshwara Temple</div>`,
                bestChoice: 'Sea-Facing Shoreline Shiva Temple Visit',
                bestChoiceImg: 'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Urwa Marigudi Temple', 
                image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800', 
                description: 'A highly revered temple dedicated to Goddess Mariamman, famous for its grand Mangaluru Dasara celebrations.',
                openHours: '6:00 AM – 1:00 PM, 4:00 PM – 9:00 PM',
                bestTime: 'Tuesdays & Fridays (All day)',
                busRoutes: `<strong>Bus Numbers:</strong> 1, 1A, 7<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Car Street<br>│<br>⚪ Ladyhill<br>│<br>🔴 Urva Stores<br>│<br>🚶 Walk 2 min<br>│<br>🛕 Urwa Marigudi Temple</div>`,
                bestChoice: 'Urwa Mariamman Pooja & Dasara Processions',
                bestChoiceImg: 'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '🌺 Bappanadu Durgaparameshwari Temple', 
                image: 'https://mangaloreheritage.com/wp-content/uploads/2020/05/bappanadu-1080x675.jpg', 
                description: 'A historical temple known for its communal harmony and the annual Bappanadu Dolu festival.',
                openHours: '5:30 AM – 1:30 PM, 4:00 PM – 8:30 PM',
                bestTime: 'Annual Bappanadu Dolu Festival',
                busRoutes: `<strong>Bus Numbers:</strong> 36, 36A, 36M<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Kuloor<br>│<br>⚪ Panambur<br>│<br>⚪ Surathkal<br>│<br>⚪ Mukka<br>│<br>🔴 Bappanadu Junction<br>│<br>🚶 Walk 5 min<br>│<br>🛕 Bappanadu Temple</div>`,
                bestChoice: 'Communal Harmony Shrine & Sacred Bappanadu Drum',
                bestChoiceImg: 'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Karinjeshwara Hill Temple', 
                image: 'assets/places/karinjeshwara_temple.jpg', 
                description: 'A majestic temple perched on a cliff edge, offering a serene spiritual experience and panoramic views.',
                openHours: '6:00 AM – 12:00 PM, 4:00 PM – 7:00 PM',
                bestTime: 'Early Morning (6:30 AM)',
                busRoutes: `<strong>Bus Numbers:</strong> 51, 51A, 51B, 51C<br><strong>📍 Board At:</strong> State Bank Bus Stand, KSRTC Bus Stand or Kankanady<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Kankanady<br>│<br>⚪ Pumpwell<br>│<br>⚪ Bantwal<br>│<br>🔴 Karinje Junction<br>│<br>🚖 Auto (3 km)<br>│<br>🛕 Karinjeshwara Hill Temple</div>`,
                bestChoice: 'Scenic Hill Climb & Temple pond view',
                bestChoiceImg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'malls': {
        name: 'Mangalore Malls',
        places: [
            { 
                name: 'City Centre Mall', 
                image: 'https://i.ytimg.com/vi/5hSQ865UkQA/maxresdefault.jpg', 
                description: 'One of the largest malls in Mangalore with great shopping, dining, and multiplex.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Weekends (All day)',
                busRoutes: `<strong>Bus Numbers:</strong> 4, 5, 10A, 11B, 23, 30, 30A, 37, 42, 43, 44A, 44B, 44C, 44D, 51, 51A, 54, 55<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Jyothi Circle<br>│<br>🔴 City Centre Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🛍️ City Centre Mall</div>`,
                bestChoice: 'Cinepolis Movie Screening & Food Court Dining',
                bestChoiceImg: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Forum Fiza Mall', 
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/0b/50/07/central-atrium-of-the.jpg', 
                description: 'A premium shopping destination offering global brands and entertainment options.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Evening hours (6:00 PM onwards)',
                busRoutes: `<strong>Bus Numbers:</strong> 9A, 18, 29<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Pandeshwar<br>│<br>🔴 Forum Fiza Bus Stop<br>│<br>🚶 Walk 1 min<br>│<br>🛍️ Forum Fiza Mall</div>`,
                bestChoice: 'Global Brands Shopping & Bowling Alley Gaming',
                bestChoiceImg: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Lotus Mall (Upcoming)', 
                image: 'https://1.bp.blogspot.com/-ukW_y6j0NO4/UAj7Xco44hI/AAAAAAAALMw/dFO_pcSzgjU/s1600/2s8obah.jpg', 
                description: 'An upcoming mega mall promising a world-class shopping experience.',
                busRoutes: `<strong>Status:</strong> 🚧 Under Construction<br><div class="bus-route-flow-container">🚧 Opening Soon<br>Bus routes will be updated after the official launch.</div>`,
                bestTime: 'Post Launch',
                bestChoice: 'Multiplex & Premium Leisure Zones',
                bestChoiceImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Bharath Mall', 
                image: 'https://content.jdmagicbox.com/comp/mangalore/54/0824p824std2004954/catalogue/bharath-mall-bejai-mangalore-malls-z1qvkl4h1d.jpg', 
                description: 'One of the first modern malls in the city, popular among locals.',
                openHours: '10:00 AM – 9:30 PM',
                bestTime: 'Afternoon Shopping hours',
                busRoutes: `<strong>Bus Numbers:</strong> 15, 17, 17A, 19, 33, 47B, 48A<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Kankanady<br>│<br>🔴 Bharath Mall Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🛍️ Bharath Mall</div>`,
                bestChoice: 'Supermarket Shopping & Multiplex Theatre',
                bestChoiceImg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'trekking': {
        name: 'Mangalore Trekking Places',
        places: [
            { 
                name: 'Jamalabad Fort', 
                image: 'https://visitmangalore.in/_next/image?url=https:%2F%2Fapi.visitmangalore.in%2Fuploads%2Fgadey_kalu_ed7e47ceb6.jpg&w=1920&q=75', 
                description: 'A challenging trek to a historic hilltop fort with stunning 360-degree views.',
                rating: '4.7',
                bestTime: '6:00 AM – 11:00 AM',
                routeIcon: '🏍️',
                routeTitle: 'Bike & Friends Travel Route',
                busRoutes: `<strong>Recommended Trip:</strong> 🏍️ Bike Ride with Friends<br><strong>📍 Starting Point:</strong> Mangaluru (State Bank / Pumpwell)<br><div class="bus-route-flow-container">🟢 Mangaluru (Start Point)<br>│<br>⚪ Bantwal<br>│<br>⚪ Belthangady<br>│<br>🔴 Jamalabad Fort Base<br>│<br>🥾 Trek to Top with Friends (2.5 km)<br>│<br>🏔️ Gadaikallu Summit Peak</div>`,
                bestChoice: 'Gadaikallu Cliff Climbing Challenge <strong>(~65 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Ermayi Falls Trek', 
                image: 'https://vl-prod-static.b-cdn.net/system/images/000/277/222/8a9f6cab8057c115cd3b9dc620b8a9f7/banner/bmcermayi.jpg?1550889416', 
                description: 'A scenic trek through lush forests leading to a multi-tiered waterfall.',
                rating: '4.5',
                bestTime: '7:30 AM – 12:00 PM',
                routeIcon: '🏍️',
                routeTitle: 'Bike & Friends Travel Route',
                busRoutes: `<strong>Recommended Trip:</strong> 🏍️ Bike Ride with Friends<br><strong>📍 Starting Point:</strong> Mangaluru (State Bank / Pumpwell)<br><div class="bus-route-flow-container">🟢 Mangaluru (Start Point)<br>│<br>⚪ Bantwal<br>│<br>⚪ Belthangady<br>│<br>🔴 Ermayi Falls Parking<br>│<br>🥾 Forest Hike with Squad<br>│<br>🌊 Ermayi Waterfalls</div>`,
                bestChoice: 'Forest Trail Hike & Waterfall Swim <strong>(~75 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Karinchieshwara Trek', 
                image: 'https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_518,q_auto,w_660/v1705557186/bbj/m1wifaroojflvk5woe3g.jpg', 
                description: 'A steep trek blending nature and spirituality, ending at an ancient cliffside temple.',
                rating: '4.6',
                bestTime: '6:00 AM – 9:00 AM',
                routeIcon: '🏍️',
                routeTitle: 'Bike & Friends Travel Route',
                busRoutes: `<strong>Recommended Trip:</strong> 🏍️ Bike Ride with Friends<br><strong>📍 Starting Point:</strong> Mangaluru (State Bank / Pumpwell)<br><div class="bus-route-flow-container">🟢 Mangaluru (Start Point)<br>│<br>⚪ BC Road / Bantwal<br>│<br>🔴 Karinje Hill Base<br>│<br>🧗 Climb 555 Steps with Friends<br>│<br>🛕 Karinjeshwara Temple Peak</div>`,
                bestChoice: 'Cliff Edge Steps Climb & Temple Darshan <strong>(~35 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Gadaikallu', 
                image: 'https://i.pinimg.com/originals/ce/6f/61/ce6f61f2917fb5e4712fc7c7c663311c.jpg', 
                description: 'A prominent rock formation offering an adventurous climb and beautiful vistas.',
                rating: '4.7',
                bestTime: '5:30 AM – 9:30 AM',
                routeIcon: '🏍️',
                routeTitle: 'Bike & Friends Travel Route',
                busRoutes: `<strong>Recommended Trip:</strong> 🏍️ Bike Ride with Friends<br><strong>📍 Starting Point:</strong> Mangaluru (State Bank / Pumpwell)<br><div class="bus-route-flow-container">🟢 Mangaluru (Start Point)<br>│<br>⚪ Bantwal<br>│<br>⚪ Belthangady<br>│<br>🔴 Gadaikallu Base<br>│<br>🥾 Sunrise Expedition Hike with Friends<br>│<br>🌄 Gadaikallu Rock Viewpoint</div>`,
                bestChoice: 'Sunrise Rock Face Expedition Climb <strong>(~65 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Saripalla View',
                image: 'https://www.nativeplanet.com/img/2023/06/saripalla-1687945738.jpg',
                description: 'A hidden gem offering mesmerizing panoramic views of the lush green valleys and the winding Netravati river.',
                rating: '4.4',
                bestTime: '5:30 PM – 7:00 PM (Sunset)',
                routeIcon: '🏍️',
                routeTitle: 'Bike & Friends Travel Route',
                busRoutes: `<strong>Recommended Trip:</strong> 🏍️ Bike Ride with Friends<br><strong>📍 Starting Point:</strong> Mangaluru City Center<br><div class="bus-route-flow-container">🟢 Mangaluru City<br>│<br>⚪ Kankanady / Pumpwell<br>│<br>🔴 Saripalla Sunset Point<br>│<br>🌅 Enjoy Evening Breeze & View with Squad</div>`,
                bestChoice: 'Golden Hour Photography & Valley Views <strong>(~10 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Kumara Parvatha',
                image: 'https://visitmangalore.in/_next/image?url=https:%2F%2Fapi.visitmangalore.in%2Fuploads%2FKumaraparvatha_6_final_67f500c478.jpg&w=2048&q=75',
                description: 'One of the most challenging and rewarding treks in the Western Ghats, taking you through dense forests and grasslands.',
                rating: '4.9',
                bestTime: '6:00 AM – 5:00 PM',
                routeIcon: '🏍️',
                routeTitle: 'Bike & Friends Travel Route',
                busRoutes: `<strong>Recommended Trip:</strong> 🏍️ Long Bike Ride with Friends<br><strong>📍 Starting Point:</strong> Mangaluru<br><div class="bus-route-flow-container">🟢 Mangaluru<br>│<br>⚪ Puttur<br>│<br>⚪ Kukke Subrahmanya<br>│<br>🔴 Trek Entrance Point<br>│<br>🥾 2-Day Trekking Expedition with Friends<br>│<br>🏔️ Kumara Parvatha Peak</div>`,
                bestChoice: 'Pushpagiri Peak Summit Hike <strong>(~110 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1516654766858-f584e2311749?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Netravati Peak Trek',
                image: 'https://trekentrip.com/wp-content/uploads/2024/10/netravati-peak-1024x576.jpeg',
                description: 'A scenic trail winding through the rolling hills of the Western Ghats, offering breathtaking views above the clouds.',
                rating: '4.8',
                bestTime: '7:00 AM – 4:00 PM',
                routeIcon: '🏍️',
                routeTitle: 'Bike & Friends Travel Route',
                busRoutes: `<strong>Recommended Trip:</strong> 🏍️ Bike Ride with Friends<br><strong>📍 Starting Point:</strong> Mangaluru<br><div class="bus-route-flow-container">🟢 Mangaluru<br>│<br>⚪ Belthangady / Ujire<br>│<br>⚪ Samse / Kalasa Road<br>│<br>🔴 Netravati Trek Base<br>│<br>🥾 Mountain Ridge Hike with Friends<br>│<br>☁️ Netravati Peak above Clouds</div>`,
                bestChoice: 'Cloud Canopy & Ridgeway Walk <strong>(~85 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Bandaje Arbi Falls Trek',
                image: 'https://monksonwheels.com/wp-content/uploads/2021/09/Ballalarayanadurga-Fort-And-Bandaje-Arbi-Falls-Trek-Photo-6.jpg',
                description: 'An exciting trek leading to a spectacular waterfall cascading from the top of the Western Ghats.',
                rating: '4.7',
                bestTime: '6:30 AM – 2:00 PM',
                routeIcon: '🏍️',
                routeTitle: 'Bike & Friends Travel Route',
                busRoutes: `<strong>Recommended Trip:</strong> 🏍️ Bike Ride with Friends<br><strong>📍 Starting Point:</strong> Mangaluru<br><div class="bus-route-flow-container">🟢 Mangaluru<br>│<br>⚪ Belthangady<br>│<br>⚪ Ujire / Mundaje<br>│<br>🔴 Bandaje Base Village<br>│<br>🥾 Forest & Grassland Hike with Friends<br>│<br>🌊 Bandaje Arbi Waterfall Edge</div>`,
                bestChoice: 'Waterfall Edge & Grassland Trek <strong>(~90 km from Mangaluru)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1432405972618-c6c00202124c?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'churches': {
        name: 'Famous Churches',
        places: [
            { 
                name: 'St. Aloysius Chapel', 
                image: 'https://mangaloretourism.in/images/places-to-visit/header/st-aloysius-chapel-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg', 
                description: 'Famous for its exquisite ceiling paintings that rival the Sistine Chapel.',
                openHours: '9:00 AM – 1:30 PM, 2:30 PM – 6:00 PM',
                bestTime: 'Morning visit (10:00 AM)',
                busRoutes: `<strong>Bus Numbers:</strong> 1, 1A, 1B, 7, 7A<br><strong>📍 Board At:</strong> State Bank Bus Stand or Kankanady Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Lighthouse Hill<br>│<br>🔴 St. Aloysius College Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>⛪ St. Aloysius Chapel</div>`,
                bestChoice: 'Sistine Chapel-like Exquisite Ceiling Frescoes',
                bestChoiceImg: 'https://images.unsplash.com/photo-1548625361-155deee223c2?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Milagres Church', 
                image: 'https://www.shatravelsmts.com/uploads/image/tour-packages/11-best-places-to-visit-in-mangalore/milagres-church.jpg', 
                description: 'A historic Roman Catholic church in the heart of Mangalore with rich heritage.',
                openHours: '6:00 AM – 7:30 PM',
                bestTime: 'Sunday Morning Mass',
                busRoutes: `<strong>Bus Numbers:</strong> 1, 1A, 1B, 7, 14<br><strong>📍 Board At:</strong> State Bank Bus Stand or Kankanady Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>🔴 Milagres Church Bus Stop<br>│<br>🚶 Walk 1 min<br>│<br>⛪ Milagres Church</div>`,
                bestChoice: 'century-old Roman Catholic Architectural Heritage',
                bestChoiceImg: 'https://images.unsplash.com/photo-1438263308705-f6c8f370ba36?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Rosario Cathedral', 
                image: 'https://th-i.thgim.com/public/news/national/karnataka/p052cm/article25479880.ece/alternates/LANDSCAPE_1200/13BG-CATHEDRAL', 
                description: 'The oldest church in Mangalore featuring a stunning dome and beautiful architecture.',
                openHours: '6:00 AM – 7:00 PM',
                bestTime: 'Morning Quiet Hours',
                busRoutes: `<strong>Bus Numbers:</strong> 1, 1A, 7, 14, 21<br><strong>📍 Board At:</strong> State Bank Bus Stand or Kankanady Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Bolar<br>│<br>🔴 Rosario Cathedral Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>⛪ Rosario Cathedral</div>`,
                bestChoice: 'Italian-style architecture & spectacular Dome structure',
                bestChoiceImg: 'https://images.unsplash.com/photo-1548625361-155deee223c2?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Infant Jesus Shrine', 
                image: 'https://www.infantjesusmangalore.net/images/shrine1.jpg', 
                description: 'A popular pilgrimage site known for its modern architecture and peaceful ambiance.',
                openHours: '5:30 AM – 8:30 PM',
                bestTime: 'Thursdays Novena services',
                busRoutes: `<strong>Bus Numbers:</strong> 14, 14A, 14B, 21, 21A<br><strong>📍 Board At:</strong> State Bank Bus Stand or Kankanady Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Bunts Hostel<br>│<br>⚪ Bikarnakatte<br>│<br>🔴 Infant Jesus Shrine Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>⛪ Infant Jesus Shrine</div>`,
                bestChoice: 'Prayers in the massive modern amphitheater',
                bestChoiceImg: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'restaurants': {
        name: 'Best Restaurants in Mangalore',
        places: [
            {
                name: 'Machali',
                image: 'https://www.crazymasalafood.com/wp-content/images/machali-mangalore-hotel.png',
                description: 'A legendary home-style seafood restaurant in Mangaluru, celebrated for its fresh fish, traditional local masalas, and quick service.',
                openHours: '11:30 AM – 3:30 PM, 7:00 PM – 10:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 1, 1A, 1B, 7, 14<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Jyothi Circle<br>│<br>🔴 Machali Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🍤 Machali Restaurant</div>`,
                bestFoods: [
                    { name: 'Anjal Fish Fry', img: 'https://images.indianexpress.com/2016/04/anjal-masala-fry_820_nikhil-pai.jpg', price: '₹290 (Approx)' },
                    { name: 'Fish Thali', img: 'https://static.wixstatic.com/media/798804_28241958932a44f682b26db6b35a8987~mv2.jpg/v1/fill/w_980,h_766,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/798804_28241958932a44f682b26db6b35a8987~mv2.jpg', price: '₹190 (Approx)' },
                    { name: 'Prawns Ghee Roast', img: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png', price: '₹280 (Approx)' },
                    { name: 'Crab Masala Fry', img: 'https://www.seriouseats.com/thmb/3dFjzacZ0gSdlibO6UpuBwBeSaw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__03__25.03.201420Spicy-Indian-Crab-Masala-Fry-cd7dc3ba0d8b4f3489c13c4989ddeb4c.jpg', price: '₹350 (Approx)' }
                ]
            },
            {
                name: "GiriManja's",
                image: 'https://i.ytimg.com/vi/Sg4rB98loRo/maxresdefault.jpg',
                description: 'An iconic local seafood joint near Car Street, Mangaluru, famous for its rustic coastal flavors, mouthwatering tawa-fried fish, and authentic fish thalis.',
                openHours: '11:30 AM – 3:30 PM, 7:00 PM – 10:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 1, 1A, 1B, 7<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Car Street<br>│<br>🔴 Car Street Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🐟 GiriManja's</div>`,
                bestFoods: [
                    { name: 'Anjal (King Fish) Tawa Fry', img: 'assets/places/girimanjas_tawa_fry.jpg', price: '₹300 (Approx)' },
                    { name: 'Special Seafood Thali', img: 'assets/places/girimanjas_fish_thali.jpg', price: '₹220 (Approx)' },
                    { name: 'Prawns Masala Fry', img: 'assets/places/girimanjas_prawns_masala.jpg', price: '₹280 (Approx)' },
                    { name: 'Squid (Bondas) Rava Fry', img: 'https://i.pinimg.com/originals/9e/c8/24/9ec824618f757fb1dad66ccdc0640103.jpg', price: '₹260 (Approx)' }
                ]
            },
            {
                name: 'Shetty Lunch Home',
                image: 'https://aroundmangalore.com/wp-content/uploads/2020/02/Shetty-Lunch-Home-Seafood-and-Mangalore-Cuisine-Restaurant-Adyar-Mangalore-P1.jpg',
                description: 'The iconic restaurant credited with the invention of the world-famous Chicken Ghee Roast, serving outstanding traditional recipes.',
                openHours: '11:30 AM – 3:30 PM, 6:30 PM – 10:30 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 14, 14A, 21, 21A, 30<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Balmatta<br>│<br>🔴 Balmatta Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🍗 Shetty Lunch Home</div>`,
                bestFoods: [
                    { name: 'Chicken Ghee Roast', img: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png', price: '₹340 (Approx)' },
                    { name: 'Kane (Lady Fish) Fry', img: 'https://images.indianexpress.com/2016/04/anjal-masala-fry_820_nikhil-pai.jpg', price: '₹280 (Approx)' },
                    { name: 'Neer Dosa with Curry', img: 'https://www.idfreshfood.com/wp-content/uploads/2020/12/gsrgergge.jpg', price: '₹120 (Approx)' },
                    { name: 'Silver Fish Rava Fry', img: 'https://i.pinimg.com/originals/9e/c8/24/9ec824618f757fb1dad66ccdc0640103.jpg', price: '₹220 (Approx)' }
                ]
            },
            {
                name: 'Pallkhi Restaurant',
                image: 'https://aroundmangalore.com/wp-content/uploads/2016/06/Pallkhi-Restaurant-Balmatta-Road-Mangalore-P1.jpg',
                description: 'One of Mangaluru\'s premier dining landmarks, renowned for its heritage-style fine dining, authentic local curries, and warm hospitality.',
                openHours: '11:30 AM – 3:30 PM, 7:00 PM – 11:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 14, 14A, 21, 21A, 30<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Balmatta<br>│<br>🔴 Pallkhi Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🍽️ Pallkhi Restaurant</div>`,
                bestFoods: [
                    { name: 'Chicken Kori Rotti', img: 'https://myfoodstory.com/wp-content/uploads/2015/11/chicken-kori-rotti-mangalorean-chicken-curry-recipe.1024x1024-1024x617.jpg', price: '₹260 (Approx)' },
                    { name: 'Crab Ghee Roast', img: 'https://i.ytimg.com/vi/gxik1GMXxE0/maxresdefault.jpg', price: '₹380 (Approx)' },
                    { name: 'Mutton Curry', img: 'https://cookwithfaiza.net/wp-content/uploads/2024/03/312836521_Classic_Mutton_Curry_By_Cook_With_Faiza.jpeg', price: '₹320 (Approx)' },
                    { name: 'Neer Dosa', img: 'https://vanitascorner.com/wp-content/uploads/2018/01/Neer-Dosa-1024x768.jpg', price: '₹80 (Approx)' }
                ]
            },
            {
                name: 'Village Restaurant',
                image: 'https://aroundmangalore.com/wp-content/uploads/2015/08/village5.png',
                description: 'A charming theme-style garden restaurant offering a rustic coastal village ambiance and a delectable range of Mangalorean delicacies.',
                openHours: '12:00 PM – 3:30 PM, 7:00 PM – 11:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 8, 8A, 8B, 8C<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Nanthoor<br>│<br>⚪ Vamanjoor<br>│<br>🔴 Village Restaurant Bus Stop<br>│<br>🚶 Walk 3 min<br>│<br>🌿 Village Restaurant</div>`,
                bestFoods: [
                    { name: 'Fish Curry & Neer Dosa', img: 'https://traveltillyoudrop.com/wp-content/uploads/2024/11/Neer-Dosa-with-Fish-Curry_11zon.webp', price: '₹200 (Approx)' },
                    { name: 'Pomfret Masala Fry', img: 'https://lh3.googleusercontent.com/-4qEWHrdDEf8/YAAmed_qpRI/AAAAAAAAMHs/X28AQROcmQ8Uwt04RJRcryM4dB06-EG_ACLcBGAsYHQ/w1200-h630-p-k-no-nu/1610622580540332-0.png', price: '₹450 (Approx)' },
                    { name: 'Chicken Ghee Roast', img: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png', price: '₹340 (Approx)' },
                    { name: 'Mangalore Buns', img: 'https://www.lifeberrys.com/img/article/cuisine-6-1631691337-lb.jpg', price: '₹60 (Approx)' }
                ]
            },
            {
                name: 'Mandi Stories',
                image: 'https://mandistories.com/03_images/logo.png',
                description: 'A popular Mandi restaurant near Mangalore Central Railway Station in Attavar, renowned for serving delicious Arabian flavors and offering unlimited mandi rice refills with its platters.',
                openHours: '12:00 PM – 11:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 15, 17, 17A, 19, 33<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Attavar<br>│<br>🔴 Mangalore Central Railway Station<br>│<br>🚶 Walk 2 min<br>│<br>🍖 Mandi Stories</div>`,
                bestFoods: [
                    { name: 'Half Chicken Al Faham Mandi (For 2)', img: 'https://www.m3mandi.com/wp-content/uploads/2023/08/Chicken_Al_faham_Mandi_.jpeg', price: '₹350–₹450' },
                    { name: 'Full Chicken Al Faham Mandi (For 2)', img: 'https://www.m3mandi.com/wp-content/uploads/2023/08/Chicken_Al_faham_Mandi_.jpeg', price: '₹650–₹850' },
                    { name: 'Al Faham Mandi with Drinks (For 2)', img: 'https://www.m3mandi.com/wp-content/uploads/2023/08/Chicken_Al_faham_Mandi_.jpeg', price: '₹700–₹1,000' },
                    { name: 'Chicken/Mutton Mandi Platter (For 6)', img: 'https://i.ytimg.com/vi/-WNlsEMTxbA/maxresdefault.jpg', price: '₹2,000–₹3,500 (Incl. Unlimited Rice)' }
                ]
            },
            {
                name: 'Charminar Restaurant',
                image: 'assets/places/charminar_logo.png',
                description: 'A popular restaurant in Mangaluru famous for its authentic Hyderabadi Dum Biryani, flavorful kebabs, tandoori starters, and rich Mughlai dishes.',
                openHours: '12:00 PM – 11:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 14, 14A, 21, 21A, 30<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Balmatta<br>│<br>🔴 Charminar Restaurant Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🍛 Charminar Restaurant</div>`,
                bestFoods: [
                    { name: 'Hyderabadi Special Chicken Dum Biryani', img: 'assets/places/charminar_main_biryani.jpg', price: '₹220 (Approx)' },
                    { name: 'Chicken 65 Special Dum Biryani', img: 'assets/places/charminar_chicken65_biryani.jpg', price: '₹250 (Approx)' },
                    { name: 'Chicken Ghee Roast / Sukka', img: 'assets/places/charminar_chicken_ghee_roast.jpg', price: '₹260 (Approx)' },
                    { name: 'Prawns Ghee Roast', img: 'assets/places/charminar_prawns_ghee_roast.jpg', price: '₹320 (Approx)' }
                ]
            },
            {
                name: 'Hotel Thimmappa',
                image: 'https://assets.architecturaldigest.in/photos/696f675217ee5e78ebce1fd0/master/w_1600%2Cc_limit/Noaidwinsttudio-.jpeg',
                description: 'A renowned iconic hotel famous for its authentic coastal fish thali, mouthwatering tawa fish fry, and rich heritage flavors.',
                openHours: '11:30 AM – 4:00 PM, 7:00 PM – 10:30 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 1, 1A, 1B, 7, 14<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Car Street<br>│<br>🔴 Hotel Thimmappa Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🐠 Hotel Thimmappa</div>`,
                bestFoods: [
                    { name: 'Masala Fish Fry', img: 'https://b2958125.smushcdn.com/2958125/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg?lossy=1&strip=1&webp=1', price: '₹240 (Approx)' },
                    { name: 'Pomfret Fry', img: 'https://img.frozenfish.direct/wp-content/uploads/2023/04/Pomfret-Fry.jpg.webp', price: '₹340 (Approx)' },
                    { name: 'Thimmappa Seafood Thali', img: 'https://i.ytimg.com/vi/qRzZpIYwsQQ/maxresdefault.jpg', price: '₹220 (Approx)' },
                    { name: 'Chicken Sukka', img: 'https://mangaloreheritage.com/wp-content/uploads/2020/05/Chicken-Sukka-1024x683.jpg', price: '₹260 (Approx)' }
                ]
            }
        ]
    },
    'parks': {
        name: 'Mangalore Parks',
        places: [
            { 
                name: 'Kadri Park', 
                image: 'https://i.ytimg.com/vi/afM2SZAJTrQ/hqdefault.jpg', 
                description: 'The largest and most beautiful park in Mangaluru, famous for its musical fountain and lush greenery.',
                openHours: '6:00 AM – 8:30 PM',
                bestTime: 'Evening Musical Fountain (7:00 PM)',
                busRoutes: `<strong>Bus Numbers:</strong> 14, 14A, 14B, 21, 21A<br><strong>📍 Board At:</strong> State Bank Bus Stand or Kankanady Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Bunts Hostel<br>│<br>🔴 Kadri Park Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🌳 Kadri Park</div>`,
                bestChoice: 'Musical Fountain Show & Toy Train Ride',
                bestChoiceImg: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Tagore Park (Lighthouse Hill Park)', 
                image: 'https://mangaloretourism.in/images/places-to-visit/header/tagore-park-light-house-hill-garden-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg', 
                description: 'A historic park offering a spectacular view of the Arabian Sea and the sunset, located near St. Aloysius College.',
                openHours: '4:00 PM – 8:00 PM',
                bestTime: 'Sunset (6:00 PM)',
                busRoutes: `<strong>Bus Numbers:</strong> 1, 1A, 1B, 7, 7A<br><strong>📍 Board At:</strong> State Bank Bus Stand or Kankanady Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Ladyhill<br>│<br>🔴 Lighthouse Hill Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🌳 Tagore Park</div>`,
                bestChoice: 'Spectacular Arabian Sea Sunset Views',
                bestChoiceImg: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Tannirbhavi Tree Park', 
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f9/cc/d5/20191031-110820-largejpg.jpg?w=1200&h=1200&s=1', 
                description: 'A serene tree park near the coast set up by the Forest Department, featuring medicinal plants and wooden sculptures.',
                openHours: '10:00 AM – 7:00 PM',
                bestTime: 'Late Afternoon (4:30 PM)',
                busRoutes: `<strong>Bus Numbers:</strong> 1A, 6<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Urva Stores<br>│<br>⚪ Kuloor<br>│<br>🔴 Tannirbhavi Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🌲 Tannirbhavi Tree Park</div>`,
                bestChoice: 'Nature Trails & Tree Canopy Walk',
                bestChoiceImg: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Mahatma Gandhi Park', 
                image: 'https://threebestrated.in/images/MahatmaGandhiPark-Mangalore-KA-1.jpeg', 
                description: 'A prominent urban park offering a peaceful walking environment amidst the bustling city.',
                openHours: '6:00 AM – 8:00 PM',
                bestTime: 'Early Morning (6:30 AM)',
                busRoutes: `<strong>Bus Numbers:</strong> 1, 1A, 1B, 7<br><strong>📍 Board At:</strong> State Bank Bus Stand or Kankanady Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>🔴 Lalbagh Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🌿 Mahatma Gandhi Park</div>`,
                bestChoice: 'Quiet Morning Walks',
                bestChoiceImg: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Pilikula Nisargadhama', 
                image: 'https://www.trawell.in/admin/images/upload/547012922Pilikula_Main.jpg', 
                description: 'An eco-education and tourism park featuring a lake, botanical garden, and cultural village.',
                openHours: '9:30 AM – 5:30 PM',
                bestTime: 'Morning (10:00 AM)',
                busRoutes: `<strong>Bus Numbers:</strong> 8, 8A, 8B, 8C<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Nanthoor<br>│<br>⚪ Vamanjoor<br>│<br>🔴 Pilikula Bus Stop<br>│<br>🚶 Walk 3 min<br>│<br>🌿 Pilikula Nisargadhama</div>`,
                bestChoice: 'Lake Boating & Artisan Village',
                bestChoiceImg: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Pilikula Biological Park', 
                image: 'https://mangaloretourism.in/images/v2/places-to-visit/pilikula-biological-park-mangalore-tourism-header.jpg', 
                description: 'A major zoo and biological park known for its wildlife conservation efforts and tiger breeding program.',
                openHours: '9:30 AM – 5:30 PM',
                bestTime: 'Morning (10:00 AM)',
                busRoutes: `<strong>Bus Numbers:</strong> 8, 8A, 8B, 8C<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Nanthoor<br>│<br>⚪ Vamanjoor<br>│<br>🔴 Pilikula Biological Park Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🦁 Pilikula Biological Park</div>`,
                bestChoice: 'Wildlife Safari & Tiger Enclosure',
                bestChoiceImg: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'breweries': {
        name: 'Breweries & Pubs in Mangalore',
        places: [
            {
                name: 'ONYX Air Lounge & Kitchen',
                image: 'https://aroundmangalore.com/wp-content/uploads/2017/10/ONYX-Air-Lounge-Kitchen-MG-Road-Mangalore-P4.jpg',
                description: 'A premium lounge offering great music, vibrant ambiance, and a fantastic selection of beverages.',
                openHours: '11:00 AM – 11:30 PM',
                bestTime: 'Weekend Evenings',
                busRoutes: `<strong>Bus Numbers:</strong> 14, 14A, 21, 21A, 30<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Balmatta<br>│<br>🔴 ONYX Lounge Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🍸 ONYX Air Lounge & Kitchen</div>`,
                bestChoice: 'Approx. Spend for 1 Person: ₹500–₹1,200',
                bestChoiceImg: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Froth On Top',
                image: 'https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Froth-On-Top.jpg',
                description: 'A cozy and lively pub perfect for hanging out with friends over drinks and delicious bar bites.',
                openHours: '11:00 AM – 11:30 PM',
                bestTime: 'Evening (7:00 PM)',
                busRoutes: `<strong>Bus Numbers:</strong> 14, 14A, 21, 21A, 30<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Balmatta<br>│<br>🔴 Froth On Top Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🍺 Froth On Top</div>`,
                bestChoice: 'Approx. Spend for 1 Person: ₹400–₹1,000',
                bestChoiceImg: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Spindrift',
                image: 'https://aroundmangalore.com/wp-content/uploads/2016/01/Spindrift-Bharath-Mall-Mangalore.jpg',
                description: 'Mangalore\'s first microbrewery offering craft beers, excellent food, and a fantastic vibe.',
                openHours: '11:00 AM – 11:30 PM',
                bestTime: 'Friday Nights',
                busRoutes: `<strong>Bus Numbers:</strong> 9A, 18, 29<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Pandeshwar<br>│<br>🔴 Spindrift Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🍻 Spindrift</div>`,
                bestChoice: 'Approx. Spend for 1 Person: ₹500–₹1,200',
                bestChoiceImg: 'https://images.unsplash.com/photo-1582222165039-4458b6fa202f?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'The Liquid Lounge',
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ba/81/14/the-liquid-lounge.jpg?w=1200&h=-1&s=1',
                description: 'A classic favorite in the city with a retro feel, great cocktails, and hearty food.',
                openHours: '11:00 AM – 11:30 PM',
                bestTime: 'Evening (8:00 PM)',
                busRoutes: `<strong>Bus Numbers:</strong> 1, 1A, 7, 14, 21<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Balmatta<br>│<br>🔴 The Liquid Lounge Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🍹 The Liquid Lounge</div>`,
                bestChoice: 'Approx. Spend for 1 Person: ₹400–₹1,000',
                bestChoiceImg: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Sherlock s Lounge and Kitchen',
                image: 'https://cdn.aroundmangalore.com/wp-content/uploads/2021/10/Sherlocks-Lounge-Kitchen-Forum-Mall-Mangalore.jpg',
                description: 'A popular pub franchise known for its signature cocktails, upbeat music, and vibrant crowd.',
                openHours: '11:00 AM – 11:30 PM',
                bestTime: 'Weekend Nights',
                busRoutes: `<strong>Bus Numbers:</strong> 9A, 18, 29<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Pandeshwar<br>│<br>🔴 Sherlock's Lounge Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🎵 Sherlock's Lounge & Kitchen</div>`,
                bestChoice: 'Approx. Spend for 1 Person: ₹500–₹1,200',
                bestChoiceImg: 'https://images.unsplash.com/photo-1563215037-29bd2f11ed42?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'boating': {
        name: 'Boating & Water Sports',
        places: [
            {
                name: 'Sultan Bathery Ferry Service',
                image: 'https://i.ytimg.com/vi/HSxVIyMfXeg/maxresdefault.jpg',
                description: 'Historic watchtower built by Tipu Sultan, serving as a scenic boating/ferry point to cross the river to Tannirbhavi Beach.',
                openHours: '9:00 AM – 7:00 PM',
                bestTime: 'Scenic river crossing (~6 km from City Center)',
                busRoutes: `<strong>Bus Numbers:</strong> 6, 6A, 6B, 6C<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Bunder<br>│<br>🔴 Sultan Bathery Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>⛴️ Sultan Bathery Ferry Point</div>`,
                bestChoice: 'Ferry Ride: ₹15 per person',
                bestChoiceImg: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Pilikula Boating Centre',
                image: 'https://aroundmangalore.com/wp-content/uploads/2015/09/Pilikula-6.png',
                description: 'Located in the lush Pilikula Nisargadhama, this scenic lake offers peaceful pedal and motor boating options surrounded by gardens.',
                openHours: '10:00 AM – 5:30 PM (Closed Mondays)',
                bestTime: 'Quiet lake ride (~12 km from City Center)',
                busRoutes: `<strong>Bus Numbers:</strong> 8, 8A, 8B, 8C<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Nanthoor<br>│<br>⚪ Vamanjoor<br>│<br>🔴 Pilikula Bus Stop<br>│<br>🚶 Walk 3 min<br>│<br>🚤 Pilikula Boating Centre</div>`,
                bestChoice: 'Pedal/Row Boating: ₹50 per person',
                bestChoiceImg: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'River Heaven Boat & Kayaking Services',
                image: 'https://d26dp53kz39178.cloudfront.net/media/uploads/products/312089878_508899604423720_3046789961187734139_n_result-1668622141115.webp',
                description: 'A serene backwater kayaking and boating facility offering beautiful river cruises, single/double kayaking, and sunset experiences.',
                openHours: '6:00 AM – 6:30 PM',
                bestTime: 'Sunrise & Sunset Kayaking (~10 km from City Center)',
                busRoutes: `<strong>Bus Numbers:</strong> 2, 2A, 36, 36M<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Kottara Chowki<br>│<br>⚪ Kuloor<br>│<br>🔴 River Heaven Stop<br>│<br>🚶 Walk 5 min<br>│<br>🛶 River Heaven Boat & Kayaking Services</div>`,
                bestChoice: 'Kayaking Session: ₹300 per person',
                bestChoiceImg: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Tannirbhavi Beach Boating',
                image: 'https://i.ytimg.com/vi/0hjzuYVE1kQ/maxresdefault.jpg',
                description: 'Enjoy thrilling water sports, including speedboats, banana boats, and jet skiing, right off the beautiful shores of Tannirbhavi Beach.',
                openHours: '9:00 AM – 7:00 PM',
                bestTime: 'Sunset Water Sports (~9 km from City Center)',
                busRoutes: `<strong>Bus Numbers:</strong> 6, 6A<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Urva Stores<br>│<br>⚪ Kuloor<br>│<br>🔴 Tannirbhavi Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🌊 Tannirbhavi Beach Boating</div>`,
                bestChoice: 'Speedboat & Banana Rides: ₹100 per person',
                bestChoiceImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'gaming': {
        name: 'Gaming & Esports Zone',
        places: [
            {
                name: 'Esports Arena (Empire Mall)',
                image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600',
                images: [
                    'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600',
                    'assets/places/esports_arena_1.jpg',
                    'assets/places/esports_arena_2.jpg'
                ],
                description: 'A popular gaming hub in Empire Mall featuring PS5 console gaming, high-end PC setups, and a lively competitive vibe. Play games like FIFA/FC 25, Valorant, BGMI, and racing games.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Afternoons & Weekends',
                busRoutes: `<strong>Bus Numbers:</strong> 4, 5, 10A, 11B, 23, 30, 30A, 37, 42, 43, 44A, 44B, 44C, 44D, 51, 51A, 54, 55<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ PVS Circle<br>│<br>🔴 Empire Mall Bus Stop<br>│<br>🚶 Walk 1 min<br>│<br>🎮 Esports Arena</div>`,
                bestChoice: 'Price: ₹100–₹250 per hour <strong>(~1 km from City Center)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'NTG Esports Lounge',
                image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600',
                images: [
                    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600',
                    'https://gamingnation.in/wp-content/uploads/2022/07/LXG-League-of-Extraordinary-Gamers.webp',
                    'https://hub.washington.edu/wordpress/wp-content/uploads/2019/10/190328_PartnerPreview_01-min-1.jpg'
                ],
                description: 'A premium gaming lounge equipped with PS5 consoles and high-performance PC stations. Perfect for competitive multiplayer games like Tekken, Mortal Kombat, Valorant, FIFA, and CS2.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Evening Sessions',
                busRoutes: `<strong>Bus Numbers:</strong> 14, 14A, 21, 21A, 30<br><strong>📍 Board At:</strong> State Bank Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>⚪ Balmatta<br>│<br>🔴 NTG Esports Stop<br>│<br>🚶 Walk 2 min<br>│<br>🎮 NTG Esports Lounge</div>`,
                bestChoice: 'Price: ₹100–₹250 per hour <strong>(~2 km from City Center)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Achilles Gaming Lounge',
                image: 'https://www.passengerterminaltoday.com/wp-content/uploads/2022/11/featured-image-5-e1669723546586.jpg',
                images: [
                    'https://www.passengerterminaltoday.com/wp-content/uploads/2022/11/featured-image-5-e1669723546586.jpg',
                    'https://img.magnific.com/premium-photo/modern-gaming-lounge-with-interactive-digital-gaming-setups-glowing-game-consoles-providing_1297101-7277.jpg?w=996',
                    'https://hellomangaluru.online/media/2022/07/WhatsApp-Image-2022-07-06-at-10.54.09-AM-1.jpeg'
                ],
                description: 'Located in Balmatta, this comfortable gaming lounge is perfect for casual and competitive gaming with PS5, FC 25, WWE 2K, GTA V, and various cricket games.',
                openHours: '10:30 AM – 10:30 PM',
                bestTime: 'Casual & Group Gaming',
                busRoutes: `<strong>Bus Numbers:</strong> 14, 14A, 21, 21A, 30<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Jyothi Circle<br>│<br>🔴 Balmatta Bus Stop<br>│<br>🚶 Walk 2 min<br>│<br>🎮 Achilles Gaming Lounge</div>`,
                bestChoice: 'Price: ₹100–₹300 per hour <strong>(~1 km from City Center)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'SMAAASH (Fiza Mall)',
                image: 'https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_518,q_auto,w_660/v1700563337/bbj/an2lalqnlzjqw9smjyub.jpg',
                images: [
                    'https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_518,q_auto,w_660/v1700563337/bbj/an2lalqnlzjqw9smjyub.jpg',
                    'https://media.insider.in/image/upload/w_800/v1755668919/vbytwhehwcnpdabe7v8x.jpg',
                    'https://media.insider.in/image/upload/c_crop,g_custom/v1772022726/gghpjfnzfdarqec5dagq.png',
                    'https://media.insider.in/image/upload/w_800/v1762517379/fyzmqlfcbd5j13htztg6.jpg'
                ],
                description: 'The ultimate family entertainment center offering immersive VR games, bowling, arcade machines, cricket simulators, and interactive dance games.',
                openHours: '11:00 AM – 10:00 PM',
                bestTime: 'Evening & Weekend Fun',
                busRoutes: `<strong>Bus Numbers:</strong> 9A, 18, 29<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Pandeshwar<br>│<br>🔴 Forum Fiza Bus Stop<br>│<br>🚶 Walk 1 min<br>│<br>🎳 SMAAASH</div>`,
                bestChoice: 'Bowling: ₹109–₹329 | Packages: ₹1319–₹1759 <strong>(~2 km from City Center)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Timezone (Fiza Mall)',
                image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
                images: [
                    'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
                    'https://im.whatshot.in/img/2023/Oct/image-2-1696423723.jpg',
                    'https://www.nexusselecttrust.com/resources/assets/images/fiza/Exterior/DSC_15361_5.png'
                ],
                description: 'A family-friendly arcade zone in Fiza Mall featuring high-tech arcade games, bowling lanes, bumper cars, basketball shootout games, and prize vending machines.',
                openHours: '11:00 AM – 10:00 PM',
                bestTime: 'Family Outings',
                busRoutes: `<strong>Bus Numbers:</strong> 9A, 18, 29<br><strong>📍 Board At:</strong> State Bank Bus Stand or KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ Hampankatta<br>│<br>⚪ Pandeshwar<br>│<br>🔴 Forum Fiza Bus Stop<br>│<br>🚶 Walk 1 min<br>│<br>🕹️ Timezone</div>`,
                bestChoice: 'Arcade: ₹40–₹150/game | Bowling: ₹200–₹400 <strong>(~2 km from City Center)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'food': {
        name: 'Favorite Foods',
        places: [
            {
                name: 'Chicken Kori Rotti',
                image: 'https://myfoodstory.com/wp-content/uploads/2015/11/chicken-kori-rotti-mangalorean-chicken-curry-recipe.1024x1024-1024x617.jpg',
                description: 'A classic Mangalorean dish featuring crisp dry wafers made of rice, served with spicy and aromatic chicken curry.',
                bestTime: 'Lunch / Dinner',
                bestChoice: 'Traditional Bunt-style Chicken Curry & Crispy Rice Wafers'
            },
            {
                name: 'Fish Fry',
                image: 'https://images.indianexpress.com/2016/04/anjal-masala-fry_820_nikhil-pai.jpg',
                description: 'Freshly caught Anjal (Seer fish) coated in a fiery, homemade red chili masala paste and shallow-fried to perfection.',
                bestTime: 'Lunch Time',
                bestChoice: 'Anjal Masala Rava Fry at Machali'
            },
            {
                name: 'Mangalore Bun',
                image: 'https://www.lifeberrys.com/img/article/cuisine-6-1631691337-lb.jpg',
                description: 'Sweet, soft, fluffy, and deep-fried banana buns served with spicy coconut chutney and sambar, a breakfast favorite.',
                bestTime: 'Breakfast / Evening',
                bestChoice: 'Hot Banana Buns with Coconut Chutney'
            },
            {
                name: 'Ghee Roast',
                image: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png',
                description: 'A rich and spicy Mangalorean specialty of meat or seafood slow-cooked in pure ghee and a complex red masala paste.',
                bestTime: 'Lunch / Dinner',
                bestChoice: 'Chicken Ghee Roast at Shetty Lunch Home'
            }
        ]
    }
};

const bangaloreCategories = [
    { id: 'parks', name: 'Parks & Gardens', desc: 'Explore green parks →', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600' },
    { id: 'heritage', name: 'Palaces & Heritage', desc: 'Explore heritage →', image: 'https://anvayaplaces.b-cdn.net/places/125_0.webp' },
    { id: 'temples', name: 'Temples & Spiritual', desc: 'Explore temples →', image: 'https://thumbs.dreamstime.com/b/adiyogi-shiva-statue-isha-yoga-center-coimbatore-185442002.jpg' },
    { id: 'shopping', name: 'Malls & Shopping', desc: 'Explore shopping →', image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=600' },
    { id: 'breweries', name: 'Pubs & Breweries', desc: 'Explore breweries →', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600' },
    { id: 'trekking', name: 'Trekking Places', desc: 'Explore trekking spots →', image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=600' },
    { id: 'restaurants', name: 'Best Restaurants', desc: 'Explore best restaurants →', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600' },
    { id: 'gaming', name: 'Gaming & Esports Zone', desc: 'Explore top game houses →', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600' }
];

const bangaloreCategoryData = {
    'parks': {
        name: 'Bangalore Parks & Gardens',
        places: [
            { 
                name: 'Cubbon Park', 
                image: 'https://bangaloretourism.in/images/v2/places-to-visit/cubbon-park-bangalore/cubbon-park-bangalore-bangalore-entry-ticket-price-bangalore-tourism-cr-pmekara.jpg', 
                description: 'The lungs of the city, a sprawling green space with historic buildings and walking trails.',
                openHours: '6:00 AM – 8:00 PM',
                bestTime: 'Morning Walks (6:00 AM – 9:00 AM)',
                bestChoice: 'Nature Walks & Heritage Building Photography',
                bestChoiceImg: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Lalbagh Botanical Garden', 
                image: 'https://www.nobroker.in/blog/wp-content/uploads/2024/03/lalbagh-botanical-garden-1.jpg', 
                description: 'A historic botanical garden featuring a majestic 19th-century glass house inspired by London.',
                openHours: '6:00 AM – 7:00 PM',
                bestTime: 'Annual Flower Show (Jan/Aug)',
                bestChoice: 'Glass House Exploration & Bonsai Garden visit',
                bestChoiceImg: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Bannerghatta National Park', 
                image: 'https://im.whatshot.in/img/2019/Nov/bp-1-cropped-1-1573218361.jpg', 
                description: 'A bio-reserve featuring an exciting tiger and lion safari, zoo, and butterfly park.',
                openHours: '9:30 AM – 5:00 PM (Closed Tuesdays)',
                bestTime: 'Morning Safari (10:00 AM)',
                bestChoice: 'Grand Jungle Safari & Butterfly Park Walk',
                bestChoiceImg: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Bugle Rock Park', 
                image: 'https://bangalore247.in/wp-content/uploads/2021/02/Bugle-Rock-Park.jpg', 
                description: 'A massive rock formation of geological importance, featuring a beautiful landscaped park and watchtower.',
                openHours: '5:00 AM – 9:00 PM',
                bestTime: 'Early Mornings',
                bestChoice: 'Watchtower Scenic Views & Rock Formations Study',
                bestChoiceImg: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'JP Park', 
                image: 'https://www.holidify.com/images/cmsuploads/compressed/JPPark_20200602150442_20200602150525.jpg', 
                description: 'Jayaprakash Narayan Biodiversity Park, featuring lush lawns, visual musical fountains, and a diverse collection of trees.',
                openHours: '5:00 AM – 9:00 AM, 4:00 PM – 8:30 PM',
                bestTime: 'Weekend Musical Fountain (7:00 PM)',
                bestChoice: 'Musical Fountain Show & Biodiversity Trails walk',
                bestChoiceImg: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Freedom Park', 
                image: 'https://ideadesign.org/wpla/wp-content/uploads/2012/09/FPB_005.jpg', 
                description: 'A unique historical public park built on the grounds of the former Central Jail, showcasing rich heritage and lush green areas.',
                openHours: '5:00 AM – 8:30 AM, 4:00 PM – 8:00 PM',
                bestTime: 'Late afternoon visits',
                bestChoice: 'Old Jail Barracks & Watchtower exploration',
                bestChoiceImg: 'https://images.unsplash.com/photo-1572244144188-fb974b26c715?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'heritage': {
        name: 'Bangalore Palaces & Heritage',
        places: [
            { 
                name: 'Bangalore Palace', 
                image: 'https://anvayaplaces.b-cdn.net/places/125_0.webp', 
                description: 'A grand royal residence built in Tudor style, modeled after Windsor Castle.',
                openHours: '10:00 AM – 5:30 PM',
                bestTime: 'Morning Visits',
                bestChoice: 'Royal Durbar Hall & Audio Tour Guide',
                bestChoiceImg: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Tipu Sultan Palace', 
                image: 'https://www.revv.co.in/blogs/wp-content/uploads/2020/10/Tipu-Sultan-Palace.jpg', 
                description: 'An ornate double-storied wooden palace featuring elegant arches, columns, and history.',
                openHours: '8:30 AM – 5:30 PM',
                bestTime: 'Winter Mornings',
                bestChoice: 'Intricate Teakwood Pillars & Museum Gallery',
                bestChoiceImg: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Devanahalli Fort', 
                image: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/Devanahalli-Fort-1.jpg', 
                description: 'A massive historic stone fort originating from 1501, famous as the birthplace of Tipu Sultan.',
                openHours: '7:00 AM – 8:30 PM',
                bestTime: 'Late Afternoon (5:00 PM)',
                bestChoice: 'Fort Bastions walk & Birthplace of Tipu Sultan',
                bestChoiceImg: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Mayo Hall', 
                image: 'https://bangalore247.in/wp-content/uploads/2021/03/Mayo-Hall-Bangalore.jpg', 
                description: 'An iconic, towering building of architectural prominence featuring beautiful Neo-Classical style elements.',
                openHours: '9:00 AM – 6:00 PM',
                bestTime: 'Weekdays',
                bestChoice: 'Neo-Classical British Stone Architecture',
                bestChoiceImg: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Kempegowda Museum', 
                image: 'https://im.whatshot.in/img/2021/Sep/1-0-cropped-1633005698.jpg', 
                description: 'A fascinating government museum dedicated to Yelahanka chieftain Kempegowda, located inside Mayo Hall.',
                openHours: '9:00 AM – 5:00 PM (Closed Sundays)',
                bestTime: 'Afternoon',
                bestChoice: 'Founder of Bangalore Historic Memorabilia',
                bestChoiceImg: 'https://images.unsplash.com/photo-1580537659444-2453e0d86fa6?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Venkatappa Art Gallery', 
                image: 'https://indiator.com/tourist-places/wp-content/uploads/2016/11/Venkatappa-Art-Gallery.jpeg', 
                description: 'A prestigious government art gallery showcasing the brilliant works of K. Venkatappa and other prominent artists.',
                openHours: '10:00 AM – 5:00 PM (Closed Mondays)',
                bestTime: 'Morning Study Hours',
                bestChoice: 'Venkatappa Paintings & Sculptures collection',
                bestChoiceImg: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Government Museum', 
                image: 'https://indianexpress.com/wp-content/uploads/2023/02/Museum_bengaluru-1.jpeg', 
                description: 'One of the oldest museums in India, featuring an exceptional collection of archaeological and historical artifacts.',
                openHours: '10:00 AM – 5:00 PM (Closed Mondays)',
                bestTime: 'Mornings',
                bestChoice: 'Ancient Stone Inscriptions & Archeological Artifacts',
                bestChoiceImg: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Attara Kacheri', 
                image: 'https://www.molon.de/galleries/India/Karnataka/Bangalore/VidhanaSoudha/images01/15%20Attara%20Kacheri%20Karnataka%20High%20Court.jpg', 
                description: 'The magnificent, red-painted stone building built in neoclassical style, housing the High Court of Karnataka.',
                openHours: '10:00 AM – 5:00 PM (Court Hours, Exterior viewable anytime)',
                bestTime: 'Evening lighting',
                bestChoice: 'Neoclassical red stone High Court architecture',
                bestChoiceImg: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'temples': {
        name: 'Bangalore Temples',
        places: [
            { 
                name: 'ISKCON Temple', 
                image: 'https://travellerscribe.com/wp-content/uploads/2024/05/iskcon-temple-bangalore-Aarti-timings.webp', 
                description: 'A massive neo-classical style cultural complex and temple dedicated to Krishna.',
                openHours: '4:15 AM – 5:00 AM, 7:15 AM – 1:00 PM, 4:00 PM – 8:30 PM',
                bestTime: 'Evening Aarti (7:00 PM)',
                bestChoice: 'Krishna Darshan & Free Prasadam Distribution',
                bestChoiceImg: 'https://images.unsplash.com/photo-1601202444012-61a5592efb3a?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Bull Temple', 
                image: 'https://wallpapers.com/images/hd/bangalore-bull-temple-edstxqi99f1y2ufd.jpg', 
                description: 'Historic temple in Basavanagudi containing a monolithic statue of Nandi the bull.',
                openHours: '6:00 AM – 8:00 PM',
                bestTime: 'Kadalekai Parishe Festival (Nov/Dec)',
                bestChoice: 'Monolithic Nandi Bull Sculpture & Peanut Festival',
                bestChoiceImg: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Shivoham Shiva Temple', 
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/79/28/ac/shiv-mandir-temple.jpg?w=1200&h=1200&s=1', 
                description: 'Features a spectacular 65-foot statue of Lord Shiva seated amidst artificial mountains.',
                openHours: '24 Hours Open',
                bestTime: 'Maha Shivratri festival night',
                bestChoice: '65-Foot Shiva Statue & cave walkthrough',
                bestChoiceImg: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Ragigudda Sri Prasanna Anjaneya Swamy Temple', 
                image: 'https://masalachaimedia.com/wp-content/uploads/2022/12/Ragigudda-Sri-Prasanna-Anjaneyaswamy-Temple-2048x1220.jpeg', 
                description: 'A beautiful hilltop temple dedicated to Lord Hanuman, offering panoramic views and a serene spiritual atmosphere.',
                openHours: '8:00 AM – 11:30 AM, 5:00 PM – 8:30 PM',
                bestTime: 'Hanuman Jayanthi festival',
                bestChoice: 'Hilltop Hanuman Darshan & Holy Spring Tank',
                bestChoiceImg: 'https://images.unsplash.com/photo-1609137982420-b1887e9cf2ef?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Shree Banashankari Devi Temple', 
                image: 'https://thetempleguru.com/wp-content/uploads/2024/08/Sri-Banashankari-Temple-Bangalore-3.jpg', 
                description: 'A historic and prominent temple dedicated to Goddess Banashankari, known for its unique worship during Rahukala.',
                openHours: '6:00 AM – 1:00 PM, 4:30 PM – 8:30 PM',
                bestTime: 'Tuesdays Rahukala (lemon shell lamps)',
                bestChoice: 'Lemon shell lamps oil lighting worship',
                bestChoiceImg: 'https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Sri Shirdi Sai Baba Temple', 
                image: 'https://blessingsonthenet.com/img/slideshow/aim_bn_1388726826.jpg', 
                description: 'A serene and sacred spiritual sanctuary dedicated to Sri Shirdi Sai Baba, fostering peace and devotion among visitors.',
                openHours: '5:00 AM – 9:00 PM',
                bestTime: 'Thursdays Aarti',
                bestChoice: 'Sai Baba sanctum chanting & peaceful meditation',
                bestChoiceImg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Adiyogi Shiva Statue', 
                image: 'https://www.explorebees.com/uploads/blogs/A-Road-Trip-from-Bangalore-to-Adiyogi-Shiva-Statue-Chikkaballapur.jpg', 
                description: 'A magnificent 112-foot tall statue of Adiyogi Shiva, representing the first yogi, located in Chikkaballapur near Bangalore.',
                openHours: '6:00 AM – 8:00 PM',
                bestTime: 'Laser light show (7:00 PM)',
                bestChoice: '112-foot Adiyogi Shiva light and sound show',
                bestChoiceImg: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'shopping': {
        name: 'Bangalore Malls & Shopping',
        places: [
            { 
                name: '🥇 UB City (1st Best)', 
                image: 'https://ubcitybangalore.in/wp-content/uploads/2021/09/Slide378.jpg', 
                description: 'Ranked 1st Best: India\'s premier ultra-luxury commercial mall offering high-end global fashion houses and fine dining.',
                openHours: '10:30 AM – 8:30 PM',
                bestTime: 'Evening Dining',
                bestChoice: 'Luxury Fashion Boutiques & Rooftop Fine Dining',
                bestChoiceImg: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '🥈 Phoenix Mall of Asia (2nd Best)', 
                image: 'https://im.whatshot.in/img/2020/Apr/phoenix-market-city-mall-whitefield-2-1586505964.jpg', 
                description: 'Ranked 2nd Best: One of the largest and most premium shopping hubs in North Bangalore, redefining luxury retail.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Weekends',
                bestChoice: 'Premium Global Retail Stores & Multiplex Movies',
                bestChoiceImg: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '🥉 Phoenix Marketcity Mall (3rd Best)', 
                image: 'https://www.worthview.com/wp-content/uploads/2018/09/Phoenix-Mall.jpg', 
                description: 'Ranked 3rd Best: Sprawling lifestyle mall in East Bangalore featuring international brands, massive dining options, and live events.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Evening Live Concerts',
                bestChoice: 'Open-air Courtyard Events & Brand Shopping',
                bestChoiceImg: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '🛍️ Lulu Mall (4th Best)', 
                image: 'https://www.bengaluru.lulumall.in/wp-content/uploads/2023/07/image.jpg', 
                description: 'Ranked 4th Best: Huge shopping destination featuring a colossal Lulu Hypermarket, massive food court, and family entertainment centers.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Morning Hypermarket Shopping',
                bestChoice: 'Lulu Hypermarket Groceries & Massive Food Court',
                bestChoiceImg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '🌊 Orion Mall (5th Best)', 
                image: 'https://lh3.googleusercontent.com/i8Vrd_X2CJmyIanO7jBQ48hppHl1BT3LEQJFlZAOhWZ3Ux05oSvq2nAcuHA_-s05AS4OF-yDT6DOlhE0_A5ioAJtCYVbbkc21_8Q5fxW=w1024-rw', 
                description: 'Ranked 5th Best: Exceptionally designed lakeside shopping mall situated next to World Trade Center in Rajajinagar.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Evening Lakeside walk',
                bestChoice: 'Lakeside Dining Promenade & Brand retail',
                bestChoiceImg: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '🏬 Nexus Mall Koramangala (6th Best)', 
                image: 'https://www.nexusselecttrust.com/resources/assets/images/nexus-koramangala/banner2.jpg', 
                description: 'Ranked 6th Best: Highly popular, iconic shopping destination in Koramangala offering excellent retail, food, and movie experiences.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Afternoons',
                bestChoice: 'Premium Fashion Brands & PVR Cinema screening',
                bestChoiceImg: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '✨ VR Bengaluru Mall (7th Best)', 
                image: 'https://bangalore247.in/wp-content/uploads/2021/02/VR-Bengaluru.jpg', 
                description: 'Ranked 7th Best: Premium boutique style shopping center, beautifully designed next to Phoenix Marketcity in Whitefield.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Weekends',
                bestChoice: 'Black Box boutique shopping & open-air cinema',
                bestChoiceImg: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '🏢 Garuda Mall (8th Best)', 
                image: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2024/10/garuda-mall-bangalore-magrath-road_0_1200.jpg.webp', 
                description: 'Ranked 8th Best: Iconic multi-level shopping destination situated in the heart of the city near Brigade Road.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Weekday evenings',
                bestChoice: 'Central city retail shopping & gaming zones',
                bestChoiceImg: 'https://images.unsplash.com/photo-1580537659444-2453e0d86fa6?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '⭐ Forum Mall Koramangala (9th Best)', 
                image: 'https://www.urtrips.net/wp-content/uploads/2022/04/Forum-Koramangala-Mall-Bengaluru-1.jpg', 
                description: 'Ranked 9th Best: One of the oldest modern shopping hubs in South Bangalore, highly popular among students and families.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Weekends',
                bestChoice: 'Classic retail shopping & student hangout food court',
                bestChoiceImg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '🏰 Royal Meenakshi Mall (10th Best)', 
                image: 'https://files.lbb.in/media/2020/01/5e131edc4687a955b19f04f7_1578311388524.jpg', 
                description: 'Ranked 10th Best: Premier family entertainment mall in South Bangalore on Bannerghatta Road, featuring a massive multiplex.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Sundays',
                bestChoice: 'Family Shopping, Dining & multiplex',
                bestChoiceImg: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '🌟 Bangalore Central Mall (11th Best)', 
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/00/0c/bc/bangalore-central-mall.jpg', 
                description: 'Ranked 11th Best: Highly popular department store styled fashion mall offering a massive array of clothing and footwear brands.',
                openHours: '11:00 AM – 9:30 PM',
                bestTime: 'Festive seasons',
                bestChoice: 'Departmental store fashion and shoes discounts',
                bestChoiceImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: '🌐 GT World Mall (12th Best)', 
                image: 'https://yometro.com/images/places/gt-world-mall.jpg', 
                description: 'Ranked 12th Best: Popular family-oriented neighborhood mall offering pocket-friendly shopping, dining, and multiplex cinema.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Weekends',
                bestChoice: 'Affordable family retail shopping & food court',
                bestChoiceImg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'breweries': {
        name: 'Bangalore Breweries & Pubs',
        places: [
            { 
                name: 'Toit', 
                image: 'https://tariqsp.com/wp-content/uploads/2025/08/beer-at-toit-indiranagar-bangalore-696x461.png', 
                description: 'A legendary and widely popular English-pub styled microbrewery situated in Indiranagar.',
                openHours: '12:00 PM – 1:00 AM',
                bestTime: 'Weekend Evenings (Book in advance)',
                bestChoice: 'Toit Weiss (Wheat Beer) & Wood-fired Pizzas',
                bestChoiceImg: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Windmills Craftworks', 
                image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800', 
                description: 'A sophisticated craft brewery offering premier jazz performances and an integrated library.',
                openHours: '12:00 PM – 1:00 AM',
                bestTime: 'Jazz Night (Fri/Sat evenings)',
                bestChoice: 'Craft Stout beer & Live Jazz performances',
                bestChoiceImg: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Arbor Brewing Company', 
                image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', 
                description: 'A lively and rustic brewery serving excellent craft IPAs, stouts, and global food.',
                openHours: '12:00 PM – 12:30 AM',
                bestTime: 'Weekday Happy Hours',
                bestChoice: 'Smooth Hefeweizen & Arbor Bangalore burgers',
                bestChoiceImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'trekking': {
        name: 'Bangalore Trekking Places',
        places: [
            { 
                name: 'TK Falls (Thottikallu Falls)', 
                image: 'https://www.thegari.in/blog/wp-content/uploads/2025/08/thottikallu-falls.jpg', 
                description: 'A beautiful waterfall near Bangalore, ideal for trekking, hiking, and enjoying scenic natural views.', 
                bestSeason: 'August to December (Monsoon/Post-monsoon)', 
                bestTime: '8:00 AM – 5:00 PM',
                openHours: '8:00 AM – 5:00 PM',
                bestChoice: 'Monsoon Waterfall Trail Hike & Photography',
                bestChoiceImg: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Muthyala Maduvu (Pearl Valley)', 
                image: 'https://im.whatshot.in/img/2022/Apr/5-muthyala-1650360066.jpg', 
                description: 'A peaceful valley featuring a gorgeous waterfall falling like pearls, set amidst deep green hills.', 
                bestSeason: 'August to November (Monsoon/Post-monsoon)', 
                bestTime: '9:00 AM – 5:00 PM',
                openHours: '9:00 AM – 5:00 PM',
                bestChoice: 'Scenic Pearl Waterfall Trail walk & valley exploration',
                bestChoiceImg: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Guhantara Underground Cave Resort', 
                image: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/11/covr-kidn-of.jpg', 
                description: 'An underground cave-themed resort offering unique adventure activities, trekking routes, and relaxation.', 
                bestSeason: 'Year-round', 
                bestTime: '9:00 AM – 5:30 PM (Day outings)',
                openHours: '9:00 AM – 5:30 PM',
                bestChoice: 'Underground Cave Dining & adventure games',
                bestChoiceImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Manchinbele Dam', 
                image: 'https://i.ytimg.com/vi/ARII9OPlN1g/maxresdefault.jpg', 
                description: 'A popular reservoir and adventure spot near Bangalore, surrounded by deciduous forests and rocky hills, ideal for trekking and water sports.', 
                bestSeason: 'September to February', 
                bestTime: '9:00 AM – 6:00 PM',
                openHours: '9:00 AM – 6:00 PM',
                bestChoice: 'Lakeside Scenic sunset photography & trekking',
                bestChoiceImg: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Nandi Hills', 
                image: 'https://i.ytimg.com/vi/K256dg0x0hQ/maxresdefault.jpg', 
                description: 'A famous ancient hill fortress in southern India, renowned for its spectacular sunrise views, misty mornings, and historic temples.', 
                bestSeason: 'September to February', 
                bestTime: '5:30 AM – 9:00 AM',
                openHours: '6:00 AM – 10:00 PM',
                bestChoice: 'Sunrise viewpoint view & Tipu Drop exploration',
                bestChoiceImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Savandurga', 
                image: 'https://www.trawell.in/admin/images/upload/116649355Bangalore_Savandurga_Main.jpg', 
                description: 'One of the largest monolith hills in Asia, offering a challenging yet highly rewarding trekking experience with stunning panoramic views.', 
                bestSeason: 'October to February', 
                bestTime: '6:00 AM – 10:00 AM',
                openHours: '6:00 AM – 6:00 PM',
                bestChoice: 'Challenging Asia Monolith Rock Face steps climbing',
                bestChoiceImg: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Shivagange Hills', 
                image: 'https://4.bp.blogspot.com/-lYvY_Kw60Lg/VaXxgbzK9vI/AAAAAAAAAS0/yUbWDjZvc5Q/s0/shivagange_cliff.jpg', 
                description: 'A historic peak resembling a Shiva Linga, known for its rocky trekking trails, spring waters, and ancient cave temples.', 
                bestSeason: 'October to March', 
                bestTime: '6:00 AM – 12:00 PM',
                openHours: '6:00 AM – 6:00 PM',
                bestChoice: 'Rocky hilltop staircase steps climbing & Temple Darshan',
                bestChoiceImg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Skandagiri Hills', 
                image: 'https://snaptoro.com/wp-content/uploads/2023/03/Beautiful-Sunrise-View-From-Skandagiri-Hills-1024x618.jpg', 
                description: 'An outstanding night trekking destination, famous for the breathtaking view of a sea of clouds at sunrise from the hilltop ruins.', 
                bestSeason: 'November to February', 
                bestTime: '12:00 AM – 7:00 AM (Night trek)',
                openHours: '12:00 AM – 10:00 AM',
                bestChoice: 'Midnight trail hiking & Sea of clouds sunrise view',
                bestChoiceImg: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Devarayanadurga Hills', 
                image: 'https://traveltwosome.com/wp-content/uploads/2015/05/Deva.jpg', 
                description: 'A tranquil hill station surrounded by lush forests, hosting historic temples perched atop the rocky cliffs.', 
                bestSeason: 'September to February', 
                bestTime: '6:00 AM – 10:00 AM or 4:00 PM – 7:00 PM',
                openHours: '6:00 AM – 7:00 PM',
                bestChoice: 'Hilltop Yoga Narasimha Swamy temple steps climb',
                bestChoiceImg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Anthargange', 
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/5b/59/0f/thrillophilia-anthargange.jpg?w=700&h=500&s=1', 
                description: 'Famous for its unique volcanic rock formations, natural cave networks, and exciting night navigation treks.', 
                bestSeason: 'October to March', 
                bestTime: '10:00 PM – 6:00 AM (Night cave exploration)',
                openHours: '24 Hours Open',
                bestChoice: 'Volcanic Cave exploration & Midnight fire camping',
                bestChoiceImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Thippagondanahalli Reservoir', 
                image: 'https://im.whatshot.in/img/2020/Dec/file6xnkslxn19215clfh3lx-1547474026-cropped-1609227059.jpg', 
                description: 'A scenic reservoir situated at the confluence of the Arkavathy and Kumudavathi rivers, offering tranquil views.', 
                bestSeason: 'September to February (Post-monsoon)', 
                bestTime: '6:00 AM – 10:00 AM or 4:00 PM – 6:00 PM',
                openHours: '9:00 AM – 5:30 PM',
                bestChoice: 'Water reservoir views & bird watching',
                bestChoiceImg: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Chunchi Falls', 
                image: 'https://www.qexperiences.in/blog/wp-content/uploads/2021/06/banner_Chunchi-Falls_989.jpg', 
                description: 'A gorgeous 50-feet high waterfall on the Arkavati River, surrounded by rocky terrain and deciduous forests.', 
                bestSeason: 'August to November (Monsoon/Post-monsoon)', 
                bestTime: '8:00 AM – 4:00 PM',
                openHours: '8:00 AM – 5:00 PM',
                bestChoice: 'Rocky Arkavati River waterfall canyon hike',
                bestChoiceImg: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Hesaraghatta Lake', 
                image: 'https://static.toiimg.com/thumb/msid-95056250,width-1070,height-580,imgsize-1110523,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg', 
                description: 'A fresh water lake and a popular bird-watching spot surrounded by grasslands, perfect for peaceful mornings.', 
                bestSeason: 'October to March (Winter)', 
                bestTime: '6:00 AM – 9:00 AM',
                openHours: '6:00 AM – 6:00 PM',
                bestChoice: 'Grasslands early morning walking & bird photography',
                bestChoiceImg: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=200'
            },
            { 
                name: 'Ramanagara', 
                image: 'https://dmgupcwbwy0wl.cloudfront.net/system/images/000/183/876/be2f7982cdc9b11cc4b12eaac949bd7d/x1000gt/axeadventure_srshills__2_.jpg?1561540288', 
                description: 'Famed as the "Sholay" hills, this rocky landscape offers adventure trekking, rock climbing, and beautiful views of Sri Revanna Siddeshwara Betta.', 
                bestSeason: 'October to March', 
                bestTime: '6:00 AM – 11:00 AM',
                openHours: '6:00 AM – 6:00 PM',
                bestChoice: 'Sholay Hills rock climbing & vulture sanctuary trek',
                bestChoiceImg: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'restaurants': {
        name: 'Best Restaurants in Bangalore',
        places: [
            {
                name: 'MTR (Mavalli Tiffin Room)',
                image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2024/04/Mavalli-Tiffin-Room-MTR.jpg',
                description: 'A legendary heritage restaurant in Bangalore, celebrated for inventing the Rava Idli and serving outstanding Brahmin-style South Indian food.',
                openHours: '6:30 AM – 11:00 AM, 12:30 PM – 9:00 PM',
                bestFoods: [
                    { name: 'Rava Idli', img: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Rava-Idli-Thumbnail.jpg', price: '₹110 (Approx)' },
                    { name: 'Masala Dosa', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', price: '₹120 (Approx)' },
                    { name: 'Filter Coffee', img: 'https://img.magnific.com/premium-photo/traditional-indian-madras-filter-coffee-steel-cup-also-known-as-tumbler-dabarah-south-indian-style-selective-focus_726363-136.jpg?w=900', price: '₹60 (Approx)' },
                    { name: 'Chandrahara', img: 'https://priyakitchenette.com/wp-content/uploads/2021/10/chandrahara-recipe-500x500.jpg', price: '₹100 (Approx)' }
                ]
            },
            {
                name: 'Vidyarthi Bhavan',
                image: 'https://b.zmtcdn.com/data/pictures/1/21359471/6e69ffecc003160a88dc29a4612b0c2a.jpg',
                description: 'A historic vegetarian restaurant in Gandhi Bazaar, iconic for its thick, crispy, ghee-roasted Masala Dosas served with mint chutney.',
                openHours: '6:30 AM – 11:30 AM, 2:00 PM – 8:00 PM (Closed Fridays)',
                bestFoods: [
                    { name: 'VB Special Masala Dosa', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', price: '₹90 (Approx)' },
                    { name: 'Rava Vada', img: 'https://izekesillatok.hu/uploads/2025/04/Rava-Vada.webp', price: '₹50 (Approx)' },
                    { name: 'Filter Coffee', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800', price: '₹45 (Approx)' },
                    { name: 'Kesari Bath', img: 'https://organicmandya.com/cdn/shop/articles/unnamed_a8077191-3135-4cd6-a7ef-78d1747762b9.jpg?v=1761819015&width=1600', price: '₹60 (Approx)' }
                ]
            },
            {
                name: 'Nagarjuna Restaurant',
                image: 'https://img.restaurantguru.com/r088-Nagarjuna-Restaurant-Whitefield-facade.jpg',
                description: 'Renowned for its spicy and authentic Andhra-style meals, biryanis, and signature chili chicken, serving food lovers since 1984.',
                openHours: '12:00 PM – 3:45 PM, 7:00 PM – 10:45 PM',
                bestFoods: [
                    { name: 'Andhra Chicken Biryani', img: 'https://tastespread.com/wp-content/uploads/2025/01/Andhra-Pradesh-Chicken-Biryani.jpg', price: '₹320 (Approx)' },
                    { name: 'Nagarjuna Special Meals', img: 'https://www.nagarjunarestaurants.com/images/menu/meals_n_biryani.jpg', price: '₹220 (Approx)' },
                    { name: 'Chilli Chicken', img: 'https://theyummydelights.com/wp-content/uploads/2022/07/chilli-chicken-dry.jpg', price: '₹310 (Approx)' },
                    { name: 'Chicken Nagarjuna Dry', img: 'https://www.spiceindiaonline.com/wp-content/uploads/2018/06/Chilli-Chicken-Dry-2.jpg', price: '₹310 (Approx)' }
                ]
            },
            {
                name: 'Truffles',
                image: 'https://i.ytimg.com/vi/paJSeQKjIF4/maxresdefault.jpg',
                description: 'Extremely popular cafe famous for its gourmet burgers, heavy shakes, and delicious desserts, a favorite hangout spot for youngsters.',
                openHours: '11:00 AM – 11:00 PM',
                bestFoods: [
                    { name: 'All American Cheese Burger', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', price: '₹250 (Approx)' },
                    { name: 'Ferrero Rocher Shake', img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=800', price: '₹210 (Approx)' },
                    { name: 'Peri Peri Chicken Burger', img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=800', price: '₹260 (Approx)' },
                    { name: 'Blueberry Cheesecake', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800', price: '₹180 (Approx)' }
                ]
            }
        ]
    },
    'gaming': {
        name: 'Gaming & Esports Zone',
        places: [
            {
                name: 'Echo Esports Lounge',
                image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600',
                images: [
                    'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600',
                    'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&q=80&w=200'
                ],
                description: 'A premium gaming lounge in Basavanagudi featuring top-spec PC rigs, high-refresh-rate displays, and PS5 gaming setups. Play games like Valorant, CS2, FIFA/FC 25, and GTA V.',
                openHours: '10:00 AM – 10:00 PM',
                bestTime: 'Afternoon & Evening Sessions',
                bestChoice: 'Price: ₹80 per hour <strong>(Basavanagudi)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'CLAN Gaming',
                image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600',
                images: [
                    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600',
                    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=200'
                ],
                description: 'A massive dedicated esports hub located in HBR Layout. Offers state-of-the-art gaming setups, comfortable racing rigs, and a streaming zone for creators.',
                openHours: '9:00 AM – 11:00 PM',
                bestTime: 'Weekend Tournaments',
                bestChoice: 'Price: ₹120 per hour <strong>(HBR Layout)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Torq03',
                image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
                images: [
                    'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
                    'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=200'
                ],
                description: 'A huge family-friendly entertainment destination in Marathahalli featuring high-speed go-karting track, arcade games, bowling lanes, and virtual reality simulators.',
                openHours: '11:00 AM – 10:00 PM',
                bestTime: 'Evening & Holidays',
                bestChoice: 'Bowling/Go-Karting: ₹250–₹500 <strong>(Marathahalli)</strong>',
                bestChoiceImg: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'food': {
        name: 'Favorite Foods',
        places: [
            {
                name: 'Obbattu (Holige)',
                image: 'https://madaboutkitchen.in/wp-content/uploads/2016/10/Obattu-3--767x1024.jpg',
                description: 'A traditional sweet flatbread stuffed with a sweet mixture of lentils and jaggery, served hot with melted ghee.',
                bestTime: 'Anytime Sweet Treat',
                bestChoice: 'Hot Ghee Obbattu (Holige)'
            },
            {
                name: 'Masala Dosa',
                image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800',
                description: 'Crispy rice crepe roasted with pure ghee, stuffed with seasoned potato mash, served with spicy chutneys.',
                bestTime: 'Morning Breakfast',
                bestChoice: 'Ghee Masala Dosa at Vidyarthi Bhavan'
            },
            {
                name: 'Filter Coffee',
                image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
                description: 'Strong, aromatic South Indian style milk coffee brewed in traditional brass filters and served frothy.',
bestTime: 'Morning / Evening',
                bestChoice: 'Classic Hot Brass Filter Coffee'
            },
            {
                name: 'Idli Vada',
                image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
                description: 'Soft, steamed rice cakes served alongside a crispy deep-fried savory lentil doughnut with piping hot sambar.',
                bestTime: 'Breakfast',
                bestChoice: 'Soft Steamed Idli & Crispy Uddina Vada'
            },
            {
                name: 'Ragi Mudde',
                image: 'https://blog.swiggy.com/wp-content/uploads/2024/02/Ragi-Mudde.jpg',
                description: 'Nutritious and wholesome finger millet balls served with spicy country-style chicken or mixed vegetable curry.',
                bestTime: 'Lunch / Dinner',
                bestChoice: 'Nutritious Ragi Mudde with Bassaru'
            }
        ]
    }
};

const mysuruCategories = [
    { id: 'heritage_culture', name: 'Heritage & Culture', desc: 'Explore royal palaces & cathedrals →', image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=600' },
    { id: 'temples', name: 'Temples', desc: 'Explore sacred temples →', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600' },
    { id: 'parks_nature', name: 'Parks & Nature', desc: 'Explore gardens, lakes & waterfalls →', image: 'https://c8.alamy.com/comp/BY24T5/illuminated-fountains-at-brindavan-gardens-in-mysore-india-BY24T5.jpg' },
    { id: 'wildlife_museums', name: 'Wildlife & Museums', desc: 'Explore zoo & unique museums →', image: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg' },
    { id: 'entertainment', name: 'Entertainment', desc: 'Explore fantasy parks & malls →', image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&q=80&w=600' },
    { id: 'best_restaurants', name: 'Best Restaurants', desc: 'Explore famous eateries & royal dining →', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600' }
];

const mysuruCategoryData = {
    'heritage_culture': {
        name: 'Heritage & Culture in Mysuru',
        places: [
            {
                name: 'Mysore Palace',
                image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=800',
                description: 'Official residence of the Wadiyar dynasty, magnificent Indo-Saracenic palace famous for golden throne and 97,000 bulb illumination.',
                rating: '4.9',
                bestTime: '10:00 AM – 5:30 PM (Illumination Sundays 7:00 PM – 8:00 PM)',
                busRoutes: 'Located in Central Mysuru (Palace Grounds).',
                bestChoice: 'Golden Throne, Durbar Hall & Sunday 97,000 Bulb Illumination',
                bestChoiceImg: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=800'
            },
            {
                name: 'Lalitha Mahal Palace',
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/26/1e/39/lalitha-mahal-palace.jpg?w=700&h=-1&s=1',
                description: 'Stunning white royal palace built in 1921 inspired by St Paul\'s Cathedral in London, nestled at the foot of Chamundi Hills.',
                rating: '4.7',
                bestTime: '10:00 AM – 6:00 PM',
                busRoutes: 'Located near Chamundi Hill foothills (~5 km from city centre).',
                bestChoice: 'Royal High Tea & Italian Marble Architecture Tour',
                bestChoiceImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/26/1e/39/lalitha-mahal-palace.jpg?w=700&h=-1&s=1'
            },
            {
                name: 'Jaganmohan Palace',
                image: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2024/03/Palace-Museum-1068x801.jpg',
                description: 'Historic royal palace turned art gallery housing rare paintings by Raja Ravi Varma and royal weapons.',
                rating: '4.6',
                bestTime: '8:30 AM – 5:30 PM',
                busRoutes: 'Located near Mysore Palace, City Centre.',
                bestChoice: 'Raja Ravi Varma Masterpiece Painting Collection',
                bestChoiceImg: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2024/03/Palace-Museum-1068x801.jpg'
            },
            {
                name: 'St. Philomena\'s Cathedral',
                image: 'https://i.pinimg.com/originals/67/7d/f9/677df9fc5e071c32c23b53c5bc59a466.jpg',
                description: 'One of Asia\'s tallest Neo-Gothic cathedrals built in 1936, inspired by Cologne Cathedral with twin 175-foot spires.',
                rating: '4.8',
                bestTime: '5:00 AM – 6:00 PM',
                busRoutes: 'Located on Ashoka Road, Lashkar Mohalla, Mysuru.',
                bestChoice: 'Neo-Gothic Twin Spires & Underground St. Philomena Relic Crypt',
                bestChoiceImg: 'https://i.pinimg.com/originals/67/7d/f9/677df9fc5e071c32c23b53c5bc59a466.jpg'
            }
        ]
    },
    'temples': {
        name: 'Temples in Mysuru',
        places: [
            {
                name: 'Chamundeshwari Temple',
                image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000',
                description: 'Ancient 12th-century shrine atop Chamundi Hills dedicated to Goddess Chamundeshwari, patron deity of Mysuru.',
                rating: '4.9',
                bestTime: '7:30 AM – 2:00 PM, 3:30 PM – 6:00 PM',
                busRoutes: 'KSRTC City Buses available directly from Mysuru Bus Stand to Chamundi Hill top.',
                bestChoice: 'Goddess Chamundeshwari Darshan & Monolithic Nandi Bull Statue',
                bestChoiceImg: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000'
            },
            {
                name: 'Sri Ranganathaswamy Temple (Srirangapatna)',
                image: 'https://www.omastrology.com/indian-temples/images/sri-ranganathaswamy-temple-srirangapatna.jpg',
                description: 'Historic 9th-century temple dedicated to Lord Vishnu on Srirangapatna island, one of the Pancharanga Kshetrams.',
                rating: '4.8',
                bestTime: '7:30 AM – 1:00 PM, 4:00 PM – 8:00 PM',
                busRoutes: 'Located in Srirangapatna (~15 km north of Mysuru).',
                bestChoice: 'Lord Ranganatha Reclining Idol Darshan & Vijayanagara Architecture',
                bestChoiceImg: 'https://www.omastrology.com/indian-temples/images/sri-ranganathaswamy-temple-srirangapatna.jpg'
            },
            {
                name: 'Venugopala Swamy Temple',
                image: 'https://jothishi.com/wp-content/uploads/2019/03/Venugopala-Swamy-Temple.jpg',
                description: 'Relocated and restored Hoysala-style temple on the backwaters of KRS reservoir near Hosa Kannambadi.',
                rating: '4.8',
                bestTime: '9:00 AM – 6:00 PM',
                busRoutes: 'Located near KRS Reservoir backwaters, Hosa Kannambadi (~25 km from Mysuru).',
                bestChoice: 'Hoysala Carvings & Backwater Sunset Temple View',
                bestChoiceImg: 'https://jothishi.com/wp-content/uploads/2019/03/Venugopala-Swamy-Temple.jpg'
            }
        ]
    },
    'parks_nature': {
        name: 'Parks & Nature in Mysuru',
        places: [
            {
                name: 'Brindavan Gardens',
                image: 'https://c8.alamy.com/comp/BY24T5/illuminated-fountains-at-brindavan-gardens-in-mysore-india-BY24T5.jpg',
                description: 'World-famous terraced garden laid out below KRS Dam, famous for synchronized musical fountain shows.',
                rating: '4.7',
                bestTime: '7:00 AM – 8:00 PM (Fountain show 6:30 PM – 7:30 PM)',
                busRoutes: 'Direct KSRTC buses from Mysuru City Bus Stand to KRS Dam.',
                bestChoice: 'Synchronized Musical Dancing Fountain Show & Terrace Rose Garden',
                bestChoiceImg: 'https://c8.alamy.com/comp/BY24T5/illuminated-fountains-at-brindavan-gardens-in-mysore-india-BY24T5.jpg'
            },
            {
                name: 'KRS Dam',
                image: 'https://tripthentic.com/wp-content/uploads/mysore-krs-dam.jpg',
                description: 'Krishna Raja Sagara Dam built across Kaveri River, a monumental engineering feat providing water and scenic reservoir views.',
                rating: '4.6',
                bestTime: '8:00 AM – 6:00 PM',
                busRoutes: 'Located at Krishnarajasagara (~19 km from Mysuru).',
                bestChoice: 'Kaveri Reservoir View & Dam Spillway Walk',
                bestChoiceImg: 'https://tripthentic.com/wp-content/uploads/mysore-krs-dam.jpg'
            },
            {
                name: 'Karanji Lake',
                image: 'https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1707395561_karanji_lake.png',
                description: 'Scenic lake surrounded by a butterfly park and housing India\'s largest walk-through aviary.',
                rating: '4.7',
                bestTime: '8:30 AM – 5:30 PM (Closed Tuesdays)',
                busRoutes: 'Located near Mysuru Zoo & Chamundi Hill road.',
                bestChoice: 'Walk-Through Aviary & Lakeside Pedal Boating',
                bestChoiceImg: 'https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1707395561_karanji_lake.png'
            },
            {
                name: 'Ranganathittu Bird Sanctuary',
                image: 'https://i1.wp.com/www.dominiquetravels.com/wp-content/uploads/2019/07/03.-Ranganathittu-Bird-Sanctuary.jpg?resize=747%2C560',
                description: 'Kaveri river islands hosting thousands of nesting migratory birds and marsh crocodiles, famous for boat safaris.',
                rating: '4.9',
                bestTime: '8:30 AM – 5:30 PM',
                busRoutes: 'Located near Srirangapatna (~18 km from Mysuru).',
                bestChoice: 'Kaveri Boat Safari, Migratory Bird Nesting & Crocodile Spotting',
                bestChoiceImg: 'https://i1.wp.com/www.dominiquetravels.com/wp-content/uploads/2019/07/03.-Ranganathittu-Bird-Sanctuary.jpg?resize=747%2C560'
            },
            {
                name: 'Balmuri Falls',
                image: 'https://mysoremedia.com/wp-content/uploads/2019/08/Balmuri-Falls-Mysore-Water-falling-from-height-picture-by-Arun-Kumar-1024x767.jpg',
                description: 'Scenic man-made step-barrier waterfall on Kaveri river, popular for picnics and movie shoots.',
                rating: '4.5',
                bestTime: '6:00 AM – 7:00 PM',
                busRoutes: 'Located near Belagula (~16 km from Mysuru).',
                bestChoice: 'Step Waterfall Walk & Riverside Picnic Spot',
                bestChoiceImg: 'https://mysoremedia.com/wp-content/uploads/2019/08/Balmuri-Falls-Mysore-Water-falling-from-height-picture-by-Arun-Kumar-1024x767.jpg'
            }
        ]
    },
    'wildlife_museums': {
        name: 'Wildlife & Museums in Mysuru',
        places: [
            {
                name: 'Mysore Zoo',
                image: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg',
                description: 'Sri Chamarajendra Zoological Gardens, one of India\'s oldest and most bio-diverse zoos established in 1892.',
                rating: '4.9',
                bestTime: '8:30 AM – 5:30 PM (Closed Tuesdays)',
                busRoutes: 'Located near Karanji Lake & Mysuru Palace.',
                bestChoice: 'Exotic Mammals, Reptile Section & Battery Vehicle Safari',
                bestChoiceImg: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg'
            },
            {
                name: 'Sand Sculpture Museum',
                image: 'https://tharaootytours.com/assets/img/mysore/Mysore-Sand-Sculpture-Museum.jpg',
                description: 'India\'s first sand sculpture museum featuring over 150 detailed sculptures crafted from 115 truckloads of sand.',
                rating: '4.6',
                bestTime: '8:30 AM – 6:30 PM',
                busRoutes: 'Located on Chamundi Hill main road (~3 km from Mysuru Palace).',
                bestChoice: 'Lord Ganesha, Mysore Dasara & Ancient Egypt Sand Sculptures',
                bestChoiceImg: 'https://tharaootytours.com/assets/img/mysore/Mysore-Sand-Sculpture-Museum.jpg'
            },
            {
                name: 'Melody World Wax Museum',
                image: 'https://www.triptomysore.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-8.41.56-PM.jpeg',
                description: 'Unique wax museum displaying life-size statues playing over 300 musical instruments from around the world.',
                rating: '4.4',
                bestTime: '9:30 AM – 7:00 PM',
                busRoutes: 'Located near Siddartha Layout / Chamundi Hill Road.',
                bestChoice: 'Life-size Musical Bands & Classical Instrument Galleries',
                bestChoiceImg: 'https://www.triptomysore.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-8.41.56-PM.jpeg'
            },
            {
                name: 'Regional Museum of Natural History',
                image: 'https://southindiatravels.in/images/resource/SouthIndia-Travels-Regional-Museum-of-Natural-History-Mysore.jpg',
                description: 'Educational museum depicting the flora, fauna, and geology of Southern India with interactive exhibits.',
                rating: '4.6',
                bestTime: '10:00 AM – 6:00 PM (Closed Mondays)',
                busRoutes: 'Located near Karanji Lake backwaters, Mysuru.',
                bestChoice: 'Western Ghats Bio-diversity Exhibit & Life-size Skeleton Models',
                bestChoiceImg: 'https://southindiatravels.in/images/resource/SouthIndia-Travels-Regional-Museum-of-Natural-History-Mysore.jpg'
            }
        ]
    },
    'entertainment': {
        name: 'Entertainment & Shopping in Mysuru',
        places: [
            {
                name: 'GRS Snow Park',
                image: 'https://grsfantasypark.com/wp-content/uploads/2023/11/snow-park-mysore-india-image-4.jpeg',
                description: 'Mysuru\'s premier indoor snow park featuring sub-zero temperatures (-10°C), real snowfall, snow slides, snowball fights, snow dance floor, and ice-themed photo spots. Includes jackets, gloves & snow boots. Entry Fee: Adult ₹699, Child ₹599, Senior ₹349.',
                rating: '4.5',
                bestTime: '10:30 AM – 7:00 PM (Rec. Time: 1–2 Hours | Entry: Adult ₹699, Child ₹599, Senior ₹349)',
                entryFee: 'Adult: ₹699 | Child: ₹599 | Senior: ₹349',
                recommendedTime: '1–2 Hours',
                bestFor: 'Snow Experience',
                busRoutes: 'Located on KRS Road, Metagalli, Mysuru (Adjacent to GRS Fantasy Park). Ph: 097403 60606.',
                bestChoice: 'Real Snowfall, Snow Slides & Ice Photo Spots (Must Visit Indoor Attraction)',
                bestChoiceImg: 'https://grsfantasypark.com/wp-content/uploads/2023/11/snow-park-mysore-india-image-4.jpeg'
            },
            {
                name: 'GRS Fantasy Park',
                image: 'https://i.ytimg.com/vi/TKWxy1o6TTQ/maxresdefault.jpg',
                description: 'Premier amusement and water park in Mysuru featuring high-thrill rides, wave pool, lazy river, splash zones, and family rides for all ages. Entry Fee: Adult ₹1,297, Child ₹1,167, Senior ₹649.',
                rating: '4.7',
                bestTime: '10:30 AM – 6:00 PM (Rec. Time: Full Day | Entry: Adult ₹1,297, Child ₹1,167, Senior ₹649)',
                entryFee: 'Adult: ₹1,297 | Child: ₹1,167 | Senior: ₹649',
                recommendedTime: 'Full Day (6–8 Hours)',
                bestFor: 'Water & Amusement Rides',
                busRoutes: 'Located on KRS Road, Metagalli (~6 km from Mysuru Railway Station). Ph: 095900 80808.',
                bestChoice: 'Water Slides, Wave Pool & Lazy River (Best Family Water Park)',
                bestChoiceImg: 'https://i.ytimg.com/vi/TKWxy1o6TTQ/maxresdefault.jpg'
            },
            {
                name: 'SkyJumper Amusement Park',
                image: 'https://d2ki7eiqd260sq.cloudfront.net/trampoline-park-in-Garuda-Mall-Bengalurue0630361-34bf-437e-8f5c-1c019b816a95.jpeg',
                images: [
                    'https://d2ki7eiqd260sq.cloudfront.net/Entry-minaf346021-c2c0-4c09-9394-764882067ab7.jpg',
                    'https://d2ki7eiqd260sq.cloudfront.net/trampoline-park-in-Garuda-Mall-Bengalurue0630361-34bf-437e-8f5c-1c019b816a95.jpeg',
                    'https://d2ki7eiqd260sq.cloudfront.net/IMG20250618122055-min3445635d-8814-471f-b0c5-c7c70c05e3af.jpg'
                ],
                description: 'High-energy indoor trampoline park featuring wall-to-wall trampolines, foam pits, ninja warrior course, dodgeball, and basketball dunk zone. (Note: Located in Garuda Mall, Bengaluru). Entry Fee: ₹500–₹1,000.',
                rating: '4.6',
                bestTime: '11:00 AM – 9:00 PM (Rec. Time: 1–2 Hours | Entry: ₹500–₹1,000 based on session)',
                entryFee: '₹500–₹1,000 (depends on 30/60/90 min session)',
                recommendedTime: '1–2 Hours',
                bestFor: 'Trampoline & Adventure',
                busRoutes: 'Located at Garuda Mall, Magrath Road, Bengaluru (~145 km from Mysuru).',
                bestChoice: 'Wall-to-wall Trampolines, Foam Pit & Ninja Course (Best Trampoline Experience)',
                bestChoiceImg: 'https://d2ki7eiqd260sq.cloudfront.net/IMG20250618122055-min3445635d-8814-471f-b0c5-c7c70c05e3af.jpg'
            },
            {
                name: 'RMS Play Zone',
                image: 'https://i.ytimg.com/vi/dvCyx-_U-XQ/maxresdefault.jpg',
                description: 'Vibrant indoor playground in Mysuru designed for kids and families, featuring trampolines, ball pool, soft play zone, slides, climbing activities, and birthday party hall. Entry Fee: ₹250–₹500.',
                rating: '4.3',
                bestTime: '10:30 AM – 8:30 PM (Rec. Time: 1–2 Hours | Entry: ₹250–₹500 based on play package)',
                entryFee: '₹250–₹500 (depends on play package)',
                recommendedTime: '1–2 Hours',
                bestFor: 'Kids Indoor Play',
                busRoutes: 'Located at BEML Layout 2nd Stage, Bhogadi, Mysuru. Ph: 093640 30077.',
                bestChoice: 'Soft Play Zone, Ball Pool, Trampoline & Slides (Best Kids Indoor Play Area)',
                bestChoiceImg: 'https://i.ytimg.com/vi/dvCyx-_U-XQ/maxresdefault.jpg'
            },
            {
                name: 'Mall of Mysore',
                image: 'https://helptravelindia.com/wp-content/uploads/2024/07/Mall-of-Mysore-Mysuru-Karnataka.jpg',
                description: 'One of Mysuru\'s largest shopping centers with international fashion brands, food court, multiplex, and Radisson Blu hotel.',
                rating: '4.6',
                bestTime: '10:00 AM – 10:00 PM',
                busRoutes: 'Located on MG Road, near Race Course / Mysuru Zoo.',
                bestChoice: 'Brand Shopping & Multi-screen Cinema Multiplex',
                bestChoiceImg: 'https://helptravelindia.com/wp-content/uploads/2024/07/Mall-of-Mysore-Mysuru-Karnataka.jpg'
            },
            {
                name: 'Nexus Centre City',
                image: 'https://www.nexusselecttrust.com/resources/assets/images/city-center/interior/DSC05338.png',
                description: 'Vibrant retail and entertainment destination with hypermarket, cineplex, game arcade, and dining outlets.',
                rating: '4.5',
                bestTime: '10:00 AM – 10:00 PM',
                busRoutes: 'Located on Hyder Ali Road, Nazarbad (~3 km from Mysuru Palace).',
                bestChoice: 'Cinepolis Cinema, Hypermarket & Food Court Dining',
                bestChoiceImg: 'https://www.nexusselecttrust.com/resources/assets/images/city-center/interior/DSC05338.png'
            }
        ]
    },
    'best_restaurants': {
        name: 'Best Restaurants in Mysuru (North & South)',
        places: [
            {
                name: 'Hotel RRR Mysuru',
                image: 'https://search-ethnic.com/wp-content/uploads/2025/01/th_3-rrr-19-59-42-800x600.jpg',
                description: 'Legendary non-veg dining establishment near Gandhi Square famous for Andhra-style banana leaf Mutton Biryani and Chilly Chicken.',
                rating: '4.8',
                bestTime: '12:00 PM – 4:00 PM, 7:00 PM – 10:30 PM',
                busRoutes: 'Located at Gandhi Square, Sayyaji Rao Road, Central Mysuru.',
                bestChoice: 'Mutton Biryani on Banana Leaf & Andhra Chilly Chicken',
                bestChoiceImg: 'https://search-ethnic.com/wp-content/uploads/2025/01/th_3-rrr-19-59-42-800x600.jpg',
                bestFoods: [
                    {
                        name: 'Banana Leaf Mutton Biryani Meal',
                        price: '₹320',
                        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/dd/26/6d/photo3jpg.jpg?w=1200&h=-1&s=1'
                    },
                    {
                        name: 'Andhra Chilli Chicken & Biryani Combo',
                        price: '₹260',
                        img: 'https://thefoodietravels.com/wp-content/uploads/2021/01/IMG-1198.JPG-1024x768.jpg'
                    }
                ]
            },
            {
                name: 'Original Mylari Hotel',
                image: 'https://fastly.4sqi.net/img/general/600x600/11008143_M8OIOUR1e2staJvh_ol5LdvqmNGbZwc6N94ozVQb_-g.jpg',
                description: 'Historic breakfast joint running since 1938, iconic for soft, pillow-like butter dosa served with saagu and fresh white butter.',
                rating: '4.9',
                bestTime: '6:30 AM – 1:30 PM, 3:30 PM – 8:30 PM',
                busRoutes: 'Located near Agrahara Circle, Mysuru.',
                bestChoice: 'Original Mylari Butter Dosa with Sagu & Fresh White Butter',
                bestChoiceImg: 'https://fastly.4sqi.net/img/general/600x600/11008143_M8OIOUR1e2staJvh_ol5LdvqmNGbZwc6N94ozVQb_-g.jpg',
                bestFoods: [
                    {
                        name: 'Original Mylari Butter Dosa & Sagu',
                        price: '₹60',
                        img: 'https://thefederal.com/h-upload/2026/01/20/590912-mysoremylarishopinbangalore-1.webp'
                    },
                    {
                        name: 'Special Soft Ghee Dosa with Fresh White Butter',
                        price: '₹75',
                        img: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/03/05160656/Original-Vinayaka-Mylari-809x455.jpg'
                    }
                ]
            },
            {
                name: 'Gayathri Tiffin Room (GTR)',
                image: 'https://images.slurrp.com/prodrich_article/ar6motue35e.webp?impolicy=slurrp-20210601&width=880&height=500',
                description: 'Beloved heritage South Indian vegetarian mess famous for crispy ghee masala dosa, crispy uddina vada, and filter coffee.',
                rating: '4.7',
                bestTime: '7:00 AM – 11:30 AM, 3:30 PM – 8:00 PM',
                busRoutes: 'Located in Chamundipuram, Mysuru.',
                bestChoice: 'GTR Special Masala Dosa, Filter Coffee & Crispy Vada',
                bestChoiceImg: 'https://images.slurrp.com/prodrich_article/ar6motue35e.webp?impolicy=slurrp-20210601&width=880&height=500',
                bestFoods: [
                    {
                        name: 'GTR Crispy Ghee Masala Dosa',
                        price: '₹70',
                        img: 'https://img02.restaurantguru.com/cb68-Gayatri-Tiffin-Room-GTR-Vegetarian-Restaurant-Mysuru-food.jpg'
                    },
                    {
                        name: 'Special Tiffin Meal & Filter Coffee',
                        price: '₹85',
                        img: 'https://thetastytales.com/wp-content/uploads/2026/04/Gayatri-Tiffin-Food-1024x771.jpg'
                    },
                    {
                        name: 'GTR Golden Masala Dosa',
                        price: '₹75',
                        img: 'https://vacaywork.com/wp-content/uploads/2024/07/GTR-Dosa.jpg'
                    },
                    {
                        name: 'Heritage South Indian Breakfast Spread',
                        price: '₹95',
                        img: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/03/05160919/Gayathri-Tiffin-Room-809x455.jpg?tr=w-1920'
                    }
                ]
            },
            {
                name: 'Guru Sweet Mart',
                image: 'https://www.itslife.in/wp-content/gallery/myszoo-eda-balamuri-krs/travel-mysore-guru-sweet-mart-2.jpg',
                description: 'Original ancestral birthplace of Mysore Pak, crafted by Kakasura Madappa, the royal chef of Maharaja Krishnaraja Wadiyar IV.',
                rating: '4.9',
                bestTime: '9:00 AM – 10:00 PM',
                busRoutes: 'Located on Sayyaji Rao Road, Near Devaraja Market.',
                bestChoice: 'Authentic Melt-in-Mouth Royal Ghee Mysore Pak',
                bestChoiceImg: 'https://www.itslife.in/wp-content/gallery/myszoo-eda-balamuri-krs/travel-mysore-guru-sweet-mart-2.jpg',
                bestFoods: [
                    {
                        name: 'Original Royal Ghee Mysore Pak',
                        price: '₹140 / 250g',
                        img: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/03/05171556/Guru-Sweet-Mart-809x455.jpg?tr=w-1920'
                    },
                    {
                        name: 'Special Motichoor Laddu',
                        price: '₹120 / 250g',
                        img: 'https://www.murarisweets.com/cdn/shop/files/MotichoorLaddu4.png?crop=center&height=2048&v=1709528857&width=2048'
                    },
                    {
                        name: 'Traditional Kova & Kobbari Sweets',
                        price: '₹130 / 250g',
                        img: 'https://caleidoscope.in/wp-content/uploads/2022/08/The-Sweet-Delicacies-of-Andhra-Pradesh-Kova-Kobbari-Laddu-1024x674.jpg'
                    }
                ]
            },
            {
                name: 'Hanumanthu Mess',
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/90/85/1f/sunday.jpg?w=1200&h=1200&s=1',
                description: 'Historic 90-year-old mess known for its woodfire-cooked mutton pulao served in traditional palm-leaf donnes.',
                rating: '4.7',
                bestTime: '6:00 AM – 10:00 PM',
                busRoutes: 'Located in Mandi Mohalla, Mysuru.',
                bestChoice: 'Heritage Mutton Pulao & Mutton Chops',
                bestChoiceImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/90/85/1f/sunday.jpg?w=1200&h=1200&s=1',
                bestFoods: [
                    {
                        name: 'Woodfire Heritage Mutton Donne Pulao',
                        price: '₹240',
                        img: 'https://i.ytimg.com/vi/NqDuoIxbXho/maxresdefault.jpg'
                    },
                    {
                        name: 'Authentic Mutton Chops Fry',
                        price: '₹210',
                        img: 'https://im.whatshot.in/img/2020/Jun/header-725x420-delhi-13076-b-1592510175.jpg'
                    },
                    {
                        name: 'Chicken Pulao & Spicy Gravy',
                        price: '₹190',
                        img: 'https://im.whatshot.in/img/2018/Dec/is-1-1545289353.jpg'
                    },
                    {
                        name: 'Hanumanthu Special Non-Veg Meal',
                        price: '₹280',
                        img: 'https://img.restaurantguru.com/r9be-Original-Hanumanthu-Devi-Mess-since-1930-meals-2022-10-2.jpg'
                    }
                ]
            },
            {
                name: 'The Spring (Radisson Blu Mysuru)',
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/c1/b9/7a/poolside-dining.jpg',
                description: 'Luxury 24-hour fine dining restaurant offering international buffets, authentic South Indian delicacies, and poolside ambiance.',
                rating: '4.6',
                bestTime: '12:30 PM – 3:30 PM, 7:00 PM – 11:00 PM',
                busRoutes: 'Located on MG Road, Mysuru (Adjacent to Mall of Mysore).',
                bestChoice: 'Multi-cuisine Luxury Buffet & Poolside Dining',
                bestChoiceImg: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/c1/b9/7a/poolside-dining.jpg',
                bestFoods: [
                    {
                        name: 'Tandoori Chicken Tikka Platter',
                        price: '₹550',
                        img: 'https://myblacktree.com/cdn/shop/files/chicken-tikka-airfryer-feat-2-removebg-preview.png?v=1691146145&width=1080'
                    },
                    {
                        name: 'Luxury Gourmet Buffet Spread',
                        price: '₹1250',
                        img: 'https://swatisani.net/kitchen/wp-content/uploads/2015/11/IMG_9546.jpg'
                    },
                    {
                        name: 'Signature Fine Dining Multi-Cuisine Platter',
                        price: '₹950',
                        img: 'https://as2.ftcdn.net/jpg/11/62/76/41/1000_F_1162764185_pdOsqoevoDVfjI2I57vwNeeN9qcc5gwu.jpg'
                    }
                ]
            }
        ]
    },
    'food': {
        name: 'Favorite Foods',
        places: [
            {
                name: 'Mysore Pak',
                image: 'https://images.slurrp.com/prodarticles/ydoju3f5ofc.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75',
                description: 'A rich, melt-in-the-mouth royal dessert made of gram flour, pure clarified butter (ghee), and sugar.',
                bestTime: 'Dessert Time',
                bestChoice: 'Authentic Royal Mysore Pak at Guru Sweet Mart'
            },
            {
                name: 'Mysore Masala Dosa',
                image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800',
                description: 'Ghee-laden crispy dosa smeared with spicy garlic-red chili chutney on the inside and loaded with potato bhaji.',
                bestTime: 'Breakfast / Evening',
                bestChoice: 'Crispy Mysore Masala Dosa with Chutney'
            },
            {
                name: 'Mysore Bonda',
                image: 'https://figarooliveoil.com/wp-content/uploads/2022/02/mysore-bonda.png',
                description: 'Golden, crispy, deep-fried fritters made with black gram flour and coconut bits, served with spicy chutney.',
                bestTime: 'Evening Snack',
                bestChoice: 'Crispy Mysore Bonda with Coconut Chutney'
            },
            {
                name: 'Hanumanthu Biryani',
                image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
                description: 'Legendary heritage mutton pulao cooked in short-grain jeera samba rice over a slow wood fire.',
                bestTime: 'Lunch / Dinner',
                bestChoice: 'Heritage Mutton Pulao at Hanumanthu Mess'
            }
        ]
    }
};

const mysuruEastWestCategories = [
    { id: 'historic', name: 'Historic Places', desc: 'Explore mansions & clock tower →', image: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2024/03/Palace-Museum-1068x801.jpg' },
    { id: 'temples', name: 'Temples', desc: 'Explore fort temples & shrines →', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600' },
    { id: 'shopping', name: 'Shopping', desc: 'Explore malls, silk & bazaars →', image: 'https://static-blog.treebo.com/wp-content/uploads/2018/04/Garuda-Mall-Mysore-1-1.jpg' },
    { id: 'museums_attractions', name: 'Museums & Attractions', desc: 'Explore manuscripts & galleries →', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600' },
    { id: 'parks_nature', name: 'Parks & Nature', desc: 'Explore nature trails & lakes →', image: 'https://live.staticflickr.com/65535/50948988027_64c8bd54e0.jpg' },
    { id: 'entertainment', name: 'Entertainment', desc: 'Explore circles & exhibition grounds →', image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&q=80&w=600' }
];

const mysuruEastWestCategoryData = {
    'historic': {
        name: 'Historic Places in Mysuru (East & West)',
        places: [
            {
                name: 'Cheluvamba Mansion',
                image: 'https://www.omastrology.com/indian-monuments/images/cheluvamba-mansion.jpg',
                description: 'Grand royal mansion built in 1910 for Princess Cheluvajammanni, currently housing CFTRI main campus.',
                rating: '4.7',
                bestTime: '9:00 AM – 5:00 PM',
                busRoutes: 'Located near Mysuru Railway Station / CFTRI Campus.',
                bestChoice: 'Heritage Architecture & CFTRI Gardens Walk',
                bestChoiceImg: 'https://www.omastrology.com/indian-monuments/images/cheluvamba-mansion.jpg'
            },
            {
                name: 'Jayalakshmi Vilas Mansion',
                image: 'https://images.borrbo.com/outings/Jayalakshmi-Vilas-Mansion/mansion-entrance.jpg',
                description: 'Built in 1905 for Princess Jayalakshammanni, located inside Manasagangotri campus, hosting folklore and archaeology museums.',
                rating: '4.8',
                bestTime: '10:00 AM – 5:00 PM',
                busRoutes: 'Located inside Manasagangotri Campus, Mysore University.',
                bestChoice: 'Folklore Museum & Royal Wooden Carvings',
                bestChoiceImg: 'https://images.borrbo.com/outings/Jayalakshmi-Vilas-Mansion/mansion-entrance.jpg'
            },
            {
                name: 'Government House (Raj Bhavan, Mysuru)',
                image: 'https://static.toiimg.com/photo/51223137/.jpg',
                description: 'Stunning 1805 neoclassical heritage mansion designed by John Malcolm, set amidst 50 acres of lush gardens.',
                rating: '4.6',
                bestTime: '9:30 AM – 5:00 PM',
                busRoutes: 'Located in Nazarbad, Mysuru.',
                bestChoice: 'Neoclassical Columns & Heritage Gardens',
                bestChoiceImg: 'https://static.toiimg.com/photo/51223137/.jpg'
            },
            {
                name: 'Mysore Fort Gateway (Old Fort Area)',
                image: 'https://thumbs.dreamstime.com/b/mysore-palace-karnataka-india-gateway-huge-grounds-was-built-king-yaduraya-inside-old-fort-th-48184265.jpg',
                description: 'Ancient fortified gateways surrounding the inner palace complex with historic ramparts and archways.',
                rating: '4.6',
                bestTime: '6:00 AM – 8:00 PM',
                busRoutes: 'Located surrounding Mysore Palace.',
                bestChoice: 'Historic Fort Gates & Wall Carvings Photography',
                bestChoiceImg: 'https://thumbs.dreamstime.com/b/mysore-palace-karnataka-india-gateway-huge-grounds-was-built-king-yaduraya-inside-old-fort-th-48184265.jpg'
            },
            {
                name: 'Dodda Gadiyara (Clock Tower)',
                image: 'https://www.itslife.in/wp-content/gallery/travel/travel-mysore-heritage-blgs-clock-tower-2.jpg',
                description: 'Iconic 75-foot silver-jubilee clock tower built in 1927 featuring Indo-Saracenic architecture.',
                rating: '4.5',
                bestTime: 'Open 24 Hours (Best at Night)',
                busRoutes: 'Located at Town Hall Circle, Mysuru.',
                bestChoice: 'Night Illumination & Town Hall Heritage Walk',
                bestChoiceImg: 'https://www.itslife.in/wp-content/gallery/travel/travel-mysore-heritage-blgs-clock-tower-2.jpg'
            }
        ]
    },
    'temples': {
        name: 'Temples in Mysuru (East & West)',
        places: [
            {
                name: 'Lakshmiramana Swamy Temple',
                image: 'https://img.magnific.com/premium-photo/lakshmiramana-swamy-temple-mysore_78361-13500.jpg',
                description: 'One of the oldest temples inside Mysore Fort premises, dedicated to Lord Vishnu, dating back to 1499.',
                rating: '4.8',
                bestTime: '6:00 AM – 12:00 PM, 5:00 PM – 8:00 PM',
                busRoutes: 'Located inside Mysore Palace Fort Complex.',
                bestChoice: 'Ancient Dravidian Sanctum & Vishnu Pooja',
                bestChoiceImg: 'https://img.magnific.com/premium-photo/lakshmiramana-swamy-temple-mysore_78361-13500.jpg'
            },
            {
                name: 'Bhuvaneshwari Temple',
                image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800',
                description: 'Located at the northern gate of Mysore Fort, featuring a silver Surya Mandala gift from the Wodeyar kings.',
                rating: '4.7',
                bestTime: '6:00 AM – 1:00 PM, 4:00 PM – 8:30 PM',
                busRoutes: 'Located at North Gate, Mysore Palace.',
                bestChoice: 'Silver Mandala & Goddess Bhuvaneshwari Blessings',
                bestChoiceImg: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800'
            },
            {
                name: 'Sri Prasanna Anjaneya Swamy Temple',
                image: 'https://i.ytimg.com/vi/E7fsyPWnQj8/maxresdefault.jpg',
                description: 'Vibrant temple dedicated to Lord Hanuman, deeply revered by locals for spiritual solace and festivals.',
                rating: '4.7',
                bestTime: '6:00 AM – 12:30 PM, 5:00 PM – 8:30 PM',
                busRoutes: 'Located near Palace Gates / Agrahara.',
                bestChoice: 'Special Tuesday/Saturday Hanuman Pooja & Chanting',
                bestChoiceImg: 'https://i.ytimg.com/vi/E7fsyPWnQj8/maxresdefault.jpg'
            },
            {
                name: 'Gayathri Temple',
                image: 'https://www.iskconmysore.org/wp-content/uploads/2022/11/008.jpg',
                description: 'Built by Maharaja Jayachamarajendra Wadiyar in 1953 inside the fort complex, dedicated to Goddess Gayathri.',
                rating: '4.6',
                bestTime: '6:00 AM – 12:00 PM, 5:00 PM – 8:00 PM',
                busRoutes: 'Located inside South-East corner of Mysore Palace Fort.',
                bestChoice: 'Quiet Meditation & Divine Gayatri Mantra Chanting',
                bestChoiceImg: 'https://www.iskconmysore.org/wp-content/uploads/2022/11/008.jpg'
            },
            {
                name: 'Trinesvaraswamy Temple',
                image: 'https://jothishi.com/wp-content/uploads/2019/03/Venugopala-Swamy-Temple.jpg',
                description: 'Ancient Shiva temple pre-dating the Wodeyar dynasty, situated at the north-east corner of Mysore Fort.',
                rating: '4.8',
                bestTime: '6:00 AM – 12:00 PM, 5:00 PM – 8:00 PM',
                busRoutes: 'Located inside North-East Mysore Fort grounds.',
                bestChoice: 'Maha Shivaratri Special Pooja & Sacred Lingam Darshan',
                bestChoiceImg: 'https://jothishi.com/wp-content/uploads/2019/03/Venugopala-Swamy-Temple.jpg'
            }
        ]
    },
    'shopping': {
        name: 'Shopping in Mysuru (East & West)',
        places: [
            {
                name: 'Garuda Mall Mysuru',
                image: 'https://static-blog.treebo.com/wp-content/uploads/2018/04/Garuda-Mall-Mysore-1-1.jpg',
                description: 'Lively shopping mall in central Mysuru featuring fashion brand stores, food court, and gaming zone.',
                rating: '4.5',
                bestTime: '10:00 AM – 10:00 PM',
                busRoutes: 'Located near City Bus Stand, Albert Victor Road.',
                bestChoice: 'Fashion Apparel Stores & Food Court Snacks',
                bestChoiceImg: 'https://static-blog.treebo.com/wp-content/uploads/2018/04/Garuda-Mall-Mysore-1-1.jpg'
            },
            {
                name: 'BM Habitat Mall',
                image: 'https://travelghat.com/wp-content/uploads/2023/08/BM-habitat-mall-mysore-image-edited.jpg',
                description: 'Modern shopping destination in Jayalakshmipuram housing electronics, clothing, and multiplex.',
                rating: '4.5',
                bestTime: '10:00 AM – 9:30 PM',
                busRoutes: 'Located in Jayalakshmipuram (~3 km from station).',
                bestChoice: 'Multiplex Cinema & Lifestyle Boutiques',
                bestChoiceImg: 'https://travelghat.com/wp-content/uploads/2023/08/BM-habitat-mall-mysore-image-edited.jpg'
            },
            {
                name: 'KSIC Silk Factory & Showroom',
                image: 'https://masthmysore.com/wp-content/uploads/2024/08/Centro-Mall-Mysore-e1723194744647.jpg',
                description: 'Authentic Mysore Silk saree production factory and showroom featuring pure gold zari sarees.',
                rating: '4.8',
                bestTime: '10:00 AM – 7:00 PM',
                busRoutes: 'Located on Mananthavady Road, Mysuru.',
                bestChoice: 'Pure Mysore Silk Zari Sarees & Factory Weaving Witness',
                bestChoiceImg: 'https://masthmysore.com/wp-content/uploads/2024/08/Centro-Mall-Mysore-e1723194744647.jpg'
            },
            {
                name: 'Badsha Bazaar',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
                description: 'Historic textile center famous for traditional Karnataka silk sarees, dress materials, and ethnic wear.',
                rating: '4.6',
                bestTime: '10:30 AM – 9:00 PM',
                busRoutes: 'Located on Sayyaji Rao Road, Mysuru.',
                bestChoice: 'Bridal Silk Sarees & Dress Fabrics',
                bestChoiceImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
            },
            {
                name: 'Ashoka Road Shopping Street',
                image: 'https://s3.india.com/wp-content/uploads/2024/09/ashoka.jpg?impolicy=Medium_Widthonly&w=800&h=541',
                description: 'Bustling market corridor known for gold and silver jewelry shops, traditional handicrafts, and artifacts.',
                rating: '4.5',
                bestTime: '11:00 AM – 9:00 PM',
                busRoutes: 'Located connecting St Philomena Cathedral to Clock Tower.',
                bestChoice: 'Gold Jewelry Shopping & Traditional Handicrafts',
                bestChoiceImg: 'https://s3.india.com/wp-content/uploads/2024/09/ashoka.jpg?impolicy=Medium_Widthonly&w=800&h=541'
            }
        ]
    },
    'museums_attractions': {
        name: 'Museums & Attractions in Mysuru (East & West)',
        places: [
            {
                name: 'Mysuru City Corporation Museum',
                image: 'https://th-i.thgim.com/public/incoming/8ld739/article66946934.ece/alternates/FREE_1200/2303_8_6_2023_19_33_36_2_OLDDCOFFICE.JPG',
                description: 'Heritage museum displaying civic history, architectural plans, and photographs of Mysuru\'s urban evolution.',
                rating: '4.4',
                bestTime: '10:00 AM – 5:30 PM',
                busRoutes: 'Located inside MCC Heritage Building, Sayyaji Rao Road.',
                bestChoice: 'Civic History Archives & Architectural Blueprint Models',
                bestChoiceImg: 'https://th-i.thgim.com/public/incoming/8ld739/article66946934.ece/alternates/FREE_1200/2303_8_6_2023_19_33_36_2_OLDDCOFFICE.JPG'
            },
            {
                name: 'Indira Gandhi Rashtriya Manav Sangrahalaya (Regional Centre)',
                image: 'https://s7ap1.scene7.com/is/image/incredibleindia/indira-gandhi-rashtriya-manav-sangrahalaya-mysore-1-attr-hero?qlt=82&ts=1751460496517',
                description: 'National Museum of Mankind regional center showcasing tribal heritage, rock art, and traditional lifestyle exhibits.',
                rating: '4.6',
                bestTime: '10:00 AM – 5:30 PM (Closed Mondays)',
                busRoutes: 'Located in Wellington House, Irwin Road.',
                bestChoice: 'Tribal Rock Art Models & Traditional Craft Exhibits',
                bestChoiceImg: 'https://s7ap1.scene7.com/is/image/incredibleindia/indira-gandhi-rashtriya-manav-sangrahalaya-mysore-1-attr-hero?qlt=82&ts=1751460496517'
            },
            {
                name: 'Chamarajendra Academy of Visual Arts (CAVA)',
                image: 'https://media.gody.vn/images/mysore/hoc-vien-nghe-thuat-thi-giac-chamarajendra-chamarajendra-academy-of-visual-arts/095ccc46b68969525f89f8caf727b9a8ef3b24d0.jpg',
                description: 'Premier fine arts institute showcasing student art galleries, contemporary paintings, and sculptures.',
                rating: '4.5',
                bestTime: '10:00 AM – 5:00 PM',
                busRoutes: 'Located in Siddartha Layout / Manasagangotri.',
                bestChoice: 'Student Fine Art Exhibition & Contemporary Sculptures',
                bestChoiceImg: 'https://media.gody.vn/images/mysore/hoc-vien-nghe-thuat-thi-giac-chamarajendra-chamarajendra-academy-of-visual-arts/095ccc46b68969525f89f8caf727b9a8ef3b24d0.jpg'
            }
        ]
    },
    'parks_nature': {
        name: 'Parks & Nature in Mysuru (East & West)',
        places: [
            {
                name: 'Happy Man Park',
                image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=800',
                description: 'Charming landscaped garden in Saraswathipuram featuring a smiling Happy Man statue, fish pond, and kids play zone.',
                rating: '4.6',
                bestTime: '4:30 PM – 8:00 PM',
                busRoutes: 'Located in Saraswathipuram (~2.5 km from station).',
                bestChoice: 'Lakeside Garden Walk & Happy Man Statue',
                bestChoiceImg: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=800'
            },
            {
                name: 'Freedom Park Mysuru',
                image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
                description: 'Sprawling green urban park built on former sub-jail land featuring walking tracks, amphitheater, and freedom memorial.',
                rating: '4.5',
                bestTime: '5:30 AM – 9:00 AM, 4:30 PM – 8:00 PM',
                busRoutes: 'Located near Subbarayanakere / City Bus Stand.',
                bestChoice: 'Morning Jogging Track & Freedom Fighters Memorial',
                bestChoiceImg: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800'
            },
            {
                name: 'Kukkarahalli Nature Trail',
                image: 'https://live.staticflickr.com/65535/50948988027_64c8bd54e0.jpg',
                description: 'Famous 4.5 km boundary trail around Kukkarahalli Lake loved by poets, runners, and nature photography lovers.',
                rating: '4.8',
                bestTime: '6:00 AM – 9:00 AM, 4:30 PM – 6:30 PM',
                busRoutes: 'Located adjacent to Manasagangotri Campus.',
                bestChoice: '4.5 km Lake Walkway & Spot-billed Pelican Bird Watching',
                bestChoiceImg: 'https://live.staticflickr.com/65535/50948988027_64c8bd54e0.jpg'
            },
            {
                name: 'Dalvoy Lake',
                image: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=800',
                description: 'Peaceful natural lake on Mysuru-Nanjangud road, popular for quiet sunset views and local wetland birds.',
                rating: '4.4',
                bestTime: '5:00 PM – 6:30 PM',
                busRoutes: 'Located on Mysuru-Nanjangud Highway (~6 km south).',
                bestChoice: 'Wetland Sunset Photography & Quiet Bird Spotting',
                bestChoiceImg: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=800'
            },
            {
                name: 'Hebbal Lake (Mysuru)',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
                description: 'Rejuvenated urban lake park in industrial Mysuru with paved walking paths, gazebo, and greenery.',
                rating: '4.5',
                bestTime: '6:00 AM – 9:00 AM, 4:30 PM – 7:00 PM',
                busRoutes: 'Located in Hebbal Industrial Area, Mysuru.',
                bestChoice: 'Lakeside Gazebo Seating & Evening Breeze Walk',
                bestChoiceImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
            }
        ]
    },
    'entertainment': {
        name: 'Entertainment in Mysuru (East & West)',
        places: [
            {
                name: 'Chamarajendra Circle',
                image: 'https://thumbs.dreamstime.com/b/statue-chamarajendra-wadiyar-illuminated-night-time-mysore-city-india-twenty-third-maharaja-263382059.jpg',
                description: 'Iconic royal circle featuring a marble statue of Maharaja Chamarajendra Wadiyar X under an ornate canopy.',
                rating: '4.7',
                bestTime: '7:00 PM – 9:00 PM (Illuminated)',
                busRoutes: 'Located right outside North Gate of Mysore Palace.',
                bestChoice: 'Royal Canopy Night Illumination Photography',
                bestChoiceImg: 'https://thumbs.dreamstime.com/b/statue-chamarajendra-wadiyar-illuminated-night-time-mysore-city-india-twenty-third-maharaja-263382059.jpg'
            },
            {
                name: 'Mysuru Exhibition Grounds',
                image: 'https://www.re-thinkingthefuture.com/wp-content/uploads/2022/09/A7988-The-Majestic-Mysuru-Dasara-A-tradition-for-centuries-Image-10-1024x675.jpg',
                description: 'Sprawling fairgrounds host to the world-famous Mysore Dasara Exhibition with amusement rides and food stalls.',
                rating: '4.7',
                bestTime: 'October to December (Dasara Season)',
                busRoutes: 'Located opposite Mysore Palace Fort Gate.',
                bestChoice: 'Giant Ferris Wheel Ride & Dasara Shopping Stalls',
                bestChoiceImg: 'https://www.re-thinkingthefuture.com/wp-content/uploads/2022/09/A7988-The-Majestic-Mysuru-Dasara-A-tradition-for-centuries-Image-10-1024x675.jpg'
            },
            {
                name: 'Mysuru Race Course',
                image: 'https://i.ytimg.com/vi/TL8waC6Yq8Q/maxresdefault.jpg',
                description: 'Picturesque thoroughbred horse racing track situated against the backdrop of Chamundi Hills.',
                rating: '4.6',
                bestTime: 'Race Days / Morning Walk Hours',
                busRoutes: 'Located on Race Course Road, Mysuru.',
                bestChoice: 'Thoroughbred Horse Racing & Chamundi Hill Backdrop View',
                bestChoiceImg: 'https://i.ytimg.com/vi/TL8waC6Yq8Q/maxresdefault.jpg'
            },
            {
                name: 'Nazarbad Heritage Area',
                image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800',
                description: 'Historic neighborhood housing heritage bungalows, colonial clubs, and traditional Mysore eateries.',
                rating: '4.5',
                bestTime: 'Evening Heritage Walks',
                busRoutes: 'Located in Nazarbad (~2 km from Palace).',
                bestChoice: 'Colonial Architecture Tour & Heritage Mess Dining',
                bestChoiceImg: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800'
            },
            {
                name: 'Open Air Theatre, Manasagangotri',
                image: 'https://ik.imagekit.io/streamone/ei/open-air-theatre-university-of-mysore.jpg',
                description: 'Spacious amphitheater inside Mysore University campus host to cultural fests, plays, and musical concerts.',
                rating: '4.6',
                bestTime: 'Evening Cultural Events',
                busRoutes: 'Located inside University of Mysore campus.',
                bestChoice: 'College Cultural Fest Performance & Live Concerts',
                bestChoiceImg: 'https://ik.imagekit.io/streamone/ei/open-air-theatre-university-of-mysore.jpg'
            }
        ]
    }
};

const manipalCategories = [
    { id: 'beaches', name: 'Beaches near Manipal', desc: 'Explore famous beaches →', image: 'https://shruthinitourist.com/wp-content/uploads/2024/05/malpe-beach-to-visit-at-udupi.jpg' },
    { id: 'temples', name: 'Temples near Manipal', desc: 'Explore sacred temples →', image: 'https://www.mystreal.com/_next/image/?url=%2Ftemple%2Fkrishna-matha-temple%2Fhero-Udipi-Sri-Krishna-matha-temple.jpg&w=2048&q=75' },
    { id: 'viewpoints', name: 'Scenic Viewpoints & Lakes', desc: 'Explore lakes & viewpoints →', image: 'https://hblimg.mmtcdn.com/content/hubble/img/manipal/mmt/activities/m_Manipal%20End%20Point%20Park-3_l_399_532.jpg' },
    { id: 'cafes', name: 'Popular Student Cafes', desc: 'Explore cafes & hangouts →', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/db/c9/b9/this-is-how-it-looks.jpg' },
    { id: 'museums', name: 'Museums & Heritage', desc: 'Explore heritage houses →', image: 'https://i.ytimg.com/vi/rLaOUhfYWzI/maxresdefault.jpg' },
    { id: 'waterfalls', name: 'Waterfalls & Kayaking', desc: 'Explore waterfalls & kayaking →', image: 'https://tripxl.com/blog/wp-content/uploads/2024/10/Arbi-Falls.jpg' },
    { id: 'trekking', name: 'Trekking Places', desc: 'Explore trekking spots →', image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=600' },
    { id: 'malls', name: 'Shopping Malls', desc: 'Explore malls in Manipal & Udupi →', image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=600' }
];

const manipalCategoryData = {
    'beaches': {
        name: 'Beaches near Manipal',
        places: [
            {
                name: 'Malpe Beach',
                image: 'https://shruthinitourist.com/wp-content/uploads/2024/05/malpe-beach-to-visit-at-udupi.jpg',
                description: 'Famous for water sports, beach activities, St. Mary\'s Island ferry, and stunning sunsets.',
                rating: '5.0',
                bestTime: '4:30 PM – 7:00 PM (Sunset)',
                busRoutes: 'Buses from Manipal/Udupi Service Bus Stand to Malpe Beach',
                bestChoice: 'Water Sports & St. Mary\'s Island Ferry <strong>(~10 km from Manipal)</strong>',
                bestChoiceImg: 'https://shruthinitourist.com/wp-content/uploads/2024/05/malpe-beach-to-visit-at-udupi.jpg'
            },
            {
                name: 'Kapu Beach',
                image: 'https://img-cdn.publive.online/fit-in/1200x675/30-stades/media/media_files/2025/07/05/kapu-beach-lighthouse-karnataka-lead-30stades-2025-07-05-21-22-30.jpg',
                description: 'Known for its iconic historic lighthouse, photography spots, and panoramic sunset views.',
                rating: '5.0',
                bestTime: '5:00 PM – 7:00 PM',
                busRoutes: 'Express/Local buses from Udupi to Kaup Light House stop',
                bestChoice: 'Historic Lighthouse & Panoramic Sunset View <strong>(~15 km from Manipal)</strong>',
                bestChoiceImg: 'https://img-cdn.publive.online/fit-in/1200x675/30-stades/media/media_files/2025/07/05/kapu-beach-lighthouse-karnataka-lead-30stades-2025-07-05-21-22-30.jpg'
            },
            {
                name: 'Padukere Beach',
                image: 'https://i.ytimg.com/vi/M0QHbMyTCDo/maxresdefault.jpg',
                description: 'Ideal for peaceful walks, family outings, and avoiding crowd noise.',
                rating: '4.0',
                bestTime: '5:00 PM – 7:15 PM',
                busRoutes: 'Local buses via Malpe bridge to Padukere',
                bestChoice: 'Peaceful Shoreline Walk & Serene Views <strong>(~11 km from Manipal)</strong>',
                bestChoiceImg: 'https://i.ytimg.com/vi/M0QHbMyTCDo/maxresdefault.jpg'
            },
            {
                name: 'Hoode Beach',
                image: 'https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL2FlMWZjMWEzMzMzZjQwMzFiMzIzNWYyZWM5YTFmODhhIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19',
                description: 'A quiet, relaxing beach spot famous for sunrise walks and sea breeze.',
                rating: '4.0',
                bestTime: '6:00 AM – 9:00 AM / Sunset',
                busRoutes: 'Local buses from Udupi towards Kemmannu/Hoode',
                bestChoice: 'Relaxing Sunrise & Serene Coastline <strong>(~12 km from Manipal)</strong>',
                bestChoiceImg: 'https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL2FlMWZjMWEzMzMzZjQwMzFiMzIzNWYyZWM5YTFmODhhIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19'
            },
            {
                name: 'Mattu Beach',
                image: 'https://thesouthfirst.com/wp-content/uploads/2023/05/Mattu-Beach-Karnataka.jpg',
                description: 'A scenic coastline great for nature lovers, photography, and bio-luminescence watching.',
                rating: '4.0',
                bestTime: '5:00 PM – 7:00 PM',
                busRoutes: 'Local buses via Katapady to Mattu village',
                bestChoice: 'Scenic Long Coastline & Photography <strong>(~18 km from Manipal)</strong>',
                bestChoiceImg: 'https://thesouthfirst.com/wp-content/uploads/2023/05/Mattu-Beach-Karnataka.jpg'
            }
        ]
    },
    'temples': {
        name: 'Temples near Manipal',
        places: [
            {
                name: 'Udupi Shri Krishna Matha',
                image: 'https://www.mystreal.com/_next/image/?url=%2Ftemple%2Fkrishna-matha-temple%2Fhero-Udipi-Sri-Krishna-matha-temple.jpg&w=2048&q=75',
                description: 'One of Karnataka\'s most famous Krishna temples, famous for its unique Kanakana Kindi darshan.',
                rating: '4.9',
                bestTime: '6:00 AM – 1:00 PM, 4:00 PM – 8:30 PM',
                busRoutes: 'Direct frequent city buses from Manipal to Udupi City/Car Street',
                bestChoice: 'Sacred Kanakana Kindi Darshan & Temple Architecture <strong>(~5 km from Manipal)</strong>',
                bestChoiceImg: 'https://www.mystreal.com/_next/image/?url=%2Ftemple%2Fkrishna-matha-temple%2Fhero-Udipi-Sri-Krishna-matha-temple.jpg&w=2048&q=75'
            },
            {
                name: 'Sri Venugopala Temple',
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/95/73/00/venugopal-temple.jpg',
                description: 'A serene and beautifully maintained temple located right on the MIT campus in Manipal.',
                rating: '4.8',
                bestTime: '7:00 AM – 12:00 PM, 4:30 PM – 7:30 PM',
                busRoutes: 'Located inside Manipal campus area',
                bestChoice: 'Serene Atmosphere & Beautiful Lawn Gardens <strong>(Inside Manipal)</strong>',
                bestChoiceImg: 'https://media-cdn.tripadvisor.com/media/photo-s/09/95/73/00/venugopal-temple.jpg'
            },
            {
                name: 'Kadiyali Shri Mahishamardini Temple',
                image: 'https://templeinkarnataka.com/wp-content/uploads/2024/08/2023-11-19-1024x768.jpg',
                description: 'Ancient temple dedicated to Goddess Mahishamardini with centuries of rich history.',
                rating: '4.7',
                bestTime: '6:00 AM – 1:00 PM, 4:00 PM – 8:00 PM',
                busRoutes: 'City buses between Manipal and Udupi stopping at Kadiyali',
                bestChoice: 'Ancient Goddess Shrine & Heritage Architecture <strong>(~6 km from Manipal)</strong>',
                bestChoiceImg: 'https://templeinkarnataka.com/wp-content/uploads/2024/08/2023-11-19-1024x768.jpg'
            },
            {
                name: 'Shri Indrani Panchadurga Parameshwari Temple',
                image: 'https://kannada.nativeplanet.com/img/2017/01/is-4-11-1484134582.jpg',
                description: 'Historic Durga temple featuring beautiful traditional architecture and spiritual ambience.',
                rating: '4.7',
                bestTime: '6:00 AM – 12:30 PM, 5:00 PM – 8:00 PM',
                busRoutes: 'Auto-rickshaw or local city bus from Manipal to Indrani',
                bestChoice: 'Historic Durga Temple & Scenic Hilltop Surroundings <strong>(~7 km from Manipal)</strong>',
                bestChoiceImg: 'https://kannada.nativeplanet.com/img/2017/01/is-4-11-1484134582.jpg'
            },
            {
                name: 'Shivapady Sri Umamaheshwara Temple',
                image: 'https://vushii.com/uploads/571625156_Sri%20Umamaheshwara%20Temple,%20Shivpadi,%20Udupi5.jpg',
                description: 'Peaceful Shiva temple known for its tranquil atmosphere and annual Atirudra Mahayaga.',
                rating: '4.8',
                bestTime: '6:00 AM – 12:00 PM, 5:00 PM – 8:00 PM',
                busRoutes: 'Short auto or city bus from Manipal core',
                bestChoice: 'Tranquil Environment & Spiritual Shiva Worship <strong>(~3 km from Manipal)</strong>',
                bestChoiceImg: 'https://vushii.com/uploads/571625156_Sri%20Umamaheshwara%20Temple,%20Shivpadi,%20Udupi5.jpg'
            }
        ]
    },
    'trekking': {
        name: 'Trekking Places near Manipal',
        places: [
            {
                name: 'Kudremukh Peak',
                image: 'https://cdn.pixabay.com/photo/2021/04/05/10/53/kudremukh-peak-6153010_960_720.jpg',
                description: 'Horse-face shaped peak in Western Ghats with lush green rolling hills. Moderate difficulty.',
                rating: '4.9',
                bestTime: 'October – February (Moderate)',
                routeIcon: '🏍️',
                routeTitle: 'Bike Rider Guide',
                busRoutes: 'Best weekend road trip! Grab your bikes and ride with your friends via Karkala & Kalasa highway (~95 km). Enjoy smooth twisty mountain roads and scenic tea estate views.',
                bestChoice: 'Lush Green Slopes & Clifftop Ridge Trek <strong>(~95 km from Manipal)</strong>',
                bestChoiceImg: 'https://cdn.pixabay.com/photo/2021/04/05/10/53/kudremukh-peak-6153010_960_720.jpg'
            },
            {
                name: 'Kodachadri Trek',
                image: 'https://res.cloudinary.com/rehash-studio/image/upload/fl_progressive:semi,f_jpg,q_60,c_fill,g_auto:subject,ar_4:3/if_w_gt_1200,w_1200/v1764396975/upload/69fe96bc-74e4-4ee1-9593-c168f408452d.png',
                description: 'Scenic mountain peak surrounded by dense tropical forests and sunset spots. Moderate difficulty.',
                rating: '4.8',
                bestTime: 'October – January (Moderate)',
                routeIcon: '🏍️',
                routeTitle: 'Bike Rider Guide',
                busRoutes: 'Epic group ride with friends! Take the Kundapura - Kollur highway to Nittur base village (~110 km). Beautiful green forest roads perfect for a fresh morning ride.',
                bestChoice: 'Peak Sunset View & Hidlumane Waterfalls Trail <strong>(~110 km from Manipal)</strong>',
                bestChoiceImg: 'https://res.cloudinary.com/rehash-studio/image/upload/fl_progressive:semi,f_jpg,q_60,c_fill,g_auto:subject,ar_4:3/if_w_gt_1200,w_1200/v1764396975/upload/69fe96bc-74e4-4ee1-9593-c168f408452d.png'
            },
            {
                name: 'Narasimha Parvatha Trek (Agumbe)',
                image: 'https://vl-prod-static.b-cdn.net/system/images/000/377/729/41317fd9a83b4845ae09e84cc05e8206/x1000gt/Narasimha_Parvatha_Trek__03.jpg?1575615093',
                description: 'The highest peak in Agumbe rainforest region, featuring adventurous jungle trails. Difficult.',
                rating: '4.7',
                bestTime: 'October – February (Difficult)',
                routeIcon: '🏍️',
                routeTitle: 'Bike Rider Guide',
                busRoutes: 'Famous Agumbe Ghats ride! Cruise with your biker squad up the 14 hair-pin curves from Someshwara to Agumbe (~85 km). Thrilling curves, cool breeze, and misty forest views.',
                bestChoice: 'Challenging Shola Forest Trail & Sunset Point <strong>(~85 km from Manipal)</strong>',
                bestChoiceImg: 'https://vl-prod-static.b-cdn.net/system/images/000/377/729/41317fd9a83b4845ae09e84cc05e8206/x1000gt/Narasimha_Parvatha_Trek__03.jpg?1575615093'
            },
            {
                name: 'Kudlu Theertha Falls Trek',
                image: 'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/02/Kudlu-Theertha-Falls-Udupi-Karnataka.jpg?w=1200&ssl=1',
                description: 'Picturesque waterfall trek hidden deep in the pristine Western Ghats rainforest. Easy–Moderate.',
                rating: '4.8',
                bestTime: 'July – January (Easy–Moderate)',
                routeIcon: '🏍️',
                routeTitle: 'Bike Rider Guide',
                busRoutes: 'Quick half-day bike trip! Ride towards Hebri & Someshwara (~45 km) with your friends. Short, fun road trip leading right to a refreshing jungle waterfall trail.',
                bestChoice: 'Pristine Waterfall Pool & Rainforest Canopy Walk <strong>(~45 km from Manipal)</strong>',
                bestChoiceImg: 'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/02/Kudlu-Theertha-Falls-Udupi-Karnataka.jpg?w=1200&ssl=1'
            },
            {
                name: 'Koosalli Falls Trek',
                image: 'https://mytrip.guide/wp-content/uploads/2020/09/Koosali-Falls.jpg',
                description: 'Magnificent six-tiered cascading waterfall trek surrounded by rocky cliffs. Moderate.',
                rating: '4.6',
                bestTime: 'July – December (Moderate)',
                routeIcon: '🏍️',
                routeTitle: 'Bike Rider Guide',
                busRoutes: 'Coastal highway rider route! Ride along NH66 towards Kundapura & Byndoor (~70 km) with your friends, then take the village forest road to the trek base.',
                bestChoice: 'Cascading Waterfalls & Rocky Stream Crossing <strong>(~70 km from Manipal)</strong>',
                bestChoiceImg: 'https://mytrip.guide/wp-content/uploads/2020/09/Koosali-Falls.jpg'
            }
        ]
    },
    'viewpoints': {
        name: 'Scenic Viewpoints & Lakes in Manipal',
        places: [
            {
                name: 'End Point Swarna River Viewpoint',
                image: 'https://hblimg.mmtcdn.com/content/hubble/img/manipal/mmt/activities/m_Manipal%20End%20Point%20Park-3_l_399_532.jpg',
                description: 'Clifftop park offering panoramic views of Swarna River valley, sunset, and Western Ghats range.',
                rating: '4.9',
                bestTime: '5:00 PM – 7:00 PM (Sunset)',
                busRoutes: '1.5 km from MIT Quadrangle. Easy 5-min bike ride or sunset walk with friends.',
                bestChoice: 'Clifftop Sunset View over Swarna River Valley',
                bestChoiceImg: 'https://hblimg.mmtcdn.com/content/hubble/img/manipal/mmt/activities/m_Manipal%20End%20Point%20Park-3_l_399_532.jpg'
            },
            {
                name: 'Mannapalla Lake Park',
                image: 'https://th-i.thgim.com/public/news/cities/Mangalore/20mb2f/article70274376.ece/alternates/FREE_1200/IMG_3180.jpg',
                description: 'A vast natural lake with a 3 km paved walking trail, lush greenery, and peaceful bird-watching spots.',
                rating: '4.6',
                bestTime: '6:00 AM – 9:00 AM / 4:30 PM – 7:00 PM',
                busRoutes: 'Located near Manipal Lake road. Short 5-min ride from Tiger Circle.',
                bestChoice: '3 km Lakeside Jogging Track & Sunset Walk',
                bestChoiceImg: 'https://th-i.thgim.com/public/news/cities/Mangalore/20mb2f/article70274376.ece/alternates/FREE_1200/IMG_3180.jpg'
            },
            {
                name: 'Kemmannu Hanging Bridge',
                image: 'https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Kemmannu-Hanging-Bridge.jpg',
                description: 'Scenic wooden suspension bridge built across backwaters, surrounded by coconut groves.',
                rating: '4.7',
                bestTime: '4:00 PM – 6:30 PM',
                busRoutes: 'Ride via Udupi - Tonse road (~14 km from Manipal). Beautiful backwater road trip with friends.',
                bestChoice: 'Suspension Bridge Walk & Backwater Photography',
                bestChoiceImg: 'https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Kemmannu-Hanging-Bridge.jpg'
            },
            {
                name: 'Delta Beach (Bengre Confluence)',
                image: 'https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/m_Delta_Beach_1_l_360_640.jpg',
                description: 'Unique peninsula strip where Swarna river meets Arabian sea, famous for coconut trees and calm waters.',
                rating: '4.8',
                bestTime: '4:30 PM – 7:00 PM',
                busRoutes: 'Ride through scenic backwater strips (~18 km from Manipal). Perfect evening group ride.',
                bestChoice: 'River-Sea Confluence View & Fresh Seafood Shacks',
                bestChoiceImg: 'https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/m_Delta_Beach_1_l_360_640.jpg'
            }
        ]
    },
    'cafes': {
        name: 'Popular Student Cafes & Hangouts in Manipal',
        places: [
            {
                name: 'The Egg Factory',
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/db/c9/b9/this-is-how-it-looks.jpg',
                description: 'Iconic Manipal student hangout famous for creative egg dishes, burgers, pasta, and vibrant vibe.',
                rating: '4.7',
                bestTime: '12:00 PM – 10:30 PM',
                busRoutes: 'Located right near End Point road, Manipal. Walk or bike from campus.',
                bestChoice: 'Egg Kebabs, Cheese Omelettes & Cold Coffee',
                bestChoiceImg: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/db/c9/b9/this-is-how-it-looks.jpg'
            },
            {
                name: 'Eye of the Needle Cafe',
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/93/c7/48/eye-of-the-tiger.jpg',
                description: 'Cozy, rustic aesthetic cafe serving specialty brewed coffee, wood-fired pizzas, and gourmet desserts.',
                rating: '4.8',
                bestTime: '11:00 AM – 11:00 PM',
                busRoutes: 'Located near End Point Road, Manipal. Quick 3-min ride from Tiger Circle.',
                bestChoice: 'Specialty Cappuccino & Artisanal Pizza',
                bestChoiceImg: 'https://media-cdn.tripadvisor.com/media/photo-s/07/93/c7/48/eye-of-the-tiger.jpg'
            },
            {
                name: 'Dollops Restaurant',
                image: 'https://www.crazymasalafood.com/wp-content/images/dollops.png',
                description: 'Legendary budget-friendly restaurant loved by generations of Manipal students for Indo-Chinese & Indian meals.',
                rating: '4.6',
                bestTime: '12:30 PM – 10:30 PM',
                busRoutes: 'Located on Commercial Complex Road, Tiger Circle, Manipal.',
                bestChoice: 'Butter Chicken, Dragon Chicken & Fried Rice',
                bestChoiceImg: 'https://www.crazymasalafood.com/wp-content/images/dollops.png'
            },
            {
                name: 'Snack Shack',
                image: 'https://b117436.smushcdn.com/117436/wp-content/uploads/2021/09/Snack-Shack.jpg?lossy=2&strip=1&webp=1',
                description: 'Popular casual food joint known for quick bites, juicy burgers, rolls, and thick shakes.',
                rating: '4.5',
                bestTime: '1:00 PM – 11:00 PM',
                busRoutes: 'Located near Student Plaza corridor, Manipal.',
                bestChoice: 'Crispy Chicken Burger & Chocolate Monster Shake',
                bestChoiceImg: 'https://b117436.smushcdn.com/117436/wp-content/uploads/2021/09/Snack-Shack.jpg?lossy=2&strip=1&webp=1'
            }
        ]
    },
    'museums': {
        name: 'Museums & Heritage Houses in Manipal',
        places: [
            {
                name: 'Hasta Shilpa Heritage Village Museum',
                image: 'https://i.ytimg.com/vi/rLaOUhfYWzI/maxresdefault.jpg',
                description: 'A world-renowned open-air museum featuring 26 restored traditional South Indian heritage homes and art collections.',
                rating: '4.9',
                bestTime: '10:00 AM – 5:00 PM',
                busRoutes: 'Located near Christ School Road, Manipal (~2 km from Tiger Circle).',
                bestChoice: 'Guided Heritage Architecture Tour & Vintage Artifacts',
                bestChoiceImg: 'https://i.ytimg.com/vi/rLaOUhfYWzI/maxresdefault.jpg'
            },
            {
                name: 'Manipal Museum of Anatomy & Pathology (MAP)',
                image: 'https://www.manipal.edu/content/dam/manipal/mu/kmc-manipal/images/galleryImage/KMCMpltrial/m9.JPG',
                description: 'One of Asia\'s largest medical museums, displaying over 3,000 anatomical specimens and skeletons.',
                rating: '4.8',
                bestTime: '8:00 AM – 6:00 PM',
                busRoutes: 'Located inside KMC Campus, Manipal.',
                bestChoice: 'Anatomy & Comparative Pathology Specimen Gallery',
                bestChoiceImg: 'https://www.manipal.edu/content/dam/manipal/mu/kmc-manipal/images/galleryImage/KMCMpltrial/m9.JPG'
            },
            {
                name: 'Dr. T.M.A. Pai Museum & Planetarium',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
                description: 'Interactive science museum and digital planetarium documenting the founding history of Manipal.',
                rating: '4.5',
                bestTime: '9:30 AM – 5:30 PM',
                busRoutes: 'Located near Manipal University Admin Block.',
                bestChoice: 'Digital Astronomy Show & Manipal History Gallery',
                bestChoiceImg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Corporation Bank Heritage Museum (Coin Museum), Udupi',
                image: 'https://i0.wp.com/rashminotes.com/wp-content/uploads/2019/03/c1.png?resize=663%2C361',
                description: 'Set up in the founder\'s ancestral house, this rare numismatic museum displays ancient Indian coins from 400 BC, historical notes, and financial heritage.',
                rating: '4.7',
                bestTime: '10:00 AM – 5:00 PM (Closed Sundays)',
                busRoutes: 'Located near Founder Branch, KM Marg, Udupi (~5 km from Manipal).',
                bestChoice: 'Ancient Numismatic Coin Collection & Heritage Banking Artifacts',
                bestChoiceImg: 'https://i0.wp.com/rashminotes.com/wp-content/uploads/2019/03/c1.png?resize=663%2C361'
            },
            {
                name: 'Smriti Bhavan Museum (Dr. T.M.A. Pai House)',
                image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800',
                description: 'The restored house of Dr. T.M.A. Pai, visionary founder of modern Manipal, showcasing personal artifacts, vintage photos, and historic milestones.',
                rating: '4.6',
                bestTime: '9:30 AM – 5:30 PM',
                busRoutes: 'Located near End Point Road, Manipal (~1.5 km from Tiger Circle).',
                bestChoice: 'Dr. T.M.A. Pai Personal Memorabilia & Manipal Founding Photo Archive',
                bestChoiceImg: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800'
            }
        ]
    },
    'waterfalls': {
        name: 'Waterfalls & Kayaking near Manipal',
        places: [
            {
                name: 'Arbi Falls (Manipal Hidden Falls)',
                image: 'https://tripxl.com/blog/wp-content/uploads/2024/10/Arbi-Falls.jpg',
                description: 'Manipal\'s local hidden jungle waterfall that comes alive during monsoon season, surrounded by greenery.',
                rating: '4.6',
                bestTime: 'July – November (Post-Monsoon)',
                busRoutes: 'Located in Dasharath Nagar, Manipal (~3 km from campus). Short bike ride & 10-min trail walk.',
                bestChoice: 'Monsoon Jungle Dip & Forest Stream Walk',
                bestChoiceImg: 'https://tripxl.com/blog/wp-content/uploads/2024/10/Arbi-Falls.jpg'
            },
            {
                name: 'Kemmannu Kayaking & Backwater Adventure',
                image: 'https://luxevista.in/wp-content/uploads/2024/12/kemmannu-hanging-bridge-kayaking.jpeg',
                description: 'Thrilling backwater kayaking and stand-up paddleboarding through quiet mangrove river channels.',
                rating: '4.8',
                bestTime: '7:00 AM – 10:00 AM / 4:00 PM – 6:30 PM',
                busRoutes: 'Located near Kemmannu bridge (~13 km from Manipal). Scenic ride with friends.',
                bestChoice: 'Sunset Kayaking Tour through Mangrove Islands',
                bestChoiceImg: 'https://luxevista.in/wp-content/uploads/2024/12/kemmannu-hanging-bridge-kayaking.jpeg'
            },
            {
                name: 'Jogi Gundi Falls (Agumbe Trail)',
                image: 'https://hoimalnad.com/wp-content/uploads/2025/10/Jogi-Gundi-Falls-Hidden-Gem-of-Agumbe-Thirthahalli-Karnataka-1200x787.jpg',
                description: 'Serene forest waterfall cascading into a natural swimming pool inside the dense Agumbe rainforest.',
                rating: '4.7',
                bestTime: 'August – January',
                busRoutes: 'Ride towards Agumbe Ghats (~50 km from Manipal). Great biker trip with friends.',
                bestChoice: 'Natural Rainforest Pool Swimming',
                bestChoiceImg: 'https://hoimalnad.com/wp-content/uploads/2025/10/Jogi-Gundi-Falls-Hidden-Gem-of-Agumbe-Thirthahalli-Karnataka-1200x787.jpg'
            }
        ]
    },
    'malls': {
        name: 'Shopping Malls in Manipal & Udupi',
        places: [
            {
                name: 'Canara Mall (Manipal)',
                image: 'https://www.bharathbuilders.co.in/wp-content/uploads/2019/04/canara-mall-370x280.jpg',
                description: 'Manipal\'s central shopping destination featuring INOX multiplex cinema, top retail brand outlets, food court, and entertainment zones.',
                rating: '4.6',
                bestTime: '10:00 AM – 10:00 PM',
                busRoutes: 'Located on Manipal-Udupi Main Road (~1 km from Tiger Circle).',
                bestChoice: 'INOX Multiplex Movies & Multi-cuisine Food Court',
                bestChoiceImg: 'https://www.bharathbuilders.co.in/wp-content/uploads/2019/04/canara-mall-370x280.jpg'
            },
            {
                name: 'City Centre Mall (Udupi)',
                image: 'https://udupicitycentre.com/wp-content/uploads/2022/04/Banner.jpg',
                description: 'Major shopping mall located in central Udupi featuring retail fashion stores, multiplex cinema, hypermarket, and casual dining options.',
                rating: '4.5',
                bestTime: '10:00 AM – 10:00 PM',
                busRoutes: 'Located near Udupi Service Bus Stand, KM Marg (~5 km from Manipal).',
                bestChoice: 'Retail Shopping & Cinema Screen',
                bestChoiceImg: 'https://udupicitycentre.com/wp-content/uploads/2022/04/Banner.jpg'
            },
            {
                name: 'Time Square Mall (Udupi)',
                image: 'https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/jst_27052023_timessquare_2.jpg',
                description: 'Modern lifestyle and commercial mall on the Udupi-Manipal highway offering premium fashion outlets, games arcade, and rooftop eateries.',
                rating: '4.5',
                bestTime: '10:00 AM – 10:00 PM',
                busRoutes: 'Located near Kalsanka Junction, Udupi-Manipal Road (~4 km from Manipal).',
                bestChoice: 'Lifestyle Shopping & Family Entertainment Zone',
                bestChoiceImg: 'https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/jst_27052023_timessquare_2.jpg'
            }
        ]
    },
    'food': {
        name: 'Famous Food in Manipal',
        places: [
            {
                name: 'Gadbad Ice Cream',
                image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
                description: 'Legendary multi-layered ice cream sundae served with jelly, dry fruits, and fresh fruits.',
                bestTime: 'Afternoon / Evening Dessert',
                bestChoice: 'Original Diana Gadbad Ice Cream'
            },
            {
                name: 'Ghee Roast',
                image: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png',
                description: 'Fiery red, tangy, and rich ghee roast curry made with pure ghee and roasted spices.',
                bestTime: 'Lunch / Dinner',
                bestChoice: 'Paneer / Chicken Ghee Roast'
            },
            {
                name: 'Neer Dosa',
                image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800',
                description: 'Paper-thin, soft, lace-like crepes made from fine rice batter, served with coconut chutney.',
                bestTime: 'Breakfast / Tiffin',
                bestChoice: 'Soft Neer Dosa with Fresh Coconut Chutney'
            },
            {
                name: 'Mangalore Bun',
                image: 'https://www.lifeberrys.com/img/article/cuisine-6-1631691337-lb.jpg',
                description: 'Fluffy, mildly sweet, deep-fried bread made with ripe bananas and flour, served hot with coconut chutney.',
                bestTime: 'Breakfast / Evening Snack',
                bestChoice: 'Hot Mangalore Buns with Coconut Chutney'
            }
        ]
    }
};


const bangaloreEastWestCategories = [
    { id: 'shopping', name: 'Malls & Shopping (East & West)', desc: 'Explore malls & markets →', image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=600' },
    { id: 'cafes_food', name: 'Cafes & Food Hubs', desc: 'Explore trendy eateries →', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600' },
    { id: 'heritage_museums', name: 'Museums & Heritage', desc: 'Explore aviation & art →', image: 'https://im.whatshot.in/img/2021/Sep/1-0-cropped-1633005698.jpg' },
    { id: 'parks_lakes', name: 'Lakes & Scenic Parks', desc: 'Explore botanical gardens & lake trails →', image: 'https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg' },
    { id: 'breweries', name: 'Pubs & Nightlife', desc: 'Explore craft breweries →', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600' },
    { id: 'temples', name: 'Historic Temples', desc: 'Explore ancient shrines →', image: 'https://thumbs.dreamstime.com/b/adiyogi-shiva-statue-isha-yoga-center-coimbatore-185442002.jpg' }
];

const bangaloreEastWestCategoryData = {
    'shopping': {
        name: 'Shopping Malls & Markets in Bangalore (East & West)',
        places: [
            {
                name: 'Phoenix Marketcity Whitefield',
                image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=800',
                description: 'Sprawling shopping destination with international luxury fashion brands, PVR P[XL] multiplex, and gourmet dining.',
                rating: '4.8',
                bestTime: '10:00 AM – 10:00 PM',
                busRoutes: 'Located on Whitefield Main Road. Buses: 335E, 500D.',
                bestChoice: 'PVR P[XL] Screening & Open-Air Courtyard Dining',
                bestChoiceImg: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'VR Bengaluru (Black Box)',
                image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800',
                description: 'Lifestyle black box mall adjacent to Phoenix Marketcity, hosting IMAX cinema, rooftop lounges, and artisan markets.',
                rating: '4.7',
                bestTime: '11:00 AM – 10:30 PM',
                busRoutes: 'Whitefield Main Road, Hoodi Halt (~500m from Phoenix).',
                bestChoice: 'IMAX 3D Experience & Rooftop Skydeck Bar',
                bestChoiceImg: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Commercial Street',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
                description: 'Historic shopping district in East Bangalore famous for silk sarees, ethnic wear, jewelry, and street fashion.',
                rating: '4.7',
                bestTime: '11:00 AM – 9:00 PM',
                busRoutes: 'Located in Tasker Town, Near MG Road Metro Station.',
                bestChoice: 'Silk Sarees Shopping & Street Food Tasting',
                bestChoiceImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Orion Mall (Rajajinagar)',
                image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=800',
                description: 'Lakeside shopping complex in West Bangalore featuring a picturesque artificial lake promenade.',
                rating: '4.8',
                bestTime: '10:00 AM – 10:00 PM',
                busRoutes: 'Located at Brigade Gateway, Rajajinagar (West Bangalore).',
                bestChoice: 'Lakeside Promenade Stroll & PVR Gold Class Movies',
                bestChoiceImg: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'cafes_food': {
        name: 'Popular Cafes & Food Hubs in East & West Bangalore',
        places: [
            {
                name: 'Indiranagar 100ft Road Cafe Corridor',
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
                description: 'Bustling avenue lined with specialty coffee houses, artisan bakeries, and global fusion restaurants.',
                rating: '4.8',
                bestTime: '11:00 AM – 11:00 PM',
                busRoutes: 'Indiranagar Metro Station (Purple Line).',
                bestChoice: 'Specialty Cold Brew Coffee & Artisanal Pizza',
                bestChoiceImg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Corner House Ice Cream (Indiranagar / Jayanagar)',
                image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
                description: 'Legendary Bangalore dessert parlour world-famous for its iconic "Death By Chocolate" (DBC) sundae.',
                rating: '4.9',
                bestTime: '1:00 PM – 11:30 PM',
                busRoutes: 'Located on 100ft Road Indiranagar & 4th Block Jayanagar.',
                bestChoice: 'Original Death By Chocolate (DBC) Sundae',
                bestChoiceImg: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'VV Puram Food Street',
                image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
                description: 'Famous vegetarian street food lane offering hot Dosa varieties, Holige, and Rose Gulkand ice cream.',
                rating: '4.7',
                bestTime: '6:00 PM – 11:00 PM',
                busRoutes: 'Located in Basavanagudi / VV Puram (South-West Bangalore).',
                bestChoice: 'Hot Floating Butter Dosa & Rose Gulkand Ice Cream',
                bestChoiceImg: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'heritage_museums': {
        name: 'Museums & Cultural Heritage in Bangalore (East & West)',
        places: [
            {
                name: 'HAL Aerospace Museum',
                image: 'https://im.whatshot.in/img/2021/Sep/1-0-cropped-1633005698.jpg',
                description: 'India’s premier aviation museum displaying indigenous aircraft, helicopters, flight simulators, and jet engines.',
                rating: '4.8',
                bestTime: '9:00 AM – 5:00 PM (Closed Mondays)',
                busRoutes: 'Located on Old Airport Road, Marathahalli (~4 km from Indiranagar).',
                bestChoice: 'Real Fighter Jet Displays & Flight Simulator Motion Ride',
                bestChoiceImg: 'https://im.whatshot.in/img/2021/Sep/1-0-cropped-1633005698.jpg'
            },
            {
                name: 'National Gallery of Modern Art (NGMA)',
                image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
                description: 'Housed in the heritage Manikyavelu Mansion, featuring contemporary Indian art galleries and sculpture garden cafe.',
                rating: '4.7',
                bestTime: '10:00 AM – 6:00 PM (Closed Mondays)',
                busRoutes: 'Located on Palace Road, Vasanth Nagar.',
                bestChoice: 'Sculpture Garden Stroll & Heritage Mansion Art Walk',
                bestChoiceImg: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'parks_lakes': {
        name: 'Lakes & Scenic Parks in Bangalore (East & West)',
        places: [
            {
                name: 'Lalbagh Botanical Garden',
                image: 'https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg',
                description: 'Sprawling 240-acre botanical garden featuring the iconic glass house, tropical plant species, and serene walking avenues.',
                rating: '4.8',
                bestTime: '6:00 AM – 7:00 PM',
                busRoutes: 'Located near Lalbagh Metro Station.',
                bestChoice: 'Glass House Flower Displays & Morning Nature Stroll',
                bestChoiceImg: 'https://media1.thrillophilia.com/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg'
            },
            {
                name: 'Ulsoor Lake (Halasuru Lake)',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
                description: 'One of Bangalore’s oldest and largest lakes, spread over 120 acres with islands, boating, and paved walking paths.',
                rating: '4.6',
                bestTime: '6:00 AM – 9:00 AM / 4:00 PM – 7:00 PM',
                busRoutes: 'Located near MG Road / Halasuru Metro Station.',
                bestChoice: 'Lakeside Sunset Walk & Boating through Green Islands',
                bestChoiceImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Sankey Tank',
                image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=800',
                description: 'Man-made lake in West Bangalore with a forested perimeter walkway, duck pond, and peaceful benches.',
                rating: '4.7',
                bestTime: '6:00 AM – 9:00 AM / 4:30 PM – 7:00 PM',
                busRoutes: 'Located between Malleshwaram and Sadashivanagar (West Bangalore).',
                bestChoice: 'Boundary Forest Pathway Walk & Sunset Photography',
                bestChoiceImg: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'breweries': {
        name: 'Craft Breweries & Pubs in East & West Bangalore',
        places: [
            {
                name: 'Toit Brewpub (Indiranagar)',
                image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
                description: 'Iconic craft microbrewery famous for fresh wheat beers, wood-fired pizzas, and lively open-air seating.',
                rating: '4.8',
                bestTime: '12:00 PM – 11:30 PM',
                busRoutes: 'Located on 100ft Road, Indiranagar.',
                bestChoice: 'Tintin In Toit Wheat Beer & Wood-Fired Pepperoni Pizza',
                bestChoiceImg: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800'
            },
            {
                name: 'Windmills Craftworks (Whitefield)',
                image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
                description: 'Ultra-premium jazz theatre and microbrewery serving artisanal craft beer alongside live music.',
                rating: '4.8',
                bestTime: '12:00 PM – 11:30 PM',
                busRoutes: 'Located in EPIP Zone, Whitefield (East Bangalore).',
                bestChoice: 'Craft IPA Beer & Live Jazz Performance',
                bestChoiceImg: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=200'
            }
        ]
    },
    'temples': {
        name: 'Historic Temples in East & West Bangalore',
        places: [
            {
                name: 'Halasuru Someshwara Temple',
                image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800',
                description: 'Ancient 12th-century Chola dynasty Shiva temple in East Bangalore featuring grand Dravidian stone pillars.',
                rating: '4.8',
                bestTime: '6:00 AM – 12:00 PM, 5:00 PM – 8:30 PM',
                busRoutes: 'Located near Ulsoor Lake / Halasuru Metro Station.',
                bestChoice: 'Chola Dynasty Stone Carvings & Sacred Lingam Darshan',
                bestChoiceImg: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=200'
            },
            {
                name: 'Kadu Malleshwara Temple',
                image: 'https://images.unsplash.com/photo-1609137882611-37f2252a11b9?auto=format&fit=crop&q=80&w=800',
                description: '17th-century hilltop Shiva temple surrounded by green groves in historic Malleshwaram (West Bangalore).',
                rating: '4.8',
                bestTime: '6:00 AM – 12:00 PM, 5:00 PM – 8:30 PM',
                busRoutes: 'Located in Malleshwaram (West Bangalore).',
                bestChoice: 'Nandi Teertha Spring & Sacred Shiva Pooja',
                bestChoiceImg: 'https://images.unsplash.com/photo-1609137882611-37f2252a11b9?auto=format&fit=crop&q=80&w=200'
            }
        ]
    }
};

const cityFoods = {
    'mangaluru': [
        { img: 'https://myfoodstory.com/wp-content/uploads/2015/11/chicken-kori-rotti-mangalorean-chicken-curry-recipe.1024x1024-1024x617.jpg', name: 'Chicken Kori Rotti' },
        { img: 'https://images.indianexpress.com/2016/04/anjal-masala-fry_820_nikhil-pai.jpg', name: 'Fish Fry' },
        { img: 'https://www.lifeberrys.com/img/article/cuisine-6-1631691337-lb.jpg', name: 'Mangalore Bun' },
        { img: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png', name: 'Ghee Roast' }
    ],
    'bangalore': [
        { img: 'https://madaboutkitchen.in/wp-content/uploads/2016/10/Obattu-3--767x1024.jpg', name: 'Obbattu (Holige)' },
        { img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', name: 'Masala Dosa' },
        { img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800', name: 'Filter Coffee' },
        { img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800', name: 'Idli Vada' },
        { img: 'https://blog.swiggy.com/wp-content/uploads/2024/02/Ragi-Mudde.jpg', name: 'Ragi Mudde' }
    ],
    'bangalore_east_west': [
        { img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', name: 'Masala Dosa' },
        { img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800', name: 'Filter Coffee' },
        { img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800', name: 'Corner House DBC' },
        { img: 'https://madaboutkitchen.in/wp-content/uploads/2016/10/Obattu-3--767x1024.jpg', name: 'Obbattu (Holige)' }
    ],
    'mysuru': [
        { img: 'https://images.slurrp.com/prodarticles/ydoju3f5ofc.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75', name: 'Mysore Pak' },
        { img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', name: 'Mysore Masala Dosa' },
        { img: 'https://figarooliveoil.com/wp-content/uploads/2022/02/mysore-bonda.png', name: 'Mysore Bonda' },
        { img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800', name: 'Hanumanthu Biryani' }
    ],
    'mysuru_east_west': [
        { img: 'https://images.slurrp.com/prodarticles/ydoju3f5ofc.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75', name: 'Mysore Pak' },
        { img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', name: 'Mysore Masala Dosa' },
        { img: 'https://figarooliveoil.com/wp-content/uploads/2022/02/mysore-bonda.png', name: 'Mysore Bonda' },
        { img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800', name: 'Hanumanthu Biryani' }
    ],
    'manipal': [
        { img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800', name: 'Gadbad Ice Cream' },
        { img: 'https://static.wixstatic.com/media/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png/v1/fill/w_980,h_1042,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4431d7_10d3db6f602f44cd9c1f0ae354d242e5~mv2.png', name: 'Ghee Roast' },
        { img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800', name: 'Neer Dosa' },
        { img: 'https://www.lifeberrys.com/img/article/cuisine-6-1631691337-lb.jpg', name: 'Mangalore Bun' }
    ]
};

const cityCategories = {
    'mangaluru': mangaloreCategories,
    'bangalore': bangaloreCategories,
    'bangalore_east_west': bangaloreEastWestCategories,
    'mysuru': mysuruCategories,
    'mysuru_east_west': mysuruEastWestCategories,
    'manipal': manipalCategories
};

const cityCategoryData = {
    'mangaluru': mangaloreCategoryData,
    'bangalore': bangaloreCategoryData,
    'bangalore_east_west': bangaloreEastWestCategoryData,
    'mysuru': mysuruCategoryData,
    'mysuru_east_west': mysuruEastWestCategoryData,
    'manipal': manipalCategoryData
};

let currentCityId = 'mangaluru';
let bestFoodSliderIntervals = [];

// LocalStorage helpers for Favorite Foods
function getFavoriteFoods() {
    try {
        const favs = localStorage.getItem('explore_favorite_foods');
        return favs ? JSON.parse(favs) : [];
    } catch (e) {
        return [];
    }
}

function isFoodFavorite(name) {
    return getFavoriteFoods().includes(name);
}

function toggleFoodFavorite(name) {
    let favs = getFavoriteFoods();
    const index = favs.indexOf(name);
    let isFav = false;
    if (index === -1) {
        favs.push(name);
        isFav = true;
    } else {
        favs.splice(index, 1);
    }
    localStorage.setItem('explore_favorite_foods', JSON.stringify(favs));
    updateNavbarFavoriteIcon();
    return isFav;
}

function updateNavbarFavoriteIcon() {
    const navbarFavImg = document.querySelector('.nav-actions .nav-icon img[src*="favorite"]');
    if (navbarFavImg) {
        const favs = getFavoriteFoods();
        if (favs.length > 0) {
            navbarFavImg.src = 'https://api.iconify.design/material-symbols:favorite.svg?color=%23FF4A4A';
        } else {
            navbarFavImg.src = 'https://api.iconify.design/material-symbols:favorite-outline.svg';
        }
    }
}

function bindDoubleTapListeners() {
    const cards = document.querySelectorAll('.favorite-food-card');
    cards.forEach(card => {
        let lastTap = 0;
        const foodName = card.getAttribute('data-name');
        
        const handleDoubleTap = (e) => {
            e.preventDefault();
            
            const isFav = toggleFoodFavorite(foodName);
            
            // Update heart icon instantly
            const badgeSvg = card.querySelector('.heart-icon-svg');
            if (badgeSvg) {
                if (isFav) {
                    badgeSvg.setAttribute('fill', '#FF4A4A');
                    badgeSvg.setAttribute('stroke', '#FF4A4A');
                } else {
                    badgeSvg.setAttribute('fill', 'none');
                    badgeSvg.setAttribute('stroke', '#ffffff');
                }
                
                badgeSvg.style.transform = 'scale(1.4)';
                setTimeout(() => {
                    badgeSvg.style.transform = '';
                }, 250);
            }
            
            // Show the Instagram-style overlay branding text
            const imgWrapper = card.querySelector('.food-swiper-img-wrapper') || card.querySelector('.place-img') || card;
            if (imgWrapper) {
                const existing = imgWrapper.querySelector('.double-tap-overlay');
                if (existing) existing.remove();
                
                const overlay = document.createElement('div');
                overlay.className = 'double-tap-overlay';
                overlay.innerHTML = `<span class="double-tap-text">WeekendExplore.in</span>`;
                imgWrapper.appendChild(overlay);
                
                setTimeout(() => {
                    overlay.remove();
                }, 1000);
            }
        };

        card.addEventListener('click', (e) => {
            const badge = e.target.closest('.food-favorite-icon-badge');
            if (badge) {
                e.stopPropagation();
                const isFav = toggleFoodFavorite(foodName);
                const badgeSvg = card.querySelector('.heart-icon-svg');
                if (badgeSvg) {
                    if (isFav) {
                        badgeSvg.setAttribute('fill', '#FF4A4A');
                        badgeSvg.setAttribute('stroke', '#FF4A4A');
                    } else {
                        badgeSvg.setAttribute('fill', 'none');
                        badgeSvg.setAttribute('stroke', '#ffffff');
                    }
                    badgeSvg.style.transform = 'scale(1.3)';
                    setTimeout(() => {
                        badgeSvg.style.transform = '';
                    }, 200);
                }
                return;
            }

            const now = Date.now();
            const DOUBLE_PRESS_DELAY = 300;
            if (now - lastTap < DOUBLE_PRESS_DELAY) {
                handleDoubleTap(e);
            }
            lastTap = now;
        });
    });
}

function renderFoodCategoryPage(cityId) {
    clearBackgroundIntervals();

    const cityData = cityCategoryData[cityId];
    const category = cityData['food'];
    if (!category) return;

    const cityName = getCityName(cityId);

    const destHTML = `
        <div class="page-content">
            <header class="dest-header">
                <div class="dest-header-row" style="margin-bottom: 2rem;">
                    <a href="#" class="back-btn" id="back-to-city" style="margin-bottom: 0;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Back to ${cityName}
                    </a>
                </div>
                <h1>${category.name}</h1>
                <p>Explore local culinary masterpieces and double-tap to save them to your favorites.</p>
            </header>

            <div class="favorite-foods-container places-grid">
                ${category.places.map(place => {
                    const isFav = isFoodFavorite(place.name);
                    return `
                    <div class="place-card favorite-food-card" data-name="${place.name}">
                        <div class="place-img" style="position: relative;">
                            <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async">
                            <div class="food-favorite-icon-badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? '#FF4A4A' : 'none'}" stroke="${isFav ? '#FF4A4A' : '#ffffff'}" stroke-width="2" class="heart-icon-svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                            </div>
                        </div>
                        <div class="place-info">
                            <div class="place-title-row">
                                <h3>${place.name}</h3>
                            </div>
                            <p>${place.description}</p>
                            <div class="place-meta">
                                <div class="meta-item time">
                                    <span class="meta-icon">⏰</span>
                                    <span><strong>Best Time:</strong> ${place.bestTime}</span>
                                </div>
                            </div>
                            <div class="best-food-box" style="background: #F0FDF4; border-color: #BBF7D0; margin-top: 1rem;">
                                <div>
                                    <div class="best-food-title" style="color: #16A34A;">Best Choice</div>
                                    <div class="best-food-name">${place.bestChoice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    app.innerHTML = destHTML;
    bindDoubleTapListeners();

    document.getElementById('back-to-city').addEventListener('click', (e) => {
        e.preventDefault();
        renderDestination(cityId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function renderGlobalFavoritesPage() {
    clearBackgroundIntervals();

    const favFoodNames = getFavoriteFoods();
    
    const allMatchingFoods = [];
    for (const cityId of Object.keys(cityCategoryData)) {
        const foodCategory = cityCategoryData[cityId]?.['food'];
        if (foodCategory && foodCategory.places) {
            for (const food of foodCategory.places) {
                if (favFoodNames.includes(food.name)) {
                    if (!allMatchingFoods.some(f => f.name === food.name)) {
                        allMatchingFoods.push({
                            ...food,
                            cityId: cityId,
                            cityName: getCityName(cityId)
                        });
                    }
                }
            }
        }
    }

    let foodsHTML = '';
    if (allMatchingFoods.length === 0) {
        foodsHTML = `
            <div style="text-align: center; padding: 4rem 2rem; background: var(--card-bg, #fff); border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-top: 2rem; border: 1px solid rgba(0,0,0,0.04);">
                <div style="font-size: 3.5rem; margin-bottom: 1.5rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));">🍲</div>
                <h2 style="font-size: 1.8rem; font-weight: 700; color: #2D3748; margin-bottom: 0.5rem;">No Favorite Foods Yet</h2>
                <p style="color: var(--text-light); max-width: 480px; margin: 0 auto 2rem; line-height: 1.5; font-size: 0.95rem;">
                    Go to the Famous Food section of any city, explore the mouthwatering dishes, and double-tap to add them here!
                </p>
                <button class="signin-btn" onclick="renderHome()" style="padding: 0.75rem 2rem; font-size: 0.95rem; font-weight: 600;">Explore Destinations</button>
            </div>
        `;
    } else {
        foodsHTML = `
            <div class="favorite-foods-container places-grid">
                ${allMatchingFoods.map(place => `
                    <div class="place-card favorite-food-card" data-name="${place.name}">
                        <div class="place-img" style="position: relative;">
                            <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async">
                            <div class="food-favorite-icon-badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF4A4A" stroke="#FF4A4A" stroke-width="2" class="heart-icon-svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                            </div>
                        </div>
                        <div class="place-info">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                                <span style="font-size: 0.75rem; background: #EEF2FF; color: #4F46E5; padding: 2px 8px; border-radius: 12px; font-weight: 600;">📍 ${place.cityName}</span>
                                <span style="font-size: 0.8rem; background: #F3F4F6; color: #4B5563; padding: 2px 8px; border-radius: 4px; font-weight: 500;">⏰ ${place.bestTime}</span>
                            </div>
                            <div class="place-title-row">
                                <h3>${place.name}</h3>
                            </div>
                            <p>${place.description}</p>
                            <div class="best-food-box" style="background: #F0FDF4; border-color: #BBF7D0; margin-top: 1rem;">
                                <div>
                                    <div class="best-food-title" style="color: #16A34A;">Best Choice</div>
                                    <div class="best-food-name">${place.bestChoice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    const pageHTML = `
        <div class="page-content">
            <header class="dest-header">
                <div class="dest-header-row" style="margin-bottom: 2rem;">
                    <a href="#" class="back-btn" id="back-to-home-from-favs" style="margin-bottom: 0;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Back to Home
                    </a>
                </div>
                <h1>My Favorite Foods</h1>
                <p>All your double-tapped favorite dishes across Karnataka destinations, kept right here.</p>
            </header>
            ${foodsHTML}
        </div>
    `;

    app.innerHTML = pageHTML;

    // Remove active class from navigation links
    document.querySelectorAll('.nav-links .nav-link').forEach(link => link.classList.remove('active'));

    if (allMatchingFoods.length > 0) {
        bindDoubleTapListeners();
        
        const cards = document.querySelectorAll('.favorite-food-card');
        cards.forEach(card => {
            const foodName = card.getAttribute('data-name');
            card.addEventListener('click', (e) => {
                const badge = e.target.closest('.food-favorite-icon-badge');
                setTimeout(() => {
                    if (!isFoodFavorite(foodName)) {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.remove();
                            if (document.querySelectorAll('.favorite-food-card').length === 0) {
                                renderGlobalFavoritesPage();
                            }
                        }, 500);
                    }
                }, 310);
            });
        });
    }

    document.getElementById('back-to-home-from-favs').addEventListener('click', (e) => {
        e.preventDefault();
        renderHome();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

let activeSwiperInstances = [];

function clearBackgroundIntervals() {
    try {
        if (typeof bestFoodSliderIntervals !== 'undefined' && Array.isArray(bestFoodSliderIntervals)) {
            bestFoodSliderIntervals.forEach(clearInterval);
            bestFoodSliderIntervals = [];
        }
        if (window.placeImageSliderIntervals && Array.isArray(window.placeImageSliderIntervals)) {
            window.placeImageSliderIntervals.forEach(clearInterval);
            window.placeImageSliderIntervals = [];
        }
        if (typeof popupAutoPlayInterval !== 'undefined' && popupAutoPlayInterval) {
            clearInterval(popupAutoPlayInterval);
        }
        if (Array.isArray(activeSwiperInstances) && activeSwiperInstances.length > 0) {
            activeSwiperInstances.forEach(instance => {
                if (instance && typeof instance.destroy === 'function') {
                    try { instance.destroy(true, true); } catch(err) {}
                }
            });
            activeSwiperInstances = [];
        }
    } catch(e) {
        console.warn(e);
    }
}

function initNavbarFavoriteListener() {
    const navbarFavBtn = document.querySelector('.nav-actions .nav-icon img[src*="favorite-outline"]')?.closest('.nav-icon') || 
                          document.querySelector('.nav-icon img[alt="Fav"]')?.closest('.nav-icon');
    if (navbarFavBtn) {
        navbarFavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderGlobalFavoritesPage();
        });
    }

    const exploreNavLink = Array.from(document.querySelectorAll('.nav-links .nav-link')).find(link => link.textContent.trim() === 'Explore');
    if (exploreNavLink) {
        exploreNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-links .nav-link').forEach(link => link.classList.remove('active'));
            exploreNavLink.classList.add('active');
            renderHome();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    updateNavbarFavoriteIcon();
}

function renderCategoryPage(categoryId, cityId = currentCityId) {
    clearBackgroundIntervals();
    if (categoryId === 'food') {
        renderFoodCategoryPage(cityId);
        return;
    }
    const cityData = cityCategoryData[cityId];
    if (!cityData) return;
    const category = cityData[categoryId];
    if (!category) return;

    const cityName = getCityName(cityId);

    const destHTML = `
        <div class="page-content">
            <header class="dest-header dest-header-flex">
                <div>
                    <a href="#" class="back-btn" id="back-to-city" style="margin-bottom: 1.5rem; display: inline-flex;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Back to ${cityName}
                    </a>
                    <h1 style="margin: 0 0 0.5rem 0;">${category.name}</h1>
                    <p style="margin: 0 0 1.25rem 0;">Discover the best ${category.name.toLowerCase()} and plan your visit.</p>
                    ${cityId !== 'mysuru_east_west' ? `
                    <button class="must-watch-btn" id="must-watch-btn" style="margin: 0;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 2px;"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        <span class="hide-mobile">Must Visit Places</span>
                        <span class="show-mobile-inline" style="display: none;">Must Visit</span>
                        <span class="btn-arrow">→</span>
                    </button>
                    ` : ''}
                </div>

                <div class="category-card famous-food-header-card" style="cursor: default;">
                    <div style="position: absolute; top: 12px; left: 12px; color: #0b1a30; font-size: 0.75rem; font-weight: 800; z-index: 5; text-transform: uppercase; letter-spacing: 0.8px; text-shadow: 0 0 6px #ffffff, 0 0 3px #ffffff, 0 1px 2px rgba(0,0,0,0.2);">
                        ${category.name}
                    </div>
                    <div class="category-img swiper category-header-swiper" style="will-change: transform; perspective: 1000px; width: 100%; height: 100%;">
                        <div class="swiper-wrapper">
                            ${category.places.map(place => `
                            <div class="swiper-slide" style="display: flex; flex-direction: column; overflow: hidden; height: 100%; position: relative;">
                                <div class="food-swiper-img-wrapper" style="position: relative; flex: 1; overflow: hidden; width: 100%;">
                                    <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async">
                                </div>
                                <div class="food-card-info" style="padding: 10px 12px; background: var(--card-bg, #ffffff); border-top: 1px solid rgba(0, 0, 0, 0.05); text-align: center; z-index: 3;">
                                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-main, #0f172a); display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0;">
                                        ${place.name}
                                    </span>
                                </div>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </header>

            <div class="places-grid">
                ${category.places.map(place => `
                    <div class="place-card" style="cursor: pointer;" onclick="handleCardClick(event, '${place.name.replace(/'/g, "\\'")}', '${cityId}')">
                        <div class="place-img" style="position: relative; overflow: hidden;">
                            ${place.images && place.images.length > 0 ? `
                                <div style="width: 100%; height: 100%; overflow: hidden;">
                                    <div class="place-img-slider" data-active-index="0" style="display: flex; width: 100%; height: 100%; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); will-change: transform;">
                                        ${place.images.map(imgUrl => `
                                            <img src="${imgUrl}" alt="${place.name}" loading="lazy" decoding="async" style="min-width: 100%; height: 100%; object-fit: cover;">
                                        `).join('')}
                                    </div>
                                </div>
                                <div class="slider-dots" style="position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; z-index: 10;">
                                    ${place.images.map((_, idx) => `
                                        <span class="slider-dot" data-index="${idx}" style="width: 8px; height: 8px; border-radius: 50%; background: ${idx === 0 ? '#ffffff' : 'rgba(255,255,255,0.5)'}; transition: background 0.3s; cursor: pointer;"></span>
                                    `).join('')}
                                </div>
                            ` : `
                                <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async" ${['Chamundi Hills', 'Karinjeshwara Hill Temple', 'Karinchieshwara Trek'].includes(place.name) ? 'style="transform: scale(1.35); transform-origin: center; object-fit: cover;"' : ['Mandi Stories', 'Charminar Restaurant'].includes(place.name) ? 'style="object-fit: contain; background-color: #ffffff; padding: 12px;"' : place.name.includes('Upcoming') ? 'style="filter: blur(4px);"' : ''}>
                            `}
                        </div>
                        <div class="place-info">
                            <div class="place-title-row">
                                <h3>${place.name}</h3>
                                ${place.rating ? `<span class="place-rating"><span class="star-icon">⭐</span> ${place.rating}</span>` : ''}
                            </div>
                            <p>${place.description}</p>
                            ${place.bestSeason || place.bestTime || place.openHours ? `
                            <div class="place-meta">
                                ${place.bestSeason ? `
                                <div class="meta-item season">
                                    <span class="meta-icon">🗓️</span>
                                    <span><strong>Best Season:</strong> ${place.bestSeason}</span>
                                </div>
                                ` : ''}
                                ${place.bestTime ? `
                                <div class="meta-item time">
                                    <span class="meta-icon">⏰</span>
                                    <span><strong>Best Time:</strong> ${place.bestTime}</span>
                                </div>
                                ` : ''}
                                ${place.openHours ? `
                                <div class="meta-item time">
                                    <span class="meta-icon">⏰</span>
                                    <span><strong>Timings:</strong> ${place.openHours}</span>
                                </div>
                                ` : ''}
                            </div>
                            ` : ''}
                            ${place.bestFoods ? `
                            <div class="best-food-slider-wrapper">
                                <div class="best-food-title" onclick="handleBestFoodTitleClick(event, this)" style="cursor: pointer;">Best Food Choices (Click to view price)</div>
                                <div class="best-food-slider-card" data-place-name="${place.name.replace(/'/g, "\\'")}" data-active-index="0" onclick="handleSliderCardClick(event, this)">
                                    <button class="slider-nav-btn prev" onclick="handleSliderNav(event, this, -1)">&lsaquo;</button>
                                    <div class="food-slider-content">
                                        <img class="food-slider-img" src="${place.bestFoods[0].img}" alt="${place.bestFoods[0].name}" loading="lazy" decoding="async">
                                        <div class="food-slider-info">
                                            <span class="food-slider-name">${place.bestFoods[0].name}</span>
                                            <span class="food-slider-price">${place.bestFoods[0].price}</span>
                                        </div>
                                    </div>
                                    <button class="slider-nav-btn next" onclick="handleSliderNav(event, this, 1)">&rsaquo;</button>
                                </div>
                            </div>
` : place.bestFood ? `
                            <div class="best-food-box">
                                ${place.bestFoodImg ? `<img src="${place.bestFoodImg}" alt="${place.bestFood}" loading="lazy" decoding="async">` : ''}
                                <div>
                                    <div class="best-food-title">Best Food Choice</div>
                                    <div class="best-food-name">${place.bestFood}</div>
                                </div>
                            </div>
                            ` : place.bestChoice ? `
                            <div class="best-food-box" style="background: #F0FDF4; border-color: #BBF7D0;">
                                <div>
                                    <div class="best-food-title" style="color: #16A34A;">Best Choice</div>
                                    <div class="best-food-name">${place.bestChoice}</div>
                                </div>
                            </div>
                            ` : ''}
                            <a href="#" class="explore-link" data-name="${place.name}" onclick="handleExplore(event, this.dataset.name, '${cityId}')">Explore →</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    app.innerHTML = destHTML;
    initBestFoodSliders();
    initPlaceImageSliders();

    if (typeof Swiper !== 'undefined' && document.querySelector('.category-header-swiper')) {
        new Swiper('.category-header-swiper', {
            loop: true,
            speed: 1200,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            effect: 'slide',
            grabCursor: true,
            touchRatio: 1.2,
            resistanceRatio: 0.8,
        });
    }

    document.getElementById('back-to-city').addEventListener('click', (e) => {
        e.preventDefault();
        renderDestination(cityId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('must-watch-btn').addEventListener('click', (e) => {
        e.preventDefault();
        openMustWatchModal(category, cityId);
    });
}

console.log("Scripts initializing...");
const app = document.getElementById('app');

function renderHome() {
    clearBackgroundIntervals();
    const homeHTML = `
        <div class="page-content">
            <section class="hero">
                <div class="badge">
                    <img src="https://api.iconify.design/material-symbols:location-on.svg?color=%238338EC" alt="Loc">
                    Explore with Weekend Explore
                </div>
                <h1>Where do<br>you want to go?</h1>
                <p>Choose your perfect destination and create beautiful memories.</p>
            </section>

            <div class="destinations-row">
                ${destinations.map((dest, index) => `
                    <div class="dest-card-wrapper" style="--card-index: ${index};">
                        <div class="dest-card" data-id="${dest.id}">
                            <img src="${dest.image}" alt="${dest.name}" loading="lazy" decoding="async">
                            <div class="dest-card-overlay">
                                <h3>${dest.name}</h3>
                            </div>
                            <div class="arrow-btn">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    app.innerHTML = homeHTML;

    // Add click listeners to cards
    document.querySelectorAll('.dest-card').forEach(card => {
        card.addEventListener('click', () => {
            const destId = card.getAttribute('data-id');
            renderDestination(destId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function renderDestination(id) {
    clearBackgroundIntervals();
    const dest = destinations.find(d => d.id === id);
    if (!dest) return;

    currentCityId = id;

    const isPremiumCity = ['mangaluru', 'bangalore', 'mysuru', 'mysuru_east_west', 'manipal'].includes(dest.id);

    const destHTML = `
        <div class="page-content" style="position: relative;">
            <header class="dest-header dest-header-flex">
                <div class="dest-header-row">
                    <a href="#" class="back-btn" id="back-home" style="margin-bottom: 0;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Back to Home
                    </a>
                    ${isPremiumCity && dest.id !== 'mysuru_east_west' ? `
                    <button class="must-watch-btn" id="city-must-watch-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 2px;"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        <span class="hide-mobile">Must Visit Places</span>
                        <span class="show-mobile-inline" style="display: none;">Must Visit</span>
                        <span class="btn-arrow">→</span>
                    </button>
                    ` : ''}
                </div>
                
                ${isPremiumCity ? `
                <div class="category-card famous-food-header-card" data-cat-id="food" style="cursor: default;">
                    <div style="position: absolute; top: 12px; left: 12px; color: #0b1a30; font-size: 0.75rem; font-weight: 800; z-index: 5; text-transform: uppercase; letter-spacing: 0.8px; text-shadow: 0 0 6px #ffffff, 0 0 3px #ffffff, 0 1px 2px rgba(0,0,0,0.2);">
                        Famous Food
                    </div>
                    <div class="category-img swiper food-swiper" style="will-change: transform; perspective: 1000px; width: 100%; height: 100%;">
                        <div class="swiper-wrapper">
                            ${(cityFoods[dest.id] || []).map(item => {
                                const isFav = isFoodFavorite(item.name);
                                return `
                                <div class="swiper-slide favorite-food-card" data-name="${item.name}" style="display: flex; flex-direction: column; overflow: hidden; height: 100%; position: relative; cursor: pointer;">
                                    <div class="food-swiper-img-wrapper" style="position: relative; flex: 1; overflow: hidden; width: 100%;">
                                        <img src="${item.img}" alt="${item.name}" loading="lazy" decoding="async">
                                        <div class="food-favorite-icon-badge">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? '#FF4A4A' : 'none'}" stroke="${isFav ? '#FF4A4A' : '#ffffff'}" stroke-width="2" class="heart-icon-svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                                        </div>
                                    </div>
                                    <div class="food-card-info" style="padding: 10px 12px; background: var(--card-bg, #ffffff); border-top: 1px solid rgba(0, 0, 0, 0.05); text-align: center; z-index: 3;">
                                        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-main, #0f172a); display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0;">
                                            ${item.name}
                                        </span>
                                    </div>
                                </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
                ` : ''}
                ${!isPremiumCity ? `
                <div style="width: 100%; text-align: center;">
                    <h1>Famous Places in <span>${dest.name}</span></h1>
                    <p>Explore the natural beauty and serene landscapes of ${dest.name}.</p>
                </div>
                ` : ''}
            </header>

            ${!isPremiumCity ? `
            <div class="places-grid">
                ${dest.famousPlaces.map(place => `
                    <div class="place-card" style="cursor: pointer;" onclick="handleCardClick(event, '${place.name.replace(/'/g, "\\'")}', '${id}')">
                        <div class="place-img">
                            <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async">
                        </div>
                        <div class="place-info">
                            <h3>${place.name}</h3>
                            <p>${place.description}</p>
                            <a href="#" class="explore-link" data-name="${place.name}" onclick="handleExplore(event, this.dataset.name, '${id}')">Explore →</a>
                        </div>
                    </div>
                `).join('')}
            </div>
            ` : ''}

            ${isPremiumCity ? `
                <div class="categories-section">
                    <h2 class="section-title">${dest.name} Categories</h2>
                    <div class="category-grid">
                        ${cityCategories[dest.id].map(cat => `
                            <div class="category-card ${cat.empty ? 'empty-card' : ''}" data-cat-id="${cat.id}">
                                <div class="category-img">
                                    <img src="${cat.image}" alt="${cat.name}" loading="lazy" decoding="async">
                                </div>
                                <div class="category-overlay">
                                    <h3>${cat.name}</h3>
                                    ${cat.desc ? `<p>${cat.desc}</p>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    app.innerHTML = destHTML;
    initBestFoodSliders();

    // Add back button listener
    document.getElementById('back-home').addEventListener('click', (e) => {
        e.preventDefault();
        renderHome();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initialize Swiper for Header Category Cards
    if (isPremiumCity && typeof Swiper !== 'undefined') {
        ['.food-swiper', '.beach-swiper', '.temple-swiper', '.mall-swiper'].forEach((selector, idx) => {
            if (document.querySelector(selector)) {
                const sInst = new Swiper(selector, {
                    loop: true,
                    speed: 1200,
                    autoplay: {
                        delay: 2000 + (idx * 500),
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    effect: 'slide',
                    grabCursor: true,
                    touchRatio: 1.2,
                    resistanceRatio: 0.8,
                });
                if (typeof activeSwiperInstances !== 'undefined') {
                    activeSwiperInstances.push(sInst);
                }
            }
        });
        bindDoubleTapListeners();
    }

    // Add Must Watch button listener if present
    const mustWatchBtn = document.getElementById('city-must-watch-btn');
    if (mustWatchBtn) {
        mustWatchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCityMustWatchModal(dest.id);
        });
    }

    // Add category click listeners if any
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const catId = card.getAttribute('data-cat-id');
            if (catId && !catId.startsWith('coming_soon') && catId !== 'food') {
                renderCategoryPage(catId, dest.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

// Initial render
window.renderHome = renderHome;
renderHome();
initNavbarFavoriteListener();

function openMustWatchModal(category, cityId = currentCityId) {
    // Remove existing modal if any
    const existing = document.getElementById('must-watch-modal-overlay');
    if (existing) existing.remove();

    // 1. Add and Activate dynamic premium loader overlay
    let loader = document.getElementById('must-watch-loader-overlay');
    if (!loader) {
        const loaderHTML = `
            <div class="must-watch-loader-overlay" id="must-watch-loader-overlay">
                <div class="must-watch-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', loaderHTML);
        loader = document.getElementById('must-watch-loader-overlay');
    }

    loader.classList.add('active');

    // Select top 3 places as the "Must Watching Places"
    const topPlaces = category.places.slice(0, 3);
    
    const cityName = getCityName(cityId);
    
    // Helper to get static location and rating
    const getLocation = (placeName) => {
        if (category.name.includes("Beaches")) return `Coastal Hwy, ${cityName}`;
        if (category.name.includes("Temples") || category.name.includes("Heritage")) return `Temple Square, ${cityName}`;
        if (category.name.includes("Malls") || category.name.includes("Shopping")) return `City Centre, ${cityName}`;
        if (category.name.includes("Trekking")) return `Ghats Region, ${cityName}`;
        if (category.name.includes("Restaurants") || category.name.includes("Breweries")) return `Food District, ${cityName}`;
        if (category.name.includes("Gaming")) return `Gaming District, ${cityName}`;
        return `Heritage Block, ${cityName}`;
    };

    const getRating = (index) => {
        return (4.9 - (index * 0.1)).toFixed(1);
    };

    const modalHTML = `
        <div class="must-watch-modal-overlay" id="must-watch-modal-overlay">
            <div class="must-watch-modal">
                <header class="must-watch-modal-header">
                    <h2>⭐ Top Must Visit ${category.name}</h2>
                    <button class="must-watch-close-btn" id="must-watch-close-btn" aria-label="Close modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                </header>
                
                <div class="swiper must-watch-swiper">
                    <div class="swiper-wrapper">
                        ${topPlaces.map((place, idx) => `
                            <div class="swiper-slide">
                                <div class="must-watch-card" style="cursor: pointer;" onclick="handleCardClick(event, '${place.name.replace(/'/g, "\\'")}', '${cityId}')">
                                    <div class="must-watch-card-img">
                                        <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async" ${['Chamundi Hills', 'Karinjeshwara Hill Temple', 'Karinchieshwara Trek'].includes(place.name) ? 'style="transform: scale(1.35); transform-origin: center; object-fit: cover;"' : ['Mandi Stories', 'Charminar Restaurant'].includes(place.name) ? 'style="object-fit: contain; background-color: #ffffff; padding: 12px;"' : place.name.includes('Upcoming') ? 'style="filter: blur(4px);"' : ''}>
                                        <div class="must-watch-badges">
                                            <span class="must-watch-badge rating">★ ${getRating(idx)}</span>
                                            <span class="must-watch-badge">Must Visit</span>
                                        </div>
                                    </div>
                                    <div class="must-watch-card-info">
                                        <h3>${place.name}</h3>
                                        <div class="location-row">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="12" r="3"/></svg>
                                            <span>${getLocation(place.name)}</span>
                                        </div>
                                        <p>${place.description}</p>
                                        ${place.bestSeason || place.bestTime || place.openHours ? `
                                        <div class="place-meta">
                                            ${place.bestSeason ? `
                                            <div class="meta-item season">
                                                <span class="meta-icon">🗓️</span>
                                                <span><strong>Best Season:</strong> ${place.bestSeason}</span>
                                            </div>
                                            ` : ''}
                                            ${place.bestTime ? `
                                            <div class="meta-item time">
                                                <span class="meta-icon">⏰</span>
                                                <span><strong>Best Time:</strong> ${place.bestTime}</span>
                                            </div>
                                            ` : ''}
                                            ${place.openHours ? `
                                            <div class="meta-item time">
                                                <span class="meta-icon">⏰</span>
                                                <span><strong>Timings:</strong> ${place.openHours}</span>
                                            </div>
                                            ` : ''}
                                            ${place.busRoutes ? `
                                             <div class="meta-item bus-route-card dark-bus-card" style="grid-column: 1 / -1; margin-top: 10px; padding: 12px 16px; border-radius: 12px; font-size: 0.88rem; color: #f1f5f9;">
                                                 <div class="bus-card-shimmer"></div>
                                                 <div style="z-index: 2; position: relative; width: 100%;">
                                                     <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
                                                         <div style="display: flex; align-items: center; gap: 8px;">
                                                             <span class="meta-icon bus-icon-anim" style="font-size: 1.3rem; line-height: 1;">🚌</span>
                                                             <strong style="color: #38bdf8; text-transform: uppercase; font-size: 0.74rem; letter-spacing: 0.8px; font-weight: 700;">Bus Routes & Stop Details</strong>
                                                         </div>
                                                         <span class="bus-live-badge"><span class="live-dot"></span> Live Route</span>
                                                     </div>
                                                     <div style="color: #e2e8f0; font-weight: 500; line-height: 1.45; width: 100%; text-align: center;">
                                                         ${place.busRoutes}
                                                     </div>
                                                 </div>
                                             </div>
                                             ` : ''}
                                        </div>
                                        ` : ''}
                                        ${place.bestFoods ? `
                                        <div class="best-food-slider-wrapper" style="margin-bottom: 1.5rem;">
                                            <div class="best-food-title">Best Food Choices (Click to view price)</div>
                                            <div class="best-food-slider-card" data-place-name="${place.name.replace(/'/g, "\\'")}" data-active-index="0" onclick="handleSliderCardClick(event, this)">
                                                <button class="slider-nav-btn prev" onclick="handleSliderNav(event, this, -1)">&lsaquo;</button>
                                                <div class="food-slider-content">
                                                    <img class="food-slider-img" src="${place.bestFoods[0].img}" alt="${place.bestFoods[0].name}" loading="lazy" decoding="async">
                                                    <div class="food-slider-info">
                                                        <span class="food-slider-name">${place.bestFoods[0].name}</span>
                                                        <span class="food-slider-price">${place.bestFoods[0].price}</span>
                                                    </div>
                                                </div>
                                                <button class="slider-nav-btn next" onclick="handleSliderNav(event, this, 1)">&rsaquo;</button>
                                            </div>
                                        </div>
` : place.bestFood ? `
                                        <div class="best-food-box" style="margin-bottom: 1.5rem;">
                                            ${place.bestFoodImg ? `<img src="${place.bestFoodImg}" alt="${place.bestFood}" loading="lazy" decoding="async">` : ''}
                                            <div>
                                                <div class="best-food-title">Best Food Choice</div>
                                                <div class="best-food-name">${place.bestFood}</div>
                                            </div>
                                        </div>
                                        ` : place.bestChoice ? `
                                        <div class="best-food-box" style="margin-bottom: 1.5rem; background: #F0FDF4; border-color: #BBF7D0;">
                                            <div>
                                                <div class="best-food-title" style="color: #16A34A;">Best Choice</div>
                                                <div class="best-food-name">${place.bestChoice}</div>
                                            </div>
                                        </div>
                                        ` : ''}
                                        <button class="must-watch-explore-btn" data-name="${place.name}" onclick="handleExplore(event, this.dataset.name, '${cityId}')">
                                            Explore More
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <!-- Add Pagination & Nav arrows -->
                    <div class="swiper-pagination must-watch-pagination"></div>
                    <div class="swiper-button-next must-watch-next"></div>
                    <div class="swiper-button-prev must-watch-prev"></div>
                </div>
            </div>
        </div>
    `;

    // 2. Simulate dynamique loading before showing modal
    setTimeout(() => {
        loader.classList.remove('active');
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const overlay = document.getElementById('must-watch-modal-overlay');
        const closeBtn = document.getElementById('must-watch-close-btn');

        // Smooth entry with elastic cubic-bezier overshoot
        setTimeout(() => {
            overlay.classList.add('active');
        }, 30);

        // Initialize swiper inside the modal
        if (typeof Swiper !== 'undefined') {
            new Swiper('.must-watch-swiper', {
                loop: true,
                speed: 800,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                effect: 'slide',
                grabCursor: true,
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.must-watch-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.must-watch-next',
                    prevEl: '.must-watch-prev',
                },
            });
        }

        const closeModal = () => {
            overlay.classList.remove('active');
            // Wait for transition to complete before removing from DOM
            setTimeout(() => {
                overlay.remove();
            }, 600);
        };

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        // Close on ESC keypress
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);

    }, 600);
}

const cityMustWatchData = {
    'mangaluru': {
        title: '🌍 Mangalore Must Visit Places',
        places: [
            {
                name: 'Kadri Manjunath Temple',
                image: 'assets/places/kadri_temple.jpg',
                rating: '4.8',
                location: 'Kadri Temple Road, Mangalore',
                bestTime: '🛕 Morning Darshan: 8:00 AM',
                description: 'An ancient Hindu temple dating back to the 10th century, famous for its bronze statue of Lokeshvara and natural spring ponds.'
            },
            {
                name: 'Ocean Pearl Hotel / Ideal Café',
                image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800&fm=webp',
                rating: '4.7',
                location: 'Kodialbail, Mangalore',
                bestTime: '🍽️ Lunch Timings: 1:30 PM',
                description: 'Famous for modern luxury stay and mouthwatering Mangalorean street food, particularly the iconic Ideal ice creams.'
            },
            {
                name: 'Sultan Battery',
                image: 'https://mangaloreblogs.com/wp-content/uploads/2025/03/Sultan-Battery.png',
                rating: '4.6',
                location: 'Boloor, Mangalore',
                bestTime: '🕒 Afternoon Breeze: 3:30 PM',
                description: 'A watchtower built by Tipu Sultan in 1784, constructed of black stone to prevent warship intrusions via the Gurupura River.'
            },
            {
                name: 'Panambur Beach',
                image: 'assets/places/panambur_beach.jpg',
                rating: '4.9',
                location: 'Coastal Hwy, Mangalore',
                bestTime: '🌅 Evening View: 5:00 PM',
                busRoutes: `<strong>Bus Numbers:</strong> 2B, 45, 45A, 45B, 45C, 45D, 45E, 45F, 45G, 45H<br><strong>📍 Board At:</strong> State Bank Bus Stand / KSRTC Bus Stand<br><div class="bus-route-flow-container">🟢 State Bank Bus Stand<br>│<br>⚪ PVS Circle<br>│<br>⚪ Ballalbagh<br>│<br>⚪ Lalbagh<br>│<br>⚪ Ladyhill<br>│<br>⚪ Kottara Chowki<br>│<br>⚪ Kuloor<br>│<br>🔴 Panambur Bus Stop<br>│<br>🚶 Walk 5 min<br>│<br>🏖️ Panambur Beach</div>`,
                description: 'A clean and popular beach known for its golden sands, gorgeous sunsets, and thrilling water sports.'
            },
            {
                name: 'Swami Koragajja Temple',
                image: 'assets/places/swami_koragajja_temple.jpg',
                rating: '4.9',
                location: 'Kuthar, Mangalore',
                bestTime: '🛕 Holy Darshan: 7:00 PM',
                description: 'A highly revered and powerful sacred shrine dedicated to Swami Koragajja, drawing massive crowds of faithful devotees seeking direct blessings.'
            }
        ],
        nodes: [
            {
                dot: 1,
                name: 'Kadri Manjunath Temple',
                time: '🛕 Morning Darshan: 8:00 AM',
                detour: { id: 'mangaladevi', text: '⚡ Detour to Mangaladevi Temple (5 KM)', category: 'temples' }
            },
            {
                dot: 2,
                name: 'Ocean Pearl Hotel / Ideal Café',
                time: '🍽️ Lunch Timings: 1:30 PM',
                detour: { id: 'aloysius', text: '⚡ Detour to St. Aloysius Chapel (1 KM)', category: 'churches' }
            },
            {
                dot: 3,
                name: 'Sultan Battery',
                time: '🕒 Afternoon Breeze: 3:30 PM',
                detour: { id: 'tannirbhavi', text: '⚡ Detour to Tannirbhavi Beach (2 KM)', category: 'beaches' }
            },
            {
                dot: 4,
                name: 'Panambur Beach',
                time: '🌅 Evening View: 5:00 PM',
                detour: { id: 'koragajja', text: '⚡ Detour to Swami Koragajja Temple (17 KM)', slideIndex: 4 }
            },
            {
                dot: 5,
                name: 'Swami Koragajja Temple',
                time: '🛕 Holy Darshan: 7:00 PM'
            }
        ],
        distances: [
            { dist: '3 KM', time: '🚗 8m | 🏍️ 6m' },
            { dist: '6 KM', time: '🚗 10m | 🏍️ 9m' },
            { dist: '10 KM', time: '🚗 18m | 🏍️ 15m' },
            { dist: '17 KM', time: '🚗 30m | 🏍️ 25m' }
        ]
    },
    'bangalore': {
        title: '🌍 Bangalore Must Visit Places',
        places: [
            {
                name: 'Cubbon Park',
                image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
                rating: '4.8',
                location: 'Kasturba Road, Bangalore',
                bestTime: '🌳 Morning Stroll: 8:00 AM',
                description: 'The green heart of Bangalore, a sprawling park perfect for morning walks, jogging, and exploring public libraries.'
            },
            {
                name: 'Vidyarthi Bhavan',
                image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800',
                rating: '4.7',
                location: 'Gandhi Bazaar, Bangalore',
                bestTime: '🍽️ Breakfast Timings: 9:30 AM',
                description: 'A historic vegetarian restaurant in Gandhi Bazaar legendary for its thick, crispy, and butter-dripping Masala Dosas.'
            },
            {
                name: 'Bangalore Palace',
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?auto=format&fit=crop&q=80&w=800',
                rating: '4.6',
                location: 'Vasanth Nagar, Bangalore',
                bestTime: '🏰 Tudor Palace Tour: 11:30 AM',
                description: 'A majestic palace featuring Tudor style architecture, fortified towers, elegant wooden carvings, and royal memorabilia.'
            },
            {
                name: 'ISKCON Temple',
                image: 'https://images.unsplash.com/photo-1610416976865-c81b957697b0?auto=format&fit=crop&q=80&w=800',
                rating: '4.8',
                location: 'Rajajinagar, Bangalore',
                bestTime: '🛕 Evening Darshan: 4:30 PM',
                description: 'A spectacular neo-classical temple featuring grand shrines, a gold-plated flag post, and vibrant spiritual atmosphere.'
            },
            {
                name: 'UB City',
                image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800',
                rating: '4.9',
                location: 'Vittal Mallya Road, Bangalore',
                bestTime: '🍷 Premium Dining: 7:30 PM',
                description: 'India\'s first luxury commercial complex, hosting ultra-premium shopping boutiques, art galleries, and dynamic rooftop restaurants.'
            }
        ],
        nodes: [
            {
                dot: 1,
                name: 'Cubbon Park',
                time: '🌳 Morning Stroll: 8:00 AM',
                detour: { id: 'lalbagh', text: '⚡ Detour to Lalbagh Garden (4 KM)', category: 'parks' }
            },
            {
                dot: 2,
                name: 'Vidyarthi Bhavan',
                time: '🍽️ Breakfast Timings: 9:30 AM',
                detour: { id: 'commercial', text: '⚡ Detour to Commercial Street (5 KM)', category: 'shopping' }
            },
            {
                dot: 3,
                name: 'Bangalore Palace',
                time: '🏰 Tudor Palace Tour: 11:30 AM',
                detour: { id: 'tipu', text: '⚡ Detour to Tipu Sultan Palace (5 KM)', category: 'heritage' }
            },
            {
                dot: 4,
                name: 'ISKCON Temple',
                time: '🛕 Evening Darshan: 4:30 PM',
                detour: { id: 'ubcity', text: '⚡ Detour to UB City (7 KM)', slideIndex: 4 }
            },
            {
                dot: 5,
                name: 'UB City',
                time: '🍷 Premium Dining: 7:30 PM'
            }
        ],
        distances: [
            { dist: '4 KM', time: '🚗 12m | 🏍️ 10m' },
            { dist: '5 KM', time: '🚗 15m | 🏍️ 12m' },
            { dist: '8 KM', time: '🚗 20m | 🏍️ 18m' },
            { dist: '7 KM', time: '🚗 18m | 🏍️ 15m' }
        ]
    },
    'mysuru': {
        title: '🌍 Mysore Must Visit Places',
        places: [
            {
                name: 'Chamundi Hills',
                image: 'https://photos.wikimapia.org/p/00/04/45/95/57_full.jpg',
                rating: '4.8',
                location: 'Chamundi Hill Road, Mysore',
                bestTime: '🛕 Morning Darshan: 7:30 AM',
                description: 'A holy hill dedicated to Goddess Chamundeshwari, offering sweeping bird\'s eye views of the heritage city of Mysore.'
            },
            {
                name: 'Mylari Hotel',
                image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800',
                rating: '4.7',
                location: 'Nazarbad, Mysore',
                bestTime: '🍽️ Breakfast Timings: 9:30 AM',
                description: 'Legendary restaurant renowned for serving the softest Mylari butter masala dosas accompanied by unique coconut chutney.'
            },
            {
                name: 'Mysore Palace',
                image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&q=80&w=800',
                rating: '4.9',
                location: 'Sayyaji Rao Road, Mysore',
                bestTime: '👑 Royal Palace Tour: 11:00 AM',
                description: 'One of the most magnificent palaces in India, a true architectural masterpiece combining Indo-Saracenic styles.'
            },
            {
                name: 'Mysore Zoo',
                image: 'https://www.world-tourism.org/wp-content/uploads/2026/02/wildlife-private-day-tour-mysore-to-bandipur-national-park.jpg',
                rating: '4.8',
                location: 'Indiranagar, Mysore',
                bestTime: '🐅 Wildlife Walk: 2:30 PM',
                description: 'Sri Chamarajendra Zoological Gardens, housing diverse global animal species in a beautifully forested urban sanctuary.'
            },
            {
                name: 'Brindavan Gardens',
                image: 'https://c8.alamy.com/comp/BY24T5/illuminated-fountains-at-brindavan-gardens-in-mysore-india-BY24T5.jpg',
                rating: '4.7',
                location: 'KRS Dam, Mandya (Mysore)',
                bestTime: '⛲ Musical Fountain: 6:00 PM',
                description: 'Stunningly landscaped terraced gardens famed for their vibrant, colorful synchronized musical fountain and laser show.'
            }
        ],
        nodes: [
            {
                dot: 1,
                name: 'Chamundi Hills',
                time: '🛕 Morning Darshan: 7:30 AM',
                detour: { id: 'karanji', text: '⚡ Detour to Karanji Lake (5 KM)', category: 'hills_lakes' }
            },
            {
                dot: 2,
                name: 'Mylari Hotel',
                time: '🍽️ Breakfast Timings: 9:30 AM',
                detour: { id: 'gurupak', text: '⚡ Detour to Guru Sweet Mart (3 KM)', category: 'palaces' }
            },
            {
                dot: 3,
                name: 'Mysore Palace',
                time: '👑 Royal Palace Tour: 11:00 AM',
                detour: { id: 'philomena', text: '⚡ Detour to St. Philomena\'s (2 KM)', category: 'heritage' }
            },
            {
                dot: 4,
                name: 'Mysore Zoo',
                time: '🐅 Wildlife Walk: 2:30 PM',
                detour: { id: 'brindavan', text: '⚡ Detour to Brindavan Gardens (19 KM)', slideIndex: 4 }
            },
            {
                dot: 5,
                name: 'Brindavan Gardens',
                time: '⛲ Musical Fountain: 6:00 PM'
            }
        ],
        distances: [
            { dist: '5 KM', time: '🚗 12m | 🏍️ 10m' },
            { dist: '2 KM', time: '🚗 6m | 🏍️ 5m' },
            { dist: '3 KM', time: '🚗 8m | 🏍️ 6m' },
            { dist: '19 KM', time: '🚗 35m | 🏍️ 30m' }
        ]
    },
    'manipal': {
        title: '🌴 Manipal Must Visit Places',
        places: [
            {
                name: 'End Point Swarna River Viewpoint',
                image: 'https://hblimg.mmtcdn.com/content/hubble/img/manipal/mmt/activities/m_Manipal%20End%20Point%20Park-3_l_399_532.jpg',
                rating: '4.9',
                location: 'End Point Road, Manipal',
                bestTime: '🌅 Sunset View: 5:30 PM',
                description: 'Clifftop park offering breathtaking panoramic views of Swarna River valley, sunset, and Western Ghats range.'
            },
            {
                name: 'Udupi Shri Krishna Matha',
                image: 'https://www.mystreal.com/_next/image/?url=%2Ftemple%2Fkrishna-matha-temple%2Fhero-Udipi-Sri-Krishna-matha-temple.jpg&w=2048&q=75',
                rating: '4.9',
                location: 'Car Street, Udupi (~5 km from Manipal)',
                bestTime: '🛕 Morning Darshan & Aarti: 7:00 AM',
                description: 'World-famous sacred Krishna temple known for its unique Kanakana Kindi darshan and rich spiritual heritage.'
            },
            {
                name: 'Malpe Beach & St. Mary\'s Island',
                image: 'https://shruthinitourist.com/wp-content/uploads/2024/05/malpe-beach-to-visit-at-udupi.jpg',
                rating: '4.9',
                location: 'Malpe, Udupi (~10 km from Manipal)',
                bestTime: '🏖️ Ferry Ride to Island: 3:30 PM',
                description: 'Golden sand beach famous for water sports, sea walk, and ferry rides to basaltic geological wonders at St. Mary\'s Island.'
            },
            {
                name: 'Hasta Shilpa Heritage Village Museum',
                image: 'https://i.ytimg.com/vi/rLaOUhfYWzI/maxresdefault.jpg',
                rating: '4.8',
                location: 'Near Christ School, Manipal',
                bestTime: '🏛️ Guided Heritage Walk: 10:30 AM',
                description: 'Renowned open-air museum preserving 26 restored traditional South Indian heritage structures and vintage art.'
            },
            {
                name: 'Kemmannu Hanging Bridge & Backwaters',
                image: 'https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Kemmannu-Hanging-Bridge.jpg',
                rating: '4.7',
                location: 'Kemmannu, Tonse (~14 km from Manipal)',
                bestTime: '🛶 Sunset Kayaking: 4:30 PM',
                description: 'Picturesque wooden suspension bridge over coconut-fringed backwaters with thrilling kayaking adventures.'
            }
        ],
        nodes: [
            {
                dot: 1,
                name: 'End Point Viewpoint',
                time: '🌅 Sunset View: 5:30 PM',
                detour: { id: 'mannapalla', text: '⚡ Detour to Mannapalla Lake (2 KM)', category: 'viewpoints' }
            },
            {
                dot: 2,
                name: 'Udupi Krishna Matha',
                time: '🛕 Morning Darshan: 7:00 AM',
                detour: { id: 'kadiyali', text: '⚡ Detour to Kadiyali Temple (2 KM)', category: 'temples' }
            },
            {
                dot: 3,
                name: 'Malpe Beach & Island',
                time: '🏖️ Ferry Ride: 3:30 PM',
                detour: { id: 'padukere', text: '⚡ Detour to Padukere Beach (6 KM)', category: 'beaches' }
            },
            {
                dot: 4,
                name: 'Hasta Shilpa Village',
                time: '🏛️ Heritage Walk: 10:30 AM',
                detour: { id: 'anatomy_map', text: '⚡ Detour to Anatomy Museum MAP (1 KM)', category: 'museums' }
            },
            {
                dot: 5,
                name: 'Kemmannu Bridge',
                time: '🛶 Sunset Kayaking: 4:30 PM'
            }
        ],
        distances: [
            { dist: '5 KM', time: '🚗 10m | 🏍️ 8m' },
            { dist: '8 KM', time: '🚗 15m | 🏍️ 12m' },
            { dist: '9 KM', time: '🚗 16m | 🏍️ 14m' },
            { dist: '12 KM', time: '🚗 20m | 🏍️ 16m' }
        ]
    }
};

function openCityMustWatchModal(cityId) {
    const cityData = cityMustWatchData[cityId];
    if (!cityData) return;

    // Remove existing modal if any
    const existing = document.getElementById('mangaluru-must-watch-modal-overlay');
    if (existing) existing.remove();

    // 1. Add and Activate dynamic premium loader overlay
    let loader = document.getElementById('must-watch-loader-overlay');
    if (!loader) {
        const loaderHTML = `
            <div class="must-watch-loader-overlay" id="must-watch-loader-overlay">
                <div class="must-watch-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', loaderHTML);
        loader = document.getElementById('must-watch-loader-overlay');
    }

    loader.classList.add('active');

    const modalHTML = `
        <div class="must-watch-modal-overlay" id="mangaluru-must-watch-modal-overlay">
            <div class="must-watch-modal" style="max-width: 1100px;">
                <header class="must-watch-modal-header">
                    <h2>${cityData.title}</h2>
                    <button class="must-watch-close-btn" id="mangaluru-must-watch-close-btn" aria-label="Close modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                </header>
                
                <div class="mangaluru-modal-grid">
                    <!-- Left Pane: Swiper Slider -->
                    <div class="mangaluru-carousel-pane">
                        <div class="swiper must-watch-swiper mangaluru-must-watch-swiper">
                            <div class="swiper-wrapper">
                                ${cityData.places.map((place, idx) => `
                                    <div class="swiper-slide">
                                        <div class="must-watch-card" style="max-width: 100%;">
                                            <div class="must-watch-card-img">
                                                <img src="${place.image}" alt="${place.name}" loading="lazy" decoding="async" ${['Chamundi Hills', 'Karinjeshwara Hill Temple', 'Karinchieshwara Trek'].includes(place.name) ? 'style="transform: scale(1.35); transform-origin: center; object-fit: cover;"' : ['Mandi Stories', 'Charminar Restaurant'].includes(place.name) ? 'style="object-fit: contain; background-color: #ffffff; padding: 12px;"' : ''}>
                                                <div class="must-watch-badges">
                                                    <span class="must-watch-badge rating">★ ${place.rating}</span>
                                                    <span class="must-watch-badge" style="background: rgba(131, 56, 236, 0.9); font-weight: 700; border: none; box-shadow: 0 4px 10px rgba(131,56,236,0.3);">${place.bestTime}</span>
                                                </div>
                                            </div>
                                            <div class="must-watch-card-info">
                                                <h3>${place.name}</h3>
                                                <div class="location-row">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="12" r="3"/></svg>
                                                    <span>${place.location}</span>
                                                </div>
                                                <p>${place.description}</p>
                                                <button class="must-watch-explore-btn" data-name="${place.name}" onclick="handleExplore(event, this.dataset.name, '${cityId}')">
                                                    Explore More
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <!-- Swiper navigation & bullets -->
                            <div class="swiper-pagination must-watch-pagination"></div>
                            <div class="swiper-button-next must-watch-next"></div>
                            <div class="swiper-button-prev must-watch-prev"></div>
                        </div>
                    </div>
                    
                    <!-- Right Pane: Interactive Route Planner -->
                    <div class="mangaluru-route-pane">
                        <h3>📍 Interactive Route Planner</h3>
                        <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 1.5rem;">Click nodes or detours to dynamically control the view map.</p>
                        
                        <div class="mangaluru-route-map">
                            <div class="route-line-animated"></div>
                            
                            ${cityData.nodes.map((node, idx) => `
                                <!-- Node ${idx + 1} -->
                                <div class="route-node ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                                    <div class="node-dot">${node.dot}</div>
                                    <div class="node-content">
                                        <h4>${node.name}</h4>
                                        <span class="node-best-time">${node.time}</span>
                                        ${node.detour ? `
                                            <span class="route-detour-btn" 
                                                  id="${cityId}-detour-${idx}" 
                                                  data-type="${node.detour.category ? 'cat' : 'slide'}" 
                                                  data-target="${node.detour.category || node.detour.slideIndex}">
                                                ${node.detour.text}
                                            </span>
                                        ` : ''}
                                    </div>
                                </div>
                                
                                ${idx < cityData.nodes.length - 1 ? `
                                    <div class="route-distance-label" data-dist-index="${idx}">
                                        <span class="dist-pill">🛣️ ${cityData.distances[idx].dist}</span>
                                        <span class="time-pills">${cityData.distances[idx].time}</span>
                                    </div>
                                ` : ''}
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 2. Simulate loading animation before displaying
    setTimeout(() => {
        loader.classList.remove('active');
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const overlay = document.getElementById('mangaluru-must-watch-modal-overlay');
        const closeBtn = document.getElementById('mangaluru-must-watch-close-btn');

        const closeModal = () => {
            overlay.classList.remove('active');
            // Wait for transition to complete before removing from DOM
            setTimeout(() => {
                overlay.remove();
            }, 600);
        };

        // Smooth scale entrance
        setTimeout(() => {
            overlay.classList.add('active');
        }, 30);

        // Initialize swiper inside the modal
        let swiperInstance = null;
        if (typeof Swiper !== 'undefined') {
            swiperInstance = new Swiper('.mangaluru-must-watch-swiper', {
                loop: true,
                speed: 800,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                effect: 'slide',
                grabCursor: true,
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.must-watch-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.must-watch-next',
                    prevEl: '.must-watch-prev',
                },
            });
            
            // Connect Swiper active slide change with route node highlighting
            swiperInstance.on('slideChange', () => {
                const activeIdx = swiperInstance.realIndex;
                document.querySelectorAll('#mangaluru-must-watch-modal-overlay .route-node').forEach(node => {
                    node.classList.remove('active');
                });
                const activeNode = document.querySelector(`#mangaluru-must-watch-modal-overlay .route-node[data-index="${activeIdx}"]`);
                if (activeNode) activeNode.classList.add('active');

                // Pop up the distance label dynamically
                document.querySelectorAll('#mangaluru-must-watch-modal-overlay .route-distance-label').forEach(dist => {
                    dist.classList.remove('active');
                });
                if (activeIdx > 0) {
                    const activeDist = document.querySelector(`#mangaluru-must-watch-modal-overlay .route-distance-label[data-dist-index="${activeIdx - 1}"]`);
                    if (activeDist) {
                        void activeDist.offsetWidth; // Trigger reflow to restart CSS animation
                        activeDist.classList.add('active');
                    }
                }
            });
        }

        // Add interactive controls to route map nodes
        document.querySelectorAll('#mangaluru-must-watch-modal-overlay .route-node').forEach(node => {
            node.addEventListener('click', () => {
                const index = parseInt(node.getAttribute('data-index'));
                if (swiperInstance) {
                    swiperInstance.slideToLoop(index, 800);
                }
            });
        });

        // Add detour link handlers dynamically
        cityData.nodes.forEach((node, idx) => {
            if (node.detour) {
                const detourBtn = document.getElementById(`${cityId}-detour-${idx}`);
                if (detourBtn) {
                    detourBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const type = detourBtn.getAttribute('data-type');
                        const target = detourBtn.getAttribute('data-target');
                        
                        if (type === 'cat') {
                            closeModal();
                            renderCategoryPage(target, cityId);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else if (type === 'slide') {
                            if (swiperInstance) {
                                swiperInstance.slideToLoop(parseInt(target), 800);
                            }
                        }
                    });
                }
            }
        });

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        document.addEventListener('keydown', escHandler);

    }, 600);
}

// Geolocation Database for Mangalore places
const cityCoordinates = {
    // Mangaluru
    'panambur beach': { lat: 12.9611, lng: 74.7958 },
    'tannirbhavi beach': { lat: 12.8942, lng: 74.8142 },
    'someshwara beach': { lat: 12.7936, lng: 74.8519 },
    'surathkal beach': { lat: 13.0084, lng: 74.7867 },
    'sasihithlu beach': { lat: 13.0722, lng: 74.7797 },
    'ullal beach': { lat: 12.8028, lng: 74.8464 },
    'bengre beach': { lat: 12.8720, lng: 74.8210 },
    'talapady beach': { lat: 12.7533, lng: 74.8722 },
    'batapady beach': { lat: 12.7483, lng: 74.8767 },
    'mukka beach': { lat: 13.0233, lng: 74.7817 },
    'kodical beach': { lat: 12.9230, lng: 74.8080 },
    'chitrapura beach': { lat: 12.9917, lng: 74.7903 },
    'mulki beach': { lat: 13.0900, lng: 74.7750 },
    'hosabettu beach': { lat: 12.9990, lng: 74.7870 },
    'swami koragajja temple': { lat: 12.8062, lng: 74.8692 },
    'kadri manjunath temple': { lat: 12.8797, lng: 74.8569 },
    'kadri temple': { lat: 12.8797, lng: 74.8569 },
    'kudroli gokarnath temple': { lat: 12.8744, lng: 74.8322 },
    'mangaladevi temple': { lat: 12.8469, lng: 74.8486 },
    'polali rajarajeshwari temple': { lat: 12.9360, lng: 74.9390 },
    'kateel temple': { lat: 13.0139, lng: 74.8489 },
    'someshwara temple': { lat: 12.7950, lng: 74.8522 },
    'urwa marigudi temple': { lat: 12.8885, lng: 74.8306 },
    '🌺 bappanadu durgaparameshwari temple': { lat: 13.0990, lng: 74.7880 },
    'karinjeshwara hill temple': { lat: 12.9800, lng: 75.1200 },
    'city centre mall': { lat: 12.8711, lng: 74.8436 },
    'forum fiza mall': { lat: 12.8622, lng: 74.8369 },
    'lotus mall (upcoming)': { lat: 12.8800, lng: 74.8600 },
    'bharath mall': { lat: 12.8814, lng: 74.8433 },
    'jamalabad fort': { lat: 13.0270, lng: 75.3180 },
    'ermayi falls trek': { lat: 13.0800, lng: 75.3500 },
    'karinchieshwara trek': { lat: 12.9800, lng: 75.1200 },
    'gadaikallu': { lat: 13.0270, lng: 75.3180 },
    'st. aloysius chapel': { lat: 12.8731, lng: 74.8453 },
    'milagres church': { lat: 12.8697, lng: 74.8439 },
    'rosario cathedral': { lat: 12.8561, lng: 74.8344 },
    'infant jesus shrine': { lat: 12.8683, lng: 74.8647 },
    'ocean pearl hotel / ideal café': { lat: 12.8730, lng: 74.8420 },
    'sultan battery': { lat: 12.8900, lng: 74.8250 },
    'machali': { lat: 12.8745, lng: 74.8430 },
    'shetty lunch home': { lat: 12.8710, lng: 74.8440 },
    'pallkhi restaurant': { lat: 12.8735, lng: 74.8425 },
    'village restaurant': { lat: 12.9010, lng: 74.8530 },
    'mandi stories': { lat: 12.8687, lng: 74.8464 },

    // Bangalore
    'echo esports lounge': { lat: 12.9463, lng: 77.5738 },
    'clan gaming': { lat: 13.0310, lng: 77.6250 },
    'torq03': { lat: 12.9525, lng: 77.7013 },
    'obbattu (holige)': { lat: 12.9716, lng: 77.5946 },
    'masala dosa': { lat: 12.9716, lng: 77.5946 },
    'filter coffee': { lat: 12.9716, lng: 77.5946 },
    'idli vada': { lat: 12.9716, lng: 77.5946 },
    'ragi mudde': { lat: 12.9716, lng: 77.5946 },
    'cubbon park': { lat: 12.9738, lng: 77.5906 },
    'lalbagh botanical garden': { lat: 12.9507, lng: 77.5848 },
    'bannerghatta national park': { lat: 12.8009, lng: 77.5739 },
    'bugle rock park': { lat: 12.9404, lng: 77.5684 },
    'jp park': { lat: 13.0315, lng: 77.5583 },
    'freedom park': { lat: 12.9774, lng: 77.5804 },
    'bangalore palace': { lat: 12.9980, lng: 77.5920 },
    'tipu sultan palace': { lat: 12.9593, lng: 77.5737 },
    'devanahalli fort': { lat: 13.2481, lng: 77.7126 },
    'mayo hall': { lat: 12.9737, lng: 77.6111 },
    'kempegowda museum': { lat: 12.9737, lng: 77.6111 },
    'venkatappa art gallery': { lat: 12.9754, lng: 77.5975 },
    'government museum': { lat: 12.9754, lng: 77.5975 },
    'attara kacheri': { lat: 12.9779, lng: 77.5919 },
    'iskcon temple': { lat: 13.0098, lng: 77.5511 },
    'bull temple': { lat: 12.9423, lng: 77.5682 },
    'shivoham shiva temple': { lat: 12.9594, lng: 77.6538 },
    'ragigudda sri prasanna anjaneya swamy temple': { lat: 12.9124, lng: 77.5901 },
    'shree banashankari devi temple': { lat: 12.9262, lng: 77.5734 },
    'sri shirdi sai baba temple': { lat: 12.9700, lng: 77.6000 },
    'adiyogi shiva statue': { lat: 13.4862, lng: 77.7126 },
    '🥇 ub city (1st best)': { lat: 12.9716, lng: 77.5958 },
    'ub city': { lat: 12.9716, lng: 77.5958 },
    '🥈 phoenix mall of asia (2nd best)': { lat: 13.0694, lng: 77.5961 },
    'phoenix mall of asia': { lat: 13.0694, lng: 77.5961 },
    '🥉 phoenix marketcity mall (3rd best)': { lat: 12.9972, lng: 77.6966 },
    'phoenix marketcity mall': { lat: 12.9972, lng: 77.6966 },
    '🛍️ lulu mall (4th best)': { lat: 12.9708, lng: 77.5562 },
    'lulu mall': { lat: 12.9708, lng: 77.5562 },
    '🌊 orion mall (5th best)': { lat: 13.0112, lng: 77.5550 },
    'orion mall': { lat: 13.0112, lng: 77.5550 },
    '🏬 nexus mall koramangala (6th best)': { lat: 12.9339, lng: 77.6111 },
    'nexus mall koramangala': { lat: 12.9339, lng: 77.6111 },
    '✨ vr bengaluru mall (7th best)': { lat: 12.9960, lng: 77.6960 },
    'vr bengaluru mall': { lat: 12.9960, lng: 77.6960 },
    '🏢 garuda mall (8th best)': { lat: 12.9701, lng: 77.6095 },
    'garuda mall': { lat: 12.9701, lng: 77.6095 },
    '⭐ forum mall koramangala (9th best)': { lat: 12.9339, lng: 77.6111 },
    'forum mall koramangala': { lat: 12.9339, lng: 77.6111 },
    '🏰 royal meenakshi mall (10th best)': { lat: 12.8757, lng: 77.5954 },
    'royal meenakshi mall': { lat: 12.8757, lng: 77.5954 },
    '🌟 bangalore central mall (11th best)': { lat: 12.9600, lng: 77.6000 },
    'bangalore central mall': { lat: 12.9600, lng: 77.6000 },
    '🌐 gt world mall (12th best)': { lat: 12.9733, lng: 77.5450 },
    'gt world mall': { lat: 12.9733, lng: 77.5450 },
    'toit': { lat: 12.9791, lng: 77.6408 },
    'windmills craftworks': { lat: 12.9823, lng: 77.7219 },
    'arbor brewing company': { lat: 12.9703, lng: 77.6068 },
    'tk falls (thottikallu falls)': { lat: 12.8000, lng: 77.5900 },
    'muthyala maduvu (pearl valley)': { lat: 12.7000, lng: 77.7000 },
    'guhantara underground cave resort': { lat: 12.7800, lng: 77.5200 },
    'manchinbele dam': { lat: 12.8800, lng: 77.3400 },
    'nandi hills': { lat: 13.3702, lng: 77.6835 },
    'savandurga': { lat: 12.9165, lng: 77.2925 },
    'shivagange hills': { lat: 13.1667, lng: 77.2167 },
    'skandagiri hills': { lat: 13.4167, lng: 77.6833 },
    'devarayanadurga hills': { lat: 13.3667, lng: 77.2167 },
    'anthargange': { lat: 13.1333, lng: 78.1333 },
    'thippagondanahalli reservoir': { lat: 12.9667, lng: 77.3333 },
    'chunchi falls': { lat: 12.3500, lng: 77.4000 },
    'hesaraghatta lake': { lat: 13.1500, lng: 77.4833 },
    'ramanagara': { lat: 12.7167, lng: 77.3000 },
    'mtr (mavalli tiffin room)': { lat: 12.9554, lng: 77.5839 },
    'vidyarthi bhavan': { lat: 12.9452, lng: 77.5700 },
    'nagarjuna restaurant': { lat: 12.9760, lng: 77.6077 },
    'truffles': { lat: 12.9715, lng: 77.6010 },

    // Mysuru
    'legion x gaming café': { lat: 12.3160, lng: 76.6080 },
    'gamers hub mysuru': { lat: 12.3323, lng: 76.6202 },
    'smaaash (mall of mysore)': { lat: 12.2978, lng: 76.6646 },
    'mysore pak': { lat: 12.3082, lng: 76.6520 },
    'mysore masala dosa': { lat: 12.3082, lng: 76.6520 },
    'mysore bonda': { lat: 12.3082, lng: 76.6520 },
    'hanumanthu biryani': { lat: 12.3082, lng: 76.6520 },
    'mysore palace': { lat: 12.3052, lng: 76.6552 },
    'jaganmohana palace art gallery': { lat: 12.3061, lng: 76.6506 },
    'lalitha mahal palace': { lat: 12.3021, lng: 76.6917 },
    'chamundi hills': { lat: 12.2736, lng: 76.6703 },
    'karanji lake': { lat: 12.3025, lng: 76.6719 },
    'kukkarahalli lake': { lat: 12.3079, lng: 76.6341 },
    'brindavan gardens': { lat: 12.4273, lng: 76.5719 },
    'bonsai garden': { lat: 12.2818, lng: 76.6570 },
    'balmuri falls': { lat: 12.4053, lng: 76.5910 },
    'mysore zoo': { lat: 12.3022, lng: 76.6639 },
    'ranganathittu bird sanctuary': { lat: 12.4242, lng: 76.6565 },
    'shuka vana': { lat: 12.2818, lng: 76.6570 },
    'lokaranjan aqua world underwater zoo': { lat: 12.3032, lng: 76.6660 },
    'chamundeshwari temple': { lat: 12.2751, lng: 76.6703 },
    'st. philomena\'s cathedral': { lat: 12.3210, lng: 76.6585 },
    'venugopala swamy temple | submerged temple': { lat: 12.4419, lng: 76.4950 },
    'iskcon temple': { lat: 12.3480, lng: 76.6130 },
    'kote sri anjaneya temple': { lat: 12.3080, lng: 76.6560 },
    'srikanteshwara temple': { lat: 12.1220, lng: 76.6810 },
    'gommatagiri': { lat: 12.3700, lng: 76.4900 },
    'gowri sand sculpture museum': { lat: 12.2882, lng: 76.6775 },
    'mysore rail museum': { lat: 12.3168, lng: 76.6433 },
    'payana vintage car museum': { lat: 12.3780, lng: 76.7150 },
    'nexus centre city mall': { lat: 12.3150, lng: 76.6625 },
    'mall of mysore': { lat: 12.3005, lng: 76.6659 },
    'garuda mall': { lat: 12.3165, lng: 76.6580 },
    'bm habitat mall': { lat: 12.3250, lng: 76.6210 },
    'central mall mysore': { lat: 12.3080, lng: 76.6490 },
    'hotel original mylari': { lat: 12.3088, lng: 76.6631 },
    'hanumanthu mess': { lat: 12.3175, lng: 76.6490 },
    'guru sweet mart': { lat: 12.3082, lng: 76.6540 },
    'gayatri tiffin room (gtr)': { lat: 12.3025, lng: 76.6450 },

    // Kodagu
    'abbey falls': { lat: 12.4431, lng: 75.7208 },
    'raja’s seat': { lat: 12.4131, lng: 75.7369 },
    'raja\'s seat': { lat: 12.4131, lng: 75.7369 },
    'dubare elephant camp': { lat: 12.3683, lng: 75.9038 },
    'talakaveri': { lat: 12.3897, lng: 75.4886 },

    // Chikkamagaluru
    'mullayanagiri peak': { lat: 13.3908, lng: 75.7214 },
    'baba budangiri': { lat: 13.4325, lng: 75.7661 },
    'hebbe falls': { lat: 13.5414, lng: 75.7171 },
    'coffee plantations': { lat: 13.3167, lng: 75.7667 },


    // Zoo fallback for Mysuru
    'zoo': { lat: 12.3022, lng: 76.6639 },

    // Manipal
    'end point park': { lat: 13.3592, lng: 74.7936 },
    'manipal end point park': { lat: 13.3592, lng: 74.7936 },
    'hasta shilpa heritage village': { lat: 13.3512, lng: 74.7865 },
    'anatomy museum (map)': { lat: 13.3533, lng: 74.7850 },
    'manipal museum of anatomy & pathology (map)': { lat: 13.3533, lng: 74.7850 },
    'venugopal temple': { lat: 13.3550, lng: 74.7900 },

    'malpe beach': { lat: 13.3575, lng: 74.7042 },
    'kapu beach': { lat: 13.2227, lng: 74.7358 },
    'padukere beach': { lat: 13.3425, lng: 74.7020 },
    'hoode beach': { lat: 13.4111, lng: 74.6925 },
    'mattu beach': { lat: 13.2667, lng: 74.7250 },

    'udupi shri krishna matha': { lat: 13.3409, lng: 74.7525 },
    'sri venugopala temple': { lat: 13.3550, lng: 74.7900 },
    'kadiyali shri mahishamardini temple': { lat: 13.3490, lng: 74.7640 },
    'shri indrani panchadurga parameshwari temple': { lat: 13.3530, lng: 74.7760 },
    'shivapady sri umamaheshwara temple': { lat: 13.3570, lng: 74.7850 },

    'kudremukh peak trek': { lat: 13.2167, lng: 75.2667 },
    'kudremukh peak': { lat: 13.2167, lng: 75.2667 },
    'kodachadri peak & sunset trek': { lat: 13.8590, lng: 74.8710 },
    'kodachadri peak': { lat: 13.8590, lng: 74.8710 },
    'kodachadri trek': { lat: 13.8590, lng: 74.8710 },
    'narasimha parvatha trek (agumbe)': { lat: 13.5042, lng: 75.1225 },
    'kudlu theertha falls trek': { lat: 13.4470, lng: 75.0560 },
    'koosalli falls trek': { lat: 13.8790, lng: 74.6850 },

    'arbi falls': { lat: 13.3450, lng: 74.7920 },
    'arbi falls (manipal hidden falls)': { lat: 13.3450, lng: 74.7920 },
    'kemmannu kayaking & backwater adventure': { lat: 13.4020, lng: 74.7210 },
    'kemmannu kayaking': { lat: 13.4020, lng: 74.7210 },
    'jogi gundi falls (agumbe trail)': { lat: 13.5010, lng: 75.0930 },
    'jogi gundi falls': { lat: 13.5010, lng: 75.0930 },

    'canara mall (manipal)': { lat: 13.3480, lng: 74.7780 },
    'canara mall': { lat: 13.3480, lng: 74.7780 },
    'city centre mall (udupi)': { lat: 13.3390, lng: 74.7500 },
    'time square mall (udupi)': { lat: 13.3450, lng: 74.7650 },
    'time square mall': { lat: 13.3450, lng: 74.7650 },

    'manipal lake (mannapalla lake)': { lat: 13.3510, lng: 74.7960 },
    'manipal lake': { lat: 13.3510, lng: 74.7960 },
    'mannapalla lake': { lat: 13.3510, lng: 74.7960 },
    'delta beach (pithrody st. mary\'s island backwaters)': { lat: 13.3880, lng: 74.6890 },
    'delta beach': { lat: 13.3880, lng: 74.6890 },
    'hangarkatta backwaters & river cruise': { lat: 13.4350, lng: 74.6980 },
    'hangarkatta': { lat: 13.4350, lng: 74.6980 },

    'egg sunday (end point road)': { lat: 13.3560, lng: 74.7910 },
    'egg sunday': { lat: 13.3560, lng: 74.7910 },
    'hakkim mess / hotel hakkim': { lat: 13.3520, lng: 74.7880 },
    'hakkim mess': { lat: 13.3520, lng: 74.7880 },
    'dollops restaurant': { lat: 13.3515, lng: 74.7870 },
    'dollops': { lat: 13.3515, lng: 74.7870 },
    'scirocco / eye of the needle cafe': { lat: 13.3540, lng: 74.7890 },
    'scirocco': { lat: 13.3540, lng: 74.7890 },

    'dr. t.m.a. pai museum & planetarium': { lat: 13.3530, lng: 74.7860 },
    'corporation bank heritage museum (coin museum), udupi': { lat: 13.3400, lng: 74.7510 },
    'smriti bhavan museum (dr. t.m.a. pai house)': { lat: 13.3570, lng: 74.7920 },

    'gadbad ice cream': { lat: 13.3410, lng: 74.7520 },
    'ghee roast': { lat: 13.3520, lng: 74.7880 },
    'neer dosa': { lat: 13.3410, lng: 74.7520 },
    'mangalore bun': { lat: 13.3410, lng: 74.7520 }
};

const mangaloreCoordinates = cityCoordinates;

function getCityFallbackCoords(cityId) {
    if (cityId === 'bangalore' || cityId === 'bangalore_east_west') return { lat: 12.9716, lng: 77.5946 };
    if (cityId === 'mysuru' || cityId === 'mysuru_east_west') return { lat: 12.3082, lng: 76.6520 };
    if (cityId === 'kodagu') return { lat: 12.4244, lng: 75.7382 };
    if (cityId === 'chikkamagaluru') return { lat: 13.3167, lng: 75.7667 };
    if (cityId === 'manipal') return { lat: 13.3525, lng: 74.7876 };
    return { lat: 12.8700, lng: 74.8800 }; // Mangaluru
}

function getPlaceExactMetrics(placeName, cityId) {
    if (!placeName) return { dist: 3.5, time: 8 };
    const clean = (str) => str.toLowerCase().replace(/\([^)]*\)/g, '').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    const cleaned = clean(placeName);

    const exactMetrics = {
        // Manipal
        'kudremukh peak': { dist: 95.0, time: 135 },
        'kudremukh': { dist: 95.0, time: 135 },
        'kodachadri': { dist: 110.0, time: 160 },
        'kodachadri trek': { dist: 110.0, time: 160 },
        'narasimha parvatha': { dist: 85.0, time: 115 },
        'kudlu theertha': { dist: 45.0, time: 65 },
        'koosalli falls': { dist: 70.0, time: 95 },
        'jogi gundi falls': { dist: 50.0, time: 70 },
        'delta beach': { dist: 18.0, time: 28 },
        'kemmannu hanging bridge': { dist: 14.0, time: 22 },
        'kemmannu kayaking': { dist: 13.5, time: 22 },
        'city centre mall udupi': { dist: 5.2, time: 12 },
        'city centre mall': { dist: 5.2, time: 12 },
        'time square mall': { dist: 4.1, time: 9 },
        'kadiyali temple': { dist: 5.5, time: 12 },
        'kadiyali shri mahishamardini temple': { dist: 5.5, time: 12 },
        'indrani temple': { dist: 3.8, time: 9 },
        'shri indrani panchadurga parameshwari temple': { dist: 3.8, time: 9 },
        'shivapady sri umamaheshwara temple': { dist: 2.8, time: 7 },
        'end point swarna river viewpoint': { dist: 1.8, time: 5 },
        'end point park': { dist: 1.8, time: 5 },
        'mannapalla lake park': { dist: 2.5, time: 6 },
        'mannapalla lake': { dist: 2.5, time: 6 },
        'the egg factory': { dist: 1.5, time: 4 },
        'eye of the needle cafe': { dist: 1.2, time: 3 },
        'dollops restaurant': { dist: 2.0, time: 5 },
        'snack shack': { dist: 1.0, time: 3 },
        'hasta shilpa heritage village museum': { dist: 2.2, time: 6 },
        'hasta shilpa heritage village': { dist: 2.2, time: 6 },
        'anatomy museum (map)': { dist: 1.0, time: 3 },
        'manipal museum of anatomy & pathology (map)': { dist: 1.0, time: 3 },
        'dr. t.m.a. pai museum & planetarium': { dist: 1.5, time: 4 },
        'corporation bank heritage museum': { dist: 5.5, time: 12 },
        'smriti bhavan museum': { dist: 1.5, time: 4 },
        'arbi falls': { dist: 3.2, time: 8 },
        'canara mall': { dist: 1.2, time: 3 },
        'gadbad ice cream': { dist: 5.5, time: 12 },
        'ghee roast': { dist: 1.5, time: 4 },

        // Mangaluru
        'panambur beach': { dist: 11.5, time: 20 },
        'tannirbhavi beach': { dist: 12.0, time: 22 },
        'someshwara beach': { dist: 16.5, time: 30 },
        'surathkal beach': { dist: 15.0, time: 25 },
        'sasihithlu beach': { dist: 24.0, time: 38 },
        'ullal beach': { dist: 12.5, time: 22 },
        'bengre beach': { dist: 10.0, time: 18 },
        'talapady beach': { dist: 18.0, time: 30 },
        'batapady beach': { dist: 21.0, time: 35 },
        'mukka beach': { dist: 18.5, time: 28 },
        'kodical beach': { dist: 7.0, time: 14 },
        'chitrapura beach': { dist: 12.5, time: 22 },
        'mulki beach': { dist: 28.0, time: 42 },
        'hosabettu beach': { dist: 16.0, time: 25 },
        'swami koragajja temple': { dist: 14.0, time: 25 },
        'kadri manjunath temple': { dist: 4.2, time: 10 },
        'kudroli gokarnath temple': { dist: 3.5, time: 8 },
        'mangaladevi temple': { dist: 5.0, time: 12 },
        'polali rajarajeshwari temple': { dist: 19.0, time: 32 },
        'kateel temple': { dist: 26.0, time: 40 },
        'kateel urgaparameshwari temple': { dist: 26.0, time: 40 },
        'someshwara temple': { dist: 16.5, time: 30 },
        'urwa marigudi temple': { dist: 4.5, time: 10 },
        'bappanadu temple': { dist: 29.0, time: 42 },
        'karinjeshwara hill temple': { dist: 38.0, time: 55 },
        'st. aloysius chapel': { dist: 2.5, time: 6 },
        'milagres church': { dist: 1.8, time: 5 },
        'rosario cathedral': { dist: 3.0, time: 7 },
        'infant jesus shrine': { dist: 4.0, time: 9 },
        'sultan battery': { dist: 5.5, time: 12 },
        'forum fiza mall': { dist: 3.2, time: 8 },
        'bharath mall': { dist: 3.5, time: 8 },
        'ocean pearl hotel / ideal café': { dist: 2.0, time: 5 },
        'machali': { dist: 1.8, time: 4 },
        'shetty lunch home': { dist: 2.2, time: 5 },
        'pallkhi restaurant': { dist: 1.5, time: 4 },
        'village restaurant': { dist: 4.0, time: 9 },
        'mandi stories': { dist: 3.0, time: 7 },
        'ermayi falls trek': { dist: 62.0, time: 85 },
        'karinchieshwara trek': { dist: 38.0, time: 55 },
        'gadaikallu': { dist: 65.0, time: 90 },

        // Bangalore
        'cubbon park': { dist: 1.5, time: 5 },
        'lalbagh botanical garden': { dist: 4.5, time: 12 },
        'bannerghatta national park': { dist: 22.0, time: 45 },
        'bugle rock park': { dist: 6.0, time: 15 },
        'jp park': { dist: 9.5, time: 22 },
        'freedom park': { dist: 2.5, time: 7 },
        'bangalore palace': { dist: 4.0, time: 10 },
        'tipu sultan palace': { dist: 4.5, time: 12 },
        'devanahalli fort': { dist: 38.0, time: 50 },
        'mayo hall': { dist: 2.8, time: 7 },
        'kempegowda museum': { dist: 2.0, time: 5 },
        'venkatappa art gallery': { dist: 1.8, time: 5 },
        'government museum': { dist: 1.8, time: 5 },
        'attara kacheri': { dist: 1.5, time: 4 },
        'iskcon temple': { dist: 8.5, time: 20 },
        'bull temple': { dist: 5.5, time: 14 },
        'shivoham shiva temple': { dist: 11.0, time: 25 },
        'ragigudda sri prasanna anjaneya swamy temple': { dist: 9.0, time: 20 },
        'shree banashankari devi temple': { dist: 8.0, time: 18 },
        'adiyogi shiva statue': { dist: 65.0, time: 85 },
        'ub city': { dist: 1.2, time: 4 },
        'phoenix mall of asia': { dist: 14.0, time: 30 },
        'phoenix marketcity mall': { dist: 16.0, time: 35 },
        'lulu mall': { dist: 4.5, time: 12 },
        'orion mall': { dist: 7.5, time: 18 },
        'nexus mall koramangala': { dist: 7.0, time: 18 },
        'vr bengaluru mall': { dist: 16.5, time: 36 },
        'garuda mall': { dist: 3.0, time: 8 },
        'forum mall koramangala': { dist: 7.0, time: 18 },
        'royal meenakshi mall': { dist: 14.5, time: 32 },
        'bangalore central mall': { dist: 6.0, time: 15 },
        'gt world mall': { dist: 6.5, time: 16 },
        'toit': { dist: 6.5, time: 16 },
        'windmills craftworks': { dist: 18.0, time: 40 },
        'arbor brewing company': { dist: 1.8, time: 5 },
        'tk falls (thottikallu falls)': { dist: 28.0, time: 50 },
        'muthyala maduvu (pearl valley)': { dist: 42.0, time: 65 },
        'guhantara underground cave resort': { dist: 32.0, time: 55 },
        'manchinbele dam': { dist: 38.0, time: 60 },
        'nandi hills': { dist: 60.0, time: 80 },
        'savandurga': { dist: 55.0, time: 75 },
        'shivagange hills': { dist: 54.0, time: 72 },
        'skandagiri hills': { dist: 62.0, time: 85 },
        'devarayanadurga hills': { dist: 72.0, time: 95 },
        'anthargange': { dist: 68.0, time: 90 },
        'chunchi falls': { dist: 85.0, time: 110 },
        'hesaraghatta lake': { dist: 28.0, time: 48 },
        'ramanagara': { dist: 48.0, time: 65 },
        'mtr (mavalli tiffin room)': { dist: 3.5, time: 9 },
        'vidyarthi bhavan': { dist: 5.0, time: 12 },
        'nagarjuna restaurant': { dist: 2.0, time: 5 },
        'truffles': { dist: 6.5, time: 16 },
        'indiranagar 100ft road cafe corridor': { dist: 6.0, time: 15 },
        'corner house ice cream': { dist: 6.2, time: 15 },
        'vv puram food street': { dist: 4.8, time: 12 },
        'hal aerospace museum': { dist: 12.0, time: 25 },
        'national gallery of modern art (ngma)': { dist: 3.5, time: 9 },
        'ulsoor lake (halasuru lake)': { dist: 3.8, time: 9 },
        'sankey tank': { dist: 5.5, time: 14 },

        // Mysuru
        'mysore palace': { dist: 1.0, time: 3 },
        'jaganmohana palace art gallery': { dist: 1.5, time: 4 },
        'lalitha mahal palace': { dist: 5.5, time: 12 },
        'chamundi hills': { dist: 12.0, time: 25 },
        'karanji lake': { dist: 3.2, time: 8 },
        'kukkarahalli lake': { dist: 3.5, time: 8 },
        'brindavan gardens': { dist: 21.0, time: 40 },
        'bonsai garden': { dist: 4.0, time: 9 },
        'balmuri falls': { dist: 16.0, time: 28 },
        'mysore zoo': { dist: 2.5, time: 6 },
        'ranganathittu bird sanctuary': { dist: 18.0, time: 30 },
        'shuka vana': { dist: 4.0, time: 9 },
        'lokaranjan aqua world underwater zoo': { dist: 2.2, time: 5 },
        'chamundeshwari temple': { dist: 12.0, time: 25 },
        'st. philomena\'s cathedral': { dist: 2.8, time: 7 },
        'venugopala swamy temple | submerged temple': { dist: 22.0, time: 42 },
        'kote sri anjaneya temple': { dist: 1.0, time: 3 },
        'srikanteshwara temple': { dist: 25.0, time: 38 },
        'gommatagiri': { dist: 20.0, time: 35 },
        'gowri sand sculpture museum': { dist: 3.5, time: 8 },
        'mysore rail museum': { dist: 2.0, time: 5 },
        'grs snow park': { dist: 6.0, time: 14 },
        'grs fantasy park': { dist: 6.0, time: 14 },
        'skyjumper amusement park': { dist: 145.0, time: 180 },
        'rms play zone': { dist: 7.2, time: 16 },
        'nexus centre city mall': { dist: 3.5, time: 9 },
        'mall of mysore': { dist: 2.8, time: 7 },
        'bm habitat mall': { dist: 3.8, time: 9 },
        'hotel original mylari': { dist: 2.0, time: 5 },
        'hanumanthu mess': { dist: 2.5, time: 6 },
        'guru sweet mart': { dist: 1.2, time: 3 },
        'gayatri tiffin room (gtr)': { dist: 2.2, time: 5 },

        // Kodagu
        'abbey falls': { dist: 7.5, time: 18 },
        'raja’s seat': { dist: 1.5, time: 4 },
        'raja\'s seat': { dist: 1.5, time: 4 },
        'dubare elephant camp': { dist: 28.0, time: 45 },
        'talakaveri': { dist: 44.0, time: 70 },

        // Chikkamagaluru
        'mullayanagiri peak': { dist: 22.0, time: 45 },
        'baba budangiri': { dist: 30.0, time: 55 },
        'hebbe falls': { dist: 65.0, time: 100 },
        'coffee plantations': { dist: 8.0, time: 15 }
    };

    if (exactMetrics[cleaned]) return exactMetrics[cleaned];

    for (const key of Object.keys(exactMetrics)) {
        if (cleaned.includes(key) || key.includes(cleaned)) {
            return exactMetrics[key];
        }
    }

    return { dist: 4.5, time: 10 };
}

window.handleExplore = function(event, placeName, cityId = currentCityId) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    if (!placeName) return;

    // Close any open Must-Watch / Must-Visit modals so Place Details drawer pops up on top cleanly!
    document.querySelectorAll('.must-watch-modal-overlay, #must-watch-modal-overlay, #mangaluru-must-watch-modal-overlay').forEach(modal => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 250);
    });

    if (!navigator.geolocation) {
        const fallback = getCityFallbackCoords(cityId);
        calculateAndOpen(fallback.lat, fallback.lng, false);
        return;
    }

    let resolved = false;

    const fallbackTimeout = setTimeout(() => {
        if (!resolved) {
            resolved = true;
            const fallback = getCityFallbackCoords(cityId);
            calculateAndOpen(fallback.lat, fallback.lng, false);
        }
    }, 1000);

    navigator.geolocation.getCurrentPosition(
        function(position) {
            if (resolved) return;
            resolved = true;
            clearTimeout(fallbackTimeout);
            calculateAndOpen(position.coords.latitude, position.coords.longitude, true);
        },
        function(error) {
            if (resolved) return;
            resolved = true;
            clearTimeout(fallbackTimeout);
            const fallback = getCityFallbackCoords(cityId);
            calculateAndOpen(fallback.lat, fallback.lng, false);
        },
        { enableHighAccuracy: false, timeout: 800, maximumAge: 300000 }
    );

    function calculateAndOpen(userLat, userLng, isRealGps = false) {
        const destCoords = getCityCoords(placeName, cityId);
        const placeMetrics = getPlaceExactMetrics(placeName, cityId);

        let drivingDistance = 0;
        let durationMins = 0;

        if (isRealGps && userLat && userLng) {
            const R = 6371;
            const dLat = (destCoords.lat - userLat) * Math.PI / 180;
            const dLng = (destCoords.lng - userLng) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                      Math.cos(userLat * Math.PI / 180) * Math.cos(destCoords.lat * Math.PI / 180) *
                      Math.sin(dLng/2) * Math.sin(dLng/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            const straightDistance = R * c;

            drivingDistance = straightDistance * 1.28;
            if (drivingDistance < 5) {
                durationMins = Math.max(3, Math.round(drivingDistance / 25 * 60));
            } else if (drivingDistance <= 30) {
                durationMins = Math.round(drivingDistance / 40 * 60);
            } else {
                durationMins = Math.round(drivingDistance / 55 * 60);
            }
        } else {
            drivingDistance = placeMetrics.dist;
            durationMins = placeMetrics.time;
        }

        openGeoModal(userLat, userLng, destCoords.lat, destCoords.lng, placeName, drivingDistance, durationMins, cityId);
    }
};

window.handleMangaloreExplore = function(event, placeName) {
    window.handleExplore(event, placeName, currentCityId);
};

window.handleCardClick = function(event, placeName, cityId = currentCityId) {
    if (event && event.target) {
        if (event.target.closest('.slider-nav-btn, .slider-dot, .heart-icon-svg, .food-favorite-icon-badge')) {
            return;
        }
    }
    window.handleExplore(event, placeName, cityId);
};

// Helper to show modern non-intrusive Toast notifications
function showGeoToast(message) {
    // Remove existing if any
    const existing = document.querySelector('.geo-toast');
    if (existing) existing.remove();

    const toastHTML = `
        <div class="geo-toast" id="geo-toast-alert">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <span>${message}</span>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', toastHTML);
    const toast = document.getElementById('geo-toast-alert');
    
    // Smooth entrance
    setTimeout(() => {
        toast.classList.add('active');
    }, 50);

    // Auto dismiss
    setTimeout(() => {
        if (toast) {
            toast.classList.remove('active');
            setTimeout(() => toast.remove(), 500);
        }
    }, 4500);
}

// Helper to open the premium modal
// Google Place IDs Lookup Dictionary for Mangaluru Section
const cityPlaceIds = {
    // Mangaluru
    'panambur beach': 'ChIJyXGv0N9ApzsRHk9w_P9lJWs',
    'tannirbhavi beach': 'ChIJuUR113dApzsR3kSw_V8lJWs',
    'someshwara beach': 'ChIJv9m8dGdUpzsRwL9w_P9lJWs',
    'surathkal beach': 'ChIJaX_11DdApzsR2kSw_V8lJWs',
    'sasihithlu beach': 'ChIJtX_11HdApzsR1kSw_V8lJWs',
    'ullal beach': 'ChIJxX_11LdApzsR0kSw_V8lJWs',
    'bengre beach': 'ChIJwX_11RdApzsRzkSw_V8lJWs',
    'talapady beach': 'ChIJvX_11TdApzsRykSw_V8lJWs',
    'batapady beach': 'ChIJtX_11VdApzsRxkSw_V8lJWs',
    'mukka beach': 'ChIJsf1_1XdApzsRwkSw_V8lJWs',
    'kodical beach': 'ChIJrf1_1ZdApzsRvkSw_V8lJWs',
    'chitrapura beach': 'ChIJqf1_1bdApzsRukSw_V8lJWs',
    'mulki beach': 'ChIJpf1_1ddApzsRtkSw_V8lJWs',
    'hosabettu beach': 'ChIJof1_1fdApzsRskSw_V8lJWs',
    'swami koragajja temple': 'ChIJnf1_1hdApzsRrkSw_V8lJWs',
    'kadri manjunath temple': 'ChIJq7-5bX-w0joRaM6fT0C4D8Y',
    'kadri temple': 'ChIJq7-5bX-w0joRaM6fT0C4D8Y',
    'kudroli gokarnath temple': 'ChIJlf1_1ldApzsRpkSw_V8lJWs',
    'mangaladevi temple': 'ChIJKf1_1ndApzsRokSw_V8lJWs',
    'polali rajarajeshwari temple': 'ChIJJf1_1pdApzsRnkSw_V8lJWs',
    'kateel temple': 'ChIJIf1_1rdApzsRmkSw_V8lJWs',
    'someshwara temple': 'ChIJHf1_1tdApzsRlkSw_V8lJWs',
    'urwa marigudi temple': 'ChIJGf1_1vdApzsRkkSw_V8lJWs',
    '🌺 bappanadu durgaparameshwari temple': 'ChIJEf1_1xdApzsRjkSw_V8lJWs',
    'bappanadu temple': 'ChIJEf1_1xdApzsRjkSw_V8lJWs',
    'karinjeshwara hill temple': 'ChIJDf1_1zdApzsRikSw_V8lJWs',
    'city centre mall': 'ChIJCf1_11dApzsRhkSw_V8lJWs',
    'forum fiza mall': 'ChIJBf1_13dApzsRgkSw_V8lJWs',
    'lotus mall (upcoming)': 'ChIJAf1_15dApzsRfkSw_V8lJWs',
    'bharath mall': 'ChIJ_e1_17dApzsRekSw_V8lJWs',
    'jamalabad fort': 'ChIJ-e1_19dApzsRdkSw_V8lJWs',
    'ermayi falls trek': 'ChIJ9e1_1_dApzsRckSw_V8lJWs',
    'karinchieshwara trek': 'ChIJDf1_1zdApzsRikSw_V8lJWs',
    'gadaikallu': 'ChIJ8e1_2BdApzsRbkSw_V8lJWs',
    'st. aloysius chapel': 'ChIJ7e1_2DdApzsRakSw_V8lJWs',
    'milagres church': 'ChIJ6e1_2FdApzsRzkSw_V8lJWs',
    'rosario cathedral': 'ChIJ5e1_2HdApzsRykSw_V8lJWs',
    'infant jesus shrine': 'ChIJ4e1_2JdApzsRxkSw_V8lJWs',
    'ocean pearl hotel / ideal café': 'ChIJ3e1_2LdApzsRwkSw_V8lJWs',
    'sultan battery': 'ChIJ2e1_2NdApzsRvkSw_V8lJWs',
    'machali': 'ChIJuUR113dApzsR3kSw_V8lJWs',
    'shetty lunch home': 'ChIJuUR113dApzsR3kSw_V8lJWs',
    'pallkhi restaurant': 'ChIJuUR113dApzsR3kSw_V8lJWs',
    'village restaurant': 'ChIJuUR113dApzsR3kSw_V8lJWs',
    'mandi stories': 'ChIJuUR113dApzsR3kSw_V8lJWs',

    // Bangalore
    'echo esports lounge': 'ChIJrR6h8RkrrjsR83C4v0u1K0w',
    'clan gaming': 'ChIJ74-L3t8XrjsRtfvOQ4z6nI0',
    'torq03': 'ChIJN-Z-q3-qrjsR91K-Kx1L16s',
    'obbattu (holige)': 'ChIJ74-L3t8XrjsRtfvOQ4z6nI0',
    'masala dosa': 'ChIJ74-L3t8XrjsRtfvOQ4z6nI0',
    'filter coffee': 'ChIJ74-L3t8XrjsRtfvOQ4z6nI0',
    'idli vada': 'ChIJ74-L3t8XrjsRtfvOQ4z6nI0',
    'ragi mudde': 'ChIJ74-L3t8XrjsRtfvOQ4z6nI0',
    'cubbon park': 'ChIJj45qDtcXrjsRN3D7b85p-aA',
    'lalbagh botanical garden': 'ChIJ74-L3t8XrjsRtfvOQ4z6nI0',
    'bannerghatta national park': 'ChIJ_e21-d8XrjsRN-cuxU6vK2A',
    'bugle rock park': 'ChIJLzMz1t8XrjsRtfvOQ4z6nI0',
    'jp park': 'ChIJFzFz1t8XrjsRtfvOQ4z6nI0',
    'freedom park': 'ChIJHzHz1t8XrjsRtfvOQ4z6nI0',
    'bangalore palace': 'ChIJ49303d8XrjsRJ-cuxU6vK2A',
    'tipu sultan palace': 'ChIJH57L3t8XrjsR9fvOQ4z6nI0',
    'devanahalli fort': 'ChIJDzDz1t8XrjsRtfvOQ4z6nI0',
    'mayo hall': 'ChIJQzQz1t8XrjsRtfvOQ4z6nI0',
    'kempegowda museum': 'ChIJQzQz1t8XrjsRtfvOQ4z6nI0',
    'venkatappa art gallery': 'ChIJPzPz1t8XrjsRtfvOQ4z6nI0',
    'government museum': 'ChIJPzPz1t8XrjsRtfvOQ4z6nI0',
    'attara kacheri': 'ChIJNzNz1t8XrjsRtfvOQ4z6nI0',
    'iskcon temple': 'ChIJ__123d8XrjsR8fvOQ4z6nI0',
    'bull temple': 'ChIJ__5L3t8XrjsR7fvOQ4z6nI0',
    'shivoham shiva temple': 'ChIJMzMz1t8XrjsRtfvOQ4z6nI0',
    'ragigudda sri prasanna anjaneya swamy temple': 'ChIJLzLz1t8XrjsRtfvOQ4z6nI0',
    'shree banashankari devi temple': 'ChIJKzKz1t8XrjsRtfvOQ4z6nI0',
    'sri shirdi sai baba temple': 'ChIJJzJz1t8XrjsRtfvOQ4z6nI0',
    'adiyogi shiva statue': 'ChIJIzIz1t8XrjsRtfvOQ4z6nI0',
    '🥇 ub city (1st best)': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'ub city': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    '🥈 phoenix mall of asia (2nd best)': 'ChIJGzGz1t8XrjsRtfvOQ4z6nI0',
    'phoenix mall of asia': 'ChIJGzGz1t8XrjsRtfvOQ4z6nI0',
    '🥉 phoenix marketcity mall (3rd best)': 'ChIJX21-3d8XrjsRK-cuxU6vK2A',
    'phoenix marketcity mall': 'ChIJX21-3d8XrjsRK-cuxU6vK2A',
    '🛍️ lulu mall (4th best)': 'ChIJFzFz2t8XrjsRtfvOQ4z6nI0',
    'lulu mall': 'ChIJFzFz2t8XrjsRtfvOQ4z6nI0',
    '🌊 orion mall (5th best)': 'ChIJEzEz1t8XrjsRtfvOQ4z6nI0',
    'orion mall': 'ChIJEzEz1t8XrjsRtfvOQ4z6nI0',
    '🏬 nexus mall koramangala (6th best)': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'nexus mall koramangala': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    '✨ vr bengaluru mall (7th best)': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'vr bengaluru mall': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    '🏢 garuda mall (8th best)': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'garuda mall': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    '⭐ forum mall koramangala (9th best)': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'forum mall koramangala': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    '🏰 royal meenakshi mall (10th best)': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'royal meenakshi mall': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    '🌟 bangalore central mall (11th best)': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'bangalore central mall': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    '🌐 gt world mall (12th best)': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'gt world mall': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'toit': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'windmills craftworks': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'arbor brewing company': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'tk falls (thottikallu falls)': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'muthyala maduvu (pearl valley)': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'guhantara underground cave resort': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'manchinbele dam': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'nandi hills': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'savandurga': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'shivagange hills': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'skandagiri hills': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'devarayanadurga hills': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'anthargange': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'thippagondanahalli reservoir': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'chunchi falls': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'hesaraghatta lake': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'ramanagara': 'ChIJW21-3d8XrjsRJ-cuxU6vK2A',
    'mtr (mavalli tiffin room)': 'ChIJ7z7z1t8XrjsRtfvOQ4z6nI0',
    'vidyarthi bhavan': 'ChIJ6z6z1t8XrjsRtfvOQ4z6nI0',
    'nagarjuna restaurant': 'ChIJ5z5z1t8XrjsRtfvOQ4z6nI0',
    'truffles': 'ChIJ4z4z1t8XrjsRtfvOQ4z6nI0',

    // Mysuru
    'legion x gaming café': 'ChIJ0-7L3t8XrjsR5fvOQ4z6nI0',
    'gamers hub mysuru': 'ChIJ0-7L3t8XrjsR5fvOQ4z6nI0',
    'smaaash (mall of mysore)': 'ChIJl-7L3t8XrjsR5fvOQ4z6nI0',
    'mysore pak': 'ChIJ0-7L3t8XrjsR5fvOQ4z6nI0',
    'mysore masala dosa': 'ChIJ0-7L3t8XrjsR5fvOQ4z6nI0',
    'mysore bonda': 'ChIJ0-7L3t8XrjsR5fvOQ4z6nI0',
    'hanumanthu biryani': 'ChIJ0-7L3t8XrjsR5fvOQ4z6nI0',
    'mysore palace': 'ChIJ7-P16t13rjsR1Pq9m04J54s',
    'jaganmohana palace art gallery': 'ChIJ2-7L3t8XrjsR5fvOQ4z6nI0',
    'lalitha mahal palace': 'ChIJ3-7L3t8XrjsR5fvOQ4z6nI0',
    'chamundi hills': 'ChIJ4-7L3t8XrjsR5fvOQ4z6nI0',
    'karanji lake': 'ChIJ5-7L3t8XrjsR5fvOQ4z6nI0',
    'kukkarahalli lake': 'ChIJ6-7L3t8XrjsR5fvOQ4z6nI0',
    'brindavan gardens': 'ChIJ7-7L3t8XrjsR5fvOQ4z6nI0',
    'bonsai garden': 'ChIJ8-7L3t8XrjsR5fvOQ4z6nI0',
    'balmuri falls': 'ChIJ9-7L3t8XrjsR5fvOQ4z6nI0',
    'mysore zoo': 'ChIJa-7L3t8XrjsR5fvOQ4z6nI0',
    'ranganathittu bird sanctuary': 'ChIJb-7L3t8XrjsR5fvOQ4z6nI0',
    'shuka vana': 'ChIJc-7L3t8XrjsR5fvOQ4z6nI0',
    'lokaranjan aqua world underwater zoo': 'ChIJd-7L3t8XrjsR5fvOQ4z6nI0',
    'chamundeshwari temple': 'ChIJe-7L3t8XrjsR5fvOQ4z6nI0',
    'st. philomena\'s cathedral': 'ChIJf-7L3t8XrjsR5fvOQ4z6nI0',
    'venugopala swamy temple | submerged temple': 'ChIJg-7L3t8XrjsR5fvOQ4z6nI0',
    'iskcon temple': 'ChIJg-7L3t8XrjsR5fvOQ4z6nI0',
    'kote sri anjaneya temple': 'ChIJg-7L3t8XrjsR5fvOQ4z6nI0',
    'srikanteshwara temple': 'ChIJg-7L3t8XrjsR5fvOQ4z6nI0',
    'gommatagiri': 'ChIJg-7L3t8XrjsR5fvOQ4z6nI0',
    'gowri sand sculpture museum': 'ChIJh-7L3t8XrjsR5fvOQ4z6nI0',
    'mysore rail museum': 'ChIJi-7L3t8XrjsR5fvOQ4z6nI0',
    'payana vintage car museum': 'ChIJj-7L3t8XrjsR5fvOQ4z6nI0',
    'nexus centre city mall': 'ChIJk-7L3t8XrjsR5fvOQ4z6nI0',
    'mall of mysore': 'ChIJl-7L3t8XrjsR5fvOQ4z6nI0',
    'garuda mall': 'ChIJl-7L3t8XrjsR5fvOQ4z6nI0',
    'bm habitat mall': 'ChIJl-7L3t8XrjsR5fvOQ4z6nI0',
    'central mall mysore': 'ChIJl-7L3t8XrjsR5fvOQ4z6nI0',
    'hotel original mylari': 'ChIJm-7L3t8XrjsR5fvOQ4z6nI0',
    'hanumanthu mess': 'ChIJn-7L3t8XrjsR5fvOQ4z6nI0',
    'guru sweet mart': 'ChIJo-7L3t8XrjsR5fvOQ4z6nI0',
    'gayatri tiffin room (gtr)': 'ChIJp-7L3t8XrjsR5fvOQ4z6nI0',

    // Kodagu
    'abbey falls': 'ChIJW-H7_l-XvzsR-a-p6193s6k',
    'raja’s seat': 'ChIJ2e2-9zZTrjsR-78Uq6oH9u4',
    'raja\'s seat': 'ChIJ2e2-9zZTrjsR-78Uq6oH9u4',
    'dubare elephant camp': 'ChIJ1d8jD2W-rjsR2pL-J5yP-Lg',
    'talakaveri': 'ChIJ4006y8W9rjsR1g2m7pX5r2g',

    // Chikkamagaluru
    'mullayanagiri peak': 'ChIJ-zF88Yp9rjsR_T42k8M52_g',
    'baba budangiri': 'ChIJ92H45vS3rjsR8680H7c_rS8',
    'hebbe falls': 'ChIJiV5G22x5rjsR-k49Qv0U5H4',
    'coffee plantations': 'ChIJ4d6W_hQprzsR8P2J2sQ3s2o',

    // Manipal Viewpoints & Lakes
    'end point swarna river viewpoint': 'ChIJL-m4X_2-vzsR-a-p6193s6k',
    'end point park': 'ChIJL-m4X_2-vzsR-a-p6193s6k',
    'manipal end point park': 'ChIJL-m4X_2-vzsR-a-p6193s6k',
    'mannapalla lake park': 'ChIJP0N_qQ--vzsRxX0_I90-kK',
    'mannapalla lake': 'ChIJP0N_qQ--vzsRxX0_I90-kK',
    'manipal lake': 'ChIJP0N_qQ--vzsRxX0_I90-kK',
    'kemmannu hanging bridge': 'ChIJO0M_pP--vzsRwW0_H91-lL',
    'delta beach (bengre confluence)': 'ChIJN0L_oO--vzsRvV0_G92-mM',
    'delta beach': 'ChIJN0L_oO--vzsRvV0_G92-mM',

    // Manipal Cafes & Hangouts
    'the egg factory': 'ChIJM0K_nN--vzsRuU0_F93-nN',
    'egg factory': 'ChIJM0K_nN--vzsRuU0_F93-nN',
    'eye of the needle cafe': 'ChIJL0J_mM--vzsRtT0_E94-oO',
    'dollops restaurant': 'ChIJK0I_lL--vzsRsS0_D95-pP',
    'dollops': 'ChIJK0I_lL--vzsRsS0_D95-pP',
    'snack shack': 'ChIJJ0H_kK--vzsRrR0_C96-qQ',

    // Manipal Museums
    'hasta shilpa heritage village museum': 'ChIJK-m4X_2-vzsR-a-p6193s6k',
    'hasta shilpa heritage village': 'ChIJK-m4X_2-vzsR-a-p6193s6k',
    'anatomy museum (map)': 'ChIJJ-m4X_2-vzsR-a-p6193s6k',
    'manipal museum of anatomy & pathology (map)': 'ChIJJ-m4X_2-vzsR-a-p6193s6k',
    'dr. t.m.a. pai museum & planetarium': 'ChIJH0F_iI--vzsRpP0_A98-sS',
    'corporation bank heritage museum (coin museum), udupi': 'ChIJG0E_hH--vzsRoO0_Z99-tT',
    'corporation bank heritage museum': 'ChIJG0E_hH--vzsRoO0_Z99-tT',
    'smriti bhavan museum (dr. t.m.a. pai house)': 'ChIJF0D_gG--vzsRnN0_Y00-uU',
    'smriti bhavan museum': 'ChIJF0D_gG--vzsRnN0_Y00-uU',

    // Manipal Beaches & Temples
    'venugopal temple': 'ChIJI-m4X_2-vzsR-a-p6193s6k',
    'malpe beach': 'ChIJw0s43Z-_vzsR9c2_M80-aA',
    'kapu beach': 'ChIJY4S_vV--vzsR8d1_N91-bB',
    'padukere beach': 'ChIJX3T_uU--vzsR7e0_O82-cC',
    'hoode beach': 'ChIJW2U_vV--vzsR6e0_P83-dD',
    'mattu beach': 'ChIJV1T_uU--vzsR5d0_O84-eE',
    'udupi shri krishna matha': 'ChIJ9T6Y27-_vzsR6f-P-93s6k',
    'sri venugopala temple': 'ChIJI-m4X_2-vzsR-a-p6193s6k',
    'sri venugopala temple (mit campus)': 'ChIJI-m4X_2-vzsR-a-p6193s6k',
    'kadiyali shri mahishamardini temple': 'ChIJGf1_1vdApzsRkkSw_V8lJWs',
    'kadiyali temple': 'ChIJGf1_1vdApzsRkkSw_V8lJWs',
    'shri indrani panchadurga parameshwari temple': 'ChIJHf1_1tdApzsRlkSw_V8lJWs',
    'indrani temple': 'ChIJHf1_1tdApzsRlkSw_V8lJWs',
    'shivapady sri umamaheshwara temple': 'ChIJIf1_1rdApzsRmkSw_V8lJWs',
    // Manipal Trekking Trails
    'kudremukh peak trek': 'ChIJU0S_vV--vzsR4c0_N85-fF',
    'kudremukh peak': 'ChIJU0S_vV--vzsR4c0_N85-fF',
    'kodachadri peak & sunset trek': 'ChIJT0R_uU--vzsR3b0_M86-gG',
    'kodachadri peak': 'ChIJT0R_uU--vzsR3b0_M86-gG',
    'kodachadri trek': 'ChIJT0R_uU--vzsR3b0_M86-gG',
    'narasimha parvatha trek (agumbe)': 'ChIJS0Q_tT--vzsR2a0_L87-hH',
    'narasimha parvatha': 'ChIJS0Q_tT--vzsR2a0_L87-hH',
    'kudlu theertha falls trek': 'ChIJR0P_sS--vzsR1Z0_K88-iI',
    'kudlu theertha': 'ChIJR0P_sS--vzsR1Z0_K88-iI',
    'koosalli falls trek': 'ChIJQ0O_rR--vzsR0Y0_J89-jJ',
    'koosalli falls': 'ChIJQ0O_rR--vzsR0Y0_J89-jJ',

    // Manipal Waterfalls & Malls
    'arbi falls': 'ChIJA1B2C3-_vzsR5e-Q-84t7l',
    'arbi falls (manipal hidden falls)': 'ChIJA1B2C3-_vzsR5e-Q-84t7l',
    'kemmannu kayaking & backwater adventure': 'ChIJB2C3D4-_vzsR4d-R-75u8m',
    'kemmannu kayaking': 'ChIJB2C3D4-_vzsR4d-R-75u8m',
    'jogi gundi falls (agumbe trail)': 'ChIJE0C_fF--vzsRmM0_X01-vV',
    'canara mall (manipal)': 'ChIJD4E5F6-_vzsR2b-T-55w0o',
    'canara mall': 'ChIJD4E5F6-_vzsR2b-T-55w0o',
    'city centre mall (udupi)': 'ChIJCf1_11dApzsRhkSw_V8lJWs',
    'time square mall (udupi)': 'ChIJD0B_eE--vzsRlL0_W02-wW',
    'time square mall': 'ChIJD0B_eE--vzsRlL0_W02-wW',

    // Zoo fallback for Mysuru
    'zoo': 'ChIJa-7L3t8XrjsR5fvOQ4z6nI0'
};

const mangalorePlaceIds = cityPlaceIds;

// Fuzzy / Robust helper to find coordinate matches
function getCityCoords(placeName, cityId) {
    if (!placeName) return getCityFallbackCoords(cityId);
    const clean = (str) => str.toLowerCase().replace(/\([^)]*\)/g, '').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    const cleaned = clean(placeName);
    
    // 1. Exact match
    for (const key of Object.keys(cityCoordinates)) {
        if (clean(key) === cleaned) return cityCoordinates[key];
    }
    // 2. Substring match
    for (const key of Object.keys(cityCoordinates)) {
        const cleanedKey = clean(key);
        if (cleaned.includes(cleanedKey) || cleanedKey.includes(cleaned)) return cityCoordinates[key];
    }
    return getCityFallbackCoords(cityId);
}

// Fuzzy / Robust helper to find Place ID matches
function getCityPlaceId(placeName, cityId) {
    if (!placeName) return getCityFallbackPlaceId(cityId);
    const clean = (str) => str.toLowerCase().replace(/\([^)]*\)/g, '').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    const cleaned = clean(placeName);
    
    // 1. Exact match
    for (const key of Object.keys(cityPlaceIds)) {
        if (clean(key) === cleaned) return cityPlaceIds[key];
    }
    // 2. Substring match
    for (const key of Object.keys(cityPlaceIds)) {
        const cleanedKey = clean(key);
        if (cleaned.includes(cleanedKey) || cleanedKey.includes(cleaned)) return cityPlaceIds[key];
    }
    return getCityFallbackPlaceId(cityId);
}

function getCityName(cityId) {
    if (cityId === 'mangaluru') return 'Mangaluru';
    if (cityId === 'bangalore') return 'Bangalore – North & South';
    if (cityId === 'bangalore_east_west') return 'Bangalore – East & West';
    if (cityId === 'mysuru') return 'Mysuru – North & South';
    if (cityId === 'mysuru_east_west') return 'Mysuru – East & West';
    if (cityId === 'kodagu') return 'Bangalore – East & West';
    if (cityId === 'chikkamagaluru') return 'Chikkamagaluru';
    if (cityId === 'manipal') return 'Manipal';
    return 'Karnataka';
}

function generateDynamicMockReviews(placeName, cityId) {
    const cityName = getCityName(cityId);
    
    // Seeded rating and count based on character hash so it is unique and stable for each place
    let seed = 0;
    for (let i = 0; i < placeName.length; i++) {
        seed = (seed * 31 + placeName.charCodeAt(i)) % 1000007;
    }
    const rating = (4.3 + (seed % 6) * 0.1).toFixed(1);
    const reviewsCount = 1200 + (seed % 10) * 1350 + (seed % 7) * 312;
    
    const address = `${placeName}, ${cityName}, Karnataka, India`;
    const cleanName = placeName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const website = `https://www.karnatakatourism.org/tourist-place/${cleanName}`;
    
    const weekdayText = [
        "Monday: 9:00 AM – 6:00 PM",
        "Tuesday: 9:00 AM – 6:00 PM",
        "Wednesday: 9:00 AM – 6:00 PM",
        "Thursday: 9:00 AM – 6:00 PM",
        "Friday: 9:00 AM – 6:00 PM",
        "Saturday: 9:00 AM – 6:00 PM",
        "Sunday: 9:00 AM – 6:00 PM"
    ];
    
    const reviews = [
        {
            author_name: "Amit Rao",
            profile_photo_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
            rating: 5,
            relative_time_description: "a week ago",
            text: `A fantastic place to visit in ${cityName}! Extremely well-maintained and clean. Highly recommended for families and solo travelers.`
        },
        {
            author_name: "Sneha Patil",
            profile_photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
            rating: 4,
            relative_time_description: "2 weeks ago",
            text: `Lovely atmosphere and very peaceful. Great spots for photography. It can get a bit crowded during the weekends, so try visiting on weekdays if possible.`
        },
        {
            author_name: "Vikram Sen",
            profile_photo_url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100",
            rating: 5,
            relative_time_description: "1 month ago",
            text: `An absolute must-visit spot in ${cityName}. The scenic beauty and local vibe are amazing. Easy to access with good transport options nearby.`
        }
    ];

    return {
        rating: parseFloat(rating),
        user_ratings_total: reviewsCount,
        formatted_address: address,
        formatted_phone_number: "",
        website: website,
        opening_hours: {
            open_now: true,
            weekday_text: weekdayText
        },
        reviews: reviews
    };
}

// Fuzzy / Robust helper to find mock reviews data matches
function getMockReviewsData(destName, cityId) {
    if (!destName) return null;
    const clean = (str) => str.toLowerCase().replace(/\([^)]*\)/g, '').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    const cleanedDest = clean(destName);
    
    // 1. Exact match
    for (const key of Object.keys(mockReviewsData)) {
        if (clean(key) === cleanedDest) return mockReviewsData[key];
    }
    // 2. Substring match
    for (const key of Object.keys(mockReviewsData)) {
        const cleanedKey = clean(key);
        if (cleanedDest.includes(cleanedKey) || cleanedKey.includes(cleanedDest)) return mockReviewsData[key];
    }
    // 3. Fallback: dynamically generate mock reviews so it is never null!
    return generateDynamicMockReviews(destName, cityId || currentCityId);
}

function getCityFallbackPlaceId(cityId) {
    if (cityId === 'bangalore' || cityId === 'bangalore_east_west') return 'ChIJ74-L3t8XrjsRtfvOQ4z6nI0'; // Cubbon Park / Bangalore
    if (cityId === 'mysuru' || cityId === 'mysuru_east_west') return 'ChIJ0-7L3t8XrjsR5fvOQ4z6nI0'; // Mysore Palace
    if (cityId === 'chikkamagaluru') return 'ChIJ4d6W_hQprzsR8P2J2sQ3s2o'; // Coffee Museum / Chikkamagaluru
    if (cityId === 'manipal') return 'ChIJL-m4X_2-vzsR-a-p6193s6k'; // End Point / Manipal
    return 'ChIJyXGv0N9ApzsRHk9w_P9lJWs'; // Panambur Beach / Mangalore
}

// Swipe Gesture Detection Helper
function addSwipeListener(element, onSwipeLeft, onSwipeRight) {
    let startX = 0;
    let startY = 0;
    element.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });
    element.addEventListener('touchend', (e) => {
        if (!e.changedTouches || e.changedTouches.length === 0) return;
        const diffX = e.changedTouches[0].clientX - startX;
        const diffY = e.changedTouches[0].clientY - startY;
        // Check if horizontal movement is larger than vertical and exceeds threshold
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < 0) {
                onSwipeLeft();
            } else {
                onSwipeRight();
            }
        }
    }, { passive: true });
}

// Helper function to render star SVGs based on numeric rating with staggered spring pop-in animation
function renderStarRatingHTML(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const remainder = rating % 1;

    for (let i = 1; i <= 5; i++) {
        const delay = (0.3 + i * 0.18).toFixed(2);
        const animStyle = `animation: starPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both; filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.7)); display: inline-block; transform-origin: center;`;

        if (i <= fullStars) {
            starsHTML += `<svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" stroke="none" style="margin: 0 3px; ${animStyle}"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
        } else if (i === fullStars + 1 && remainder > 0.1) {
            const pct = Math.round(remainder * 100);
            const gradId = `goldStarGrad_${Math.floor(rating * 10)}`;
            starsHTML += `<svg width="20" height="20" viewBox="0 0 24 24" style="margin: 0 3px; ${animStyle}">
                <defs>
                    <linearGradient id="${gradId}">
                        <stop offset="${pct}%" stop-color="#f59e0b" />
                        <stop offset="${pct}%" stop-color="rgba(255,255,255,0.15)" />
                    </linearGradient>
                </defs>
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="url(#${gradId})" />
            </svg>`;
        } else {
            starsHTML += `<svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" stroke="none" style="margin: 0 3px; animation: starPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both; display: inline-block; transform-origin: center;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
        }
    }
    return starsHTML;
}

const mockReviewsData = {
    'abbey falls': {
        rating: 4.6,
        user_ratings_total: 15420,
        formatted_address: 'Abbey Falls Rd, Hebbettageri, Madikeri, Karnataka 571201',
        formatted_phone_number: '+91 82722 28555',
        website: 'https://coorgtourism.co.in/abbey-falls-coorg',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 9:00 AM – 5:00 PM',
                'Tuesday: 9:00 AM – 5:00 PM',
                'Wednesday: 9:00 AM – 5:00 PM',
                'Thursday: 9:00 AM – 5:00 PM',
                'Friday: 9:00 AM – 5:00 PM',
                'Saturday: 9:00 AM – 5:00 PM',
                'Sunday: 9:00 AM – 5:00 PM'
            ]
        },
        photos: [
            { localPath: 'assets/places/kodagu_abbey_falls_new.jpg' }
        ],
        reviews: [
            {
                author_name: 'Rahul Sharma',
                profile_photo_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: 'a week ago',
                text: 'Absolutely breathtaking! The waterfall is in full flow during the monsoons. The hanging bridge offers a great view, though it can get a bit crowded.'
            },
            {
                author_name: 'Ananya Sen',
                profile_photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                rating: 4,
                relative_time_description: '3 weeks ago',
                text: 'Beautiful place surrounded by coffee plantations. The walk down is easy, but climbing back up can be tiring for elderly people. Must visit in Coorg!'
            },
            {
                author_name: 'Vikram Malhotra',
                profile_photo_url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '1 month ago',
                text: 'Spectacular waterfall. Well maintained pathways. The entry fee is nominal. It is a short walk from the parking area. Highly recommended.'
            }
        ]
    },
    'raja’s seat': {
        rating: 4.5,
        user_ratings_total: 12890,
        formatted_address: 'Raja Seat Rd, Stuart Hill, Madikeri, Karnataka 571201',
        formatted_phone_number: '',
        website: 'https://coorgtourism.co.in/rajas-seat-coorg',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 5:30 AM – 8:00 PM',
                'Tuesday: 5:30 AM – 8:00 PM',
                'Wednesday: 5:30 AM – 8:00 PM',
                'Thursday: 5:30 AM – 8:00 PM',
                'Friday: 5:30 AM – 8:00 PM',
                'Saturday: 5:30 AM – 8:00 PM',
                'Sunday: 5:30 AM – 8:00 PM'
            ]
        },
        photos: [
            { localPath: 'assets/places/kodagu_rajas_seat_new.jpg' }
        ],
        reviews: [
            {
                author_name: 'Priya Patel',
                profile_photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '2 days ago',
                text: 'The sunset view from here is outstanding. The toy train ride is fun for kids. Very well maintained gardens with musical fountains in the evening.'
            },
            {
                author_name: 'Amit Verma',
                profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                rating: 4,
                relative_time_description: '2 weeks ago',
                text: 'A peaceful place to sit and enjoy the beauty of Coorg hills. Visited early morning and the view of the mist rolling over the valley was magical.'
            }
        ]
    },
    'raja\'s seat': {
        rating: 4.5,
        user_ratings_total: 12890,
        formatted_address: 'Raja Seat Rd, Stuart Hill, Madikeri, Karnataka 571201',
        formatted_phone_number: '',
        website: 'https://coorgtourism.co.in/rajas-seat-coorg',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 5:30 AM – 8:00 PM',
                'Tuesday: 5:30 AM – 8:00 PM',
                'Wednesday: 5:30 AM – 8:00 PM',
                'Thursday: 5:30 AM – 8:00 PM',
                'Friday: 5:30 AM – 8:00 PM',
                'Saturday: 5:30 AM – 8:00 PM',
                'Sunday: 5:30 AM – 8:00 PM'
            ]
        },
        photos: [
            { localPath: 'assets/places/kodagu_rajas_seat_new.jpg' }
        ],
        reviews: [
            {
                author_name: 'Priya Patel',
                profile_photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '2 days ago',
                text: 'The sunset view from here is outstanding. The toy train ride is fun for kids. Very well maintained gardens with musical fountains in the evening.'
            },
            {
                author_name: 'Amit Verma',
                profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                rating: 4,
                relative_time_description: '2 weeks ago',
                text: 'A peaceful place to sit and enjoy the beauty of Coorg hills. Visited early morning and the view of the mist rolling over the valley was magical.'
            }
        ]
    },
    'dubare elephant camp': {
        rating: 4.4,
        user_ratings_total: 9850,
        formatted_address: 'Kushalanagar, Nanjarayapatna, Karnataka 571234',
        formatted_phone_number: '+91 80 2235 2825',
        website: 'https://www.junglelodges.com/resort/dubare-elephant-camp',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 9:00 AM – 11:00 AM, 4:30 PM – 5:30 PM',
                'Tuesday: 9:00 AM – 11:00 AM, 4:30 PM – 5:30 PM',
                'Wednesday: 9:00 AM – 11:00 AM, 4:30 PM – 5:30 PM',
                'Thursday: 9:00 AM – 11:00 AM, 4:30 PM – 5:30 PM',
                'Friday: 9:00 AM – 11:00 AM, 4:30 PM – 5:30 PM',
                'Saturday: 9:00 AM – 11:00 AM, 4:30 PM – 5:30 PM',
                'Sunday: 9:00 AM – 11:00 AM, 4:30 PM – 5:30 PM'
            ]
        },
        photos: [
            { localPath: 'assets/places/kodagu_dubare_new.jpg' }
        ],
        reviews: [
            {
                author_name: 'Suresh Kumar',
                profile_photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: 'a week ago',
                text: 'Amazing experience interacting with elephants. We got to bathe them and feed them. Crossing the Kaveri river in a boat to reach the camp was also exciting.'
            },
            {
                author_name: 'Meera Nair',
                profile_photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
                rating: 4,
                relative_time_description: '2 weeks ago',
                text: 'A great place for families. Very educational and interactive. Try to reach early in the morning to catch the bathing session!'
            }
        ]
    },
    'talakaveri': {
        rating: 4.7,
        user_ratings_total: 8230,
        formatted_address: 'Bhagamandala, Kodagu, Karnataka 571247',
        formatted_phone_number: '',
        website: 'https://coorgtourism.co.in/talakaveri-coorg',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 8:30 PM',
                'Tuesday: 6:00 AM – 8:30 PM',
                'Wednesday: 6:00 AM – 8:30 PM',
                'Thursday: 6:00 AM – 8:30 PM',
                'Friday: 6:00 AM – 8:30 PM',
                'Saturday: 6:00 AM – 8:30 PM',
                'Sunday: 6:00 AM – 8:30 PM'
            ]
        },
        photos: [
            { localPath: 'assets/places/kodagu_talakaveri_new.jpg' }
        ],
        reviews: [
            {
                author_name: 'Karthik Raja',
                profile_photo_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '5 days ago',
                text: 'A deeply spiritual place. The temple at the source of Kaveri river is very serene. Climbing the Brahmagiri steps next to it gives a panoramic view of the Western Ghats.'
            },
            {
                author_name: 'Sandhya Rao',
                profile_photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '1 month ago',
                text: 'Beautiful temple surrounded by mist-laden hills. Very calm and divine atmosphere. The view from the hilltop is simply mind-blowing.'
            }
        ]
    },
    'mullayanagiri peak': {
        rating: 4.7,
        user_ratings_total: 18920,
        formatted_address: 'Chikkamagaluru Taluk, Karnataka 577101',
        formatted_phone_number: '',
        website: 'https://www.chikkamagalurutourism.org.in/mullayanagiri-chikmagalur.php',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 6:00 PM',
                'Tuesday: 6:00 AM – 6:00 PM',
                'Wednesday: 6:00 AM – 6:00 PM',
                'Thursday: 6:00 AM – 6:00 PM',
                'Friday: 6:00 AM – 6:00 PM',
                'Saturday: 6:00 AM – 6:00 PM',
                'Sunday: 6:00 AM – 6:00 PM'
            ]
        },
        photos: [
            { localPath: 'assets/places/chikkamagaluru_mullayanagiri_new.jpg' }
        ],
        reviews: [
            {
                author_name: 'Vijay Deshmukh',
                profile_photo_url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '3 days ago',
                text: 'The highest peak in Karnataka and it lives up to the reputation! The drive up is thrilling with narrow roads and steep curves. Walking up the steps to the temple at the peak is totally worth it.'
            },
            {
                author_name: 'Neha Gupta',
                profile_photo_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '2 weeks ago',
                text: 'Unbelievable scenic beauty! Surrounded by clouds and cool breeze. Perfect spot for photography and nature lovers. Make sure to visit early morning.'
            }
        ]
    },
    'baba budangiri': {
        rating: 4.5,
        user_ratings_total: 11200,
        formatted_address: 'Baba Budangiri Range, Chikkamagaluru, Karnataka 577101',
        formatted_phone_number: '',
        website: 'https://www.karnatakatourism.org/tourist-place/baba-budangiri/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 8:00 AM – 5:00 PM',
                'Tuesday: 8:00 AM – 5:00 PM',
                'Wednesday: 8:00 AM – 5:00 PM',
                'Thursday: 8:00 AM – 5:00 PM',
                'Friday: 8:00 AM – 5:00 PM',
                'Saturday: 8:00 AM – 5:00 PM',
                'Sunday: 8:00 AM – 5:00 PM'
            ]
        },
        photos: [
            { localPath: 'assets/places/chikkamagaluru_bababudangiri_new.jpg' }
        ],
        reviews: [
            {
                author_name: 'Rohan Joshi',
                profile_photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: 'a week ago',
                text: 'Very sacred shrine for both Hindus and Muslims. The hills are incredibly scenic and the temperature is very pleasant. Great trekking route.'
            },
            {
                author_name: 'Deepa Hegde',
                profile_photo_url: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=100',
                rating: 4,
                relative_time_description: '3 weeks ago',
                text: 'Amazing caves and rock formations. The viewpoint offers panoramic views of the surrounding valleys. A must-visit place in Chikkamagaluru.'
            }
        ]
    },
    'hebbe falls': {
        rating: 4.6,
        user_ratings_total: 7540,
        formatted_address: 'Kesavinamane, Chikkamagaluru, Karnataka 577131',
        formatted_phone_number: '',
        website: 'https://www.chikkamagalurutourism.org.in/hebbe-falls-chikmagalur.php',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 8:00 AM – 4:00 PM',
                'Tuesday: 8:00 AM – 4:00 PM',
                'Wednesday: 8:00 AM – 4:00 PM',
                'Thursday: 8:00 AM – 4:00 PM',
                'Friday: 8:00 AM – 4:00 PM',
                'Saturday: 8:00 AM – 4:00 PM',
                'Sunday: 8:00 AM – 4:00 PM'
            ]
        },
        photos: [
            { localPath: 'assets/places/chikkamagaluru_hebbe_falls_new.jpg' }
        ],
        reviews: [
            {
                author_name: 'Sanjay Dutt',
                profile_photo_url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '4 days ago',
                text: 'An adventure of a lifetime! You have to take a local forest department jeep to reach the falls. The ride is extremely bumpy but fun. The waterfall itself is majestic and refreshing.'
            },
            {
                author_name: 'Ritu Singh',
                profile_photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '1 month ago',
                text: 'Spectacular two-stage waterfall inside a coffee estate. The water is cool and crystal clear. Highly recommended for adventure seekers.'
            }
        ]
    },
    'coffee plantations': {
        rating: 4.7,
        user_ratings_total: 5120,
        formatted_address: 'Chikkamagaluru, Karnataka 577101',
        formatted_phone_number: '',
        website: 'https://www.karnatakatourism.org',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 9:00 AM – 6:00 PM',
                'Tuesday: 9:00 AM – 6:00 PM',
                'Wednesday: 9:00 AM – 6:00 PM',
                'Thursday: 9:00 AM – 6:00 PM',
                'Friday: 9:00 AM – 6:00 PM',
                'Saturday: 9:00 AM – 6:00 PM',
                'Sunday: 9:00 AM – 6:00 PM'
            ]
        },
        photos: [
            { localPath: 'assets/places/chikkamagaluru_coffee_plantations_new.jpg' }
        ],
        reviews: [
            {
                author_name: 'Abhishek Roy',
                profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '6 days ago',
                text: 'Walking through the coffee estates is a serene experience. The aroma of coffee flowers is amazing. We got a guided tour explaining the difference between Arabica and Robusta plants.'
            },
            {
                author_name: 'Kriti Deshmukh',
                profile_photo_url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '2 weeks ago',
                text: 'Fascinating tour of the coffee making process from bean to cup. Tasted some of the finest fresh filter coffee here. Extremely peaceful and green.'
            }
        ]
    },
    'lotus mahal': {
        rating: 4.8,
        user_ratings_total: 9480,
        formatted_address: 'Lotus Mahal, Hampi, Karnataka 583239',
        formatted_phone_number: '',
        website: 'https://www.hampi.in/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 8:00 AM – 6:00 PM',
                'Tuesday: 8:00 AM – 6:00 PM',
                'Wednesday: 8:00 AM – 6:00 PM',
                'Thursday: 8:00 AM – 6:00 PM',
                'Friday: 8:00 AM – 6:00 PM',
                'Saturday: 8:00 AM – 6:00 PM',
                'Sunday: 8:00 AM – 6:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.squarespace-cdn.com/content/v1/5e7da3e88b78ee2864e966ca/1596681750867-U7OO1TD9NLJKXXLNLSZE/Vijayanagara+Hampi+880102_c14+lotus+mahal+int_2.jpg' },
            { localPath: 'https://i.pinimg.com/originals/7c/39/36/7c3936326a9e7f1ee4851a95e9886741.jpg' },
            { localPath: 'https://thumbs.dreamstime.com/b/lotus-mahal-vintage-retro-effect-filtered-hipster-style-travel-image-arches-royal-centre-hampi-karnataka-india-45610689.jpg' }
        ],
        reviews: [
            {
                author_name: 'Vikram Seth',
                profile_photo_url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '3 days ago',
                text: 'The architecture of Lotus Mahal is simply magnificent. It blends Hindu and Islamic styles beautifully. The structure remains intact and is surrounded by a lovely lawn.'
            },
            {
                author_name: 'Pooja Hegde',
                profile_photo_url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '1 week ago',
                text: 'Lotus Mahal is one of the most photographed monuments in Hampi, and for good reason! The arches are designed in the shape of a lotus flower, which keeps it cool inside.'
            }
        ]
    },
    'virupaksha temple': {
        rating: 4.8,
        user_ratings_total: 24150,
        formatted_address: 'River Rd, Hampi, Karnataka 583239',
        formatted_phone_number: '',
        website: 'https://www.hampi.in/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 8:00 PM',
                'Tuesday: 6:00 AM – 8:00 PM',
                'Wednesday: 6:00 AM – 8:00 PM',
                'Thursday: 6:00 AM – 8:00 PM',
                'Friday: 6:00 AM – 8:00 PM',
                'Saturday: 6:00 AM – 8:00 PM',
                'Sunday: 6:00 AM – 8:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://i1.wp.com/www.wordzz.com/wp-content/uploads/2016/09/virupaksha-temple.jpg?fit=0%2C0' },
            { localPath: 'https://wordzz.com/wp-content/uploads/2016/08/Virupaksha-Temple-Hampi.jpg' }
        ],
        reviews: [
            {
                author_name: 'Anirudh Roy',
                profile_photo_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '2 weeks ago',
                text: 'An architectural wonder that is still an active place of worship. The detailing on the gopuram is magnificent, and the temple elephant Bhuvaneshwari is very friendly!'
            },
            {
                author_name: 'Meera Nair',
                profile_photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '3 weeks ago',
                text: 'Stunning temple complex with rich history. The stone carvings are incredibly intricate. Guide services are highly recommended to understand the stories behind the architecture.'
            }
        ]
    },
    'hoode beach': {
        rating: 4.8,
        user_ratings_total: 4820,
        formatted_address: 'Hoode Beach Rd, Tonse West, Udupi, Manipal, Karnataka 576115',
        formatted_phone_number: '+91 820 252 0001',
        website: 'https://www.karnatakatourism.org/tourist-place/hoode-beach',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 7:30 PM',
                'Tuesday: 6:00 AM – 7:30 PM',
                'Wednesday: 6:00 AM – 7:30 PM',
                'Thursday: 6:00 AM – 7:30 PM',
                'Friday: 6:00 AM – 7:30 PM',
                'Saturday: 6:00 AM – 7:30 PM',
                'Sunday: 6:00 AM – 7:30 PM'
            ]
        },
        photos: [
            { localPath: 'https://i.ytimg.com/vi/M0QHbMyTCDo/maxresdefault.jpg' }
        ],
        reviews: [
            {
                author_name: 'Varun Shetty',
                profile_photo_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: 'a week ago',
                text: 'Serene and scenic beach near Bengre peninsula. Where the river meets the sea! Excellent sunset views and far less crowded than Malpe.'
            },
            {
                author_name: 'Divya Naik',
                profile_photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '2 weeks ago',
                text: 'Peaceful coastline perfect for long walks with friends. The sea breeze and golden sunset here are simply magical.'
            }
        ]
    },
    'mattu beach': {
        rating: 4.6,
        user_ratings_total: 3450,
        formatted_address: 'Mattu Beach Road, Katapadi, Udupi, Manipal, Karnataka 574105',
        formatted_phone_number: '+91 820 252 0002',
        website: 'https://www.karnatakatourism.org/tourist-place/mattu-beach',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 7:30 PM',
                'Tuesday: 6:00 AM – 7:30 PM',
                'Wednesday: 6:00 AM – 7:30 PM',
                'Thursday: 6:00 AM – 7:30 PM',
                'Friday: 6:00 AM – 7:30 PM',
                'Saturday: 6:00 AM – 7:30 PM',
                'Sunday: 6:00 AM – 7:30 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Prashanth Bhat',
                profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '3 days ago',
                text: 'Famous for bioluminescence sightings during post-monsoon nights and serene coconut palm tree backdrop. Truly an unspoiled gem near Udupi.'
            },
            {
                author_name: 'Kavya Hegde',
                profile_photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
                rating: 4,
                relative_time_description: '1 month ago',
                text: 'Quiet, clean, and extremely peaceful shoreline. Great for evening relaxation away from commercial crowds.'
            }
        ]
    },
    'sri venugopala temple': {
        rating: 4.8,
        user_ratings_total: 8900,
        formatted_address: 'MIT Campus, Manipal, Karnataka 576104',
        formatted_phone_number: '+91 820 292 2323',
        website: 'https://manipal.edu/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 8:00 PM',
                'Tuesday: 6:00 AM – 8:00 PM',
                'Wednesday: 6:00 AM – 8:00 PM',
                'Thursday: 6:00 AM – 8:00 PM',
                'Friday: 6:00 AM – 8:00 PM',
                'Saturday: 6:00 AM – 8:00 PM',
                'Sunday: 6:00 AM – 8:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Aditya Shenoy',
                profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '3 days ago',
                text: 'Beautiful serene temple situated right inside the MIT campus green lawns. Very quiet and peaceful in the evenings.'
            }
        ]
    },
    'kadiyali shri mahishamardini temple': {
        rating: 4.8,
        user_ratings_total: 6400,
        formatted_address: 'Kadiyali, Udupi, Manipal, Karnataka 576102',
        formatted_phone_number: '+91 820 252 1100',
        website: 'https://kadiyalitemple.com/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 8:30 PM',
                'Tuesday: 6:00 AM – 8:30 PM',
                'Wednesday: 6:00 AM – 8:30 PM',
                'Thursday: 6:00 AM – 8:30 PM',
                'Friday: 6:00 AM – 8:30 PM',
                'Saturday: 6:00 AM – 8:30 PM',
                'Sunday: 6:00 AM – 8:30 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Sharada K',
                profile_photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '2 weeks ago',
                text: 'Ancient 1200-year-old Goddess shrine. Beautiful stone architecture and divine vibration.'
            }
        ]
    },
    'shri indrani panchadurga parameshwari temple': {
        rating: 4.7,
        user_ratings_total: 5200,
        formatted_address: 'Indrani, Manipal, Karnataka 576104',
        formatted_phone_number: '+91 820 257 0444',
        website: 'https://indranitemple.org/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 8:00 PM',
                'Tuesday: 6:00 AM – 8:00 PM',
                'Wednesday: 6:00 AM – 8:00 PM',
                'Thursday: 6:00 AM – 8:00 PM',
                'Friday: 6:00 AM – 8:00 PM',
                'Saturday: 6:00 AM – 8:00 PM',
                'Sunday: 6:00 AM – 8:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Rajesh Pai',
                profile_photo_url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '1 month ago',
                text: 'Peaceful hill shrine surrounded by natural greenery. Highly sacred Durga temple near Manipal.'
            }
        ]
    },
    'shivapady sri umamaheshwara temple': {
        rating: 4.7,
        user_ratings_total: 4150,
        formatted_address: 'Shivapady, Manipal, Karnataka 576104',
        formatted_phone_number: '+91 820 257 1212',
        website: 'https://shivapady.com/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 8:00 PM',
                'Tuesday: 6:00 AM – 8:00 PM',
                'Wednesday: 6:00 AM – 8:00 PM',
                'Thursday: 6:00 AM – 8:00 PM',
                'Friday: 6:00 AM – 8:00 PM',
                'Saturday: 6:00 AM – 8:00 PM',
                'Sunday: 6:00 AM – 8:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Suhas Nayak',
                profile_photo_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '5 days ago',
                text: 'Tranquil Shiva temple famous for Atirudra Mahayajna and peaceful temple compound.'
            }
        ]
    },
    'end point swarna river viewpoint': {
        rating: 4.9,
        user_ratings_total: 8400,
        formatted_address: 'End Point Rd, Manipal, Karnataka 576104',
        formatted_phone_number: '+91 820 292 2000',
        website: 'https://manipal.edu/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 5:00 AM – 7:30 PM',
                'Tuesday: 5:00 AM – 7:30 PM',
                'Wednesday: 5:00 AM – 7:30 PM',
                'Thursday: 5:00 AM – 7:30 PM',
                'Friday: 5:00 AM – 7:30 PM',
                'Saturday: 5:00 AM – 7:30 PM',
                'Sunday: 5:00 AM – 7:30 PM'
            ]
        },
        photos: [
            { localPath: 'https://hblimg.mmtcdn.com/content/hubble/img/manipal/mmt/activities/m_Manipal%20End%20Point%20Park-3_l_399_532.jpg' }
        ],
        reviews: [
            {
                author_name: 'Nikhil Kumar',
                profile_photo_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '2 days ago',
                text: 'Breathtaking clifftop views of the Swarna river valley and Western Ghats. Best spot for sunset in Manipal!'
            }
        ]
    },
    'mannapalla lake park': {
        rating: 4.6,
        user_ratings_total: 6200,
        formatted_address: 'Manipal Lake Rd, Manipal, Karnataka 576104',
        formatted_phone_number: '+91 820 257 0000',
        website: 'https://www.karnatakatourism.org/tourist-place/manipal-lake',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 7:00 PM',
                'Tuesday: 6:00 AM – 7:00 PM',
                'Wednesday: 6:00 AM – 7:00 PM',
                'Thursday: 6:00 AM – 7:00 PM',
                'Friday: 6:00 AM – 7:00 PM',
                'Saturday: 6:00 AM – 7:00 PM',
                'Sunday: 6:00 AM – 7:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://th-i.thgim.com/public/news/cities/Mangalore/20mb2f/article70274376.ece/alternates/FREE_1200/IMG_3180.jpg' }
        ],
        reviews: [
            {
                author_name: 'Rohan Deshmukh',
                profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '4 days ago',
                text: 'Beautiful 3 km paved walking track surrounding a natural lake. Ideal for morning walks and bird watching.'
            }
        ]
    },
    'kemmannu hanging bridge': {
        rating: 4.7,
        user_ratings_total: 7500,
        formatted_address: 'Kemmannu, Tonse, Udupi, Manipal, Karnataka 576115',
        formatted_phone_number: '+91 820 252 8888',
        website: 'https://www.karnatakatourism.org/tourist-place/kemmannu-hanging-bridge',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 7:00 PM',
                'Tuesday: 6:00 AM – 7:00 PM',
                'Wednesday: 6:00 AM – 7:00 PM',
                'Thursday: 6:00 AM – 7:00 PM',
                'Friday: 6:00 AM – 7:00 PM',
                'Saturday: 6:00 AM – 7:00 PM',
                'Sunday: 6:00 AM – 7:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Kemmannu-Hanging-Bridge.jpg' }
        ],
        reviews: [
            {
                author_name: 'Ananya Rao',
                profile_photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '1 week ago',
                text: 'Picturesque wooden suspension bridge over coconut-fringed backwaters. Great spot for photography and kayaking.'
            }
        ]
    },
    'delta beach (bengre confluence)': {
        rating: 4.8,
        user_ratings_total: 5600,
        formatted_address: 'Bengre Peninsula, Udupi, Manipal, Karnataka 576115',
        formatted_phone_number: '+91 820 252 9999',
        website: 'https://www.karnatakatourism.org/tourist-place/delta-beach',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 7:30 PM',
                'Tuesday: 6:00 AM – 7:30 PM',
                'Wednesday: 6:00 AM – 7:30 PM',
                'Thursday: 6:00 AM – 7:30 PM',
                'Friday: 6:00 AM – 7:30 PM',
                'Saturday: 6:00 AM – 7:30 PM',
                'Sunday: 6:00 AM – 7:30 PM'
            ]
        },
        photos: [
            { localPath: 'https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/m_Delta_Beach_1_l_360_640.jpg' }
        ],
        reviews: [
            {
                author_name: 'Vikram Prabhu',
                profile_photo_url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: 'a week ago',
                text: 'Spectacular peninsula where Swarna River meets the Arabian Sea. Enjoy fresh sea food and calm water views.'
            }
        ]
    },
    'hasta shilpa heritage village museum': {
        rating: 4.9,
        user_ratings_total: 9150,
        formatted_address: 'Christ School Road, Manipal, Karnataka 576104',
        formatted_phone_number: '+91 820 257 4555',
        website: 'https://hastashilpatrust.org/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 10:00 AM – 5:00 PM',
                'Tuesday: 10:00 AM – 5:00 PM',
                'Wednesday: 10:00 AM – 5:00 PM',
                'Thursday: 10:00 AM – 5:00 PM',
                'Friday: 10:00 AM – 5:00 PM',
                'Saturday: 10:00 AM – 5:00 PM',
                'Sunday: 10:00 AM – 5:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://i.ytimg.com/vi/rLaOUhfYWzI/maxresdefault.jpg' }
        ],
        reviews: [
            {
                author_name: 'Dr. Ramesh Rao',
                profile_photo_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '3 days ago',
                text: 'A world-class open air heritage museum featuring 26 restored South Indian traditional houses. An absolute masterpiece of heritage preservation.'
            }
        ]
    },
    'manipal museum of anatomy & pathology (map)': {
        rating: 4.8,
        user_ratings_total: 7800,
        formatted_address: 'KMC Campus, Manipal, Karnataka 576104',
        formatted_phone_number: '+91 820 292 2200',
        website: 'https://manipal.edu/kmc-manipal/museum.html',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 8:00 AM – 6:00 PM',
                'Tuesday: 8:00 AM – 6:00 PM',
                'Wednesday: 8:00 AM – 6:00 PM',
                'Thursday: 8:00 AM – 6:00 PM',
                'Friday: 8:00 AM – 6:00 PM',
                'Saturday: 8:00 AM – 6:00 PM',
                'Sunday: 8:00 AM – 6:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://www.manipal.edu/content/dam/manipal/mu/kmc-manipal/images/galleryImage/KMCMpltrial/m9.JPG' }
        ],
        reviews: [
            {
                author_name: 'Priya Sundaram',
                profile_photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: 'a week ago',
                text: 'One of Asia\'s largest medical museums. Over 3000 anatomical specimens displayed meticulously. Mind-blowing for students and visitors!'
            }
        ]
    },
    'dr. t.m.a. pai museum & planetarium': {
        rating: 4.5,
        user_ratings_total: 4200,
        formatted_address: 'University Admin Block, Manipal, Karnataka 576104',
        formatted_phone_number: '+91 820 292 2400',
        website: 'https://manipal.edu/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 9:30 AM – 5:30 PM',
                'Tuesday: 9:30 AM – 5:30 PM',
                'Wednesday: 9:30 AM – 5:30 PM',
                'Thursday: 9:30 AM – 5:30 PM',
                'Friday: 9:30 AM – 5:30 PM',
                'Saturday: 9:30 AM – 5:30 PM',
                'Sunday: 9:30 AM – 5:30 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Arun K',
                profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                rating: 4,
                relative_time_description: '2 weeks ago',
                text: 'Interactive science museum and digital planetarium documenting the founding history of modern Manipal.'
            }
        ]
    },
    'corporation bank heritage museum (coin museum), udupi': {
        rating: 4.7,
        user_ratings_total: 3900,
        formatted_address: 'Founder Branch, KM Marg, Udupi, Manipal, Karnataka 576101',
        formatted_phone_number: '+91 820 252 1444',
        website: 'https://www.karnatakatourism.org/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 10:00 AM – 5:00 PM',
                'Tuesday: 10:00 AM – 5:00 PM',
                'Wednesday: 10:00 AM – 5:00 PM',
                'Thursday: 10:00 AM – 5:00 PM',
                'Friday: 10:00 AM – 5:00 PM',
                'Saturday: 10:00 AM – 5:00 PM',
                'Sunday: Closed'
            ]
        },
        photos: [
            { localPath: 'https://i0.wp.com/rashminotes.com/wp-content/uploads/2019/03/c1.png?resize=663%2C361' }
        ],
        reviews: [
            {
                author_name: 'Gaurav Jain',
                profile_photo_url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '5 days ago',
                text: 'Rare numismatic collection showcasing ancient Indian coins from 400 BC to modern currency. Highly educational!'
            }
        ]
    },
    'smriti bhavan museum (dr. t.m.a. pai house)': {
        rating: 4.6,
        user_ratings_total: 3100,
        formatted_address: 'End Point Road, Manipal, Karnataka 576104',
        formatted_phone_number: '+91 820 292 2100',
        website: 'https://manipal.edu/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 9:30 AM – 5:30 PM',
                'Tuesday: 9:30 AM – 5:30 PM',
                'Wednesday: 9:30 AM – 5:30 PM',
                'Thursday: 9:30 AM – 5:30 PM',
                'Friday: 9:30 AM – 5:30 PM',
                'Saturday: 9:30 AM – 5:30 PM',
                'Sunday: 9:30 AM – 5:30 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Sunita Shenoy',
                profile_photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '1 month ago',
                text: 'The preserved residence of visionary Dr. T.M.A. Pai. Inspiring photo archives of Manipal’s early days.'
            }
        ]
    },
    'kudremukh peak trek': {
        rating: 4.9,
        user_ratings_total: 11200,
        formatted_address: 'Kudremukh National Park, Chikkamagaluru / Udupi Region, Karnataka 577142',
        formatted_phone_number: '+91 8263 274 221',
        website: 'https://aranya.gov.in/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 5:00 PM',
                'Tuesday: 6:00 AM – 5:00 PM',
                'Wednesday: 6:00 AM – 5:00 PM',
                'Thursday: 6:00 AM – 5:00 PM',
                'Friday: 6:00 AM – 5:00 PM',
                'Saturday: 6:00 AM – 5:00 PM',
                'Sunday: 6:00 AM – 5:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/m_Kudremukh_1_l_360_640.jpg' }
        ],
        reviews: [
            {
                author_name: 'Varun Hegde',
                profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '2 days ago',
                text: 'Horse-face shaped peak offering 22 km trail through lush rolling Shola grassland hills. Unmatched trekking experience in Western Ghats!'
            }
        ]
    },
    'kodachadri peak & sunset trek': {
        rating: 4.8,
        user_ratings_total: 9800,
        formatted_address: 'Mookambika Wildlife Sanctuary, Shimoga / Udupi Border, Karnataka 577452',
        formatted_phone_number: '+91 8183 226 220',
        website: 'https://karnatakatourism.org/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 6:00 PM',
                'Tuesday: 6:00 AM – 6:00 PM',
                'Wednesday: 6:00 AM – 6:00 PM',
                'Thursday: 6:00 AM – 6:00 PM',
                'Friday: 6:00 AM – 6:00 PM',
                'Saturday: 6:00 AM – 6:00 PM',
                'Sunday: 6:00 AM – 6:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Karthik Bhat',
                profile_photo_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '4 days ago',
                text: 'Famous mountain peak trail through dense rainforests and Hidlumane Falls. Majestic sunset view over Arabian Sea coast.'
            }
        ]
    },
    'narasimha parvatha trek (agumbe)': {
        rating: 4.7,
        user_ratings_total: 5400,
        formatted_address: 'Agumbe Rainforest Reserve, Malandur, Karnataka 577411',
        formatted_phone_number: '+91 8183 228 111',
        website: 'https://agumberainforest.org/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 5:00 PM',
                'Tuesday: 6:00 AM – 5:00 PM',
                'Wednesday: 6:00 AM – 5:00 PM',
                'Thursday: 6:00 AM – 5:00 PM',
                'Friday: 6:00 AM – 5:00 PM',
                'Saturday: 6:00 AM – 5:00 PM',
                'Sunday: 6:00 AM – 5:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Deepak Naik',
                profile_photo_url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '1 week ago',
                text: 'Highest peak in Agumbe rainforest range (826m). Thrilling jungle trek with Barkana falls viewpoint.'
            }
        ]
    },
    'kudlu theertha falls trek': {
        rating: 4.7,
        user_ratings_total: 4600,
        formatted_address: 'Someshwara Wildlife Sanctuary, Hebri, Karnataka 576112',
        formatted_phone_number: '+91 820 252 5000',
        website: 'https://karnatakatourism.org/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 8:00 AM – 4:00 PM',
                'Tuesday: 8:00 AM – 4:00 PM',
                'Wednesday: 8:00 AM – 4:00 PM',
                'Thursday: 8:00 AM – 4:00 PM',
                'Friday: 8:00 AM – 4:00 PM',
                'Saturday: 8:00 AM – 4:00 PM',
                'Sunday: 8:00 AM – 4:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Meghna Shetty',
                profile_photo_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: '3 weeks ago',
                text: 'Spectacular 300-ft waterfall plunging into a pristine pool inside deep forest. 4 km jungle trek from base camp.'
            }
        ]
    },
    'koosalli falls trek': {
        rating: 4.6,
        user_ratings_total: 3800,
        formatted_address: 'Koosalli Village, Byndoor, Udupi District, Karnataka 576214',
        formatted_phone_number: '+91 820 252 6111',
        website: 'https://karnatakatourism.org/',
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 7:00 AM – 5:00 PM',
                'Tuesday: 7:00 AM – 5:00 PM',
                'Wednesday: 7:00 AM – 5:00 PM',
                'Thursday: 7:00 AM – 5:00 PM',
                'Friday: 7:00 AM – 5:00 PM',
                'Saturday: 7:00 AM – 5:00 PM',
                'Sunday: 7:00 AM – 5:00 PM'
            ]
        },
        photos: [
            { localPath: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' }
        ],
        reviews: [
            {
                author_name: 'Suhas K',
                profile_photo_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
                rating: 5,
                relative_time_description: 'a week ago',
                text: '6-tiered waterfall hidden inside dense forest. Adventurous rocky trail for trek enthusiasts!'
            }
        ]
    }
};

// Unified Google Maps-style Details Drawer Loader
const API_BASE = window.location.port === '3000'
    ? ''
    : (window.location.protocol === 'file:' || !window.location.hostname
        ? 'http://localhost:3000'
        : `${window.location.protocol}//${window.location.hostname}:3000`);

// Unified Google Maps-style Details Drawer Loader
function openGeoModal(userLat, userLng, destLat, destLng, destName, distance, durationMins, cityId = currentCityId) {
    const existing = document.getElementById('gmaps-drawer-overlay-bg');
    if (existing) existing.remove();

    const formattedDistance = distance < 0.1 ? "Nearby" : distance.toFixed(1) + " KM";
    let formattedDuration = durationMins + " mins";
    if (distance < 0.1) {
        formattedDuration = "< 5 mins";
    } else if (durationMins >= 60) {
        const hrs = Math.floor(durationMins / 60);
        const mins = durationMins % 60;
        formattedDuration = hrs + " hr " + mins + " mins";
    }

    const placeId = getCityPlaceId(destName, cityId);
    
    // Resolve the proper city name for Google Maps search
    let cityName = 'Mysore';
    if (cityId === 'mangaluru') cityName = 'Mangaluru';
    else if (cityId === 'bangalore') cityName = 'Bangalore';
    else if (cityId === 'mysuru') cityName = 'Mysore';
    else if (cityId === 'kodagu') cityName = 'Kodagu';
    else if (cityId === 'chikkamagaluru') cityName = 'Chikkamagaluru';
    else if (cityId === 'manipal') cityName = 'Manipal';
    
    function getCleanMapsQueryName(destName, cityName) {
        if (!destName) return cityName || 'Karnataka';
        let clean = destName.replace(/\([^)]*\)/g, '').split('/')[0].trim();
        const lower = clean.toLowerCase();

        if (lower.includes('end point swarna river viewpoint')) clean = 'End Point Park';
        else if (lower.includes('delta beach')) clean = 'Delta Beach Bengre';
        else if (lower.includes('mannapalla lake')) clean = 'Mannapalla Lake';
        else if (lower.includes('kemmannu hanging bridge')) clean = 'Kemmannu Hanging Bridge';
        else if (lower.includes('kudremukh peak')) clean = 'Kudremukh Peak';
        else if (lower.includes('kodachadri')) clean = 'Kodachadri Peak';
        else if (lower.includes('narasimha parvatha')) clean = 'Narasimha Parvatha Agumbe';
        else if (lower.includes('kudlu theertha')) clean = 'Kudlu Theertha Falls';
        else if (lower.includes('koosalli falls')) clean = 'Koosalli Water Falls';
        else if (lower.includes('garuda mall')) clean = 'Garuda Mall';
        else if (lower.includes('mysore palace')) clean = 'Mysore Palace';

        return `${clean}, ${cityName}`;
    }

    const searchQuery = getCleanMapsQueryName(destName, cityName);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;

    // Generate Drawer skeleton HTML immediately (loading state)
    const drawerHTML = `
        <div class="gmaps-drawer-overlay" id="gmaps-drawer-overlay-bg">
            <div class="gmaps-drawer" id="gmaps-drawer-panel">
                <header class="gmaps-drawer-header">
                    <h3>🗺️ Place Details</h3>
                    <button class="gmaps-close-btn" id="gmaps-close-drawer-btn" aria-label="Close drawer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                </header>
                <div class="gmaps-drawer-body" id="gmaps-drawer-content">
                    <!-- Geolocation Navigation Panel (Always Interactive) -->
                    <div class="geo-stats-grid">
                        <div class="geo-stat-card">
                            <span class="stat-icon">🛣️</span>
                            <span class="stat-value">${formattedDistance}</span>
                            <span class="stat-label">Driving Distance</span>
                        </div>
                        <div class="geo-stat-card">
                            <span class="stat-icon">🕒</span>
                            <span class="stat-value">${formattedDuration}</span>
                            <span class="stat-label">Est. Travel Time</span>
                        </div>
                    </div>
                    
                    <button class="geo-action-btn" id="gmaps-navigation-btn" style="margin-bottom: 0.5rem;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="3"/><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/></svg>
                        View on Google Maps <span class="btn-arrow">→</span>
                    </button>
 
                    <!-- Divider -->
                    <hr style="border: 0; border-top: 1px solid rgba(0,0,0,0.05); margin: 0;">
 
                    <!-- Dynamic API Content Loader Placeholder -->
                    <div id="gmaps-dynamic-loader" style="text-align: center; padding: 2rem 0;">
                        <div style="display: inline-block; width: 30px; height: 30px; border: 3px solid rgba(131,56,236,0.2); border-radius: 50%; border-top-color: #8338EC; animation: spin 1s linear infinite;"></div>
                        <p style="margin-top: 10px; font-size: 0.85rem; color: var(--text-light);">Loading Google Places details...</p>
                    </div>
 
                    <div id="gmaps-api-content" style="display: none; flex-direction: column; gap: 1.75rem;"></div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', drawerHTML);
    const overlay = document.getElementById('gmaps-drawer-overlay-bg');
    const closeBtn = document.getElementById('gmaps-close-drawer-btn');
    const navBtn = document.getElementById('gmaps-navigation-btn');

    // Smooth Drawer Slide-in
    setTimeout(() => {
        overlay.classList.add('active');
    }, 20);

    const closeDrawer = () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 400);
    };

    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeDrawer();
    });

    navBtn.addEventListener('click', () => {
        window.open(mapsUrl, '_blank');
    });

    // Close on Escape Key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeDrawer();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);

    // 5. Instantly render mock place data (0ms delay) so modal pops up with content immediately!
    const apiContent = document.getElementById('gmaps-api-content');
    const loader = document.getElementById('gmaps-dynamic-loader');
    const mockData = getMockReviewsData(destName, cityId);
    const matchedPlace = findPlaceData(destName, cityId);

    if (mockData && apiContent) {
        if (loader) loader.style.display = 'none';
        apiContent.style.display = 'flex';
        const instantData = {
            connected: true,
            status: 'OK',
            name: destName,
            cityId: cityId,
            rating: mockData.rating,
            user_ratings_total: mockData.user_ratings_total,
            formatted_address: mockData.formatted_address || '',
            formatted_phone_number: mockData.formatted_phone_number || '',
            website: mockData.website || '',
            opening_hours: mockData.opening_hours || null,
            photos: mockData.photos || [],
            reviews: mockData.reviews || [],
            busRoutes: (matchedPlace && matchedPlace.busRoutes) || '',
            routeIcon: (matchedPlace && matchedPlace.routeIcon) || '',
            routeTitle: (matchedPlace && matchedPlace.routeTitle) || '',
            rating_distribution: { 
                5: Math.round(mockData.user_ratings_total * 0.7), 
                4: Math.round(mockData.user_ratings_total * 0.2), 
                3: Math.round(mockData.user_ratings_total * 0.05), 
                2: Math.round(mockData.user_ratings_total * 0.03), 
                1: Math.round(mockData.user_ratings_total * 0.02) 
            }
        };
        renderRealPlacesDetails(apiContent, instantData);
    }

    // 6. Fire Async Fetch request to local backend proxy in background
    fetch(`${API_BASE}/api/place-details/${placeId}`)
        .then(response => {
            if (!response.ok) throw new Error('Backend server unreachable');
            return response.json();
        })
        .then(data => {
            if (apiContent && data.connected && data.status === 'OK' && data.reviews && data.reviews.length > 0) {
                if (mockData && mockData.photos) {
                    data.photos = mockData.photos;
                }
                data.name = destName;
                data.cityId = cityId;
                if (matchedPlace && matchedPlace.busRoutes) {
                    data.busRoutes = matchedPlace.busRoutes;
                    data.routeIcon = matchedPlace.routeIcon;
                    data.routeTitle = matchedPlace.routeTitle;
                }
                renderRealPlacesDetails(apiContent, data);
            }
        })
        .catch(() => {
            // Silently retain instant rendering
        });
}

// Helper to look up a place item across cityCategoryData by place name
function findPlaceData(destName, cityId) {
    if (!destName) return null;
    const clean = (str) => str.toLowerCase().replace(/\([^)]*\)/g, '').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    const targetClean = clean(destName);

    if (typeof cityCategoryData === 'undefined') return null;

    const citiesToCheck = cityId && cityCategoryData[cityId] 
        ? [cityId, ...Object.keys(cityCategoryData).filter(c => c !== cityId)] 
        : Object.keys(cityCategoryData);

    for (const cId of citiesToCheck) {
        const cityData = cityCategoryData[cId];
        if (!cityData) continue;
        for (const catId of Object.keys(cityData)) {
            const category = cityData[catId];
            if (category && category.places) {
                const found = category.places.find(p => {
                    const pClean = clean(p.name);
                    return pClean === targetClean || pClean.includes(targetClean) || targetClean.includes(pClean);
                });
                if (found) return found;
            }
        }
    }
    return null;
}

// Helper: Render genuine active Google Places Details UI
function renderRealPlacesDetails(container, data) {
    // 1. Single Photo Gallery HTML
    let photosHTML = '';
    if (data.photos && data.photos.length > 0) {
        const p = data.photos[0];
        const imgSrc = p.localPath ? p.localPath : `${API_BASE}/api/place-photo/${p.photo_reference}`;
        photosHTML = `
            <div class="gmaps-photos-gallery" style="display: block;">
                <div class="gmaps-photo-card" style="width: 100%; height: 260px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.25rem; box-shadow: var(--shadow-soft);">
                    <img src="${imgSrc}" alt="${data.name} Photo" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        `;
    }

    // 2. Bus Routes & Stop Details Card HTML
    let busCardHTML = '';
    const busRoutesContent = data.busRoutes || (data.name ? (findPlaceData(data.name, data.cityId)?.busRoutes) : '');
    if (busRoutesContent) {
        busCardHTML = `
            <div class="meta-item bus-route-card dark-bus-card" style="grid-column: 1 / -1; margin-top: 10px; margin-bottom: 1rem; padding: 14px 16px; border-radius: 14px; font-size: 0.88rem; color: #f1f5f9; width: 100%; box-sizing: border-box;">
                <div class="bus-card-shimmer"></div>
                <div style="z-index: 2; position: relative; width: 100%;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span class="meta-icon bus-icon-anim" style="font-size: 1.3rem; line-height: 1;">${data.routeIcon || '🚌'}</span>
                            <strong style="color: #38bdf8; text-transform: uppercase; font-size: 0.76rem; letter-spacing: 0.8px; font-weight: 700;">${data.routeTitle || 'Bus Routes & Stop Details'}</strong>
                        </div>
                        <span class="bus-live-badge"><span class="live-dot"></span> ${data.routeIcon ? 'Rider Route' : 'Live Route'}</span>
                    </div>
                    <div style="color: #e2e8f0; font-weight: 500; line-height: 1.45; width: 100%; text-align: center;">
                        ${busRoutesContent}
                    </div>
                </div>
            </div>
        `;
    }

    // Assemble layout
    container.innerHTML = `
        ${photosHTML}
        ${busCardHTML}
    `;
}

// Helper: Render setup instructions card if Google Places API is not connected
function renderFallbackSetupCard(container, placeId, customErrorMsg) {
    const errorSection = customErrorMsg 
        ? `<p style="color: #e74c3c; font-size: 0.85rem; font-weight: 600; margin: 0 0 0.5rem 0;">⚠️ Error Details: ${customErrorMsg}</p>` 
        : '';

    container.innerHTML = `
        <div class="gmaps-setup-card">
            <div class="gmaps-setup-header">
                <span class="gmaps-setup-badge">Setup Required</span>
                <h4 class="gmaps-setup-title">Google Places API Connection</h4>
            </div>
            
            <p class="gmaps-setup-desc">
                This section displays real-time ratings, opening schedules, image galleries, and user comments pulled directly from Google Maps Platform. Follow the instructions to connect Google Places API:
            </p>

            ${errorSection}

            <div class="gmaps-setup-steps">
                <div class="gmaps-setup-step">
                    <span class="gmaps-setup-step-num">1</span>
                    <span>Create a project in the <strong>Google Cloud Console</strong>.</span>
                </div>
                <div class="gmaps-setup-step">
                    <span class="gmaps-setup-step-num">2</span>
                    <span>Enable the <strong>Places API</strong> in the API Library.</span>
                </div>
                <div class="gmaps-setup-step">
                    <span class="gmaps-setup-step-num">3</span>
                    <span>Generate an API Key on the <strong>Credentials</strong> tab.</span>
                </div>
                <div class="gmaps-setup-step">
                    <span class="gmaps-setup-step-num">4</span>
                    <span>Configure your backend server's <code>.env</code> file:</span>
                </div>
            </div>

            <div class="gmaps-code-box">
                # backend/.env<br>
                PORT=3000<br>
                GOOGLE_PLACES_API_KEY=your_actual_api_key_here
            </div>

            <div style="font-size: 0.8rem; color: var(--text-light); margin-top: 0.5rem; line-height: 1.4;">
                📍 <strong>Mapped Google Place ID:</strong><br>
                <code style="word-break: break-all; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 4px;">${placeId}</code>
            </div>
        </div>
    `;
}

window.showFoodPopup = function(name, img, price) {
    const existing = document.getElementById('food-popup-overlay');
    if (existing) existing.remove();

    // Look up other food specialties for this restaurant across all categories/cities
    let allFoods = [];
    for (const cId of Object.keys(cityCategoryData)) {
        const cityData = cityCategoryData[cId];
        for (const catId of Object.keys(cityData)) {
            const category = cityData[catId];
            if (category && category.places) {
                const found = category.places.find(p => p.bestFoods && p.bestFoods.some(f => f.name === name));
                if (found) {
                    allFoods = found.bestFoods;
                    break;
                }
            }
        }
        if (allFoods.length > 0) break;
    }

    let currentIndex = allFoods.findIndex(f => f.name === name);
    if (currentIndex === -1) currentIndex = 0;

    const hasMultipleFoods = allFoods.length > 1;

    let scrollerHTML = '';
    if (allFoods.length > 0) {
        scrollerHTML = `
            <div class="popup-scroller-wrapper" style="margin-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.12); padding-top: 0.75rem;">
                <div style="font-size: 0.7rem; color: #16A34A; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.4rem; text-align: center;">Other Specialties (Slideshow running)</div>
                <div style="display: flex; align-items: center; gap: 0.4rem; position: relative;">
                    ${hasMultipleFoods ? `<button class="scroller-nav-btn prev" id="scroller-prev-btn" aria-label="Previous specialty">&lsaquo;</button>` : ''}
                    <div class="popup-scroller" style="overflow: hidden; white-space: nowrap; flex-grow: 1; background: #F0FDF4; border-radius: 8px; padding: 0.25rem 0;">
                        <div class="popup-scroller-inner" style="display: inline-flex; gap: 0.75rem; animation: marquee 12s linear infinite;">
                            ${[...allFoods, ...allFoods].map((food, idx) => {
                                const actualIdx = idx % allFoods.length;
                                return `
                                <div class="popup-food-card popup-card-${actualIdx}" onclick="selectPopupFood(${actualIdx})" style="display: inline-flex; align-items: center; gap: 0.4rem; background: white; padding: 0.3rem 0.6rem; border-radius: 6px; border: 1px solid rgba(22, 163, 74, 0.15); cursor: pointer; flex-shrink: 0; transition: all 0.2s ease;">
                                    <img src="${food.img}" alt="${food.name}" loading="lazy" decoding="async" style="width: 28px; height: 28px; object-fit: cover; border-radius: 4px;">
                                    <span style="font-size: 0.7rem; font-weight: 600; color: #2D3748;">${food.name}</span>
                                </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    ${hasMultipleFoods ? `<button class="scroller-nav-btn next" id="scroller-next-btn" aria-label="Next specialty">&rsaquo;</button>` : ''}
                </div>
            </div>
        `;
    }

    const popupHTML = `
        <div class="food-popup-overlay" id="food-popup-overlay">
            <div class="food-popup-card">
                <button class="food-popup-close" id="food-popup-close" aria-label="Close popup">&times;</button>
                <div class="food-popup-img">
                    ${hasMultipleFoods ? `<button class="popup-nav-btn prev" id="popup-prev-btn" aria-label="Previous specialty">&lsaquo;</button>` : ''}
                    <img src="${img}" alt="${name}" loading="lazy" decoding="async">
                    ${hasMultipleFoods ? `<button class="popup-nav-btn next" id="popup-next-btn" aria-label="Next specialty">&rsaquo;</button>` : ''}
                </div>
                <div class="food-popup-info">
                    <h3 class="food-popup-title">${name}</h3>
                    <p style="font-size: 0.85rem; color: #666; margin-bottom: 0.75rem;">Approximate Price</p>
                    <div class="food-popup-price-tag">${price}</div>
                    ${scrollerHTML}
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);
    
    const overlay = document.getElementById('food-popup-overlay');
    const closeBtn = document.getElementById('food-popup-close');
    const prevBtn = document.getElementById('popup-prev-btn');
    const nextBtn = document.getElementById('popup-next-btn');

    setTimeout(() => {
        overlay.classList.add('active');
    }, 20);

    let popupAutoPlayInterval;

    // Helper function to update active popup content
    window.selectPopupFood = function(index) {
        currentIndex = index;
        const food = allFoods[currentIndex];
        if (!food) return;

        const imgNode = document.querySelector('.food-popup-img img');
        const titleNode = document.querySelector('.food-popup-title');
        const priceNode = document.querySelector('.food-popup-price-tag');
        if (imgNode) imgNode.src = food.img;
        if (titleNode) titleNode.textContent = food.name;
        if (priceNode) priceNode.textContent = food.price;

        // Highlight active card
        document.querySelectorAll('.popup-food-card').forEach(card => {
            card.style.borderColor = 'rgba(22, 163, 74, 0.15)';
            card.style.background = 'white';
        });
        const activeCards = document.querySelectorAll(`.popup-card-${currentIndex}`);
        activeCards.forEach(card => {
            card.style.borderColor = '#16A34A';
            card.style.background = '#F0FDF4';
        });

        // Reset autoplay interval on user manual selection
        resetAutoplay();
    };

    const navigatePopupFood = (direction) => {
        if (allFoods.length <= 1) return;
        let nextIndex = (currentIndex + direction) % allFoods.length;
        if (nextIndex < 0) nextIndex = allFoods.length - 1;
        selectPopupFood(nextIndex);
    };

    if (prevBtn) prevBtn.addEventListener('click', () => navigatePopupFood(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigatePopupFood(1));

    // Bind scroller nav buttons
    const scrollerPrevBtn = document.getElementById('scroller-prev-btn');
    const scrollerNextBtn = document.getElementById('scroller-next-btn');
    if (scrollerPrevBtn) scrollerPrevBtn.addEventListener('click', () => navigatePopupFood(-1));
    if (scrollerNextBtn) scrollerNextBtn.addEventListener('click', () => navigatePopupFood(1));

    function startAutoplay() {
        popupAutoPlayInterval = setInterval(() => {
            if (allFoods.length <= 1) return;
            currentIndex = (currentIndex + 1) % allFoods.length;
            selectPopupFood(currentIndex);
        }, 3000); // Every 3 seconds!
    }

    function resetAutoplay() {
        clearInterval(popupAutoPlayInterval);
        startAutoplay();
    }

    // Initialize highlighting and autoplay
    if (allFoods.length > 0) {
        const activeCards = document.querySelectorAll(`.popup-card-${currentIndex}`);
        activeCards.forEach(card => {
            card.style.borderColor = '#16A34A';
            card.style.background = '#F0FDF4';
        });
        startAutoplay();
    }

    const closePopup = () => {
        clearInterval(popupAutoPlayInterval);
        delete window.selectPopupFood;
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.remove();
        }, 400);
    };

    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closePopup();
    });

    // Swipe gestures on popup card to navigate food specialties
    const popupCard = overlay.querySelector('.food-popup-card');
    if (popupCard) {
        addSwipeListener(popupCard, () => {
            navigatePopupFood(1); // Swiped left -> next
        }, () => {
            navigatePopupFood(-1); // Swiped right -> prev
        });
    }
};

function initBestFoodSliders() {
    // Clear any previous intervals to avoid duplicate loops
    bestFoodSliderIntervals.forEach(intervalId => clearInterval(intervalId));
    bestFoodSliderIntervals = [];

    const sliderCards = document.querySelectorAll('.best-food-slider-card');
    sliderCards.forEach(card => {
        const placeName = card.getAttribute('data-place-name');
        
        // Find place in category data
        let placeData = null;
        for (const cityId of Object.keys(cityCategoryData)) {
            const cityData = cityCategoryData[cityId];
            for (const catId of Object.keys(cityData)) {
                const category = cityData[catId];
                if (category.places) {
                    const found = category.places.find(p => p.name === placeName);
                    if (found) {
                        placeData = found;
                        break;
                    }
                }
            }
            if (placeData) break;
        }

        if (!placeData || !placeData.bestFoods || placeData.bestFoods.length <= 1) {
            // Hide nav buttons if only 1 food
            card.querySelectorAll('.slider-nav-btn').forEach(btn => btn.style.display = 'none');
            return;
        }

        // Start autoplay
        const startAutoplay = () => {
            const intervalId = setInterval(() => {
                navigateSliderCard(card, 1);
            }, 3000);
            card.setAttribute('data-interval-id', intervalId);
            bestFoodSliderIntervals.push(intervalId);
        };

        startAutoplay();

        // Add swipe support to the slider card
        addSwipeListener(card, () => {
            // Swiped left: show next
            const nextBtn = card.querySelector('.slider-nav-btn.next');
            if (nextBtn) handleSliderNav(null, nextBtn, 1);
        }, () => {
            // Swiped right: show prev
            const prevBtn = card.querySelector('.slider-nav-btn.prev');
            if (prevBtn) handleSliderNav(null, prevBtn, -1);
        });
    });
}

window.handleBestFoodTitleClick = function(event, titleEl) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    const card = titleEl ? titleEl.parentElement.querySelector('.best-food-slider-card') : null;
    if (card) {
        window.handleSliderCardClick(event, card);
    }
};

window.handleSliderCardClick = function(event, card) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    const imgNode = card.querySelector('.food-slider-img');
    const nameNode = card.querySelector('.food-slider-name');
    const priceNode = card.querySelector('.food-slider-price');
    if (nameNode && imgNode && priceNode) {
        showFoodPopup(nameNode.textContent, imgNode.src, priceNode.textContent);
    }
};

window.handleSliderNav = function(event, btn, direction) {
    event.stopPropagation();
    event.preventDefault();
    const card = btn.closest('.best-food-slider-card');
    if (!card) return;

    // Reset autoplay interval
    const intervalId = card.getAttribute('data-interval-id');
    if (intervalId) {
        clearInterval(parseInt(intervalId));
        bestFoodSliderIntervals = bestFoodSliderIntervals.filter(id => id !== parseInt(intervalId));
    }

    // Navigate card
    navigateSliderCard(card, direction);

    // Restart autoplay
    const newIntervalId = setInterval(() => {
        navigateSliderCard(card, 1);
    }, 3000);
    card.setAttribute('data-interval-id', newIntervalId);
    bestFoodSliderIntervals.push(newIntervalId);
};

window.navigateSliderCard = function(card, direction) {
    const placeName = card.getAttribute('data-place-name');
    
    // Find place data
    let placeData = null;
    for (const cityId of Object.keys(cityCategoryData)) {
        const cityData = cityCategoryData[cityId];
        for (const catId of Object.keys(cityData)) {
            const category = cityData[catId];
            if (category.places) {
                const found = category.places.find(p => p.name === placeName);
                if (found) {
                    placeData = found;
                    break;
                }
            }
        }
        if (placeData) break;
    }

    if (!placeData || !placeData.bestFoods || placeData.bestFoods.length <= 1) return;

    let currentIndex = parseInt(card.getAttribute('data-active-index') || '0');
    let nextIndex = (currentIndex + direction) % placeData.bestFoods.length;
    if (nextIndex < 0) nextIndex = placeData.bestFoods.length - 1;

    const content = card.querySelector('.food-slider-content');
    if (!content) return;

    const isPrev = direction === -1;
    const slideOutClass = isPrev ? 'sliding-out-right' : 'sliding-out';
    const slideInClass = isPrev ? 'sliding-in-left' : 'sliding-in';

    content.classList.add(slideOutClass);

    setTimeout(() => {
        card.setAttribute('data-active-index', nextIndex);
        const nextFood = placeData.bestFoods[nextIndex];

        const img = content.querySelector('.food-slider-img');
        const name = content.querySelector('.food-slider-name');
        const price = content.querySelector('.food-slider-price');

        if (img) img.src = nextFood.img;
        if (name) name.textContent = nextFood.name;
        if (price) price.textContent = nextFood.price;

        content.classList.remove(slideOutClass);
        content.classList.add(slideInClass);

        setTimeout(() => {
            content.classList.remove(slideInClass);
        }, 350);
    }, 350);
};

function initPlaceImageSliders() {
    if (window.placeImageSliderIntervals) {
        window.placeImageSliderIntervals.forEach(clearInterval);
    }
    window.placeImageSliderIntervals = [];

    const sliders = document.querySelectorAll('.place-img-slider');
    sliders.forEach(slider => {
        const dotContainer = slider.nextElementSibling;
        const dots = dotContainer ? dotContainer.querySelectorAll('.slider-dot') : [];
        const slideCount = slider.children.length;
        if (slideCount <= 1) return;

        const intervalId = setInterval(() => {
            let activeIndex = parseInt(slider.getAttribute('data-active-index') || '0');
            activeIndex = (activeIndex + 1) % slideCount;
            slider.setAttribute('data-active-index', activeIndex);
            slider.style.transform = `translateX(-${activeIndex * 100}%)`;

            dots.forEach((dot, idx) => {
                if (idx === activeIndex) {
                    dot.style.background = '#ffffff';
                } else {
                    dot.style.background = 'rgba(255,255,255,0.5)';
                }
            });
        }, 3000);

        window.placeImageSliderIntervals.push(intervalId);

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                const idx = parseInt(dot.getAttribute('data-index'));
                slider.setAttribute('data-active-index', idx);
                slider.style.transform = `translateX(-${idx * 100}%)`;
                dots.forEach((d, i) => {
                    d.style.background = i === idx ? '#ffffff' : 'rgba(255,255,255,0.5)';
                });
            });
        });
    });
}

// Welcome Voice Player Manager
(function() {
    let welcomeAudio = null;
    let hasPlayed = false;

    // Check if voice is muted (persists across visits)
    function isMuted() {
        return localStorage.getItem('welcome-voice-muted') === 'true';
    }

    // Lazy load the HTML5 Audio instance
    function getAudio() {
        if (!welcomeAudio) {
            welcomeAudio = new Audio('assets/welcome.mp3');
            welcomeAudio.volume = 1.0;
            welcomeAudio.addEventListener('ended', () => {
                hasPlayed = true;
                sessionStorage.setItem('welcomed', 'true');
            });
        }
        return welcomeAudio;
    }

    // Toggle mute status and update storage/UI
    function toggleMute() {
        const currentlyMuted = isMuted();
        const nextMuted = !currentlyMuted;
        localStorage.setItem('welcome-voice-muted', nextMuted ? 'true' : 'false');
        updateMuteButtonUI(nextMuted);

        if (nextMuted) {
            if (welcomeAudio) {
                welcomeAudio.pause();
                welcomeAudio.currentTime = 0;
            }
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        } else {
            // If they unmute, play the greeting
            hasPlayed = false;
            sessionStorage.removeItem('welcomed');
            play();
        }
    }

    function updateMuteButtonUI(muted) {
        const btn = document.getElementById('welcome-mute-btn');
        if (!btn) return;

        if (muted) {
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="speaker-icon">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="22" y1="9" x2="16" y2="15"></line>
                    <line x1="16" y1="9" x2="22" y2="15"></line>
                </svg>
            `;
            btn.title = "Unmute Welcome Voice";
            btn.setAttribute('aria-label', "Unmute welcome voice");
        } else {
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="speaker-icon">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" class="sound-wave"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" class="sound-wave"></path>
                </svg>
            `;
            btn.title = "Mute Welcome Voice";
            btn.setAttribute('aria-label', "Mute welcome voice");
        }
    }

    function play() {
        if (hasPlayed || isMuted()) return;
        if (sessionStorage.getItem('welcomed') === 'true') {
            hasPlayed = true;
            return;
        }

        const audio = getAudio();
        audio.play().then(() => {
            hasPlayed = true;
            sessionStorage.setItem('welcomed', 'true');
        }).catch(err => {
            console.log('Autoplay restriction active. Playback deferred to interaction.');
            welcomeAudio = null; // discard failed instance so next play creates a clean one
        });
    }

    function initWelcomeVoice() {
        // Update the mute button UI immediately on load to reflect user preference
        updateMuteButtonUI(isMuted());

        const btn = document.getElementById('welcome-mute-btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleMute();
            });
        }

        // Try playing immediately
        play();

        // Autoplay workaround: browsers block audio play on load without user interaction.
        // We register document-level interaction listeners to capture the first interaction.
        // We listen to touchstart, touchend, click, and keydown, and only remove them if play succeeds.
        const interactionEvents = ['click', 'touchstart', 'touchend', 'keydown'];
        const handleFirstInteraction = (e) => {
            // Do not play if they clicked the mute button directly
            if (e.target.closest('#welcome-mute-btn')) {
                return;
            }

            if (hasPlayed || isMuted() || sessionStorage.getItem('welcomed') === 'true') {
                interactionEvents.forEach(evt => document.removeEventListener(evt, handleFirstInteraction));
                return;
            }

            const audio = getAudio();
            audio.play().then(() => {
                hasPlayed = true;
                sessionStorage.setItem('welcomed', 'true');
                // Play succeeded! Now we can safely remove the listeners
                interactionEvents.forEach(evt => document.removeEventListener(evt, handleFirstInteraction));
            }).catch(err => {
                console.log('Playback failed, keeping listeners active for next gesture:', err.message);
                welcomeAudio = null; // discard failed instance
            });
        };
        interactionEvents.forEach(evt => document.addEventListener(evt, handleFirstInteraction));
    }

    // Expose stop welcome audio globally
    window.stopWelcomeAudio = function() {
        if (welcomeAudio) {
            welcomeAudio.pause();
            welcomeAudio.currentTime = 0;
        }
    };

    // Initialize when DOM is fully ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWelcomeVoice);
    } else {
        initWelcomeVoice();
    }
})();

// ==========================================
// Hamburger Menu & Interactive Modals Implementation
// ==========================================
(function() {
    const hamburgerBtn = document.getElementById('hamburger-menu-btn');
    const menuDrawer = document.getElementById('menu-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');

    if (!hamburgerBtn || !menuDrawer || !drawerOverlay) {
        console.error('Hamburger drawer elements not found in DOM.');
        return;
    }

    // Toggle Drawer Open/Closed
    function toggleDrawer(open) {
        const shouldOpen = typeof open === 'boolean' ? open : !menuDrawer.classList.contains('active');
        
        if (shouldOpen) {
            hamburgerBtn.classList.add('active');
            menuDrawer.classList.add('active');
            drawerOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent body scroll
        } else {
            hamburgerBtn.classList.remove('active');
            menuDrawer.classList.remove('active');
            drawerOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore body scroll
        }
    }

    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDrawer();
    });

    drawerCloseBtn.addEventListener('click', () => toggleDrawer(false));
    drawerOverlay.addEventListener('click', () => toggleDrawer(false));

    // Escape Key to Close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleDrawer(false);
            closeAllInteractiveModals();
        }
    });

    // Close Modals Helper
    function closeAllInteractiveModals() {
        const modals = document.querySelectorAll('.menu-modal-overlay');
        modals.forEach(modal => {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 400);
        });
        document.querySelectorAll('.nav-links .nav-link').forEach(link => link.classList.remove('active'));
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
    }

    // Lock Notification Popup helper
    function showLockPopup() {
        let popup = document.querySelector('.lock-popup-notification');
        if (!popup) {
            popup = document.createElement('div');
            popup.className = 'lock-popup-notification';
            popup.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Version Locked!</span>
            `;
            document.body.appendChild(popup);
        }
        
        if (popup.timeoutId) {
            clearTimeout(popup.timeoutId);
        }
        
        popup.classList.add('show');
        
        popup.timeoutId = setTimeout(() => {
            popup.classList.remove('show');
        }, 1800);
    }

    // Centered Interactive Modal Maker
    function openInteractiveModal(title, contentHTML, onInit) {
        // Toggle drawer off first
        toggleDrawer(false);

        // Remove any existing overlay
        closeAllInteractiveModals();

        // Create overlay and card
        const overlay = document.createElement('div');
        overlay.className = 'menu-modal-overlay';
        overlay.id = 'menu-modal-overlay';

        overlay.innerHTML = `
            <div class="menu-modal">
                <header class="menu-modal-header">
                    <span class="menu-modal-title">${title}</span>
                    <button class="menu-modal-close" aria-label="Close modal">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </header>
                <div class="menu-modal-body">
                    ${contentHTML}
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Animate open
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });

        // Close on close button or overlay click
        const closeBtn = overlay.querySelector('.menu-modal-close');
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 400);
            document.querySelectorAll('.nav-links .nav-link').forEach(link => link.classList.remove('active'));
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                setTimeout(() => overlay.remove(), 400);
                document.querySelectorAll('.nav-links .nav-link').forEach(link => link.classList.remove('active'));
                if (window.speechSynthesis) {
                    window.speechSynthesis.cancel();
                }
            }
        });

        // Initialize custom scripts/animations
        if (typeof onInit === 'function') {
            onInit(overlay);
        }
    }

    // Text to Speech Voice Explainer
    function speakText(text) {
        if (!window.speechSynthesis) return;

        // Cancel any currently speaking text
        window.speechSynthesis.cancel();

        // Pause welcome voice if playing
        if (typeof window.stopWelcomeAudio === 'function') {
            window.stopWelcomeAudio();
        }

        // Check if welcome voice is muted (general voice/audio setting)
        if (localStorage.getItem('welcome-voice-muted') === 'true') {
            return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        
        // Find a female voice, prioritizing natural neural voices first
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => {
            const name = voice.name.toLowerCase();
            return name.includes('natural') && (name.includes('aria') || name.includes('samantha') || name.includes('female') || name.includes('en-'));
        }) || voices.find(voice => {
            const name = voice.name.toLowerCase();
            return name.includes('female') || 
                   name.includes('zira') || 
                   name.includes('samantha') || 
                   name.includes('hazel') ||
                   name.includes('google uk english female') ||
                   name.includes('google us english') ||
                   name.includes('susan') ||
                   name.includes('heera') ||
                   name.includes('haruka') ||
                   (name.includes('microsoft') && (name.includes('zira') || name.includes('en-us')));
        }) || voices.find(voice => voice.lang.startsWith('en'));

        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }
        
        utterance.pitch = 1.05; // Slightly higher pitch for a soft, smooth, clear feminine tone
        utterance.rate = 0.88;  // Slightly increased reading speed as requested
        window.speechSynthesis.speak(utterance);
    }

    // Load voices early to cache them
    if (window.speechSynthesis) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }

    // Modal Content Templates & Initializers
    const MENU_ACTIONS = {
        'menu-about-us': {
            title: 'About Us',
            getHTML: () => `
                <div class="about-view">
                    <div class="about-header">
                        <h4>About Us</h4>
                        <p>Simplifying weekend travel planning across Karnataka.</p>
                    </div>
                    <div class="about-row-container">
                        <div class="about-row-item pattern-grid">
                            <div class="about-card-icon">🗺️</div>
                            <div class="about-row-item-body">
                                <h5>What is Weekend Explore?</h5>
                                <div class="about-card-highlight-text">Designed to help you discover the best places to visit during your weekends.</div>
                                <p>Whether you're looking for quick getaways or local explorations, the platform makes it easier to find what you love.</p>
                                <div class="about-tags-container">
                                    <span class="about-tag">Student 🎓</span>
                                    <span class="about-tag">Employee 💼</span>
                                    <span class="about-tag">Traveler ✈️</span>
                                    <span class="about-tag">Family 👨‍👩‍👧‍👦</span>
                                </div>
                                <div class="about-tags-container" style="margin-top: 0.5rem;">
                                    <span class="about-tag category">Famous Food 🍲</span>
                                    <span class="about-tag category">Beaches 🌊</span>
                                    <span class="about-tag category">Parks 🌳</span>
                                    <span class="about-tag category">Temples 🛕</span>
                                    <span class="about-tag category">Culture 🎭</span>
                                    <span class="about-tag category">Hidden Gems 💎</span>
                                </div>
                            </div>
                        </div>
                        <div class="about-row-item pattern-grid">
                            <div class="about-card-icon">🚀</div>
                            <div class="about-row-item-body">
                                <h5>Our Goal</h5>
                                <div class="about-card-highlight-text">No more endless searching or planning stress.</div>
                                <p>We simplify the exploration process by providing curated recommendations and useful travel information in one place, helping you plan memorable and enjoyable weekend trips efficiently.</p>
                            </div>
                        </div>
                        <div class="about-row-item pattern-dest">
                            <div class="about-card-icon">📍</div>
                            <div class="about-row-item-body">
                                <h5>Current Focus</h5>
                                <div class="about-card-highlight-text">Exploring key hubs across Karnataka.</div>
                                <p>We currently offer carefully selected destinations and weekend experiences that suit different budgets and interests in:</p>
                                <div class="about-tags-container">
                                    <span class="about-tag destination">Bengaluru 🏙️</span>
                                    <span class="about-tag destination">Mangaluru 🏖️</span>
                                    <span class="about-tag destination">Mysuru 🏰</span>
                                </div>
                            </div>
                        </div>
                        <div class="about-row-item pattern-grid">
                            <div class="about-card-icon">✨</div>
                            <div class="about-row-item-body">
                                <h5>Our Aim</h5>
                                <div class="about-card-highlight-text">Make every weekend exciting and adventurous.</div>
                                <p>We want to help everyone break the routine, explore new places, create unforgettable memories, and experience the beautiful culture and nature of Karnataka.</p>
                            </div>
                        </div>
                        <div class="about-row-item full-width-banner" style="text-align: center; background: rgba(131, 56, 236, 0.05); border: 1px dashed var(--primary-color); display: block; padding: 1rem;">
                            <h5 style="color: var(--primary-color); margin-bottom: 0px; font-size: 1.05rem; font-weight: 700;">Explore More. Travel Smarter. Make Every Weekend Memorable.</h5>
                        </div>
                    </div>
                </div>
            `,
            init: null,
            speechText: "About Us. Simplifying weekend travel planning across Karnataka. Weekend Explore is designed to help you discover the best places to visit during your weekends, whether you are looking for quick getaways or local explorations. Our current focus is on Bengaluru, Mangaluru, and Mysuru to help you break the routine, explore new places, and make every weekend exciting and adventurous."
        },
        'menu-more-info': {
            title: 'More Information',
            getHTML: () => `
                <div class="about-view">
                    <!-- Creator Card -->
                    <div class="about-card full-width" style="border-left: 4px solid var(--primary-color); background: var(--bg-light);">
                        <div style="display: flex; align-items: flex-start; gap: 1rem;">
                            <div style="font-size: 2rem;">🎓</div>
                            <div>
                                <h5 style="margin-bottom: 0.25rem;">Founded by <a href="https://www.gowthamnataraj.online/" target="_blank" style="color: inherit; text-decoration: underline;">Gowtham N</a></h5>
                                <p style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600; margin-bottom: 0.5rem;">First-year Engineering Student | Yenepoya University, Mangaluru (NIAT Program)</p>
                                <p>Created with a simple vision: to help people discover amazing places, experiences, and destinations for their weekends without spending hours searching online.</p>
                                <a href="https://www.gowthamnataraj.online/" target="_blank" style="display: inline-block; margin-top: 0.5rem; font-size: 0.85rem; font-weight: 600; color: var(--primary-color);">Visit Portfolio →</a>
                            </div>
                        </div>
                    </div>

                    <!-- Description Card -->
                    <div class="about-card full-width">
                        <h5>About the Platform</h5>
                        <p style="margin-bottom: 0.75rem;">Weekend Explore helps users find places to visit, explore famous food spots, discover hidden gems, plan weekend trips, and create memorable travel experiences. Whether you're a student, employee, traveler, or family looking for a short getaway, Weekend Explore makes exploring easier and more enjoyable.</p>
                        <p>Currently, Weekend Explore mainly focuses on <strong>Bengaluru, Mangaluru, and Mysuru</strong>, providing information about tourist attractions, beaches, parks, temples, cafés, restaurants, cultural destinations, and budget-friendly weekend plans.</p>
                    </div>

                    <!-- Mission & Vision Cards -->
                    <div class="about-grid">
                        <div class="about-card">
                            <div class="about-card-icon">🎯</div>
                            <h5>Our Mission</h5>
                            <p>To make weekend travel planning simple, enjoyable, and accessible by helping people discover new destinations, local attractions, and memorable experiences across Karnataka.</p>
                        </div>
                        <div class="about-card">
                            <div class="about-card-icon">👁️</div>
                            <h5>Our Vision</h5>
                            <p>To become Karnataka's trusted platform for weekend exploration, inspiring people to travel more, discover new places, and create unforgettable memories with friends and family.</p>
                        </div>
                    </div>

                    <!-- Version History Accordions -->
                    <h5 style="margin-top: 1rem; margin-bottom: 0.5rem; font-weight: 700;">Version History</h5>
                    <div class="faq-list">
                        <!-- Version 1.1 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>Weekend Explore 1.1</span>
                                <span class="faq-arrow">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <div class="faq-answer-inner">
                                    <p style="margin-bottom: 0.5rem; font-weight: 600;">The foundation version focused on:</p>
                                    <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.25rem;">
                                        <li>Popular tourist destination listings</li>
                                        <li>Weekend trip recommendations</li>
                                        <li>Basic place information and descriptions</li>
                                        <li>Famous attractions and sightseeing spots</li>
                                        <li>Budget-friendly destination suggestions</li>
                                        <li>Mobile-friendly browsing experience</li>
                                        <li>Simple destination discovery system</li>
                                        <li>Travel inspiration for students and employees</li>
                                        <li>Karnataka-focused travel content</li>
                                        <li>Easy navigation and user-friendly design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Version 1.2 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>Weekend Explore 1.2</span>
                                <span class="faq-arrow">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <div class="faq-answer-inner">
                                    <p style="margin-bottom: 0.5rem; font-weight: 600;">The second version introduced:</p>
                                    <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.25rem;">
                                        <li>Improved user interface and design</li>
                                        <li>Better mobile responsiveness</li>
                                        <li>Destination categories</li>
                                        <li>Famous food recommendations</li>
                                        <li>Enhanced destination discovery</li>
                                        <li>Better navigation and performance</li>
                                        <li>Improved place organization</li>
                                        <li>More travel-related information</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Version 1.3 -->
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>Weekend Explore 1.3 (Current Version)</span>
                                <span class="faq-arrow">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </span>
                            </div>
                            <div class="faq-answer">
                                <div class="faq-answer-inner">
                                    <p style="margin-bottom: 0.5rem; font-weight: 600;">The current version includes:</p>
                                    <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.25rem;">
                                        <li>Main focus on Bengaluru, Mangaluru, and Mysuru</li>
                                        <li>Tourist attractions and hidden gems</li>
                                        <li>Famous food spots and cafés</li>
                                        <li>Beaches, parks, temples, and cultural destinations</li>
                                        <li>Budget-friendly weekend recommendations</li>
                                        <li>Better destination organization</li>
                                        <li>Enhanced user experience and performance</li>
                                        <li>More detailed travel information</li>
                                        <li>Improved accessibility and usability</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="about-card full-width" style="text-align: center; background: rgba(131, 56, 236, 0.05); border: 1px dashed var(--primary-color); margin-top: 1rem;">
                        <h5 style="color: var(--primary-color); margin-bottom: 0px;">"Explore More. Travel Smarter. Make Every Weekend Memorable."</h5>
                    </div>
                </div>
            `,
            init: (modal) => {
                const questions = modal.querySelectorAll('.faq-question');
                questions.forEach((q, index) => {
                    q.addEventListener('click', () => {
                        // If it's Version 1.2 or 1.3, prevent opening and show lock popup!
                        if (index === 1 || index === 2) {
                            showLockPopup();
                            return;
                        }

                        const item = q.parentElement;
                        const answer = item.querySelector('.faq-answer');
                        const isActive = item.classList.contains('active');

                        // Collapse all first for clean single-expand
                        modal.querySelectorAll('.faq-item').forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.classList.remove('active');
                                otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                                otherItem.querySelector('.faq-answer').style.opacity = '0';
                            }
                        });

                        if (isActive) {
                            item.classList.remove('active');
                            answer.style.maxHeight = '0';
                            answer.style.opacity = '0';
                        } else {
                            item.classList.add('active');
                            answer.style.maxHeight = answer.scrollHeight + 'px';
                            answer.style.opacity = '1';
                        }
                    });

                    // Double-click lock listener for 1.2 and 1.3 (indexes 1 and 2)
                    if (index === 1 || index === 2) {
                        q.addEventListener('dblclick', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            showLockPopup();
                        });
                    }
                });

                // Expand the first version item (Weekend Explore 1.1) by default on load
                const firstFaqItem = modal.querySelector('.faq-item');
                if (firstFaqItem) {
                    firstFaqItem.classList.add('active');
                    const firstAnswer = firstFaqItem.querySelector('.faq-answer');
                    if (firstAnswer) {
                        setTimeout(() => {
                            firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
                            firstAnswer.style.opacity = '1';
                        }, 100);
                    }
                }
            },
            speechText: "More Information. Weekend Explore was founded by Gowtham, a first year Engineering student at Yenepoya University, Mangaluru, under the N I A T program. Gowtham created this platform with a simple vision: to help you discover amazing places, experiences, and destinations for your weekends without spending hours searching online."
        },
        'menu-support': {
            title: 'Support Center',
            getHTML: () => `
                <div class="support-form-container">
                    <form class="support-form" id="modal-support-form">
                        <div class="form-group">
                            <label for="support-name">Your Name</label>
                            <input type="text" id="support-name" name="name" placeholder="Enter your name" data-fs-field required>
                        </div>
                        <div class="form-group">
                            <label for="support-email">Email Address</label>
                            <input type="email" id="support-email" name="email" placeholder="name@example.com" data-fs-field required>
                        </div>
                        <div class="form-group">
                            <label for="support-message">How can we help?</label>
                            <textarea id="support-message" name="message" rows="4" placeholder="Tell us what you need assistance with..." data-fs-field required></textarea>
                        </div>
                        <div id="support-form-error" style="display: none; color: #dc2626; font-size: 0.85rem; margin-top: 0.75rem; text-align: center; font-weight: 500; background: rgba(220, 38, 38, 0.05); padding: 0.5rem; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.15);"></div>
                        <div class="submit-btn-container">
                            <button type="submit" class="support-submit-btn" id="support-submit-btn" data-fs-submit-btn>
                                <span class="btn-loader"></span>
                                <span class="btn-success-check">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                <span class="btn-text">Submit Support Ticket</span>
                            </button>
                        </div>
                    </form>
                </div>
            `,
            init: (modal) => {
                const form = modal.querySelector('#modal-support-form');
                const submitBtn = modal.querySelector('#support-submit-btn');
                const errorContainer = modal.querySelector('#support-form-error');

                form.addEventListener('submit', (e) => {
                    if (submitBtn.classList.contains('loading') || submitBtn.classList.contains('success')) {
                        e.preventDefault();
                        return;
                    }
                    submitBtn.classList.add('loading');
                    errorContainer.style.display = 'none';
                });

                if (window.formspree) {
                    window.formspree('initForm', {
                        formElement: form,
                        formId: 'mwvdwqva',
                        onSuccess: (data) => {
                            submitBtn.classList.remove('loading');
                            submitBtn.classList.add('success');
                            
                            setTimeout(() => {
                                const modalBody = modal.querySelector('.menu-modal-body') || modal.querySelector('.support-form-container');
                                if (modalBody) {
                                    if (!document.getElementById('cool-thankyou-anim')) {
                                        const style = document.createElement('style');
                                        style.id = 'cool-thankyou-anim';
                                        style.innerHTML = '@keyframes popInText { 0% { transform: scale(0.85); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }';
                                        document.head.appendChild(style);
                                    }

                                    modalBody.innerHTML = `
                                        <div style="padding: 2.5rem 1.5rem; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; animation: popInText 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);">
                                            <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem; background: linear-gradient(135deg, #8338EC 0%, #FF007F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Thank You!</h2>
                                            <p style="color: var(--text-light); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6; max-width: 340px;">Your support ticket has been received. Our team will get back to you shortly.</p>
                                            <button id="thankyou-modal-close-btn" style="background: linear-gradient(135deg, #8338EC 0%, #FF007F 100%); color: white; border: none; padding: 14px 40px; border-radius: 12px; font-weight: 600; font-size: 1.1rem; cursor: pointer; box-shadow: 0 8px 20px rgba(131, 56, 236, 0.25); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Close</button>
                                        </div>
                                    `;
                                    const closeBtn = modalBody.querySelector('#thankyou-modal-close-btn');
                                    if (closeBtn) {
                                        closeBtn.addEventListener('click', () => {
                                            modal.classList.remove('active');
                                            setTimeout(() => modal.remove(), 400);
                                        });
                                    }
                                }
                            }, 600);
                        },
                        onError: (errors) => {
                            submitBtn.classList.remove('loading');
                            let errorMsg = errors.map(e => e.message).join(', ');
                            errorContainer.textContent = errorMsg || 'Something went wrong. Please try again.';
                            errorContainer.style.display = 'block';
                        }
                    });
                }
            },
            speechText: "Support Center. If you need assistance, please fill out our support ticket form with your name, email address, and message. Click submit, and our team will get back to you as soon as possible."
        },
        'menu-terms-conditions': {
            title: 'Terms & Conditions',
            getHTML: () => `
                <div class="terms-progress-container">
                    <div class="terms-progress-bar" id="terms-progress-bar"></div>
                </div>
                <div class="terms-text">
                    <p>Welcome to Weekend Explore. By using this platform, you agree to the following terms and conditions.</p>
                    
                    <h6>1. Information Purpose</h6>
                    <p>Weekend Explore provides travel-related information, destination recommendations, food suggestions, and weekend trip ideas for informational purposes only.</p>
                    
                    <h6>2. Accuracy of Information</h6>
                    <p>We strive to provide accurate and up-to-date information. However, destination details, opening hours, ticket prices, transportation schedules, and other information may change over time. Users are encouraged to verify details before making travel plans.</p>
                    
                    <h6>3. User Responsibility</h6>
                    <p>Users are responsible for their own travel decisions, safety, expenses, and arrangements. Weekend Explore is not responsible for any loss, inconvenience, or issues that may arise during travel.</p>
                    
                    <h6>4. Third-Party Services</h6>
                    <p>The platform may provide information related to maps, transportation services, restaurants, hotels, or other third-party services. Weekend Explore is not responsible for the content, availability, or actions of third-party providers.</p>
                    
                    <h6>5. Content Usage</h6>
                    <p>All content, designs, logos, text, and features available on Weekend Explore are intended for personal and non-commercial use unless otherwise stated.</p>
                    
                    <h6>6. Changes to the Platform</h6>
                    <p>Weekend Explore may update, modify, improve, or remove features without prior notice to enhance user experience and platform performance.</p>
                    
                    <h6>7. Privacy</h6>
                    <p>We respect user privacy and aim to protect personal information. Any information collected will be used only to improve platform functionality and user experience.</p>
                    
                    <h6>8. Limitation of Liability</h6>
                    <p>Weekend Explore shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the platform or reliance on its information.</p>
                    
                    <h6>9. Acceptance of Terms</h6>
                    <p>By accessing and using Weekend Explore, you acknowledge and agree to these Terms & Conditions.</p>
                    
                    <h6>10. Contact & Support</h6>
                    <p>For feedback, suggestions, bug reports, or support-related queries, users can contact the Weekend Explore support team through the platform.</p>

                    <p style="margin-top: 2rem; font-weight: 700; text-align: center; color: var(--primary-color);">Thank you for using Weekend Explore. We wish you safe and memorable journeys.</p>
                </div>
            `,
            init: (modal) => {
                const body = modal.querySelector('.menu-modal-body');
                const progress = modal.querySelector('#terms-progress-bar');
                
                let scrollTicking = false;
                body.addEventListener('scroll', () => {
                    if (!scrollTicking) {
                        window.requestAnimationFrame(() => {
                            const scrollHeight = body.scrollHeight - body.clientHeight;
                            if (scrollHeight > 0) {
                                const percent = (body.scrollTop / scrollHeight) * 100;
                                progress.style.width = percent + '%';
                            }
                            scrollTicking = false;
                        });
                        scrollTicking = true;
                    }
                }, { passive: true });
            },
            speechText: "Terms and Conditions. Welcome to Weekend Explore. By using this platform, you agree that destination details, opening hours, prices, and transport schedules are for informational purposes only and subject to change. Users are responsible for their own travel decisions, safety, and expenses. We respect your privacy and thank you for using our platform."
        },
        'menu-updates': {
            title: 'Platform Updates',
            getHTML: () => `
                <div class="updates-timeline">
                    <!-- Version 1.1 -->
                    <div class="timeline-item">
                        <div class="timeline-badge"></div>
                        <div class="timeline-date">Weekend Explore 1.1</div>
                        <div class="timeline-content">
                            <h5>Foundation Launch</h5>
                            <p style="margin-bottom: 0.5rem;">The first version of Weekend Explore focused on helping users discover weekend trips across Karnataka.</p>
                            <p style="font-weight: 600; margin-bottom: 0.25rem;">Key Features:</p>
                            <ul style="padding-left: 1.2rem; font-size: 0.85rem; color: var(--text-light); display: flex; flex-direction: column; gap: 0.2rem;">
                                <li>Popular tourist destination listings</li>
                                <li>Weekend trip recommendations</li>
                                <li>Basic place information and descriptions</li>
                                <li>Famous attractions and sightseeing spots</li>
                                <li>Budget-friendly destination suggestions</li>
                                <li>Mobile-friendly browsing experience</li>
                                <li>Karnataka-focused travel content</li>
                                <li>Easy navigation and user-friendly interface</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Version 1.2 -->
                    <div class="timeline-item">
                        <div class="timeline-badge"></div>
                        <div class="timeline-date">Weekend Explore 1.2</div>
                        <div class="timeline-content">
                            <h5>UI & Discovery Expansion</h5>
                            <p style="margin-bottom: 0.5rem;">The second version introduced several design and performance improvements to enhance browsing.</p>
                            <p style="font-weight: 600; margin-bottom: 0.25rem;">Key Features:</p>
                            <ul style="padding-left: 1.2rem; font-size: 0.85rem; color: var(--text-light); display: flex; flex-direction: column; gap: 0.2rem;">
                                <li>Better mobile responsiveness</li>
                                <li>Destination categories</li>
                                <li>Famous food recommendations</li>
                                <li>Enhanced destination discovery</li>
                                <li>Improved navigation system</li>
                                <li>Better performance and usability</li>
                                <li>More travel-related information</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Version 1.3 -->
                    <div class="timeline-item">
                        <div class="timeline-badge"></div>
                        <div class="timeline-date">Weekend Explore 1.3</div>
                        <div class="timeline-content">
                            <h5>Current Version Focus</h5>
                            <p style="margin-bottom: 0.5rem;">The current version focuses primarily on Bengaluru, Mangaluru, and Mysuru to deliver rich travel insights.</p>
                            <p style="font-weight: 600; margin-bottom: 0.25rem;">Key Features:</p>
                            <ul style="padding-left: 1.2rem; font-size: 0.85rem; color: var(--text-light); display: flex; flex-direction: column; gap: 0.2rem;">
                                <li>Detailed information about Bengaluru, Mangaluru, and Mysuru</li>
                                <li>Tourist attractions and hidden gems</li>
                                <li>Famous food spots and cafés</li>
                                <li>Beaches, parks, and temples</li>
                                <li>Cultural and heritage destinations</li>
                                <li>Budget-friendly weekend recommendations</li>
                                <li>Better destination organization</li>
                                <li>Improved user experience</li>
                                <li>Faster performance and smoother navigation</li>
                                <li>More detailed travel insights and recommendations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            init: (modal) => {
                const items = modal.querySelectorAll('.timeline-item');
                items.forEach((item, index) => {
                    // Set Version 1.1 (first item) to active, others to inactive
                    if (index === 0) {
                        item.classList.add('active');
                        item.classList.remove('inactive');
                    } else {
                        item.classList.add('inactive');
                        item.classList.remove('active');
                    }

                    // Add click handler to toggle focus and blur
                    item.addEventListener('click', () => {
                        // If it's Version 1.2 or 1.3, prevent selection and show lock popup!
                        if (index === 1 || index === 2) {
                            showLockPopup();
                            return;
                        }

                        items.forEach(otherItem => {
                            if (otherItem === item) {
                                otherItem.classList.add('active');
                                otherItem.classList.remove('inactive');
                            } else {
                                otherItem.classList.add('inactive');
                                otherItem.classList.remove('active');
                            }
                        });
                    });

                    // Double-click lock listener for 1.2 and 1.3 (indexes 1 and 2)
                    if (index === 1 || index === 2) {
                        item.addEventListener('dblclick', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            showLockPopup();
                        });
                    }
                });
            },
            speechText: "Platform Updates. Currently, only Version 1.1 is available. It launched our foundation with tourist listings, place details, and budget recommendations. Versions 1.2 and 1.3 are currently locked and are available under local development only."
        }
    };

    // Bind clicks to menu items
    Object.keys(MENU_ACTIONS).forEach(id => {
        const drawerLink = document.getElementById(id);
        const navId = id.replace('menu-', 'nav-');
        const navLink = document.getElementById(navId);

        const clickHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Set active class on header nav link
            document.querySelectorAll('.nav-links .nav-link').forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
            
            const config = MENU_ACTIONS[id];
            openInteractiveModal(config.title, config.getHTML(), config.init);

            if (config.speechText) {
                speakText(config.speechText);
            }
        };

        if (drawerLink) {
            drawerLink.addEventListener('click', clickHandler);
        }
        if (navLink) {
            navLink.addEventListener('click', clickHandler);
        }
    });

    // ==========================================================================
    // CLERK AUTHENTICATION SYSTEM INTERACTION
    // ==========================================================================

    const authNavBtn = document.getElementById('nav-auth-btn');
    const userButtonDiv = document.getElementById('user-button');

    async function initializeClerk() {
        if (!window.Clerk) {
            console.error('Clerk JS not loaded');
            return;
        }

        try {
            await window.Clerk.load({
                appearance: {
                    variables: {
                        colorPrimary: '#8338EC',
                        colorBackground: '#ffffff',
                        colorText: '#1A1A1A',
                        colorTextSecondary: '#666666',
                        colorInputBackground: '#F8F9FA',
                        colorInputText: '#1A1A1A',
                        borderRadius: '16px',
                        fontFamily: '"Outfit", sans-serif'
                    },
                    elements: {
                        card: {
                            boxShadow: '0 20px 60px rgba(131, 56, 236, 0.15)',
                            border: '1px solid rgba(131, 56, 236, 0.1)',
                            borderRadius: '24px'
                        },
                        formButtonPrimary: {
                            background: 'linear-gradient(135deg, #8338EC 0%, #FF007F 100%)',
                            border: 'none',
                            fontWeight: '600',
                            textTransform: 'none',
                            boxShadow: '0 8px 20px rgba(131, 56, 236, 0.25)',
                            transition: 'all 0.3s ease'
                        },
                        headerTitle: {
                            fontSize: '1.8rem',
                            fontWeight: '700',
                            background: 'linear-gradient(135deg, #8338EC 0%, #FF007F 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        },
                        formFieldInput: {
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.3s ease',
                            borderRadius: '12px',
                            backgroundColor: '#F8F9FA'
                        },
                        socialButtonsBlockButton: {
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            backgroundColor: '#ffffff',
                            transition: 'all 0.3s ease'
                        },
                        footerActionLink: {
                            color: '#FF007F',
                            fontWeight: '600'
                        }
                    }
                }
            });
            updateAuthUI();

            // Listen for auth state changes
            window.Clerk.addListener(({ user }) => {
                updateAuthUI();
            });
            
        } catch (error) {
            console.error('Failed to initialize Clerk:', error);
        }
    }

    function updateAuthUI() {
        const mandatoryOverlay = document.getElementById('mandatory-auth-overlay');
        const signInContainer = document.getElementById('sign-in-container');
        const authBtnText = authNavBtn ? authNavBtn.querySelector('.auth-btn-text') : null;

        if (window.Clerk && window.Clerk.user) {
            // User is signed in
            if (mandatoryOverlay) mandatoryOverlay.style.display = 'none';
            if (authNavBtn) {
                authNavBtn.style.display = 'none';
            }
            if (userButtonDiv) {
                userButtonDiv.style.display = 'flex';
                window.Clerk.mountUserButton(userButtonDiv);
            }

            // Trigger Welcome Toast & Email once per session
            const userId = window.Clerk.user.id;
            if (!sessionStorage.getItem('welcome_email_triggered_' + userId)) {
                sessionStorage.setItem('welcome_email_triggered_' + userId, 'true');
                const displayName = window.Clerk.user.firstName || window.Clerk.user.fullName || 'Explorer';
                const userEmail = (window.Clerk.user.primaryEmailAddress && window.Clerk.user.primaryEmailAddress.emailAddress)
                    ? window.Clerk.user.primaryEmailAddress.emailAddress
                    : (window.Clerk.user.emailAddresses && window.Clerk.user.emailAddresses[0] ? window.Clerk.user.emailAddresses[0].emailAddress : '');

                // Show on-screen toast notification
                showWelcomeMessage(displayName);

                // Dispatch automated Welcome Email via backend
                if (userEmail) {
                    fetch('/api/auth/send-welcome-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: userEmail, name: displayName })
                    }).then(res => res.json()).then(data => {
                        console.log('[WELCOME EMAIL API RESPONSE]', data);
                    }).catch(err => console.error('Failed to dispatch welcome email:', err));
                }
            }
        } else {
            // User is NOT signed in
            if (mandatoryOverlay) mandatoryOverlay.style.display = 'none';
            document.body.style.overflow = 'auto'; 
            if (authNavBtn) {
                authNavBtn.style.display = 'flex'; 
                authNavBtn.classList.remove('logged-in');
                if (authBtnText) authBtnText.textContent = 'Sign In';
            }
            if (userButtonDiv) userButtonDiv.style.display = 'none';
        }
    }

    function openSignInModal() {
        if (window.Clerk && window.Clerk.user) return;

        const mandatoryOverlay = document.getElementById('mandatory-auth-overlay');
        const signInContainer = document.getElementById('sign-in-container');
        if (mandatoryOverlay && signInContainer) {
            if (mandatoryOverlay.style.display === 'flex') return;
            mandatoryOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            try {
                window.Clerk.mountSignIn(signInContainer, { 
                    routing: 'hash',
                    appearance: {
                        variables: { colorPrimary: 'red' }
                    }
                });
            } catch (err) {
                signInContainer.innerHTML = `<div style="background: white; padding: 2rem; border-radius: 12px; color: #d93025; font-weight: 600;">Error: ${err.message}</div>`;
            }
        } else if (window.Clerk) {
            window.Clerk.openSignIn();
        }
    }

    if (authNavBtn) {
        authNavBtn.addEventListener('click', async (e) => {
            if (window.Clerk) {
                if (window.Clerk.user) {
                    await window.Clerk.signOut();
                } else {
                    openSignInModal();
                }
            } else {
                alert("Sign-in system is still loading. Please try again in a few seconds.");
            }
        });
    }

    // Auto popup sign-in modal 3 seconds after page load if user is not signed in
    setTimeout(() => {
        if (window.Clerk) {
            openSignInModal();
        } else {
            const checkClerkForPopup = setInterval(() => {
                if (window.Clerk) {
                    clearInterval(checkClerkForPopup);
                    openSignInModal();
                }
            }, 100);
        }
    }, 3000);

    // Allow closing the sign in modal if they click on the blurred background
    const mOverlay = document.getElementById('mandatory-auth-overlay');
    if (mOverlay) {
        mOverlay.addEventListener('click', (e) => {
            if (e.target === mOverlay) {
                mOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
                const signInContainer = document.getElementById('sign-in-container');
                if (window.Clerk && signInContainer) {
                    try {
                        window.Clerk.unmountSignIn(signInContainer);
                    } catch (err) {}
                }
            }
        });
    }

    // Initialize Clerk when DOM is ready, waiting for async script if necessary
    function tryInitializeClerk() {
        if (window.Clerk) {
            initializeClerk();
        } else {
            const checkClerk = setInterval(() => {
                if (window.Clerk) {
                    clearInterval(checkClerk);
                    initializeClerk();
                }
            }, 100);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryInitializeClerk);
    } else {
        tryInitializeClerk();
    }

})();

/* ==========================================================================
   WELCOME MESSAGE NOTIFICATION TOAST
   ========================================================================== */
function showWelcomeMessage(userName) {
    const existing = document.getElementById('welcome-toast-banner');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'welcome-toast-banner';
    toast.className = 'welcome-toast-container';
    toast.innerHTML = `
        <div class="welcome-toast-icon">👋</div>
        <div class="welcome-toast-content">
            <div class="welcome-toast-title">Welcome back, ${userName || 'Explorer'}!</div>
            <div class="welcome-toast-sub">Great to see you again. Enjoy exploring!</div>
        </div>
        <button class="welcome-toast-close" onclick="this.parentElement.classList.add('hiding'); setTimeout(() => this.parentElement.remove(), 300);">&times;</button>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        if (toast && toast.parentElement) {
            toast.classList.add('hiding');
            setTimeout(() => toast.remove(), 350);
        }
    }, 5000);
}






