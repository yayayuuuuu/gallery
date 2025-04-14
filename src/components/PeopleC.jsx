import { useEffect, useState } from 'react';

const PeopleC = (categoryId) => {
  const [peopleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoryId) return;

    setLoading(true);
    import(`../json/${categoryId}people.json`) // ✅ 注意這邊根據你的命名改了
      .then((module) => {
        setPeopleData(module.default);
        setLoading(false);
      })
      .catch((err) => {
        console.error(`Failed to load ${categoryId}people.json`, err);
        setPeopleData([]);
        setLoading(false);
      });
  }, [categoryId]);

  return { peopleData, loading };
};

export default PeopleC;
