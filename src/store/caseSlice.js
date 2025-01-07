import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCases, getCaseById, createCase, updateCase, deleteCase } from '../services/caseService';

const initialState = {
  cases: [],
  currentCase: null,
  loading: false,
  error: null,
};

// Async thunk for fetching all cases
export const fetchCases = createAsyncThunk(
  'cases/fetchCases',
  async (_, { rejectWithValue }) => {
    try {
      const cases = await getAllCases();
      return cases;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Failed to fetch cases');
    }
  }
);

// Async thunk for fetching a case by ID
export const fetchCaseById = createAsyncThunk(
  'cases/fetchCaseById',
  async (caseId, { rejectWithValue }) => {
    try {
      const caseData = await getCaseById(caseId);
      return caseData;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Failed to fetch case details');
    }
  }
);

// Async thunk for creating a new case
export const addCase = createAsyncThunk(
  'cases/addCase',
  async (caseData, { rejectWithValue }) => {
    try {
      const newCase = await createCase(caseData);
      return newCase;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Failed to create case');
    }
  }
);

// Async thunk for updating a case
export const updateCaseDetails = createAsyncThunk(
  'cases/updateCase',
  async ({ caseId, caseData }, { rejectWithValue }) => {
    try {
      const updatedCase = await updateCase(caseId, caseData);
      return updatedCase;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Failed to update case');
    }
  }
);

// Async thunk for deleting a case
export const removeCase = createAsyncThunk(
  'cases/removeCase',
  async (caseId, { rejectWithValue }) => {
    try {
      await deleteCase(caseId);
      return caseId;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Failed to delete case');
    }
  }
);

const caseSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {
    clearCurrentCase: (state) => {
      state.currentCase = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all cases
      .addCase(fetchCases.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCases.fulfilled, (state, action) => {
        state.loading = false;
        state.cases = action.payload;
      })
      .addCase(fetchCases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch case by ID
      .addCase(fetchCaseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCaseById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCase = action.payload;
      })
      .addCase(fetchCaseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add new case
      .addCase(addCase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCase.fulfilled, (state, action) => {
        state.loading = false;
        state.cases.push(action.payload);
      })
      .addCase(addCase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update case
      .addCase(updateCaseDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCaseDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.cases = state.cases.map((caseItem) =>
          caseItem._id === action.payload._id ? action.payload : caseItem
        );
      })
      .addCase(updateCaseDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Remove case
      .addCase(removeCase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeCase.fulfilled, (state, action) => {
        state.loading = false;
        state.cases = state.cases.filter((caseItem) => caseItem._id !== action.payload);
      })
      .addCase(removeCase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentCase } = caseSlice.actions;
export default caseSlice.reducer;
