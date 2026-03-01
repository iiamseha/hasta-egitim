export type SubTopic = { id: string; title: string; body: string };
export type Topic = { id: string; title: string; subTopics: SubTopic[] };

export const TOPICS: Topic[] = [
  {
    id: "oncesi",
    title: "AMELİYAT ÖNCESİ DÖNEM",
    subTopics: [
      { id: "s1", title: "Ameliyathaneye nasıl bir ortam?", body: "Ameliyathane steril bir alandır..." },
      { id: "s2", title: "Ameliyatta uyuyacak mıyım?", body: "Anestezi türüne göre..." },
      { id: "s3", title: "Ameliyat ne kadar sürecek?", body: "Operasyon türüne göre..." },
      { id: "s4", title: "Ameliyatta bana ne yapılacak?", body: "Planlanan işlem..." },
    ],
  },
  {
    id: "ameliyathane",
    title: "AMELİYATHANE DÖNEMİ",
    subTopics: [
      { id: "s1", title: "Ameliyathaneye giriş", body: "Hasta ameliyathaneye alınır..." },
      { id: "s2", title: "Steril hazırlık", body: "Steril örtüler..." },
    ],
  },
];