export const formatGender = (gender: string) => {
  const type = {
    male: 'Masculino',
    female: 'Feminino',
  };

  return type[gender as 'male' | 'female'];
};
