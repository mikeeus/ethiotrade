class HscodesController < ApplicationController
  before_action :set_hscode, only: [:show, :tables, :update, :destroy]

  # GET /hscodes
  def index
    @hscodes = Hscode.all.to_a.slice(1..-1)

    render json: @hscodes
  end

  # GET /hscodes/1
  def show
    render json: {
      hscode: @hscode,
      relatedCodes: @hscode.related_codes
    }
  end

  def tables
    render json: {
      imports: @hscode.imports,
      exports: @hscode.exports
    }
  end

  def search
    search_term = params[:search]
    @search_result = HscodeSearch.new(search_term).search
    render json: @search_result
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hscode
      @hscode = Hscode.find_by(code: params[:code])
    end

    # Only allow a trusted parameter "white list" through.
    def hscode_params
      params.fetch(:hscode, {})
    end
end
