
import { Review } from "./apiTypes";

export const getReviews = async (): Promise<Review[]> => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          user: { name: "João Silva", photo: "https://randomuser.me/api/portraits/men/1.jpg" },
          rating: 5,
          comment: "Excelente produto! A qualidade é incrível e entrega super rápida.",
          product: "Smartphone XYZ",
          product_photo: "https://via.placeholder.com/150?text=Smartphone+XYZ"
        },
        {
          id: 2,
          user: { name: "Maria Santos", photo: "https://randomuser.me/api/portraits/women/2.jpg" },
          rating: 4,
          comment: "Bom custo-benefício, mas a bateria poderia durar mais.",
          product: "Notebook ABC",
          product_photo: "https://via.placeholder.com/150?text=Notebook+ABC"
        },
        {
          id: 3,
          user: { name: "Carlos Almeida", photo: "https://randomuser.me/api/portraits/men/3.jpg" },
          rating: 3,
          comment: "O produto é bom, mas chegou com atraso.",
          product: "Headset Gamer 5000",
          product_photo: "https://via.placeholder.com/150?text=Headset+Gamer"
        },
        {
          id: 4,
          user: { name: "Ana Souza", photo: "https://randomuser.me/api/portraits/women/4.jpg" },
          rating: 5,
          comment: "Ótima compra! Som muito nítido e design confortável.",
          product: "Caixa de Som Bluetooth",
          product_photo: "https://via.placeholder.com/150?text=Caixa+Bluetooth"
        },
        {
          id: 5,
          user: { name: "Pedro Oliveira", photo: "https://randomuser.me/api/portraits/men/5.jpg" },
          rating: 2,
          comment: "Produto veio com defeito. Tive que solicitar devolução.",
          product: "Monitor Full HD 27''",
          product_photo: "https://via.placeholder.com/150?text=Monitor+27"
        },
        {
          id: 6,
          user: { name: "Juliana Ferreira", photo: "https://randomuser.me/api/portraits/women/6.jpg" },
          rating: 4,
          comment: "Gostei muito! Ideal para o dia a dia.",
          product: "Tablet UltraPro 10",
          product_photo: "https://via.placeholder.com/150?text=Tablet+UltraPro"
        },
        {
          id: 7,
          user: { name: "Roberto Lima", photo: "https://randomuser.me/api/portraits/men/7.jpg" },
          rating: 5,
          comment: "Melhor fone de ouvido que já comprei! Recomendo demais.",
          product: "Fone de Ouvido XYZ",
          product_photo: "https://via.placeholder.com/150?text=Fone+XYZ"
        },
        {
          id: 8,
          user: { name: "Camila Ramos", photo: "https://randomuser.me/api/portraits/women/8.jpg" },
          rating: 4,
          comment: "Entrega rápida e produto em perfeito estado.",
          product: "Smart TV 4K 55''",
          product_photo: "https://via.placeholder.com/150?text=Smart+TV+4K"
        },
        {
          id: 9,
          user: { name: "Felipe Rocha", photo: "https://randomuser.me/api/portraits/men/9.jpg" },
          rating: 3,
          comment: "Bom desempenho, mas o preço poderia ser menor.",
          product: "Placa de Vídeo GTX 2060",
          product_photo: "https://via.placeholder.com/150?text=GTX+2060"
        },
        {
          id: 10,
          user: { name: "Larissa Mendes", photo: "https://randomuser.me/api/portraits/women/10.jpg" },
          rating: 5,
          comment: "Produto incrível! Superou minhas expectativas.",
          product: "Câmera Digital 4K",
          product_photo: "https://via.placeholder.com/150?text=Camera+4K"
        },
        {
          id: 11,
          user: { name: "Gustavo Teixeira", photo: "https://randomuser.me/api/portraits/men/11.jpg" },
          rating: 1,
          comment: "Não funcionou como esperado, muito frustrado.",
          product: "Drone XYZ",
          product_photo: "https://via.placeholder.com/150?text=Drone+XYZ"
        },
        {
          id: 12,
          user: { name: "Bianca Cruz", photo: "https://randomuser.me/api/portraits/women/12.jpg" },
          rating: 5,
          comment: "Excelente qualidade e ótimo preço!",
          product: "Teclado Mecânico Pro",
          product_photo: "https://via.placeholder.com/150?text=Teclado+Pro"
        },
        {
          id: 13,
          user: { name: "Thiago Costa", photo: "https://randomuser.me/api/portraits/men/13.jpg" },
          rating: 4,
          comment: "Produto atende bem, mas esperava mais acessórios.",
          product: "Console Gamer 2024",
          product_photo: "https://via.placeholder.com/150?text=Console+Gamer"
        },
        {
          id: 14,
          user: { name: "Isabela Nunes", photo: "https://randomuser.me/api/portraits/women/14.jpg" },
          rating: 3,
          comment: "Cumpre o prometido, mas a embalagem veio danificada.",
          product: "Mouse Gamer Ultra",
          product_photo: "https://via.placeholder.com/150?text=Mouse+Gamer"
        },
        {
          id: 15,
          user: { name: "Lucas Martins", photo: "https://randomuser.me/api/portraits/men/15.jpg" },
          rating: 5,
          comment: "Produto perfeito, valeu cada centavo!",
          product: "Impressora Multifuncional XPTO",
          product_photo: "https://via.placeholder.com/150?text=Impressora+XPTO"
        }
      ]);
    }, 1000); 
  });
};
