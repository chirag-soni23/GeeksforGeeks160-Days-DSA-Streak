import java.util.*;

class getMedian {
    public ArrayList<Double> findMedian(int[] arr) {
        PriorityQueue<Integer> leftMaxHeap = new PriorityQueue<>((a, b) -> b - a);
        PriorityQueue<Integer> rigthMinHeap = new PriorityQueue<>();
        ArrayList<Double> ans = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            leftMaxHeap.add(arr[i]);
            int temp = leftMaxHeap.poll();
            rigthMinHeap.add(temp);

            if (rigthMinHeap.size() > leftMaxHeap.size()) {
                temp = rigthMinHeap.poll();
                leftMaxHeap.add(temp);
            }

            double median;
            if (rigthMinHeap.size() != leftMaxHeap.size()) {
                median = leftMaxHeap.peek();
            } else {
                median = (rigthMinHeap.peek() + leftMaxHeap.peek()) / 2.0;
            }
            ans.add(median);
        }
        return ans;

    }

    public static void main(String[] args) {
        getMedian sol = new getMedian();
        int[] arr = { 5, 15, 1, 3, 2, 8 };
        ArrayList<Double> result = sol.findMedian(arr);
        for (double d : result) {
            System.out.print(d + " ");
        }
    }
}
