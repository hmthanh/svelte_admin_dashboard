export interface PieData {
  cols: { label: string; type: string }[];
  rows: [string, number][];
}

export const earningPerStory = (
  listStories: any[]
): PieData => {
  const listValue: { title: string; amount: number }[] = [...listStories]
    .sort((a, b) => b.amountTot - a.amountTot)
    .map((story) => {
      const title = story.title;
      const amount = story.amountTot;
      return { title, amount };
    });

  const groupedValue = groupBy(listValue, (s) => s.title);

  let rows = [];
  for (const property in groupedValue) {
    const amount = groupedValue[property].reduce(
      (sum, current) => sum + current.amount,
      0
    );
    rows.push([property, amount / 100]);
  }

  const cols = [
    { label: "Title", type: "string" },
    { label: "$", type: "number" },
  ];
  return {
    cols,
    rows,
  };
};

function groupBy(xs, f) {
  return xs.reduce(
    (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  );
}