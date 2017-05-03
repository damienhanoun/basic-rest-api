export function iteratorLength(iterator:any) : number{
  let i = 0;
  while(!iterator.next().done)
    i++;
  return i;
}
