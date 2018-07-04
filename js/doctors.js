const doctors = [
    {
        "id": 1,
        "name": "Baker, Edward L MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 2,
        "name": "Barakos, Jerome A MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 3,
        "name": "Bokelman, John F MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 4,
        "name": "Denny, Susan R MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 5,
        "name": "Fry, M A MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 6,
        "name": "Harvey, William B MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 7,
        "name": "Huang, Amy H MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 8,
        "name": "Kagay, Christopher R MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 9,
        "name": "Law, Bernice S MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 10,
        "name": "Marx, Myron MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 11,
        "name": "Meux, Maya D MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 12,
        "name": "Moon, Kirk L MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 13,
        "name": "Oshita, Allen K MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 14,
        "name": "Purcell, Derk D MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 15,
        "name": "Rhee, John S MD",
        "address": "3555 Cesar Chavez",
        "specialty": "2 Specialties",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 16,
        "name": "Schrumpf, John D MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 17,
        "name": "Stevens, Susan K MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 18,
        "name": "Wack, Jon P MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 19,
        "name": "Wu, Max C MD",
        "address": "3555 Cesar Chavez",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 20,
        "name": "Arvon, Regina L MD",
        "address": "1580 Valencia St 601",
        "specialty": "Obstetrics / Gynecology",
        "phone": "(415) 600-6400",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 21,
        "name": "Cheng, Yvonne MD",
        "address": "1580 Valencia St 601",
        "specialty": "Obstetrics / Gynecology",
        "phone": "(415) 600-6400",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 22,
        "name": "Main, Denise M MD",
        "address": "1580 Valencia St 601",
        "specialty": "2 Specialties",
        "phone": "(415) 600-6400",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 23,
        "name": "Main, Elliott K MD",
        "address": "1580 Valencia St 601",
        "specialty": "2 Specialties",
        "phone": "(415) 600-6400",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 24,
        "name": "Main, Elliott K MD",
        "address": "1580 Valencia St 601",
        "specialty": "2 Specialties",
        "phone": "(415) 600-6400",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 25,
        "name": "Otto, Carl E MD",
        "address": "1580 Valencia St 601",
        "specialty": "Obstetrics / Gynecology",
        "phone": "(415) 600-6400",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 26,
        "name": "Zhou, Ming K MD",
        "address": "1580 Valencia St 601",
        "specialty": "Obstetrics / Gynecology",
        "phone": "(415) 600-6400",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 27,
        "name": "Afshar, Leila MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 28,
        "name": "Allan, Jessica M MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 641-6655",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 29,
        "name": "Bokelman, John F MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 30,
        "name": "Brabant, Enoch C MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 641-6655",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 31,
        "name": "Bringhurst, Eric S MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Anesthesiology",
        "phone": "(415) 642-0707",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 32,
        "name": "Chafen, Less T MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 33,
        "name": "Chang, Helen P MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 641-6655",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 34,
        "name": "Chiang, Yi Ching DO",
        "address": "3555 Cesar Chavez St",
        "specialty": "2 Specialties",
        "phone": "(415) 642-0707",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 5348,
        "name": "Xuan, Xiaonan MD",
        "address": "2500 Merced Street",
        "specialty": "Adult Medicine",
        "phone": null,
        "city": "San Leandro",
        "zip_code": "94577"
    },
    {
        "id": 35,
        "name": "Chu, George D MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 36,
        "name": "Chyu, Philip Y MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 37,
        "name": "Corden, Mark H MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 641-6255",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 38,
        "name": "Davi, Jodi A MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 39,
        "name": "Davis, Adam R MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 641-6655",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 40,
        "name": "Desandre, Glenn H MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 41,
        "name": "Do, Jennifer H MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 641-6655",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 42,
        "name": "Doyle, Judith A MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Pathology",
        "phone": "(415) 641-6574",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 43,
        "name": "Drasin, E T MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 44,
        "name": "Drasin, Edward MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 45,
        "name": "Dudum, Hilda M MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 46,
        "name": "Economy, Kenneth M MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Anesthesiology",
        "phone": "(415) 642-0707",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 47,
        "name": "Eiman, Thomas MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Pathology",
        "phone": "(415) 641-6574",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 48,
        "name": "Evans, Hayden O MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 49,
        "name": "Faer, Michael J MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 50,
        "name": "Fiske, Charles E MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 51,
        "name": "Fitch, Brian D MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Anesthesiology",
        "phone": "(415) 642-0707",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 52,
        "name": "Folsom, Bergen E MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 53,
        "name": "Garcia-Kennedy, Richard MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Pathology",
        "phone": "(415) 641-6574",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 54,
        "name": "Goel, Abha MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 641-6655",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 55,
        "name": "Goldman, Steven MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 56,
        "name": "Gordon, Linda M MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 57,
        "name": "Hammerschlag, Steven B MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 58,
        "name": "Harris, Aimee L MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 59,
        "name": "Herbsman, Oded MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 60,
        "name": "Hume, Carolyn L MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 61,
        "name": "Jackson, Thomas M MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Pathology",
        "phone": "(415) 641-6574",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 62,
        "name": "Jaffee, Ian M MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Pathology",
        "phone": "(415) 641-6574",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 63,
        "name": "Jutte, Douglas P MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 64,
        "name": "Kahn, Stephen J MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 65,
        "name": "Kaleem, Ghizala R MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "2 Specialties",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 66,
        "name": "Kamal, Heba S MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Pathology",
        "phone": "(415) 641-6574",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 67,
        "name": "Kanter, Ira E MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 68,
        "name": "Lee, Christopher C MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 69,
        "name": "Lee, David A MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "2 Specialties",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 70,
        "name": "Lee, Henry C MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 71,
        "name": "Lee, Jane S MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "2 Specialties",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 72,
        "name": "Lewis, Kathleen W MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 73,
        "name": "Li, Ho-Yin MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "2 Specialties",
        "phone": "(415) 642-0707",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 74,
        "name": "Liou, John H MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 641-6655",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 75,
        "name": "Lobato, Yuriria S MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 76,
        "name": "Maiman, Michael H MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 77,
        "name": "Makely, Karen C MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 641-6655",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 78,
        "name": "Mani, Carl L MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 79,
        "name": "Manning, Kristie M MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 641-6655",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 80,
        "name": "Mansfield, Stuart H MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 81,
        "name": "Martel, Steven MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 82,
        "name": "Martinucci, Michael J MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 83,
        "name": "Mersol, Joseph V MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 84,
        "name": "Moretto, John C MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Pathology",
        "phone": "(415) 641-6574",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 85,
        "name": "Nesper, Matthew J MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 86,
        "name": "Nguyen, Thi L MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 87,
        "name": "Oleary, Richard J MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Anesthesiology",
        "phone": "(415) 642-0707",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 88,
        "name": "Paraguya, Laureen V MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Internal Medicine",
        "phone": "(415) 641-6655",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 89,
        "name": "Patino, Maria M MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Pathology",
        "phone": "(415) 641-6574",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 90,
        "name": "Reodica, Jennifer C MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Anesthesiology",
        "phone": "(415) 642-0707",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 91,
        "name": "Retajczyk, Christopher T MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 92,
        "name": "Rich, Philip J MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "2 Specialties",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 93,
        "name": "Richburg, Delene A MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "2 Specialties",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 94,
        "name": "Rohira, Sunil K MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Anesthesiology",
        "phone": "(415) 642-0707",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 95,
        "name": "Ross, Jon C MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Pathology",
        "phone": "(415) 641-6574",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 96,
        "name": "Ruiz, Jaime A MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 97,
        "name": "Schaner, Gregory J MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Diagnostic Radiology / Imaging",
        "phone": "(415) 641-6545",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 98,
        "name": "Sequeira, Sarabenet MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 99,
        "name": "Silvestre, Paul M MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "General Pediatrics",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    },
    {
        "id": 100,
        "name": "Sipe, Walter E MD",
        "address": "3555 Cesar Chavez St",
        "specialty": "Gastroenterology, Pediatric",
        "phone": "(415) 647-8600",
        "city": "San Francisco",
        "zip_code": "94110"
    }
]